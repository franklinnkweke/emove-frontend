import Card from "../../components/Card/Card";
import { Container } from "../../components/Container/Container.styled";
import { StyledGrid } from "../../components/Grid.styled";
import { StyledLikedSongs } from "./LikedSongs.styled";

const LikedSongs = () => {
  return (
    <StyledLikedSongs>
      <Container>
        <h1>Welcome Back!</h1>
        <StyledGrid>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </StyledGrid>
        <h3>Cheers to the Weekend</h3>
        <StyledGrid>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </StyledGrid>
      </Container>
    </StyledLikedSongs>
  );
};

export default LikedSongs;
