import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ThemeToggleButton from "../ThemeToggleButton";
import { Events, Link } from "react-scroll";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [clickedLink, setClickedLink] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    console.log("currentScrollY", currentScrollY);
    console.log("-clickedLink", clickedLink);

    let newVisibleState;

    if (currentScrollY < 63 || clickedLink == true) {
      newVisibleState = false; //스크롤 완료 후 숨기기
    } else {
      newVisibleState = currentScrollY > lastScrollY ? false : true;
    }

    setIsVisible(newVisibleState);
    setLastScrollY(currentScrollY);
  };

  const handleScrollEnd = () => {
    // Link가 클릭된 상태에서만 실행
    if (clickedLink) {
      setTimeout(() => {
        console.log("😀handleScrollEnd!!!", clickedLink);
        setIsVisible(false); // 스크롤 완료 후 숨기기
        setClickedLink(false); // 상태 초기화
      }, 50); // 작은 지연 시간을 주어 마지막 scroll 이벤트를 무시
    }
  };

  const handleLinkClick = () => {
    setClickedLink(true); // Link 클릭 시 상태를 true로 설정
  };

  useEffect(() => {
    //스크롤 완료 이벤트 등록
    Events.scrollEvent.register("end", handleScrollEnd);

    //스크롤 이벤트 등록
    window.addEventListener("scroll", handleScroll);

    return () => {
      //이벤트 리스너 제거
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, clickedLink]);

  return (
    <>
      <header
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } fixed transition-opacity ease-in-out delay-150 duration-300 z-10 w-full flex my-0 mx-auto center px-10 justify-center bg-white py-2 border-b-2 border-y-neutral-300`}
      >
        <StyledLink
          to="Intro"
          spy={true}
          smooth={true}
          duration={400}
          onClick={handleLinkClick}
        >
          <span>Intro</span>
        </StyledLink>
        <StyledLink
          to="Skill"
          spy={true}
          smooth={true}
          duration={400}
          onClick={handleLinkClick}
        >
          <span>Skill</span>
        </StyledLink>
        <StyledLink
          to="Experience"
          spy={true}
          smooth={true}
          duration={400}
          onClick={handleLinkClick}
        >
          <span>Experience</span>
        </StyledLink>
        <StyledLink
          to="Project"
          spy={true}
          smooth={true}
          duration={400}
          onClick={handleLinkClick}
        >
          <span>Project</span>
        </StyledLink>

        <ThemeToggleButton></ThemeToggleButton>
      </header>
    </>
  );
};

export default Header;

const StyledLink = styled(Link)`
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  display: block;
`;
