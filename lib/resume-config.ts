// Resume configuration - choose your preferred method
export const resumeConfig = {
  // Method 1: Direct file in public folder (simplest)
  publicFile: {
    enabled: true, // Set to true if you have a PDF in public/resume/
    filename: "Vivek_Prabhat_Resume.pdf",
    path: "/resume/Vivek_Prabhat_Resume.pdf",
  },

  // Method 2: External hosting (Google Drive, Dropbox, etc.)
  externalUrl: {
    enabled: false, // Set to true if using external hosting
    // For Google Drive: Get the file ID from the share URL
    // URL format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
    url: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  },

  // Method 3: Cloud storage (Vercel Blob, AWS S3, etc.)
  cloudStorage: {
    enabled: false, // Set to true if using cloud storage
    url: "https://your-blob-url.vercel-storage.com/resume.pdf",
  },

  // Resume metadata
  metadata: {
    lastUpdated: "2024-01-15",
    version: "v2.1",
    fileSize: "245 KB",
  },
}

// Get the active resume URL
export function getResumeUrl(): string {
  if (resumeConfig.publicFile.enabled) {
    return resumeConfig.publicFile.path
  }

  if (resumeConfig.externalUrl.enabled) {
    return resumeConfig.externalUrl.downloadUrl
  }

  if (resumeConfig.cloudStorage.enabled) {
    return resumeConfig.cloudStorage.url
  }

  return "#" // Fallback
}

// Get the preview URL (different from download URL for some services)
export function getResumePreviewUrl(): string {
  if (resumeConfig.publicFile.enabled) {
    return resumeConfig.publicFile.path
  }

  if (resumeConfig.externalUrl.enabled) {
    return resumeConfig.externalUrl.url // Use view URL for preview
  }

  if (resumeConfig.cloudStorage.enabled) {
    return resumeConfig.cloudStorage.url
  }

  return "#" // Fallback
}

// Check if resume is available
export function isResumeAvailable(): boolean {
  return resumeConfig.publicFile.enabled || resumeConfig.externalUrl.enabled || resumeConfig.cloudStorage.enabled
}

// Check if preview is supported
export function isPreviewSupported(): boolean {
  // Preview works best with public files and cloud storage
  // External URLs (like Google Drive) work but open in new tab
  return resumeConfig.publicFile.enabled || resumeConfig.cloudStorage.enabled || resumeConfig.externalUrl.enabled
}
