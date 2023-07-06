import { StyledSidebar } from "./Sidebar.styled";
import avatar from "../../assets/avatar.png";
import discover from "../../assets/Vectordisconew.svg";
import recent from "../../assets/Vectorrecentnew.svg";
import home from "../../assets/homeVec.svg";
import liked from "../../assets/likednew.svg";
import create from "../../assets/Vectorcreate.svg";
import library from "../../assets/Vectorlibrarynew.svg";
import playlist from "../../assets/Vectorplaylist.svg";
import SearchIcon from "@mui/icons-material/Search";
import CampaignIcon from "@mui/icons-material/Campaign";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Sidebar = () => {
  let navBar = useRef(null);
  useEffect(() => {
    gsap.to(navBar.current, {
      transform: "translateX(0px)",
      opacity: 1,
      duration: 1,
      delay: 1,
      ease: "Power1.easeInOut",
    });
  }, []);
  return (
    <StyledSidebar ref={navBar}>
      <div className="line"></div>
      {/* .............Sidebar Top................. */}
      <section className="sidebarTop">
        <div className="avatar">
          <img src={avatar} alt="..." />
          <small>Hey! Aleem</small>
        </div>
      </section>

      <div className="container">
        {/* ...........section1........................ */}
        <section className="box1">
          <ul>
            <li>
              <img src={home} alt="..." />
              Home
            </li>
            <li>
              <img src={discover} alt="..." />
              Discover
            </li>
          </ul>
        </section>
        <div className="borderline"></div>
        {/* ...........section2........................ */}
        <section className="box2">
          <ul>
            <li>
              <img src={library} alt="..." />
              Your Library
            </li>
            <li className="active">
              <img src={liked} alt="..." />
              Liked Songs
              <CampaignIcon />
            </li>
            <li>
              <img src={recent} alt="..." />
              Recently Played
            </li>
            <li>
              <img src={create} alt="..." />
              Create Playlist
            </li>
          </ul>
        </section>

        {/* ...........section3........................ */}
        <section className="box3">
          <ul>
            <li>
              <div>
                <img src={playlist} alt="..." />
                My Playlist
              </div>
              <SearchIcon />
            </li>
          </ul>
        </section>

        <div className="borderline"></div>

        {/* ...........section4........................ */}
        <section className="box4">
          <ul>
            <li>Riffs & Runs</li>
            <li>African Heat</li>
            <li>Gidi Nights</li>
            <li>Running out of playlist na...</li>
            <li>Saturday was a good day</li>
            <li>Gidi Nights</li>
            <li>Riffs & Runs</li>
            <li>African Heat</li>
            <li>Gidi Nights</li>
            <li>Running out of playlist na...</li>
            <li>Saturday was a good day</li>
            <li>Gidi Nights</li>
            <li>Running out of playlist na...</li>
            <li>Saturday was a good day</li>
            <li>Gidi Nights</li>
          </ul>
        </section>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
