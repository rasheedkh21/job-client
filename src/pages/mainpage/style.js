import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Navbar = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-bottom: 30px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  p:hover {
    cursor: pointer;
    color: #4348db;
    border-bottom: #4348db 1px solid;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  background-color: white;
  padding-top: 50px;
  h1 {
    font-size: 50px;
    font-weight: 600;
    background-image: linear-gradient(to left, #553c9a, #b393d3);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  p {
    color: #adb7bd;
    font-size: 16px;
    line-height: 26px;
    text-indent: 30px;
    color: #111;
    font-family: "Open Sans", sans-serif;
    font-size: 30px;
    font-weight: 300;
    line-height: 32px;
    margin: 0 0 72px;
    text-align: center;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding-bottom: 40px;
  background-color: #f3f3f4;
`;
export const Options = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vw;
  height: fit-content;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  margin-top: -35px;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px;
  gap: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    justify-content: space-between;
    gap: 10px;
  }
`;

export const Jobs = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  gap: 20px;
  height: fit-content;
  margin-top: 50px;
  width: 80%;
`;
export const ImgWrapper = styled.div`
  display: flex;
  flex: 2;
  gap: 10px;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-evenly; 
  align-items: center; 
  width: 100%;
  gap: 30px;


  @media (max-width: 435px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-evenly;
    align-items: self-start;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .chip {
    font-family: Outfit;
    font-weight: 400px;
    background: #f6f6f6;
    padding: 5px;
    border-radius: 5px;
    
  }
`;
export const ChipWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 30px;
 

  @media (max-width: 435px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    gap: 10px;
  }
`;

export const ExpandMoreWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 20px;
`;

export const UploadTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  p {
    margin: 0px;
  }
  h4 {
    margin: 0px;
  }
  @media (max-width: 950px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
  }
`;
