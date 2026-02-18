import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Price Tracker",
    description: "A price tracking web app to detect price drops and notify you.",
    image: "/projects/project5.jpeg",
    tags: ["Next.js", "TailwindCSS", "Supabase"],
    demoUrl: "https://price-tracker-phi-five.vercel.app/",
    githubUrl: "https://github.com/abhinav429/Price-Tracker",
  },
  {
    id: 2,
    title: "ML based Spam Classifier",
    description:
      "Machine learning-powered SMS spam classifier with statistics dashboard, and prediction history tracking.",
    image: "/projects/project4.jpeg",
    tags: ["Python", "Streamlit", "scikit-learn","NLTK"],
    demoUrl: "https://spam-classifier-k8hx.onrender.com/",
    githubUrl: "https://github.com/abhinav429/Spam-Classifier",
  },
  {
    id: 3,
    title: "Docs App",
    description:
      "A frontend interface for a site to manage and download documents.",
    image: "/projects/project3.jpeg",
    tags: ["React"],
    demoUrl: "https://documents-website-pearl.vercel.app/",
    githubUrl: "https://github.com/abhinav429/Documents-Website",
  },
  {
    id: 4,
    title: "Atmos Weather App",
    description:
      "A weather application to view weather conditions, forecasts, and location-based weather data.",
    image: "/projects/project6.png",
    tags: ["React","TailwindCSS","Docker"],
    demoUrl: "https://atmos-weather-app-gilt.vercel.app/",
    githubUrl: "https://github.com/abhinav429/Atmos-Weather-App",
  },
  {
    id: 5,
    title: "AI Background Remover",
    description:
      "Web app that removes image backgrounds using AI.",
    image: "/projects/project7.png",
    tags: ["React", "Spring Boot", "TailwindCSS","MySQL"],
    // demoUrl: "https://atmos-weather-app-gilt.vercel.app/",
    githubUrl: "https://github.com/abhinav429/ai-background-remover",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label="View demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href=" https://github.com/abhinav429"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
