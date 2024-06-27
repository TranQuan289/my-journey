import { useLayoutEffect, useState } from "react";
import classnames from "classnames";
import { Header1 } from "./component/Header1";
import { Header2 } from "./component/Header2";
import "./index.css";

function App() {
  const [showHeader2, setShowHeader2] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;

      setShowHeader2(scrollTop >= viewportHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <div className="sticky top-0 h-screen">
        <div className="relative h-full w-full">
          {/* Header 1 sẽ hiển thị trước khi scroll vượt quá viewport */}
          <div
            className={classnames(
              "transition-opacity duration-500",
              { "opacity-0": showHeader2, "opacity-100": !showHeader2 },
              { "z-0": true } // Đảm bảo Header1 luôn có z-index thấp hơn
            )}
          >
            <Header1 num={1} />
          </div>
          {/* Header 2 sẽ hiển thị khi scroll vượt quá viewport */}
          <div
            className={classnames(
              "transition-opacity duration-500",
              { "opacity-0": !showHeader2, "opacity-100": showHeader2 },
              { "z-10": true } // Đảm bảo Header2 luôn có z-index cao hơn
            )}
          >
            <Header2 num={2} />
          </div>
        </div>
      </div>
      {/* Phần nội dung khác */}
      <Header1 num={123} />
      <Header1 num={123} />
      <Header1 num={123} />
      <Header1 num={123} />
    </div>
  );
}

export default App;
