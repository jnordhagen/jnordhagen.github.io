import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import Home from './pages/home'
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{minHeight: '100vh'}}>
          <Home />
        </Box>
      </ThemeProvider>
    </React.StrictMode>
    </div>
  );
}

export default App;
