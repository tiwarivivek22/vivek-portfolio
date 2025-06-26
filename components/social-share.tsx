"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  MessageCircle,
  Send,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Users,
} from "lucide-react"
import { shareResume, socialPlatforms, resumeShareData, copyToClipboard, useNativeShare } from "../lib/social-sharing"

interface SocialShareProps {
  variant?: "button" | "card" | "inline" | "floating"
  showLabel?: boolean
  customData?: {
    title?: string
    text?: string
    url?: string
  }
}

const iconMap = {
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Facebook,
  "message-circle": MessageCircle,
  send: Send,
  mail: Mail,
}

export function SocialShare({ variant = "button", showLabel = true, customData }: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copiedUrl, setCopiedUrl] = useState(false)
  const [shareCount, setShareCount] = useState(0)
  const { canShare, nativeShare } = useNativeShare()

  const shareData = { ...resumeShareData, ...customData }

  const handleShare = (platform: keyof typeof socialPlatforms) => {
    shareResume(platform, customData)
    setShareCount((prev) => prev + 1)

    // Close dialog after sharing (optional)
    setTimeout(() => setIsOpen(false), 1000)
  }

  const handleNativeShare = async () => {
    const success = await nativeShare(shareData)
    if (success) {
      setShareCount((prev) => prev + 1)
      setIsOpen(false)
    }
  }

  const handleCopyLink = async () => {
    const success = await copyToClipboard(shareData.url)
    if (success) {
      setCopiedUrl(true)
      setShareCount((prev) => prev + 1)

      // Track copy action
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "resume_share", {
          event_category: "engagement",
          event_label: "copy_link",
        })
      }

      setTimeout(() => setCopiedUrl(false), 2000)
    }
  }

  const ShareDialog = () => (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md bg-gray-900 border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-blue-400 flex items-center">
            <Share2 className="w-5 h-5 mr-2" />
            Share Resume
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Share Statistics */}
          {shareCount > 0 && (
            <div className="text-center">
              <Badge variant="outline" className="border-green-400 text-green-400">
                <Users className="w-3 h-3 mr-1" />
                Shared {shareCount} time{shareCount !== 1 ? "s" : ""}
              </Badge>
            </div>
          )}

          {/* Native Share (if supported) */}
          {canShare && (
            <div className="border-b border-gray-700 pb-4">
              <Button onClick={handleNativeShare} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Share2 className="w-4 h-4 mr-2" />
                Share via Device
              </Button>
            </div>
          )}

          {/* Social Platforms */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-400">Share on social media:</h4>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(socialPlatforms).map(([key, platform]) => {
                const IconComponent = iconMap[platform.icon as keyof typeof iconMap]
                return (
                  <TooltipProvider key={key}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={() => handleShare(key as keyof typeof socialPlatforms)}
                          className={`${platform.color} text-white flex items-center justify-center gap-2`}
                          size="sm"
                        >
                          {IconComponent && <IconComponent className="w-4 h-4" />}
                          <span className="text-xs">{platform.name}</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Share on {platform.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )
              })}
            </div>
          </div>

          {/* Copy Link */}
          <div className="space-y-3 border-t border-gray-700 pt-4">
            <h4 className="text-sm font-medium text-gray-400">Or copy link:</h4>
            <div className="flex gap-2">
              <div className="flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-2 text-sm text-gray-300 truncate">
                {shareData.url}
              </div>
              <Button
                onClick={handleCopyLink}
                variant="outline"
                size="sm"
                className={`border-gray-600 ${
                  copiedUrl ? "bg-green-600 border-green-600 text-white" : "text-gray-400 hover:bg-gray-700"
                }`}
              >
                {copiedUrl ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            {copiedUrl && <p className="text-xs text-green-400">Link copied to clipboard!</p>}
          </div>

          {/* Share Preview */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <h5 className="text-sm font-medium text-blue-400 mb-2">Share Preview:</h5>
            <div className="space-y-2">
              <p className="text-sm font-medium text-white">{shareData.title}</p>
              <p className="text-xs text-gray-400 line-clamp-2">{shareData.text}</p>
              <div className="flex flex-wrap gap-1">
                {shareData.hashtags?.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs bg-gray-700 text-gray-300">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

  // Button variant (default)
  if (variant === "button") {
    return (
      <>
        <Button
          onClick={() => setIsOpen(true)}
          variant="outline"
          className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
        >
          <Share2 className="w-4 h-4 mr-2" />
          {showLabel && "Share Resume"}
        </Button>
        <ShareDialog />
      </>
    )
  }

  // Card variant
  if (variant === "card") {
    return (
      <>
        <Card
          className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-colors cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <CardHeader>
            <CardTitle className="text-purple-400 flex items-center">
              <Share2 className="w-5 h-5 mr-2" />
              Share Resume
            </CardTitle>
            <CardDescription className="text-gray-400">
              Help spread the word about my skills and experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {Object.entries(socialPlatforms)
                  .slice(0, 4)
                  .map(([key, platform]) => {
                    const IconComponent = iconMap[platform.icon as keyof typeof iconMap]
                    return (
                      <div
                        key={key}
                        className={`w-8 h-8 rounded-full ${platform.color} flex items-center justify-center border-2 border-gray-800`}
                      >
                        {IconComponent && <IconComponent className="w-4 h-4 text-white" />}
                      </div>
                    )
                  })}
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center border-2 border-gray-800 text-xs text-white">
                  +2
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <ShareDialog />
      </>
    )
  }

  // Inline variant
  if (variant === "inline") {
    return (
      <>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(true)}
          className="text-purple-400 hover:text-purple-300"
        >
          <Share2 className="w-4 h-4 mr-1" />
          {showLabel && "Share"}
        </Button>
        <ShareDialog />
      </>
    )
  }

  // Floating variant
  if (variant === "floating") {
    return (
      <>
        <div className="fixed bottom-6 right-6 z-40">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => setIsOpen(true)}
                  className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
                  size="sm"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Share Resume</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <ShareDialog />
      </>
    )
  }

  return null
}
