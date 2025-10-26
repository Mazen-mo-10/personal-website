import { Download, Award, Users, Heart, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import mazenPhoto from "@/assets/mazen-photo.png";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Academic Excellence",
      description:
        "AI degree with strong fundamentals in Computer Science, Algorithms, and Machine Learning",
    },
    {
      icon: Users,
      title: "Community Leader",
      description:
        "Active mentor and community builder, helping others grow in tech",
    },
    {
      icon: Heart,
      title: "Passionate Developer",
      description:
        "Dedicated to continuous learning and creating impactful solutions",
    },
  ];

  const journey = [
    {
      icon: Target,
      title: "My Mission",
      points: [
        "Creating beautiful, functional web applications that solve real-world problems",
        "Bridging the gap between AI/ML capabilities and frontend development",
        "Building intuitive user experiences with cutting-edge technologies",
        "Contributing to open-source and helping others learn to code",
      ],
    },
    {
      icon: Rocket,
      title: "What Drives Me",
      points: [
        "Passion for clean code and elegant solutions",
        "Love for competitive programming and algorithmic challenges",
        "Commitment to staying updated with latest web technologies",
        "Desire to make a positive impact through technology",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Frontend Developer passionate about creating elegant solutions
            through code
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Image */}
          <div className="flex justify-center items-start animate-fade-in-left">
            <div className="relative sticky top-24">
              <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-3xl rounded-3xl" />
              <img
                src={mazenPhoto}
                alt="Mazen Mohamed Ali"
                className="relative w-full max-w-md rounded-3xl shadow-elegant border-4 border-primary/20"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">My Journey</h2>

              <div className="space-y-4">
                <div className="p-4 bg-gradient-hero rounded-lg border border-primary/20">
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">
                      🎯 Who I Am:
                    </span>{" "}
                    I'm a frontend developer from Minya, Egypt, with a deep
                    passion for creating beautiful, functional web applications.
                    My expertise lies in React and modern web technologies,
                    combined with a strong foundation in computer science
                    fundamentals.
                  </p>
                </div>

                <div className="p-4 bg-gradient-hero rounded-lg border border-primary/20">
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">
                      🧠 My Background:
                    </span>{" "}
                    With a background in AI and Machine Learning, I bring a
                    unique perspective to frontend development. I'm proficient
                    in C++, algorithms, and data structures, which gives me the
                    analytical skills to solve complex problems efficiently.
                  </p>
                </div>

                <div className="p-4 bg-gradient-hero rounded-lg border border-primary/20">
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">
                      🤖 AI & ML Passion:
                    </span>{" "}
                    Beyond frontend, I actively work on AI and Machine Learning
                    projects — from building{" "}
                    <span className="font-medium text-foreground">
                      Deep Learning
                    </span>{" "}
                    models to experimenting with{" "}
                    <span className="font-medium text-foreground">
                      Natural Language Processing (NLP)
                    </span>
                    and data-driven systems. I enjoy bridging the gap between
                    intelligent models and user-friendly interfaces, creating
                    seamless AI-powered web experiences.
                  </p>
                </div>

                <div className="p-4 bg-gradient-hero rounded-lg border border-primary/20">
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">
                      🤝 Community Impact:
                    </span>{" "}
                    Beyond coding, I'm actively involved in competitive
                    programming and mentoring. I believe in giving back to the
                    community by helping others learn and grow through knowledge
                    sharing and collaboration.
                  </p>
                </div>

                <div className="p-4 bg-gradient-hero rounded-lg border border-primary/20">
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">
                      🧩 Mentorship & Problem Setting:
                    </span>{" "}
                    As a{" "}
                    <span className="font-medium text-foreground">
                      Mentor and Problem Setter
                    </span>{" "}
                    at the ICPC MNU Community, I guide and train over{" "}
                    <span className="font-medium text-foreground"> +50 </span>
                    students in algorithms, problem-solving, and programming
                    fundamentals. I design contest problems, lead workshops, and
                    support the next generation of programmers to achieve
                    excellence in competitions and real-world development.
                  </p>
                </div>

                <div className="p-4 bg-gradient-hero rounded-lg border border-primary/20">
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">
                      🚀 My Approach:
                    </span>{" "}
                    I'm constantly learning and staying updated with the latest
                    technologies to deliver cutting-edge solutions. Whether it's
                    a complex SPA, an AI-integrated platform, or a
                    community-driven website, I approach every project with
                    enthusiasm and dedication.
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              asChild
              className="group shadow-elegant hover:shadow-2xl 
             transition-transform duration-300 
             hover:scale-105 w-full sm:w-auto"
            >
              <a href="/Mazen_Mohamed_CV.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download My CV
              </a>
            </Button>
          </div>
        </div>

        {/* Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {journey.map((item, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <item.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
              </div>
              <ul className="space-y-3">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1">▹</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-6">
                <highlight.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{highlight.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
