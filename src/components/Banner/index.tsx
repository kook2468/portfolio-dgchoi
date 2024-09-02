import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  useEffect(() => {
    const ani = gsap.timeline();
    ani.to(".title1, .title3", { xPercent: -300 }, 0);
    ani.to(".title2, .title4", { xPercent: 300 }, 0);

    ScrollTrigger.create({
      animation: ani,
      trigger: ".banner-container",
      start: "top top",
      end: "+=1000",
      scrub: 1,
      pin: true,
      anticipatePin: 10,
    });

    // Cleanup function: 컴포넌트 언마운트 시 ScrollTrigger 인스턴스 정리
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });
  // <div className="h-[calc(100vh-2.5rem)]">
  return (
    <div className="h-[calc(100vh)]">
      <div className="banner-container w-full justify-center text-center pt-64">
        <div className="text-5xl title font-bold title1">CHOI DA GYEONG</div>
        <div className="text-5xl title font-bold title2">PORTFOLIO</div>
        <div className="text-5xl title font-bold title3">FRONTEND DEV</div>
        <div className="text-5xl title font-bold title4">DGCHOI</div>
      </div>
    </div>
  );
};

export default Banner;
