import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  max-width: 100%;
  height: 97px;
  color: #fff;
  display: flex;
  align-items:center ;


   .searchBox {
    width: 400px;
    max-width: 100%;
    height: 45px;
    display: flex;
    position: relative;
    border: 1px solid #0F0F0F;
    align-items: center;
    background-color:${(props) => props.theme.colors.dark};
    transition: border 0.1s ease-out;
  }

  .searchBox:hover {
   border: 2px solid ${(props) => props.theme.colors.secondary};
;
}
  

  span {
   width: 48px;
   height: 41px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:${(props) => props.theme.colors.light};
  }

  .icon{
    position: absolute;
    margin-left: 10px;
    color:${(props) => props.theme.colors.primary} ;
  }


  input {
    width: 100%;
    height: 100%;
    padding: 0 0 0 30px;
    font-size: 16px;
    outline: none;
    border: none;
    color: #ffff;
    background-color:${(props) => props.theme.colors.dark};
  }

  

`