import { Card } from "@/components/ui/card";
import {
  Briefcase,
  Users,
  Code,
  Award,
  Globe,
  Coffee,
  Utensils,
  Star,
  ExternalLink,
  Heart,
  Zap,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Freelance Frontend Developer",
      company: "Self-Employed",
      period: "2022 - Present",
      location: "Remote",
      description:
        "Building modern web applications for clients worldwide, specializing in React-based solutions and portfolio projects.",
      achievements: [
        "Developed multilingual websites with international reach",
        "Created AI-integrated platforms using ML tools",
        "Built community-driven websites and e-commerce solutions",
        "Designed and developed modern food ordering website with enhanced UX",
        "Created multiple portfolio projects showcasing latest technologies",
        "Maintained 100% client satisfaction rate",
        "Optimized website performance and user experience",
        "Implemented responsive designs for all devices",
      ],
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "UI/UX Design",
        "Performance",
        "Responsive",
        "Animation",
      ],
      color: "from-purple-500 to-pink-500",
      platforms: [
        { name: "Upwork", url: "#", icon: Globe },
        { name: "Fiverr", url: "#", icon: Star },
        { name: "مستقل", url: "#", icon: Briefcase },
        { name: "خمسات", url: "#", icon: Coffee },
      ],
      projects: [
        {
          name: "Modern Food Ordering Platform",
          description:
            "Revamped food ordering website with modern design and improved user experience",
          icon: Utensils,
          features: [
            "Modern UI/UX",
            "Fast Performance",
            "Easy Navigation",
            "Mobile First",
          ],
        },
        {
          name: "Portfolio Projects Collection",
          description:
            "Multiple showcase projects demonstrating latest web technologies",
          icon: Award,
          features: [
            "React/Next.js",
            "Responsive Design",
            "Modern Stacks",
            "Best Practices",
          ],
        },
      ],
    },
    {
      icon: Users,
      title: "Community Mentor & Leader",
      company: "ICPC MNU Community",
      period: "2021 - Present",
      location: "Minia, Egypt",
      description:
        "Mentoring students in competitive programming and web development, building tech community.",
      achievements: [
        "Mentored 50+ students in algorithms and problem-solving",
        "Organized coding competitions and workshops",
        "Built community platform for knowledge sharing",
        "Led team projects and collaborative learning sessions",
        "Created learning resources and tutorials",
        "Facilitated peer-to-peer learning sessions",
      ],
      skills: [
        "Mentoring",
        "Teaching",
        "Leadership",
        "Community",
        "Workshops",
        "Problem Solving",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "ML Project Developer",
      company: "NTI Scholarship Program",
      period: "2023",
      location: "Egypt",
      description:
        "Developed machine learning projects as part of intensive AI/ML scholarship program.",
      achievements: [
        "Created Blood Pressure Predictor using ML algorithms",
        "Implemented NLP-based solutions",
        "Built interactive Streamlit applications",
        "Completed comprehensive ML training program",
        "Worked with real-world datasets",
        "Deployed ML models for practical use",
      ],
      skills: [
        "Python",
        "Machine Learning",
        "NLP",
        "Streamlit",
        "Data Analysis",
        "Scikit-learn",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Competitive Programmer",
      company: "Various Platforms",
      period: "2020 - Present",
      location: "Online",
      description:
        "Active participant in competitive programming contests, solving complex algorithmic problems.",
      achievements: [
        "Solved 500+ algorithmic problems",
        "Strong proficiency in C++ and data structures",
        "Participated in ICPC regional contests",
        "Consistent practice on competitive programming platforms",
        "Advanced problem-solving skills",
        "Optimized algorithm implementations",
      ],
      skills: [
        "C++",
        "Algorithms",
        "Data Structures",
        "Problem Solving",
        "Mathematics",
        "Optimization",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional journey and contributions to the tech community
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in ${
                    index % 2 === 0
                      ? "md:pr-8 md:pl-0 md:text-left"
                      : "md:pl-8 md:pr-0 md:text-left"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1 z-10`}
                  >
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20 dark:shadow-purple-400/20 border-2 border-white dark:border-gray-800`}
                    >
                      <exp.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-20 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-0 md:pr-16" : "md:ml-0 md:pl-16"
                    }`}
                  >
                    <Card className="p-8 hover:shadow-2xl transition-all duration-500 group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                        {/* Main Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500">
                              {exp.title}
                            </h3>
                            <Sparkles className="h-5 w-5 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
                          <p className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-2">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                            {exp.period} · {exp.location}
                          </p>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {exp.description}
                          </p>
                        </div>

                        {/* Skills Section */}
                        {exp.skills && (
                          <div className="lg:w-1/3">
                            <h4 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                              <Zap className="h-4 w-4 text-yellow-500" />
                              Skills & Technologies:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-300 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500 hover:text-purple-700 dark:hover:text-purple-300 hover:scale-105 transform transition-all duration-300 cursor-pointer group/skill"
                                >
                                  {skill}
                                  <span className="opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                                    {" "}
                                    💫
                                  </span>
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Freelance Platforms */}
                      {exp.platforms && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                            <Globe className="h-4 w-4 text-blue-500" />
                            Freelance Platforms:
                          </h4>
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {exp.platforms.map((platform, platformIndex) => (
                              <a
                                key={platformIndex}
                                href={platform.url}
                                className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-800/30 dark:hover:to-cyan-800/30 rounded-xl border border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-600 hover:scale-105 transform transition-all duration-300 group/platform shadow-sm hover:shadow-lg"
                              >
                                <div className="p-2 bg-blue-500 rounded-lg group-hover/platform:scale-110 transition-transform duration-300">
                                  <platform.icon className="h-5 w-5 text-white" />
                                </div>
                                <div className="flex-1">
                                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300 group-hover/platform:text-blue-900 dark:group-hover/platform:text-blue-100">
                                    {platform.name}
                                  </span>
                                  <ExternalLink className="h-3 w-3 text-blue-400 opacity-0 group-hover/platform:opacity-100 transition-opacity duration-300 mt-1" />
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Featured Projects */}
                      {exp.projects && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                            <Award className="h-4 w-4 text-green-500" />
                            Featured Projects:
                          </h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {exp.projects.map((project, projectIndex) => (
                              <div
                                key={projectIndex}
                                className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-800/30 dark:hover:to-emerald-800/30 rounded-xl border border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-600 hover:scale-105 transform transition-all duration-300 group/project shadow-sm hover:shadow-lg"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg group-hover/project:scale-110 group-hover/project:rotate-12 transition-transform duration-300">
                                    <project.icon className="h-5 w-5 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="font-semibold text-sm mb-1 text-gray-900 dark:text-white flex items-center gap-2">
                                      {project.name}
                                      <TrendingUp className="h-3 w-3 text-green-500 opacity-0 group-hover/project:opacity-100 transition-opacity duration-300" />
                                    </h5>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                                      {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                      {project.features.map(
                                        (feature, featureIndex) => (
                                          <span
                                            key={featureIndex}
                                            className="px-2 py-1 bg-green-500/10 hover:bg-green-500/20 rounded-md text-xs text-green-700 dark:text-green-300 border border-green-500/20 hover:border-green-500/40 hover:scale-105 transform transition-all duration-300 cursor-pointer"
                                          >
                                            {feature}
                                          </span>
                                        )
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                          <Star className="h-4 w-4 text-purple-500" />
                          Key Achievements:
                        </h4>
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-3 group/achievement p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 hover:scale-105 transform transition-all duration-300 cursor-pointer"
                            >
                              <span
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0 group-hover/achievement:scale-150 group-hover/achievement:animate-pulse transition-transform duration-300`}
                              />
                              <span className="flex-1 group-hover/achievement:text-gray-900 dark:group-hover/achievement:text-gray-100 transition-colors duration-300">
                                {achievement}
                              </span>
                              <Heart className="h-3 w-3 text-pink-500 opacity-0 group-hover/achievement:opacity-100 transition-opacity duration-300 mt-1" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
