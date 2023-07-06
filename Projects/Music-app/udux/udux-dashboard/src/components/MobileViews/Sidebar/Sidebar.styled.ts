import styled from "styled-components";
import bg from "../../../assets/sidebar.png";

export const StyledMobileSidebar = styled.div`
  
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  height: 92px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.dark};
  background-image: url(${bg});
  background-repeat: repeat;
  background-size: 30%;
  background-position: center center;

 &:after{
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 5;
    opacity: 0.5;
 }

 .active{
    color: ${(props) => props.theme.colors.secondary};
  }

  ul{
    width: 80%;
    max-width: 100%;
    margin: 0 auto;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items:center ;
    z-index: 10;
  }

  .mobileIcon{
    font-size: 32px;
  } 

  ul li{
    display: flex;
    align-items:center ;
    text-align: left;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary};
  }

  img{
    width: 28px;
    max-width: 100%;
    height: 28px;
  }



`