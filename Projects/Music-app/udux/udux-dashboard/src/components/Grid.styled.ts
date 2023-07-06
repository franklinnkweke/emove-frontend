import styled from "styled-components";

export const StyledGrid = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  overflow-x: scroll;


  @media screen and (max-width: 765px){
    margin: 50px 0;
  }

`;
