import { useLayoutEffect, useState } from "react";
import classnames from "classnames";
import "./index.css";
import "react-vertical-timeline-component/style.min.css";
import { SliderCommon } from "./component/SliderCommon";
import Typewriter from "typewriter-effect";
import { TypewriterCommon } from "./component/TypewriterCommon";
import { TimelineCommon } from "./component/TimelineCommon";

const App = () => {
  const [visibleSections, setVisibleSections] = useState({
    section1: true,
    section2: false,
  });

  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;

      const newVisibleSections = {
        section1: scrollTop >= 0 && scrollTop < viewportHeight,
        section2: scrollTop >= viewportHeight,
      };

      setVisibleSections(newVisibleSections);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className={classnames("flex justify-center items-center sticky top-0", {
          "h-screen": visibleSections.section1,
          "h-0": !visibleSections.section1,
        })}
      >
        <div
          className={classnames("font-playwrite text-blue-900 text-3xl pb-20", {
            "opacity-0": !visibleSections.section1,
            "opacity-100": visibleSections.section1,
          })}
          style={{ transition: "opacity 0.5s" }}
        >
          <Typewriter
            options={{
              strings: ["Đoán xem hôm nay là ngày gì nào"],
              autoStart: true,
              deleteSpeed: Infinity,
              cursor: " ",
            }}
          />
        </div>
      </div>
      <div className="h-screen flex justify-center items-center static top-0">
        <p
          className={classnames({
            "opacity-0": !visibleSections.section2,
            "opacity-100": visibleSections.section2,
          })}
          style={{ transition: "opacity 0.5s" }}
        >
          đâsds
        </p>
      </div>
      <TimelineCommon />
      <TypewriterCommon text="Cùng nhìn lại những khoảng khắc bên nhau" />
      <SliderCommon />
      <TypewriterCommon text="Mong rằng bla bla" />
      <div className="h-10" />
    </div>
  );
};

export default App;
