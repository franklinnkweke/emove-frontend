import { useEffect, useRef } from "react";
import { StyledCard } from "./Card.styled";
import gsap from "gsap";

const Card = () => {
    let card = useRef(null);

    useEffect(() => {
        gsap.to(card.current, {
            scale: 0.95,
            opacity: 1,
            duration: 0.5,
            delay: 2,
            ease: "Power1.easeInOut",
        })
    },[])
    return ( 
        <StyledCard ref={card}>
            <div className="innerBox">
                <div className="cardImg">
                    <div className="img"></div>
                </div>
                <div className="cardbody">
                    <h3>Daily Vibes 1</h3>
                    <p>Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwa Savage...</p>
                </div>
            </div>
        </StyledCard>
     );
}
 
export default Card;