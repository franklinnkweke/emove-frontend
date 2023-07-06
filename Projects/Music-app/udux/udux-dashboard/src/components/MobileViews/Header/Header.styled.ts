import styled from "styled-components";

export const StyledMobileHeader = styled.header`
    width: 100%;
    height: 97px;
    max-width: 100%;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.colors.light};

   img {
    width: 62px;
    height: 62px;
  }

  .avatar {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`