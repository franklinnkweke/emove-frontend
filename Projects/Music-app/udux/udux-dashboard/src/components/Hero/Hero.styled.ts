import styled from "styled-components";
import hero from "../../assets/hero.png";

export const StyledHero = styled.section`
  width: 100%;
  max-width: 100%;
  height: 255px;
  color: ${(props) => props.theme.colors.secondary};
  background-image: url(${hero});
  background-size: cover;
  background-position: center right;
  position: relative;
  padding: 20px 0;
  

  .container {
    width: 98%;
    max-width: 100%;
    margin: 0 auto;
  }

  .logo {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo .imgSmall {
    width: 26.62px;
    height: 22.84px;
    max-width: 100%;
    position: relative;
  }

  .logo .imgSmall:nth-child(1) {
    top: -20px;
    opacity: 0;
  }

  .logo .imgSmall:nth-child(2) {
    top: -20px;
    opacity: 0;
  }

  .logo .imgSmall:nth-child(3) {
    top: -20px;
    opacity: 0;
  }

  .logo .imgLarge {
    width: 31.18px;
    height: 38px;
    position: relative;
    left: 60%;
    opacity: 0;
  }

  .bottom {
    position: absolute;
    right: 10px;
    bottom: 0;
    width: 387px;
    max-width: 100%;
    height: 112px;
  }

  @media screen and (max-width: 765px) {

    height: 150px;
    background-position: center center;

    .bottom {
      display: none;
    }

  .logo .imgSmall {
    width: 18.62px;
    height: 16.84px;
  }

   .logo .imgLarge {
    width: 24.18px;
    height: 22px;
  }
    
  }
`;
