"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Database,
  Globe,
  Users,
  Dumbbell,
  Home,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import { submitContactForm } from "./actions"
import { blogPosts } from "../lib/blog-data"
import { useActionState } from "react"
import { researchPapers, researchProjects, researchInterests } from "../lib/research-data"
import { ResearchStats } from "../components/research-stats"
import { ResumeDownload } from "../components/resume-download"
import { SocialShare } from "../components/social-share"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [contactState, contactAction, isContactPending] = useActionState(submitContactForm, null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "Java", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 88 },
    { name: "MongoDB", level: 80 },
    { name: "Ruby", level: 75 },
    { name: "Node.js", level: 82 },
    { name: "HTML/CSS", level: 90 },
    { name: "Git", level: 85 },
  ]

  const projects = [
    {
      title: "Namaste Kutumbh",
      description:
        "A cultural travel homestay platform connecting travelers with authentic local experiences and traditional accommodations.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      icon: <Home className="w-6 h-6" />,
      githubLink: "https://github.com/vivekprabhat/namaste-kutumbh",
      liveLink: "https://namaste-kutumbh.vercel.app",
    },
    {
      title: "Black Collar",
      description:
        "Job connectivity platform specifically designed to bridge employment opportunities for underprivileged communities.",
      tech: ["JavaScript", "React", "MongoDB", "Node.js"],
      icon: <Users className="w-6 h-6" />,
      githubLink: "https://github.com/vivekprabhat/black-collar",
      liveLink: "https://black-collar.vercel.app",
    },
    {
      title: "FitTrack",
      description:
        "Comprehensive gym management platform featuring admin dashboard for gym owners and member login portal for fitness tracking.",
      tech: ["Java", "React", "MongoDB", "Spring Boot"],
      icon: <Dumbbell className="w-6 h-6" />,
      githubLink: "https://github.com/vivekprabhat/fittrack",
      liveLink: "https://fittrack-gym.vercel.app",
    },
  ]

  const certifications = [
    "Full Stack Web Development - Coding Ninjas",
    "Java Programming - Oracle Certified",
    "React.js Development - Meta",
    "MongoDB Developer Certification",
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Vivek Prabhat
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("home")} className="hover:text-blue-400 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="hover:text-blue-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("skills")} className="hover:text-blue-400 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection("projects")} className="hover:text-blue-400 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection("research")} className="hover:text-blue-400 transition-colors">
                Research
              </button>
              <button onClick={() => scrollToSection("blog")} className="hover:text-blue-400 transition-colors">
                Blog
              </button>
              <button
                onClick={() => scrollToSection("certifications")}
                className="hover:text-blue-400 transition-colors"
              >
                Certifications
              </button>
              <button onClick={() => scrollToSection("resume")} className="hover:text-blue-400 transition-colors">
                Resume
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-blue-400 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("research")}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Research
                </button>
                <button
                  onClick={() => scrollToSection("blog")}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Blog
                </button>
                <button
                  onClick={() => scrollToSection("certifications")}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Certifications
                </button>
                <button
                  onClick={() => scrollToSection("resume")}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Resume
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <Image
              src="/vivek.png?height=200&width=200"
              alt="Vivek Prabhat"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 border-4 border-blue-400"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Vivek Prabhat
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">B.Tech (CSE) Student, Aspiring Web Developer & Researcher</h2>
          <p className="text-xl md:text-2xl text-blue-400 mb-8 font-semibold">
            Building Web Solutions for Real-World Impact
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            From New Delhi, passionate about creating innovative web applications that solve real-world problems and
            make a positive impact on communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <ResumeDownload variant="button" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate B.Tech Computer Science Engineering student from New Delhi with a strong foundation in
                web development and software engineering. My journey in tech has been driven by a desire to create
                meaningful solutions that address real-world challenges.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Currently working as a Research & Development at{" "}
                <span className="text-green-400 font-semibold">Vrikshit Foundation</span>, where I explore innovative approaches to solve real-world 
                community challenges through technology, data analysis, and social impact initiatives.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Currently worked as a Front-end Developer at{" "}
                <span className="text-blue-400 font-semibold">Figmanet Solutions</span>, where I contribute to building
                user-centric web applications and interfaces that enhance user experience and drive business growth.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Beyond my technical role, I serve as a Volunteer and Content Writer at{" "}
                <span className="text-green-400 font-semibold">Vrikshit Foundation</span>, where I combine my writing
                skills with my passion for social impact, creating content that raises awareness about environmental and
                social causes.
              </p>
              
            </div>
            <div className="space-y-6">
               <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Research & Development
                  </CardTitle>
                  <CardDescription className="text-gray-400">Vrikshit Foundation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Creating impactful approaches to solve real-world community challenges through technology.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400 flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    Front-end Developer
                  </CardTitle>
                  <CardDescription className="text-gray-400">Figmanet Solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Developing responsive web applications and user interfaces using modern technologies and best
                    practices.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Volunteer & Content Writer
                  </CardTitle>
                  <CardDescription className="text-gray-400">Vrikshit Foundation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Creating impactful content and contributing to social causes through environmental awareness and
                    community engagement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-300">{skill.name}</span>
                  <span className="text-blue-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Core Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Java",
                "JavaScript",
                "React",
                "MongoDB",
                "Ruby",
                "Node.js",
                "Express",
                "Spring Boot",
                "HTML5",
                "CSS3",
                "Git",
                "REST APIs",
              ].map((tech) => (
                <Badge key={tech} variant="outline" className="border-blue-400 text-blue-400 px-4 py-2 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Professional Summary</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My resume showcases my journey as a B.Tech Computer Science student, highlighting my technical skills,
                professional experience, research contributions, and academic achievements. It provides a comprehensive
                overview of my capabilities and accomplishments.
              </p>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  Technical Skills & Programming Languages
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  Professional Experience & Internships
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  Research Publications & Projects
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  Academic Achievements & Certifications
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <ResumeDownload variant="card" showMetadata={true} />
              <SocialShare variant="card" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-blue-600 rounded-lg">{project.icon}</div>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-blue-400"
                        onClick={() => window.open(project.githubLink, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-blue-400"
                        onClick={() => window.open(project.liveLink, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-blue-400">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white flex-1"
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white flex-1"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Research & Publications
          </h2>

          <ResearchStats />

          {/* Research Interests */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-blue-400 text-center">Research Interests</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {researchInterests.map((interest) => (
                <Badge key={interest} variant="outline" className="border-purple-400 text-purple-400 px-4 py-2 text-sm">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          {/* Published Papers */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">Published Papers & Publications</h3>
            <div className="space-y-6">
              {researchPapers.map((paper, index) => (
                <Card
                  key={paper.id}
                  className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge
                            variant={paper.status === "published" ? "default" : "secondary"}
                            className={`text-xs ${
                              paper.status === "published"
                                ? "bg-green-600 text-white"
                                : paper.status === "under-review"
                                  ? "bg-yellow-600 text-white"
                                  : "bg-gray-600 text-white"
                            }`}
                          >
                            {paper.status.replace("-", " ").toUpperCase()}
                          </Badge>
                          <Badge variant="outline" className="border-blue-400 text-blue-400 text-xs">
                            {paper.category.toUpperCase()}
                          </Badge>
                          <span className="text-gray-400 text-sm">{paper.year}</span>
                        </div>
                        <CardTitle className="text-xl text-blue-400 mb-2 leading-tight">{paper.title}</CardTitle>
                        <p className="text-gray-400 text-sm mb-3">
                          <strong>Authors:</strong> {paper.authors.join(", ")}
                        </p>
                        <p className="text-gray-400 text-sm mb-3">
                          <strong>Published in:</strong> {paper.journal}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {paper.citationCount && (
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-400">{paper.citationCount}</div>
                            <div className="text-xs text-gray-400">Citations</div>
                          </div>
                        )}
                        <div className="flex gap-2">
                          {paper.pdfUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                              onClick={() => window.open(paper.pdfUrl, "_blank")}
                            >
                              <Download className="w-4 h-4 mr-1" />
                              PDF
                            </Button>
                          )}
                          {paper.doi && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white"
                              onClick={() => window.open(`https://doi.org/${paper.doi}`, "_blank")}
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              DOI
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-4 leading-relaxed">{paper.abstract}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords.map((keyword) => (
                        <Badge key={keyword} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">Current Research Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {researchProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="bg-gray-800 border-gray-700 hover:border-purple-400 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge
                        variant={project.status === "completed" ? "default" : "secondary"}
                        className={`text-xs ${
                          project.status === "completed"
                            ? "bg-green-600 text-white"
                            : project.status === "ongoing"
                              ? "bg-blue-600 text-white"
                              : "bg-gray-600 text-white"
                        }`}
                      >
                        {project.status.toUpperCase()}
                      </Badge>
                      <div className="text-right text-sm text-gray-400">
                        <div>
                          {new Date(project.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                        </div>
                        {project.endDate && (
                          <div>
                            -{" "}
                            {new Date(project.endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                          </div>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-purple-400 mb-2">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </CardDescription>

                    {project.collaborators && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Collaborators:</h4>
                        <p className="text-sm text-gray-300">{project.collaborators.join(", ")}</p>
                      </div>
                    )}

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Outcomes:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {project.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 6).map((post, index) => (
              <Card
                key={post.id}
                className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl text-blue-400 line-clamp-2 hover:text-blue-300 cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 h-auto font-semibold">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3"
            >
              View All Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <Database className="w-5 h-5" />
                    </div>
                    <p className="text-gray-300 font-medium">{cert}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, or just having a
                conversation about technology and web development. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">New Delhi, India</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">tiwarivivek8765@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">+91 7654406307</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  onClick={() => window.open("https://github.com/tiwarivivek22", "_blank")}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  onClick={() => window.open("https://www.linkedin.com/in/vivek-prabhat-a67752247/", "_blank")}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  onClick={() => window.open("mailto:tiwaivivek8765@gmail.com", "_blank")}
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form action={contactAction} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isContactPending}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {isContactPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
                {contactState && (
                  <div
                    className={`mt-4 p-4 rounded-lg ${
                      contactState.success
                        ? "bg-green-900/50 border border-green-700 text-green-300"
                        : "bg-red-900/50 border border-red-700 text-red-300"
                    }`}
                  >
                    {contactState.message}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2024 Vivek Prabhat. All rights reserved.</p>
        </div>
      </footer>

      <SocialShare variant="floating" />
    </div>
  )
}
