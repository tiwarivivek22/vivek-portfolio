export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable Web Applications with React and Node.js",
    excerpt:
      "Learn how to architect and build scalable web applications using modern React patterns and Node.js best practices.",
    content: "Full blog content would go here...",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "Node.js", "JavaScript", "Web Development"],
    slug: "building-scalable-web-applications",
  },
  {
    id: "2",
    title: "MongoDB Performance Optimization: Tips and Tricks",
    excerpt:
      "Discover essential MongoDB optimization techniques to improve your database performance and query efficiency.",
    content: "Full blog content would go here...",
    date: "2024-01-08",
    readTime: "6 min read",
    tags: ["MongoDB", "Database", "Performance", "Backend"],
    slug: "mongodb-performance-optimization",
  },
  {
    id: "3",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends and technologies shaping the future of web development in 2024 and beyond.",
    content: "Full blog content would go here...",
    date: "2024-01-01",
    readTime: "10 min read",
    tags: ["Web Development", "Trends", "Technology", "Future"],
    slug: "future-of-web-development-2024",
  },
  {
    id: "4",
    title: "Java vs JavaScript: Understanding the Key Differences",
    excerpt:
      "A comprehensive comparison between Java and JavaScript, covering syntax, use cases, and when to choose each.",
    content: "Full blog content would go here...",
    date: "2023-12-20",
    readTime: "7 min read",
    tags: ["Java", "JavaScript", "Programming", "Comparison"],
    slug: "java-vs-javascript-differences",
  },
  {
    id: "5",
    title: "Creating Responsive Designs with Tailwind CSS",
    excerpt: "Master responsive web design using Tailwind CSS utility classes and modern CSS techniques.",
    content: "Full blog content would go here...",
    date: "2023-12-15",
    readTime: "5 min read",
    tags: ["CSS", "Tailwind", "Responsive Design", "Frontend"],
    slug: "responsive-designs-tailwind-css",
  },
  {
    id: "6",
    title: "Building RESTful APIs with Express.js and MongoDB",
    excerpt: "Step-by-step guide to creating robust RESTful APIs using Express.js framework and MongoDB database.",
    content: "Full blog content would go here...",
    date: "2023-12-10",
    readTime: "12 min read",
    tags: ["Express.js", "MongoDB", "API", "Backend", "Node.js"],
    slug: "building-restful-apis-express-mongodb",
  },
]
