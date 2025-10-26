import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  ArrowRight,
  Code,
  Brain,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import MatrixBackground from "@/components/MatrixBackground";
import mazenPhoto from "@/assets/mazen-photo.png";

const Home = () => {
  const focusAreas = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building modern, responsive web applications with React and cutting-edge technologies",
      gradient: "from-cyan-500 via-teal-500 to-cyan-600",
    },
    {
      icon: Brain,
      title: "AI / Machine Learning",
      description:
        "Leveraging AI/ML tools and concepts to create intelligent solutions",
      gradient: "from-teal-400 via-cyan-500 to-blue-500",
    },
    {
      icon: Trophy,
      title: "Competitive Programming",
      description:
        "Problem-solving expertise through algorithms and data structures",
      gradient: "from-blue-500 via-teal-500 to-cyan-500",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <MatrixBackground />

      {/* Hero Section - Centered Vertically */}
      <section className="relative container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="w-full py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left animate-fade-in">
              <div
                className="inline-block mb-6 px-10 py-3 
  text-lg font-semibold text-white 
  bg-gradient-to-r from-cyan-500 via-blue-400 to-cyan-400
  bg-[length:300%_300%] animate-smoothShine 
  rounded-full border border-primary/30 
  shadow-[0_0_15px_rgba(20, 184, 166, 0.4)] 
  hover:scale-105 transition-transform duration-500"
              >
                Welcome to my portfolio
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent whitespace-nowrap">
                  Mazen Mohamed Ali
                </span>
              </h1>
              <p className="text-2xl lg:text-2xl text-muted-foreground mb-4">
                Frontend Developer · React Specialist
              </p>
              <p className="text-base lg:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 bg-clip-text text-transparent font-semibold">
                  AI/ML-aware
                </span>{" "}
                ·{" "}
                <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                  Competitive Programmer
                </span>{" "}
                ·{" "}
                <span className="bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent font-semibold">
                  Building Innovative Web Experiences
                </span>
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:scale-110 hover:border-primary transition-all"
                >
                  <a
                    href="https://github.com/Mazen-mo-10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:scale-110 hover:border-primary transition-all"
                >
                  <a
                    href="https://linkedin.com/in/mazenmohamed2212"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:scale-110 hover:border-primary transition-all"
                >
                  <a
                    href="https://www.facebook.com/share/1FFDX66Bvn/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:scale-110 hover:border-primary transition-all"
                >
                  <a
                    href="https://www.instagram.com/mazen.moohamed_10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <Button
                  size="lg"
                  asChild
                  className="group relative px-8 py-4 text-lg font-semibold 
               shadow-elegant hover:shadow-2xl 
               transition-all duration-500 hover:scale-105"
                >
                  <Link to="/projects" className="flex items-center">
                    View Projects
                    <ArrowRight
                      className="ml-2 h-5 w-5 animate-arrowMove 
                   transition-transform group-hover:translate-x-2"
                    />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="relative px-8 py-4 text-lg font-semibold 
               hover:bg-primary hover:text-primary-foreground 
               hover:scale-105 shadow-md hover:shadow-xl
               transition-all duration-500"
                >
                  <a href="/Mazen_Mohamed_CV.pdf" download>
                    Download CV
                  </a>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-1 flex justify-center items-center animate-scale-in">
              <div className="relative flex items-center justify-center">
                {/* Glow background */}
                <div
                  className="
        absolute -inset-4 rounded-full blur-3xl animate-glow
        dark:bg-gradient-to-r dark:from-cyan-500 dark:to-teal-500 dark:opacity-25
        bg-gradient-to-r from-cyan-300 to-teal-300 opacity-30
      "
                />

                {/* Profile image */}
                <img
                  src={mazenPhoto}
                  alt="Mazen Mohamed Ali - Frontend Developer"
                  className="
        relative w-80 h-80 lg:w-[450px] lg:h-[450px]
        rounded-full object-cover object-top
        shadow-elegant border-4 border-primary/20
        transition-transform duration-500
        hover:scale-105
      "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="relative container mx-auto px-4 py-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Areas of Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${area.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <area.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Contact */}
      <section className="relative container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-hero rounded-3xl p-12 shadow-elegant border border-primary/20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <Button
            size="lg"
            asChild
            className="shadow-elegant hover:shadow-xl transition-all"
          >
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
