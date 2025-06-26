# Vivek Prabhat - Portfolio Website

A modern, responsive portfolio website showcasing the work of Vivek Prabhat, a B.Tech (CSE) student and aspiring web developer from New Delhi. This portfolio highlights his professional experience, technical skills, research contributions, projects, and academic achievements.

## 🌟 Features

### 🎨 **Modern Design**
- **Dark theme** with gradient accents
- **Responsive design** that works on all devices
- **Smooth animations** and transitions
- **Professional typography** and spacing

### 📱 **Sections**
- **Hero Section** - Professional introduction with call-to-action
- **About Me** - Background, experience, and current roles
- **Skills & Technologies** - Interactive skill bars and tech stack
- **Projects** - Featured development projects with live demos
- **Research & Publications** - Academic papers and research projects
- **Blog** - Technical writing and insights
- **Certifications** - Professional certifications and achievements
- **Contact** - Functional contact form with email integration

### 🚀 **Technical Features**
- **Server Actions** for form handling
- **Email integration** with Resend
- **Responsive navigation** with mobile menu
- **Smooth scrolling** between sections
- **SEO optimized** structure
- **Fast loading** with optimized assets

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Email Service**: Resend
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Language**: TypeScript

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Resend API key** (for email functionality)

## 🚀 Getting Started

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/vivekprabhat/portfolio.git
cd portfolio
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Environment Setup

Create a `.env.local` file in the root directory:

\`\`\`env
# Resend Email Configuration
RESEND_API_KEY=re_your_resend_api_key_here
CONTACT_EMAIL=vivek.prabhat@email.com
FROM_EMAIL=Portfolio Contact <noreply@yourdomain.com>
\`\`\`

### 4. Run Development Server

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### 5. Build for Production

\`\`\`bash
npm run build
npm start
# or
yarn build
yarn start
\`\`\`

## 📧 Email Configuration

This portfolio uses **Resend** for email functionality. To set up:

### 1. Create Resend Account
- Sign up at [resend.com](https://resend.com)
- Get your API key from the dashboard

### 2. Domain Setup (Optional)
- Add your domain in Resend dashboard
- Verify with DNS records
- Update email addresses in the code

### 3. Environment Variables
\`\`\`env
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL=your_email@domain.com
FROM_EMAIL=noreply@yourdomain.com
\`\`\`

## 📁 Project Structure

\`\`\`
portfolio/
├── app/
│   ├── actions.ts              # Server actions for form handling
│   ├── globals.css             # Global styles and Tailwind config
│   ├── layout.tsx              # Root layout component
│   └── page.tsx                # Main portfolio page
├── components/
│   ├── ui/                     # shadcn/ui components
│   └── research-stats.tsx      # Research statistics component
├── lib/
│   ├── blog-data.ts           # Blog posts data
│   ├── email-templates.ts     # Email template functions
│   ├── research-data.ts       # Research papers and projects data
│   └── utils.ts               # Utility functions
├── public/                     # Static assets
├── .env.example               # Environment variables template
├── .env.local                 # Local environment variables (create this)
├── EMAIL_SETUP.md             # Email setup guide
├── package.json               # Dependencies and scripts
└── README.md                  # This file
\`\`\`

## 🎯 Key Components

### **Research Section**
- **Publications**: Academic papers with citation counts
- **Research Projects**: Ongoing and completed research work
- **Research Interests**: Areas of academic focus
- **Statistics Dashboard**: Publication metrics and collaboration data

### **Projects Section**
- **Live Demos**: Working project links
- **GitHub Repositories**: Source code access
- **Technology Stack**: Tech used in each project
- **Project Descriptions**: Detailed explanations

### **Contact Form**
- **Dual Email System**: Notification + confirmation emails
- **Form Validation**: Client and server-side validation
- **Professional Templates**: Beautiful HTML email designs
- **Error Handling**: Graceful failure management

## 📊 Research Data

The portfolio includes comprehensive research information:

### **Sample Publications**
- Machine Learning in Web Security
- Database Performance Optimization
- React Performance Analysis
- Sustainable Software Development

### **Research Projects**
- AI-Powered Code Review System
- Blockchain Academic Credentials
- Microservices Performance Analysis

### **Research Interests**
- Machine Learning in Software Engineering
- Web Application Security
- Database Optimization
- Frontend Performance
- Sustainable Development

## 🎨 Customization

### **Personal Information**
Update personal details in:
- `app/page.tsx` - Main content
- `lib/research-data.ts` - Research information
- `lib/blog-data.ts` - Blog posts
- Environment variables for contact info

### **Styling**
- Modify `app/globals.css` for global styles
- Update Tailwind classes in components
- Customize color scheme in `tailwind.config.ts`

### **Content**
- Add/remove sections in `app/page.tsx`
- Update project information
- Modify research papers and projects
- Customize blog posts

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### **Other Platforms**
- **Netlify**: Connect GitHub repo and deploy
- **Railway**: Deploy with environment variables
- **DigitalOcean**: Use App Platform for deployment

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for speed
- **SEO Friendly**: Proper meta tags and structure
- **Mobile Optimized**: Responsive design

## 🔧 Development

### **Available Scripts**
\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
\`\`\`

### **Code Quality**
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Tailwind CSS** for consistent styling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Vivek Prabhat**
- **Email**: vivek.prabhat@email.com
- **LinkedIn**: [linkedin.com/in/vivekprabhat](https://linkedin.com/in/vivekprabhat)
- **GitHub**: [github.com/vivekprabhat](https://github.com/vivekprabhat)
- **Location**: New Delhi, India

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful UI components
- **Tailwind CSS** for utility-first styling
- **Resend** for reliable email delivery
- **Vercel** for seamless deployment
- **Next.js** team for the amazing framework

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Resend Documentation](https://resend.com/docs)

---

**Built with ❤️ by Vivek Prabhat**

*This portfolio represents my journey as a developer and researcher. Feel free to explore, learn, and connect!*
