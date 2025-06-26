"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Download, FileText, Eye, ExternalLink, AlertCircle } from "lucide-react"
import { resumeConfig, getResumeUrl, isResumeAvailable } from "../lib/resume-config"
import { SocialShare } from "./social-share"

interface ResumeDownloadProps {
  variant?: "button" | "card" | "inline"
  showMetadata?: boolean
}

export function ResumeDownload({ variant = "button", showMetadata = false }: ResumeDownloadProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const [showPreviewDialog, setShowPreviewDialog] = useState(false)
  const resumeUrl = getResumeUrl()
  const isAvailable = isResumeAvailable()

  const handleDownload = async () => {
    if (!isAvailable) return

    setIsDownloading(true)

    try {
      // Track download analytics (optional)
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "resume_download", {
          event_category: "engagement",
          event_label: "resume_pdf",
        })
      }

      // For external URLs, open in new tab
      if (resumeConfig.externalUrl.enabled) {
        window.open(resumeUrl, "_blank")
      } else {
        // For local files, trigger download
        const link = document.createElement("a")
        link.href = resumeUrl
        link.download = resumeConfig.publicFile.filename
        link.target = "_blank"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    } catch (error) {
      console.error("Resume download failed:", error)
    } finally {
      setIsDownloading(false)
    }
  }

  const handlePreview = () => {
    if (!isAvailable) return

    // For external URLs (Google Drive, etc.), open directly
    if (resumeConfig.externalUrl.enabled) {
      window.open(resumeConfig.externalUrl.url, "_blank")
      return
    }

    // For local files and cloud storage, show in dialog or new tab
    if (resumeConfig.publicFile.enabled || resumeConfig.cloudStorage.enabled) {
      // Try to open in new tab first
      const newWindow = window.open(resumeUrl, "_blank")

      // If popup blocked, show dialog
      if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
        setShowPreviewDialog(true)
      }
    }
  }

  const PreviewDialog = () => (
    <Dialog open={showPreviewDialog} onOpenChange={setShowPreviewDialog}>
      <DialogContent className="max-w-4xl w-full h-[80vh] bg-gray-900 border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-blue-400 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Resume Preview
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 w-full h-full">
          {resumeConfig.publicFile.enabled || resumeConfig.cloudStorage.enabled ? (
            <div className="w-full h-full flex flex-col">
              <iframe
                src={`${resumeUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full flex-1 border border-gray-600 rounded"
                title="Resume Preview"
                onError={() => {
                  // Fallback if iframe fails
                  window.open(resumeUrl, "_blank")
                  setShowPreviewDialog(false)
                }}
              />
              <div className="mt-4 flex justify-center gap-4 flex-wrap">
                <Button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {isDownloading ? "Downloading..." : "Download PDF"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(resumeUrl, "_blank")}
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in New Tab
                </Button>
                <SocialShare variant="inline" showLabel={true} />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <AlertCircle className="w-16 h-16 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Preview Not Available</h3>
              <p className="text-gray-400 mb-6">
                Preview is not available for this hosting method. You can download the resume or open it in a new tab.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(resumeUrl, "_blank")}
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in New Tab
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )

  if (!isAvailable) {
    return (
      <Button variant="outline" disabled className="opacity-50">
        <Download className="w-4 h-4 mr-2" />
        Resume Unavailable
      </Button>
    )
  }

  // Button variant (for hero section)
  if (variant === "button") {
    return (
      <>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
          >
            <Download className="w-4 h-4 mr-2" />
            {isDownloading ? "Downloading..." : "Download Resume"}
          </Button>
          <Button
            variant="outline"
            onClick={handlePreview}
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-2"
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
        </div>
        <PreviewDialog />
      </>
    )
  }

  // Card variant (for dedicated section)
  if (variant === "card") {
    return (
      <>
        <Card className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-colors">
          <CardHeader>
            <CardTitle className="text-blue-400 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Resume
            </CardTitle>
            <CardDescription className="text-gray-400">Download my latest resume in PDF format</CardDescription>
          </CardHeader>
          <CardContent>
            {showMetadata && (
              <div className="mb-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Last Updated:</span>
                  <Badge variant="outline" className="border-green-400 text-green-400">
                    {new Date(resumeConfig.metadata.lastUpdated).toLocaleDateString()}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Version:</span>
                  <Badge variant="outline" className="border-blue-400 text-blue-400">
                    {resumeConfig.metadata.version}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">File Size:</span>
                  <span className="text-gray-300">{resumeConfig.metadata.fileSize}</span>
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                <Download className="w-4 h-4 mr-2" />
                {isDownloading ? "Downloading..." : "Download"}
              </Button>
              <Button
                variant="outline"
                onClick={handlePreview}
                className="border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white"
              >
                <Eye className="w-4 h-4" />
              </Button>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Share with others:</span>
                <SocialShare variant="inline" showLabel={false} />
              </div>
            </div>
          </CardContent>
        </Card>
        <PreviewDialog />
      </>
    )
  }

  // Inline variant (for navigation or footer)
  if (variant === "inline") {
    return (
      <>
        <Button
          variant="ghost"
          onClick={handleDownload}
          disabled={isDownloading}
          className="text-blue-400 hover:text-blue-300"
        >
          <Download className="w-4 h-4 mr-2" />
          Resume
        </Button>
        <PreviewDialog />
      </>
    )
  }

  return null
}
