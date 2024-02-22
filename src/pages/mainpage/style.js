import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Navbar = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 30px 50px 30px 50px;
  background-color: #fff;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
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
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100vh;

  background-color: #f3f3f4;
`;
export const Options = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vw;
  height: 100px;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  margin-top: -35px;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const Companies = styled.div`
  display: flex;
  width: 100%;
`;
export const Jobs = styled.div`
display:flex;
flex-direction: column;
border-radius: 25px;
gap:20px;
height:fit-content;
margin-top:50px;
width: 80%;
`