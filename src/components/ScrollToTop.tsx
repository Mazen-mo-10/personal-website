import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      variant="secondary"
      className="
        fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full 
        bg-gradient-to-r from-cyan-500 to-teal-500 text-white 
        shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300
      "
    >
      <ArrowUp className="h-6 w-6 animate-bounce-slow" />
    </Button>
  );
};

export default ScrollToTop;
