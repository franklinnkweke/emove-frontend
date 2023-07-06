import { StyledMobileSidebar } from "./Sidebar.styled";
import discover from "../../../assets/Vectordisconew.svg";
import home from "../../../assets/homeVec.svg";
import library from "../../../assets/Vectorlibrarynew.svg";
import playlist from "../../../assets/Vectorplaylist.svg";

const MobileSideBar = () => {
  return (
    <StyledMobileSidebar>
      <ul>
        <li >
          <img className="active" src={home} alt="..." />
        </li>
        <li>
          <img src={discover} alt="..." />
        </li>
        <li>
          <img  src={library} alt="..." />
        </li>
        <li>
          <img src={playlist} alt="..." />
        </li>
      </ul>
    </StyledMobileSidebar>
  );
};

export default MobileSideBar;
