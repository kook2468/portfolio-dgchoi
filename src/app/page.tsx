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

      <main className="min-h-screen flex-col items-center justify-between p-10 max-w-7xl mx-auto my-0">
        <Banner></Banner>
        <CardWrapper className="card" id="Intro">
          <div className="card-container">
            <h3 className="title card-title">Intro</h3>
            <div className="">
              현재 메가존클라우드에서 다양한 비즈니스 솔루션을 구축하고 있는
              4년차{" "}
              <span className="highlight two-highlight">프론트엔드 개발자</span>
              입니다.
              <br />
              <br />
              저는 단순한 개발에 그치지 않고, 개발하는 시스템의 최종 목표를
              염두에 두고 작업합니다.
              <br />
              다양한 직군의 동료들과 비즈니스적인 관점에서 소통을 하며 시스템의
              목표 달성을 위해 노력하고 있습니다.
              <br />
              <br />
              최근에는 쇼핑몰 플랫폼 구축 프로젝트를 통해 프로세스 설계, 개발,
              런칭 전 과정을 경험했습니다. <br />
              이러한 경험을 바탕으로 사용자 경험 개선 방안을 고민하고 구현하는
              개발자를 목표로 하고 있습니다.
            </div>
          </div>
        </CardWrapper>
        <CardWrapper className="card" id="Skill">
          <div className="card-container">
            <h3 className="title card-title">Skill</h3>
            <div className="">컨텐츠</div>
          </div>
        </CardWrapper>
        <CardWrapper className="card" id="Experience">
          <div className="card-container">
            <h3 className="title card-title">Experience</h3>
            <div className="">컨텐츠</div>
          </div>
        </CardWrapper>
        <CardWrapper className="card" id="Project">
          <div className="card-container">
            <h3 className="title card-title">Project</h3>
            <div className="">컨텐츠</div>
          </div>
        </CardWrapper> 
      </main>

      <footer className="title">
        Designed & Developed By <span className="text-pink-500">DGCHOI</span>
      </footer>
    </>
  );
}

const CardWrapper = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 20px 30px;
  min-height: 300px;
  margin: 30px 0;
  border-radius: 10px;

  .title {
    font-size: 2rem;
    font-weight: bold;
    color: #555;
  }
`;
