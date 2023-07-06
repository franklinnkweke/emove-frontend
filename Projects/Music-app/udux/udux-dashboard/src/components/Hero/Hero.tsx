import { StyledHero } from "./Hero.styled";
import u from "../../assets/u.png";
import d from "../../assets/d.png";
import x from "../../assets/x.png";
import omar from "../../assets/omahlay.png";
import { Container } from "../Container/Container.styled";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
  let U1 = useRef(null);
  let D = useRef(null);
  let U2 = useRef(null);
  let X = useRef(null);

  useEffect(() => {
    gsap.to(U1.current, {
      top: "0px",
      duration: 0.5,
      delay: 1.2,
      opacity: 1,
      ease: "Power1.easeInOut",
    });
    gsap.to(D.current, {
      top: "0px",
      duration: 0.5,
      delay: 1.5,
      opacity: 1,
      ease: "Power1.easeInOut",
    });
    gsap.to(U2.current, {
      top: "0px",
      duration: 0.5,
      delay: 1.8,
      opacity: 1,
      ease: "Power1.easeInOut",
    });
    gsap.to(X.current, {
      left: "0px",
      duration: 0.5,
      delay: 2,
      opacity: 1,
      ease: "Power1.easeInOut",
    });
  }, []);
  return (
    <StyledHero>
      <Container>
        <div className="logo">
          <img ref={U1} className="imgSmall" src={u} alt="..." />
          <img ref={D} className="imgSmall" src={d} alt="..." />
          <img ref={U2} className="imgSmall" src={u} alt="..." />
          <img ref={X} className="imgLarge" src={x} alt="..." />
        </div>
        <img className="bottom" src={omar} alt="..." />
      </Container>
    </StyledHero>
  );
};

export default Hero;
