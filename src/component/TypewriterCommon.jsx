import { useState, useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";

export function TypewriterCommon({text}) {
  const [isScroll, setIsScroll] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isScroll) {
          setIsScroll(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isScroll]);

  return (
    <div
      ref={sectionRef}
      className="font-playwrite text-blue-900 text-3xl text-center pt-10"
    >
      <Typewriter
        options={{
          strings: [text],
          autoStart: isScroll,
          deleteSpeed: Infinity,
          cursor: " ",
        }}
      />
    </div>
  );
}
