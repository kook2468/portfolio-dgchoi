"use client";
import { useEffect } from "react";
import styled from "styled-components";
import "../styles/globals.css";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

export default function Home() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  useEffect(() => {
    // options에 따라 인스턴스 생성
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card-active");
        } else {
          entry.target.classList.remove("card-active");
        }
      });
    }, options);

    const cards = document.querySelectorAll(".card");
    console.log("cards", cards);
    cards.forEach((card) => {
      observer.observe(card);
    });
  }, []);

  return (
    <>
      <Header></Header>

      <main className="min-h-screen flex-col items-center justify-between p-10">
        <Banner></Banner>
        <CardWrapper className="card" id="Intro">
          <div className="card-container">
            <h3 className="title">Intro</h3>
            <div>컨텐츠</div>
          </div>
        </CardWrapper>
        <CardWrapper className="card" id="Skill">
          <div className="card-container">
            <h3 className="title">Skill</h3>
            <div>컨텐츠</div>
          </div>
        </CardWrapper>
        <CardWrapper className="card" id="Experience">
          <div className="card-container">
            <h3 className="title">Experience</h3>
            <div>컨텐츠</div>
          </div>
        </CardWrapper>
        <CardWrapper className="card" id="Project">
          <div className="card-container">
            <h3 className="title">Project</h3>
            <div>컨텐츠</div>
          </div>
        </CardWrapper>
      </main>

      <footer>
        Designed & Developed By <span className="text-pink-500">DGCHOI</span>
      </footer>
    </>
  );
}

const CardWrapper = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 20px 30px;
  min-height: 500px;
  margin: 30px 0;
  border-radius: 10px;

  .title {
    font-size: 2rem;
    font-weight: bold;
    color: #555;
  }
`;
