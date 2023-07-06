import { GlobalStyle } from "./styles/Global.styled";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import LikedSongs from "./pages/LikedSongs/LikedSongs";
import { useMediaQuery } from 'react-responsive';
import MobileSideBar from "./components/MobileViews/Sidebar/Sidebar";
import MobileHeader from "./components/MobileViews/Header/Header";

function App() {
  const isMobile = useMediaQuery({ maxWidth:   765 });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {!isMobile ? <Sidebar /> : null}
        <main className="right">
          {isMobile ? <MobileHeader /> :  <Header />}
          <div className="pagination">
            <Hero />
            <section>
              <LikedSongs />
            </section>
          </div>
        {isMobile ? <MobileSideBar /> : null}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
