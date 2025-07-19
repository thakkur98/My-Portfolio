import { useEffect, useState } from "react";
import MyProfile from "@/Component/Pages/MyProfile";
import AboutMe from "@/Component/Pages/AboutMe";
import Experience from "@/Component/Pages/Experience";
import Achivement from "@/Component/Pages/Achivement";
import Contact from "@/Component/Pages/Contact";

const MainDashboard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{height:"auto"}}>
      <MyProfile />

      <div style={{ opacity: scrollPosition > 300 ? 1 : 0, transition: "opacity 0.6s ease" }}>
        <AboutMe />
      </div>

      <div style={{ opacity: scrollPosition > 1000 ? 1 : 0, transition: "opacity 0.6s ease" }}>
        <Experience />
      </div>

      <div style={{ opacity: scrollPosition > 1600 ? 1 : 0, transition: "opacity 0.6s ease" }}>
        <Achivement />
      </div>

      <div style={{ opacity: scrollPosition > 2200 ? 1 : 0, transition: "opacity 0.6s ease" }}>
        <Contact />
      </div>
    </div>
  );
};

export default MainDashboard;
