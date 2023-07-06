import styled from "styled-components";

export const StyledLikedSongs = styled.main`
  width: 100%;
  max-width: 100%;
  margin: 20px 0;

 .container{
    width: 98%;
    max-width: 100%;
    margin: 0 auto;
    overflow-x: scroll;

}

  h1{
    color: ${(props) => props.theme.colors.primary};
    font-family: 'Bw Modelica';
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }

    h3{
    color: ${(props) => props.theme.colors.primary};
    font-family: 'Bw Modelica';
    font-style: normal;
    font-weight: 700;
     line-height: 24px;
  }


  @media screen and (max-width: 765px){

     h1{
       font-size: 20px;
     }

    h3{
        font-size: 14px;
     }

  }

`;
