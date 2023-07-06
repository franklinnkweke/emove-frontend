import { StyledMobileHeader } from "./Header.styled";
import avatar from "../../../assets/avatar.png";
import { Container } from "../../Container/Container.styled";

const MobileHeader = () => {
  return (
    <StyledMobileHeader>
      <Container>
        <div className="avatar">
          <img src={avatar} alt="..." />
        </div>
      </Container>
    </StyledMobileHeader>
  );
};

export default MobileHeader;
