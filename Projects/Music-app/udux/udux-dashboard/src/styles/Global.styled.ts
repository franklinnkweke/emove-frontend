import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.cdnfonts.com/css/bw-modelica');
                
  body {
    margin: 0;
    padding: 0;
    font-family: 'Bw Modelica', sans-serif;
    box-sizing: border-box;
    background-color: #000;
    overflow-y: auto;
  }


  .App{
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: flex;
    gap: 20px;
    padding: 0 10px 0 0;
    overflow-y: auto;
  }
  
  .mobileApp{
    flex-direction: column;
  }

  .right{
    width: 1581px;
    max-width: 100%;
    height: 100%;
    overflow-x: scroll;
  }

  .pagination{
    border: 1px solid #0F0F0F;
    padding: 5px;
  }


  @media screen and (max-width: 900px){
    .App{
      padding: 0;
    }

    .pagination{
      border: none;
      margin-bottom: 60px;
    }
  }
`;
