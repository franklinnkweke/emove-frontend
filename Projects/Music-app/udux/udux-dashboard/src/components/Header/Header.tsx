import { StyledHeader } from "./Header.styled";
import { StyledContainer } from "../Container/Container.styled";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import { StyledFlex } from "../Flex.styled";

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledFlex>
          <StyledFlex>
            <span>
              <FaChevronLeft />
            </span>
            <span>
              <FaChevronRight />
            </span>
          </StyledFlex>
          <div className="searchBox">
            <FaSearch className="icon" />
            <input type="text" />
          </div>
        </StyledFlex>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
