# Resume Setup Guide

This guide explains how to add your resume to the portfolio for download functionality.

## Method 1: Public Folder (Recommended for Simple Setup)

### Steps:
1. **Prepare your resume**:
   - Save as PDF format
   - Name it descriptively (e.g., `Vivek_Prabhat_Resume.pdf`)
   - Keep file size under 2MB for fast loading

2. **Add to project**:
   \`\`\`
   public/
   └── resume/
       └── Vivek_Prabhat_Resume.pdf
   \`\`\`

3. **Update configuration**:
   In `lib/resume-config.ts`:
   \`\`\`typescript
   publicFile: {
     enabled: true,
     filename: "Vivek_Prabhat_Resume.pdf",
     path: "/resume/Vivek_Prabhat_Resume.pdf",
   }
   \`\`\`

### Pros:
- ✅ Simple setup
- ✅ Fast loading
- ✅ No external dependencies
- ✅ Works offline

### Cons:
- ❌ File is publicly accessible via URL
- ❌ Increases repository size
- ❌ Manual updates required

## Method 2: Google Drive (Recommended for Easy Updates)

### Steps:
1. **Upload to Google Drive**:
   - Upload your resume PDF
   - Right-click → "Get link"
   - Set to "Anyone with the link can view"

2. **Get file ID**:
   From URL: `https://drive.google.com/file/d/FILE_ID_HERE/view`
   Extract the FILE_ID_HERE part

3. **Update configuration**:
   \`\`\`typescript
   externalUrl: {
     enabled: true,
     url: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
     downloadUrl: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID",
   }
   \`\`\`

### Pros:
- ✅ Easy to update
- ✅ No repository size impact
- ✅ Version control in Google Drive
- ✅ Analytics available

### Cons:
- ❌ Requires Google account
- ❌ External dependency
- ❌ Requires internet connection

## Method 3: Vercel Blob Storage (Recommended for Production)

### Steps:
1. **Install Vercel Blob**:
   \`\`\`bash
   npm install @vercel/blob
   \`\`\`

2. **Upload via Vercel Dashboard**:
   - Go to your Vercel project
   - Navigate to Storage → Blob
   - Upload your resume PDF

3. **Update configuration**:
   \`\`\`typescript
   cloudStorage: {
     enabled: true,
     url: "https://your-blob-url.vercel-storage.com/resume.pdf",
   }
   \`\`\`

### Pros:
- ✅ Professional hosting
- ✅ Fast CDN delivery
- ✅ Secure and reliable
- ✅ Analytics and monitoring

### Cons:
- ❌ Requires Vercel account
- ❌ May have storage limits
- ❌ More complex setup

## Method 4: Other Cloud Storage

### Dropbox:
\`\`\`typescript
externalUrl: {
  enabled: true,
  downloadUrl: "https://dl.dropboxusercontent.com/s/your-share-key/resume.pdf",
}
\`\`\`

### OneDrive:
\`\`\`typescript
externalUrl: {
  enabled: true,
  downloadUrl: "https://onedrive.live.com/download?cid=YOUR_CID&resid=YOUR_RESID",
}
\`\`\`

## Resume Best Practices

### File Preparation:
- **Format**: PDF (most compatible)
- **Size**: Under 2MB for fast loading
- **Name**: Professional naming convention
- **Content**: Keep updated with latest information

### Security Considerations:
- **Personal Info**: Remove sensitive information
- **Contact**: Use professional email
- **Privacy**: Consider what information is publicly accessible

### SEO & Analytics:
- **File Name**: Use descriptive names for SEO
- **Tracking**: Monitor download analytics
- **Updates**: Keep resume current

## Updating Your Resume

### For Public Folder Method:
1. Replace the PDF file in `public/resume/`
2. Update metadata in `lib/resume-config.ts`
3. Commit and deploy changes

### For External Hosting:
1. Upload new version to your cloud storage
2. Update metadata in `lib/resume-config.ts`
3. Deploy configuration changes

## Troubleshooting

### Common Issues:
- **File not found**: Check file path and permissions
- **Download not working**: Verify URL accessibility
- **Large file size**: Compress PDF or optimize images
- **Mobile issues**: Test download on mobile devices

### Testing:
\`\`\`bash
# Test local file access
curl -I http://localhost:3000/resume/your-resume.pdf

# Test external URL
curl -I "your-external-resume-url"
\`\`\`

## Analytics Tracking

Add download tracking to monitor resume engagement:

\`\`\`typescript
// In resume component
const handleDownload = () => {
  // Google Analytics
  gtag('event', 'resume_download', {
    event_category: 'engagement',
    event_label: 'resume_pdf'
  })
  
  // Custom analytics
  fetch('/api/analytics/resume-download', { method: 'POST' })
}
\`\`\`

Choose the method that best fits your needs and technical comfort level!
\`\`\`

Finally, let's create a simple folder structure in the public directory:
