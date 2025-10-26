import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Community E-commerce Demo",
      description: "Modern e-commerce platform with SPA architecture",
      fullDescription:
        "A demonstration e-commerce platform showcasing best practices in SPA (Single Page Application) architecture. Features include product catalog, shopping cart, user authentication, search functionality, and responsive design. Built to demonstrate modern frontend development capabilities.",
      technologies: [
        "React",
        "JavaScript",
        "tailwind CSS",
        "SPA",
        "Vite",
        "State Management",
        "Responsive",
      ],
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/e-CommerceSc.jpg?raw=true",
      category: "Web Development",
      liveUrl: "https://e-commerce-delta-tan-20.vercel.app/",
      githubUrl: "https://github.com/Mazen-mo-10/E-Commerce",
    },
    {
      id: 2,
      title: "Nagasaki Mosque Website",
      description:
        "Multilingual website for a mosque in Japan built with React",
      fullDescription:
        "A comprehensive multilingual website for Nagasaki Mosque in Japan. Features include prayer times, event calendar, donation system, and content in multiple languages including Japanese, Arabic, and English. Built with React for optimal performance and user experience.",
      technologies: [
        "React",
        "JavaScript",
        "tailwind CSS",
        "Vite",
        "CSS3",
        "Responsive Design",
        "i18n",
      ],
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/welcomenag.jpg?raw=true",
      category: "Web Development",
      liveUrl: "https://nagasakiislamiccenter.com/",
      githubUrl: "https://github.com/Mazen-mo-10/Nagasaki-Mosque-Site",
    },
    {
      id: 3,
      title: "Smart Badya",
      description: "AI and Computer Vision company website",
      fullDescription:
        "Corporate website for Smart Badya, a company specializing in AI and Computer Vision solutions. Showcases the company's projects, services, team, and technological capabilities. Modern, professional design with smooth animations and responsive layout.",
      technologies: [
        "WordPress",
        "Modern UI",
        "Animations",
        "Responsive Design",
      ],
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/smartBadyaPhoto.jpg?raw=true",
      category: "Web Development",
      liveUrl: "https://smartbadya.com/",
    },
    {
      id: 4,
      title: "ICPC MNU Community Website",
      description: "Community platform for competitive programming enthusiasts",
      fullDescription:
        "A dynamic community platform for ICPC (International Collegiate Programming Contest) participants at Minia University. Features include member profiles, contest announcements, problem-solving discussions, resource sharing, and event management. Built with React to foster collaboration among competitive programmers.",
      technologies: [
        "React",
        "JavaScript",
        "Vite",
        "tailwind CSS",
        "Community Features",
        "SPA",
      ],
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/MNUICPC.jpg?raw=true",
      category: "Web Development",
      liveUrl: "https://icpc-mnu.netlify.app/",
      githubUrl: "https://github.com/Mazen-mo-10/ICPC-MNU-Site",
    },
    {
      id: 5,
      title: "Blood Pressure Predictor",
      description: "ML-powered health prediction tool using Streamlit",
      fullDescription:
        "Machine Learning project developed during NTI scholarship. Predicts blood pressure levels based on various health indicators. Features an intuitive Streamlit interface for easy data input and instant predictions. Trained on comprehensive health datasets for accurate results.",
      technologies: [
        "Python",
        "Streamlit",
        "Machine Learning",
        "Data Analysis",
        "NLP",
      ],
      image:
        "https://github.com/Mazen-mo-10/imgs/blob/main/Blood%20Photo.jpg?raw=true",
      category: "AI/ML",
      githubUrl: "https://github.com/Mazen-mo-10/Diabetes-Prediction",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work across web development and AI/ML domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground 
                 text-xs rounded 
                 transition-all duration-300 ease-in-out 
                 hover:scale-110 hover:bg-primary hover:text-primary-foreground 
                 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span
                      className="px-2 py-1 bg-secondary text-secondary-foreground 
                 text-xs rounded 
                 transition-all duration-300 ease-in-out 
                 hover:scale-110 hover:bg-primary hover:text-primary-foreground 
                 cursor-default"
                    >
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Details Dialog */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      About This Project
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Technologies Used
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 
                   bg-primary/10 text-primary 
                   text-sm font-medium rounded-full 
                   transition-all duration-300 ease-in-out 
                   hover:scale-110 hover:bg-primary hover:text-primary-foreground 
                   shadow-sm hover:shadow-md cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    {selectedProject.liveUrl && (
                      <Button asChild className="flex-1">
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {selectedProject.githubUrl && (
                      <Button variant="outline" asChild className="flex-1">
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Projects;
