import styled from "styled-components";
import bg from "../../assets/sidebar.png";

export const StyledSidebar = styled.div`
  width: 230px;
  max-width: 100%;
  height: 100%;
  flex-shrink: 0; 
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.dark};
  background-image: url(${bg});
  background-repeat: repeat;
  background-size: 100%;
  background-position: center;
  overflow-y: auto;
  position: relative;
  transform: translateX(-100%);
  opacity: 0;

 .line{
  position: absolute;
  top: 99px;
  width: 3px;
   height: 127px;
  right: 0;
  background: #FBBA12;
 }

 .container {
    margin: 0 20px;
  }


  ul {
    list-style: none;
  }

  ul li {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    white-space: nowrap; 
  }


  .active{
    color: ${(props) => props.theme.colors.secondary};
  }

  .sidebarTop {
    width: 100%;
    height: 97px;
    max-width: 100%;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.colors.light};
    padding: 0 20px;
  }

  .sidebarTop img {
    width: 62px;
    height: 62px;
  }

  .sidebarTop .avatar {
    display: flex;
    align-items: center;
    gap: 20px;
  }

 



  .borderline{
    border: 0.1px solid #282828;
    margin: 15px 0;
  }
   .box1 {
    padding: 15px 0 0px 0;
  }

  .box1 ul li {
    gap: 10px;
  }

 

  .box2 {
    margin: 15px 0;
  }

  .box2 ul li {
    gap: 10px;
  }

  .box3 ul {
    margin: 15px 0 8px 0;
  }

  .box3 ul li > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .box3 ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .box4 ul li {
    font-family: "Bw Modelica";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 19px;
    margin-top: 6px;
    opacity: 0.9;
  }

  .box1,
  .box2,
  .box3,
  ul li {
    margin-top: 8px;
    font-family: "Bw Modelica";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
  }



`;
