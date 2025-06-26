export interface ResearchPaper {
  id: string
  title: string
  authors: string[]
  journal: string
  year: number
  abstract: string
  keywords: string[]
  doi?: string
  pdfUrl?: string
  citationCount?: number
  status: "published" | "under-review" | "preprint" | "in-progress"
  category: "conference" | "journal" | "workshop" | "thesis"
}

export interface ResearchProject {
  id: string
  title: string
  description: string
  status: "ongoing" | "completed" | "planned"
  startDate: string
  endDate?: string
  collaborators?: string[]
  technologies: string[]
  outcomes: string[]
  relatedPapers?: string[]
}

export const researchPapers: ResearchPaper[] = [
  {
    id: "1",
    title: "A Research Review on the Role of Plastic-Eating Microscopic Organisms in interept Global Pollution",
    authors: ["Dr. Manisha Agrawal", "Vivek Prabhat", "Mr. Deepak Kumar"],
    journal: "G-CARED 2025 - First Global Conference on AI Research and Emerging Developments",
    year: 2025,
    abstract:
      "This study explores the potential of plastic-degrading bacteria as a sustainable solution to persistent plastic waste, intensified by the COVID-19 pandemic. It focuses on microbial degradation, long-term sustainability, and the conversion of plastic into valuable byproducts.",
    keywords: ["Plastic Pollution", "Microbial Degradation", "Sustainability", "COVID-19 Impact", "Environmental Science"],
    pdfUrl: "https://drive.google.com/file/d/118DthK9oTubMMlJpS31PucU-dRXNJ51L/view?usp=drive_link",
    citationCount: 12,
    status: "published",
    category: "conference",
  },
  {
    id: "2",
    title: "A Theoretical Analysis of Using Traditional Method of Teaching to Get Around Some Of the Challenges of E-Learning Programmes",
    authors: ["Dr. Manisha Agrawal", "Vivek Prabhat", "Dr. Puneet Garg"],
    journal: "30st International Conference of International Academy of Physical Sciences (CONIAPS XXX)",
    year: 2024,
    abstract:
      "This research investigates performance optimization and explores how traditional teaching methods can address key limitations and challenges faced by modern e-learning programs.",
    keywords: ["Traditional Teaching Methods", "E-Learning Challenges", "Student Engagement", "Digital Divide", "Scalability"],
    pdfUrl: "https://docs.google.com/document/d/1gAMSaDrWxRdfzWA_DsoLMEaC6koNgS64/edit?usp=drive_link&ouid=101550848481846868023&rtpof=true&sd=true",
    citationCount: 8,
    status: "published",
    category: "conference",
  },
]

export const researchProjects: ResearchProject[] = [
  {
    id: "1",
    title: "AI Privacy and Ethics in Marginalized Communities: Challenges, Gaps and Future Directions.",
    description:
      "An exploration of how AI impacts marginalized communities, highlighting ethical concerns, privacy challenges, and the need for inclusive future frameworks.",
    status: "completed",
    startDate: "2024-03-15",
    collaborators: ["Vivek Prabhat"],
    technologies: ["Python", "TensorFlow", "Natural Language Processing", "AST Analysis", "Docker"],
    outcomes: [
      "Identification of Ethical Gaps – Highlight overlooked ethical concerns in deploying AI within underrepresented and vulnerable populations.",
      "Policy and Framework Recommendations – Propose guidelines for ethical, inclusive, and privacy-respecting AI development and deployment.",
      "Community-Centric Solutions – Advocate for participatory AI design that empowers marginalized voices in shaping technology.",
    ],
    relatedPapers: ["1"],
  },
  {
    id: "2",
    title: "Leveraging Wearable Technology & Predictive Insights For  Enhanced Sports Injury Management",
    description:
      "A study on utilizing wearable technology and predictive analytics to improve early detection, prevention, and management of sports-related injuries.",
    status: "completed",
    startDate: "2024-08-01",
    endDate: "2025-03-15",
    collaborators: ["Vivek Prabhat", "Ved Parkash"],
    technologies: ["Ethereum", "Solidity", "React", "Web3.js", "IPFS"],
    outcomes: [
      "Real-time Injury Monitoring – Continuous tracking of athlete vitals and movement patterns to detect early signs of strain or injury.",
      "Predictive Risk Assessment – AI models forecast potential injuries based on historical and live data, enabling preventive action.",
      "Personalized Recovery Plans – Data-driven insights support tailored rehabilitation protocols for faster and safer recovery.",
      "Performance Optimization – Minimized injury downtime helps maintain peak athletic performance through informed training adjustments.",
    ],
  },
  {
    id: "3",
    title: "Performance Analysis of Microservices Architecture",
    description:
      "Comprehensive study comparing monolithic vs microservices architectures in terms of performance, scalability, and maintainability. Includes development of automated testing frameworks and performance benchmarking tools.",
    status: "ongoing",
    startDate: "2023-11-01",
    technologies: ["Docker", "Kubernetes", "Node.js", "Java Spring Boot", "Prometheus", "Grafana"],
    outcomes: [
      "Developed comprehensive benchmarking suite",
      "Performance metrics database with 10,000+ test runs",
      "Draft paper in preparation for submission",
    ],
    relatedPapers: ["2"],
  },
]

export const researchInterests = [
  "Machine Learning in Software Engineering",
  "Web Application Security",
  "Database Optimization and NoSQL Technologies",
  "Frontend Performance Optimization",
  "Sustainable Software Development",
  "Blockchain Applications in Education",
  "Microservices Architecture",
  "AI-Assisted Code Analysis",
]
