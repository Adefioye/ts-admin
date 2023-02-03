import { useMode, ColorModeContext, ColorContextInterface } from "./theme";
import { ThemeProvider, CssBaseline, Theme } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import LeftSideBar from "./scenes/global/Sidebar";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode as ColorContextInterface}>
        <ThemeProvider theme={theme as Theme}>
          <CssBaseline />
          <div className="app">
            <LeftSideBar />
            <main className="content">
              <Topbar />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
