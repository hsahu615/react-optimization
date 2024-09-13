import React, { useState, useEffect } from "react";

const Throttling = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  }; // Throttled to run once every 1 second

  const throttle = (func, delay) => {
    let lastCall = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      func(...args);
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 1000));
    return () => {
      window.removeEventListener("scroll", throttle(handleScroll, 1000));
    };
  }, []);

  return (
    <div>
      <h1>Scroll position: {scrollPosition}</h1>
      <div style={{ height: "200vh" }}>
        Scroll down to see throttling in action!
      </div>
    </div>
  );
};

export default Throttling;
