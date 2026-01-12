import React, { useState, useEffect } from "react";
import HomeIntro from "./HomeIntro";
import PostsList from "../post/PostsList";
import TechStack from "./TechStack";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <main className="container mx-auto px-4 pt-16">
        <HomeIntro />
        <TechStack />
        <PostsList />
      </main>
    </div>
  );
}

export default Home;
