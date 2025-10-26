import { Card } from "@/components/ui/card";
import {
  GraduationCap,
  Award,
  BookOpen,
  Star,
  ExternalLink,
  Calendar,
  MapPin,
  Trophy,
  CheckCircle,
  Clock,
  Zap,
  Brain,
  Code,
  Database,
  Network,
  Settings,
  Server,
} from "lucide-react";

const Education = () => {
  const education = {
    degree: "Bachelor's Degree in Artificial Intelligence",
    university: "Minia National University",
    location: "Minya, Egypt",
    period: "2023 - 2027",
    gpa: "2.8/4.0 GPA",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
  };

  const courses = [
    {
      name: "Machine Learning",
      institution: "NTI",
      track: "Core Course",
      period: "2025",
      status: "completed",
      skills: [
        "AI Concepts",
        "Machine Learning",
        "Deep Learning Basics",
        "Search Algorithms",
        "Expert Systems",
        "Knowledge Representation",
      ],
      link: "https://github.com/Mazen-mo-10/imgs/blob/main/NTICal.jpg?raw=true",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Getting Started With Deep Learning",
      institution: "NVIDIA",
      track: "Advanced Course",
      period: "2025",
      status: "completed",
      skills: ["Neural Networks", "CNN", "RNN", "TensorFlow", "Scikit-learn"],
      link: "https://media.licdn.com/dms/image/v2/D5622AQHdW4Yq4_M3pA/feedshare-shrink_1280/B56Zj136uUIAAw-/0/1756471734253?e=1762992000&v=beta&t=Bg5s_VPgGNDFNJgnq7WRwKYQoCoaLFLEeAlVImArx9A",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "ICPC – ECPC Egypt Finalist",
      institution: "ICPC",
      track: "Competitive Programming Achievement",
      period: "2025",
      status: "completed",
      skills: [
        "Problem Solving",
        "Algorithms",
        "Data Structures",
        "Teamwork",
        "OOP",
        "C++",
        "Time Management",
      ],
      link: "https://media.licdn.com/dms/document/media/v2/D4D2DAQENo5s3JlDt0A/profile-treasury-document-pdf-analyzed/B4DZiZ1qCQG8Ao-/0/1754927639024?e=1762387200&v=beta&t=6jOQS4B1-Aep808ibiDpn_2YoXaPdH_Zlu6fVUCbv-U",
      icon: Award,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "Front-End Web Development",
      institution: "El Madrasa Platform",
      track: "Front-End Web",
      period: "2025",
      status: "completed",
      skills: [
        "Python Fundamentals by Python",
        "Data Structures",
        "HTML5 / CSS3",
        "JavaScript (ES6+)",
        "React",
        "Vite",
        "Tailwind CSS",
        "Next.js",
        "TypeScript",
      ],
      link: "https://almdrasa.com/front-end-diploma/",
      icon: Award,
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Data Structures & Algorithms",
      institution: "Mostafa Sayed Academy",
      track: "Core Course",
      period: "2024",
      status: "completed",
      skills: [
        "Arrays",
        "Linked Lists",
        "Trees",
        "Graphs",
        "Sorting",
        "Dynamic Programming",
      ],
      link: "https://www.youtube.com/playlist?list=PLPt2dINI2MIZX2EtY81WI-lDkvhKziLKM",
      icon: Code,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Data Structures",
      institution: "El Madrasa Platform",
      track: "Web & Programming Fundamentals",
      period: "2024",
      status: "completed",
      skills: [
        "Data Structures",
        "Time Complexity",
        "Algorithms",
        "Problem Solving",
        "Programming Logic",
      ],
      link: "https://media.licdn.com/dms/image/v2/D562DAQEXjG2C8xqgBg/profile-treasury-image-shrink_800_800/B56ZZf7V.rGQAY-/0/1745366114727?e=1762048800&v=beta&t=FmU86tl7fJqrp2-FFXrgip7zv1iWTYRqdFNJxYyDMx8",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Object-Oriented Programming (OOP)",
      institution: "Mostafa Sayed Courses",
      track: "Programming Fundamentals",
      period: "2024",
      status: "completed",
      skills: [
        "C++ OOP Concepts",
        "Encapsulation & Abstraction",
        "Inheritance & Polymorphism",
        "Classes and Objects",
        "Code Reusability",
      ],
      link: "https://www.youtube.com/playlist?list=PLPt2dINI2MIbMba7tpx3qvmgOsDlpITwG",
      icon: Award,
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Git & GitHub Course",
      institution: "El Madrasa Platform",
      track: "Version Control & Collaboration",
      period: "2024",
      status: "completed",
      skills: [
        "Git Fundamentals",
        "GitHub Workflow",
        "Branching & Merging",
        "Version Control",
        "Collaboration & Pull Requests",
      ],
      link: "https://github.com/Mazen-mo-10/imgs/blob/main/githubCourse.jpg?raw=true",
      icon: Award,
      color: "from-gray-700 to-blue-600",
    },
    {
      name: "Database Management Systems",
      institution: "Minia National University",
      track: "Core Course",
      period: "2024",
      status: "completed",
      skills: [
        "SQL",
        "MySQL",
        "Database Design",
        "Normalization",
        "Transactions",
      ],
      link: "#",
      icon: Database,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Computer Networks",
      institution: "Minia National University",
      track: "Core Course",
      period: "2024",
      status: "completed",
      skills: [
        "TCP/IP",
        "Network Security",
        "Routing",
        "Protocols",
        "OSI Model",
      ],
      link: "#",
      icon: Network,
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Natural Language Processing (NLP) Course",
      institution: "Online & Self-Study",
      track: "AI / Machine Learning",
      period: "2025",
      status: "completed",
      skills: [
        "Text Preprocessing",
        "Tokenization",
        "Word Embeddings",
        "Sentiment Analysis",
        "Language Modeling",
      ],
      link: "https://www.youtube.com/playlist?list=PL6-3IRz2XF5X-lzMZdmkvGAx1a3kIm7_I",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Advanced Web Development",
      institution: "Online & Self-Study & YouTube",
      track: "Professional Development",
      period: "2023 - Present",
      status: "ongoing",
      skills: [
        "Next.js",
        "Node.js",
        "GraphQL",
        "Web Performance",
        "Progressive Web Apps",
      ],
      link: "https://www.youtube.com/playlist?list=PLasZMtSCguZZrSFtyg_Q-_PIyiNgrPUdL",
      icon: Settings,
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "PHP for Back-End Development",
      institution: "Online & Self-Study",
      track: "Backend Fundamentals",
      period: "2025",
      status: "ongoing",
      skills: [
        "PHP Basics",
        "Backend Logic",
        "Form Handling",
        "Database Interaction (MySQL)",
        "Server-Side Programming",
      ],
      link: "https://www.youtube.com/playlist?list=PL0eyrZgxdwhwwQQZA79OzYwl5ewA7HQih",
      icon: Server,
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "Natural Language Processing",
      institution: "Minia National University",
      track: "Specialization",
      period: "2025",
      status: "ongoing",
      skills: [
        "Text Processing",
        "Sentiment Analysis",
        "NLTK",
        "Transformers",
        "BERT",
      ],
      link: "#",
      icon: BookOpen,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Computer Vision",
      institution: "Online & Self-Study",
      track: "Specialization",
      period: "2025",
      status: "ongoing",
      skills: [
        "Image Processing",
        "OpenCV",
        "Object Detection",
        "CNN Architectures",
      ],
      link: "https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16",
      icon: Award,
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "NTI ML Scholarship",
      description:
        "Selected for intensive Machine Learning scholarship program by National Technology Institute",
      year: "2023",
      status: "completed",
      link: "https://github.com/Mazen-mo-10/imgs/blob/main/NTICal.jpg?raw=true",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Star,
      title: "Academic Very Good Award",
      description:
        "Maintained excellent GPA throughout university education with focus on AI and algorithms",
      year: "2023 - 2027",
      status: "completed",
      link: "https://github.com/Mazen-mo-10/imgs/blob/main/veryGood.jpg?raw=true",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Competitive Programming",
      description:
        "Active participant in ICPC and various competitive programming contests",
      year: "2020 - Present",
      status: "ongoing",
      link: "https://media.licdn.com/dms/document/media/v2/D4D2DAQENo5s3JlDt0A/profile-treasury-document-pdf-analyzed/B4DZiZ1qCQG8Ao-/0/1754927639024?e=1762387200&v=beta&t=6jOQS4B1-Aep808ibiDpn_2YoXaPdH_Zlu6fVUCbv-U",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Education
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic background and continuous learning journey
          </p>
        </div>

        {/* Main Education */}
        <div className="max-w-6xl mx-auto mb-16 animate-fade-in">
          <Card className="p-8 lg:p-12 hover:shadow-2xl transition-all duration-500 group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div
                className={`w-24 h-24 bg-gradient-to-r ${education.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}
              >
                <education.icon className="h-12 w-12 text-white" />
              </div>

              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-500">
                  {education.degree}
                </h2>
                <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-2">
                  {education.university}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-bold text-sm group-hover:scale-105 transition-transform duration-300 shadow-lg">
                    <Trophy className="h-4 w-4" />
                    <span>{education.gpa}</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  Comprehensive education in Artificial Intelligence with strong
                  emphasis on machine learning, algorithms, and software
                  development. Gained deep understanding of computer science
                  fundamentals and practical experience in building AI-powered
                  applications.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Courses Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Key{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Courses
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive curriculum covering AI, machine learning, and
              computer science fundamentals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-500 group/course bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:-translate-y-2"
              >
                {/* Course Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center group-hover/course:scale-110 group-hover/course:rotate-12 transition-transform duration-300`}
                  >
                    <course.icon className="h-6 w-6 text-white" />
                  </div>
                  <div
                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
                      course.status === "completed"
                        ? "bg-green-500/20 text-green-700 dark:text-green-300 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-500/30"
                    }`}
                  >
                    {course.status === "completed" ? (
                      <CheckCircle className="h-3 w-3" />
                    ) : (
                      <Clock className="h-3 w-3" />
                    )}
                    {course.status === "completed" ? "Completed" : "Ongoing"}
                  </div>
                </div>

                {/* Course Info */}
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover/course:text-transparent group-hover/course:bg-gradient-to-r group-hover/course:from-blue-500 group-hover/course:to-cyan-500 group-hover/course:bg-clip-text transition-all duration-300">
                  {course.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">
                  {course.institution}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {course.track}
                  </span>
                  <span>{course.period}</span>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                    Skills Learned:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {course.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 text-gray-700 dark:text-gray-300 rounded text-xs font-medium border border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-700 dark:hover:text-blue-300 hover:scale-105 transform transition-all duration-300 cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Button */}
                <a
                  href={course.link}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 group/button"
                >
                  <ExternalLink className="h-4 w-4" />
                  View
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
                </a>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements & Scholarships */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Achievements &{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Scholarships
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Recognitions and awards throughout my academic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-500 group/achievement bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center group-hover/achievement:scale-110 group-hover/achievement:rotate-12 transition-transform duration-300`}
                  >
                    <achievement.icon className="h-7 w-7 text-white" />
                  </div>
                  <div
                    className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
                      achievement.status === "completed"
                        ? "bg-green-500/20 text-green-700 dark:text-green-300 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-500/30"
                    }`}
                  >
                    {achievement.status === "completed" ? (
                      <CheckCircle className="h-3 w-3" />
                    ) : (
                      <Clock className="h-3 w-3" />
                    )}
                    {achievement.status === "completed"
                      ? "Achieved"
                      : "In Progress"}
                  </div>
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {achievement.year}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover/achievement:text-transparent group-hover/achievement:bg-gradient-to-r group-hover/achievement:from-green-500 group-hover/achievement:to-emerald-500 group-hover/achievement:bg-clip-text transition-all duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {achievement.description}
                </p>

                <a
                  href={achievement.link}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 group/button"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Details
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
                </a>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 lg:p-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-500/20 dark:border-purple-500/30 text-center group hover:shadow-2xl transition-all duration-500">
            <div className="max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Continuous Learning Philosophy
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Education doesn't stop at graduation. I'm committed to
                continuous learning through online courses, technical
                documentation, community engagement, and hands-on projects.
                Staying updated with the latest technologies and best practices
                is essential in the ever-evolving field of software development
                and AI.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Education;
