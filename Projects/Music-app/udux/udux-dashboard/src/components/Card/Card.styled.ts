import styled from "styled-components";
import burna from "../../assets/burnaboy.png";
import oxlade from "../../assets/oxlade.png";
import davido from "../../assets/davido.png";


export const StyledCard = styled.div`
  width: 226.38px;
  height: 285.01px;
  border: 1px solid #707070;
  padding: 40px 0 10px 0;
  position: relative;
  transform: scale(0.9);
  opacity: 0.7;
  cursor: pointer;

   



  .innerBox {
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 236.15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }


   &:nth-child(3n+1) .innerBox {
       background: linear-gradient(89.79deg, #ad4c1d -19.39%, #f6b726 123.38%);
  }

  &:nth-child(3n+2) .innerBox{
  background: linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%);
  }

  &:nth-child(3n+3) .innerBox{
   background: linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%);
  }



  .innerBox .cardImg {
    width: 185.66px;
    height: 255.7px;
    margin-top: -20px;
    max-width: 100%;
    display: flex;
    padding: 10px;
    border: 1px solid #707070;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.dark};
  }

  &:nth-child(3n+1) .innerBox .img {
    width: 162.86px;
    height: 162.86px;
    max-width: 100%;
    background-image: url(${burna});
    background-size: cover;
    background-position: center center;
  }

   &:nth-child(3n+2) .innerBox .img {
    width: 162.86px;
    height: 162.86px;
    max-width: 100%;
    background-image: url(${davido});
    background-size: cover;
    background-position: center center;
  }

   &:nth-child(3n+3) .innerBox .img {
    width: 162.86px;
    height: 162.86px;
    max-width: 100%;
    background-image: url(${oxlade});
    background-size: cover;
    background-position: center center;
  }

  &:nth-child(3n+1) .innerBox .cardbody{
    background: linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%);
    width: 185.66px;
    max-width: 100%;
    padding: 10px;
  }

   &:nth-child(3n+2) .innerBox .cardbody{
     background: linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%);
    width: 185.66px;
    max-width: 100%;
    padding: 10px;
  }

    &:nth-child(3n+3) .innerBox .cardbody{
    background: linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%);
    width: 185.66px;
    max-width: 100%;
    padding: 10px;
  }


  .cardbody h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.colors.primary};
  }

  .cardbody p {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.colors.primary};
  }


    @media screen and (max-width: 765px){
     width: 181.13px;
     height: 228.05px;
    padding: 30px 0 0px 0;

     .innerBox {
     height: fit-content;
  }


     .innerBox .cardImg{
       width: 130.31px;
       height: 130.31px;
     }

      .innerBox .cardbody{
       width: 130.31px;
       max-width: 100%;
       text-align: center;
     }
  }



`;
