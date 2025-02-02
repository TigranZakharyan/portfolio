'use client'
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import FadeIn from "@/components/FadeIn";
import Main from "@/components/Main";
import Expertise from "@/components/Expertise";
import Timeline from "@/components/Timeline";
import Project from "@/components/Project";

export default function Home() {
  const [mode, setMode] = useState<string>('dark');

  const handleModeChange = () => {
      if (mode === 'dark') {
          setMode('light');
          localStorage.setItem('mode', 'light')
      } else {
          setMode('dark');
          localStorage.setItem('mode', 'dark')
      }
  }

  useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      setMode(localStorage.getItem('mode') || 'dark')
  }, []);

  return (
  <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
      <FadeIn transitionDuration={700}>
          <Main/>
          <Expertise/>
          <Timeline/>
          <Project/>
      </FadeIn>
  </div>
  );
}
