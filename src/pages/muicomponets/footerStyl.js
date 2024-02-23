import styled from "styled-components";

export const ContainerFoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: fit-content;
  background-color: #ffffff;
  padding-top: 100px;
  padding-bottom: 100px;
  p {
    color: #aaaaaa;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
`;

export const AllRights = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;

  p {
    color: #aaaaaa;
  }
`;
