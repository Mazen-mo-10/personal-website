import { Card } from "@/components/ui/card";
import {
  Code2,
  Layers,
  Brain,
  Database,
  Wrench,
  Trophy,
  Lightbulb,
  Server,
  Sparkles,
  Palette,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Trophy,
      label: "Experience",
      value: "+3",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: Code2,
      label: "Languages",
      value: "+9",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: Lightbulb,
      label: "Technologies",
      value: "+30",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Sparkles,
      label: "Projects",
      value: "+15",
      color: "from-cyan-400 to-teal-600",
    },
  ];

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "from-cyan-500 to-teal-500",
      skills: [
        { name: "React", level: 99 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 95 },
        { name: "Next.js", level: 80 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "Tailwind CSS", level: 95 },
        { name: "React Hooks", level: 95 },
        { name: "State Management", level: 85 },
      ],
    },
    {
      icon: Brain,
      title: "AI / Machine Learning",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 99 },
        { name: "Data Preprocessing", level: 95 },
        { name: "TensorFlow", level: 95 },
        { name: "PyTorch", level: 90 },
        { name: "Streamlit", level: 95 },
        { name: "AI Integration", level: 90 },
        { name: "NLP Basics", level: 75 },
        { name: "ML Model Implementation", level: 85 },
      ],
    },
    {
      icon: Layers,
      title: "Programming & CS Fundamentals",
      color: "from-teal-500 to-blue-500",
      skills: [
        { name: "C++", level: 90 },
        { name: "Algorithms", level: 88 },
        { name: "Data Structures", level: 90 },
        { name: "OOP", level: 92 },
        { name: "Problem Solving", level: 95 },
        { name: "Competitive Programming", level: 85 },
        { name: "Complexity Analysis", level: 85 },
        { name: "Design Patterns", level: 80 },
        { name: "Recursion & Backtracking", level: 90 },
      ],
    },
    {
      icon: Database,
      title: "Tools & Technologies",
      color: "from-cyan-400 to-teal-600",
      skills: [
        { name: "Git / GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Responsive Design", level: 97 },
        { name: "REST APIs", level: 90 },
        { name: "SPA Architecture", level: 88 },
        { name: "Vercel / Deployment", level: 85 },
        { name: "NPM / Package Management", level: 88 },
        { name: "Browser DevTools", level: 90 },
        { name: "Figma (UI Collaboration)", level: 82 },
      ],
    },
    {
      icon: Wrench,
      title: "Soft Skills",
      color: "from-teal-600 to-cyan-500",
      skills: [
        { name: "Team Collaboration", level: 92 },
        { name: "Mentoring", level: 88 },
        { name: "Communication", level: 90 },
        { name: "Problem Analysis", level: 93 },
        { name: "Time Management", level: 87 },
      ],
    },
    {
      icon: Palette,
      title: "Creative & UI Design",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "UI/UX Design Principles", level: 85 },
        { name: "Figma / Wireframing", level: 80 },
        { name: "Color Theory", level: 82 },
        { name: "Modern Animations", level: 88 },
        { name: "Clean Aesthetic Sense", level: 90 },
      ],
    },
  ];

  const futureSkills = [
    {
      icon: Server,
      title: "Future Skills",
      color: "from-cyan-500 via-teal-500 to-blue-500",
      skills: [
        { name: "Backend Development (Node.js)", level: 70 },
        { name: "Deep Learning", level: 65 },
        { name: "Advanced NLP", level: 60 },
        { name: "System Design", level: 70 },
      ],
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
              Skills
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and expertise
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div
                className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
              >
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          ref={skillsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="p-8 hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg`}
                >
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground animate-count-up">
                        {isVisible ? skill.level : 0}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${
                            categoryIndex * 0.1 + skillIndex * 0.05
                          }s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Future Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16">
          {futureSkills.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="p-8 hover:shadow-elegant transition-all duration-300 animate-slide-up border-2 border-primary/20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center shadow-lg animate-glow`}
                >
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    Currently expanding my expertise
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground animate-count-up">
                        {isVisible ? skill.level : 0}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${skillIndex * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-hero border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly updating
              my skills and exploring new technologies to stay at the forefront
              of web development and deliver cutting-edge solutions.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
