export interface ShareData {
  title: string
  text: string
  url: string
  hashtags?: string[]
}

export const resumeShareData: ShareData = {
  title: "Vivek Prabhat - Resume",
  text: "Check out Vivek Prabhat's resume - B.Tech CSE Student & Web Developer from New Delhi. Experienced in React, Node.js, MongoDB, and more!",
  url: typeof window !== "undefined" ? window.location.origin : "",
  hashtags: ["WebDeveloper", "React", "NodeJS", "MongoDB", "BTech", "CSE", "NewDelhi", "Frontend", "FullStack"],
}

export const socialPlatforms = {
  twitter: {
    name: "Twitter",
    icon: "twitter",
    color: "bg-blue-500 hover:bg-blue-600",
    shareUrl: (data: ShareData) => {
      const hashtags = data.hashtags?.join(",") || ""
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.text)}&url=${encodeURIComponent(data.url)}&hashtags=${hashtags}`
    },
  },
  linkedin: {
    name: "LinkedIn",
    icon: "linkedin",
    color: "bg-blue-700 hover:bg-blue-800",
    shareUrl: (data: ShareData) => {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(data.url)}&title=${encodeURIComponent(data.title)}&summary=${encodeURIComponent(data.text)}`
    },
  },
  facebook: {
    name: "Facebook",
    icon: "facebook",
    color: "bg-blue-600 hover:bg-blue-700",
    shareUrl: (data: ShareData) => {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(data.url)}&quote=${encodeURIComponent(data.text)}`
    },
  },
  whatsapp: {
    name: "WhatsApp",
    icon: "message-circle",
    color: "bg-green-500 hover:bg-green-600",
    shareUrl: (data: ShareData) => {
      return `https://wa.me/?text=${encodeURIComponent(`${data.text} ${data.url}`)}`
    },
  },
  telegram: {
    name: "Telegram",
    icon: "send",
    color: "bg-blue-500 hover:bg-blue-600",
    shareUrl: (data: ShareData) => {
      return `https://t.me/share/url?url=${encodeURIComponent(data.url)}&text=${encodeURIComponent(data.text)}`
    },
  },
  email: {
    name: "Email",
    icon: "mail",
    color: "bg-gray-600 hover:bg-gray-700",
    shareUrl: (data: ShareData) => {
      return `mailto:?subject=${encodeURIComponent(data.title)}&body=${encodeURIComponent(`${data.text}\n\n${data.url}`)}`
    },
  },
}

export function shareResume(platform: keyof typeof socialPlatforms, customData?: Partial<ShareData>) {
  const shareData = { ...resumeShareData, ...customData }
  const platformConfig = socialPlatforms[platform]

  if (!platformConfig) return

  const shareUrl = platformConfig.shareUrl(shareData)

  // Track sharing analytics
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", "resume_share", {
      event_category: "engagement",
      event_label: platform,
      custom_parameter: shareData.url,
    })
  }

  // Open share URL
  window.open(shareUrl, "_blank", "width=600,height=400,scrollbars=yes,resizable=yes")
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = text
      textArea.style.position = "fixed"
      textArea.style.left = "-999999px"
      textArea.style.top = "-999999px"
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      const success = document.execCommand("copy")
      textArea.remove()
      return success
    }
  } catch (error) {
    console.error("Failed to copy to clipboard:", error)
    return false
  }
}

export function useNativeShare() {
  const canShare = typeof navigator !== "undefined" && "share" in navigator

  const nativeShare = async (data: ShareData) => {
    if (!canShare) return false

    try {
      await navigator.share({
        title: data.title,
        text: data.text,
        url: data.url,
      })

      // Track native sharing
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "resume_share", {
          event_category: "engagement",
          event_label: "native_share",
        })
      }

      return true
    } catch (error) {
      console.error("Native share failed:", error)
      return false
    }
  }

  return { canShare, nativeShare }
}
