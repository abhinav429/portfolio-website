import { BrainCircuit, Code } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer · Web & AI Products
            </h3>

            <p className="text-muted-foreground">
              I&apos;m a final-year CS student at VIT who builds end-to-end web
              and AI applications.
            </p>

            <p className="text-muted-foreground">
              I work across React, Next.js, Node.js, and Spring Boot, and I care
              about taking projects from idea to something people actually use.
            </p>

            <p className="text-muted-foreground">
              I have experience working at a startup, co-authored published
              research in computer vision, and built full-stack platforms
              including real-time tools deployed on AWS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    React, Next.js, Node.js, and Spring Boot apps with real users
                    and production-style workflows.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Backend Systems</h4>
                  <p className="text-muted-foreground">
                    RAG apps, APIs, databases, and Docker/AWS deployments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
