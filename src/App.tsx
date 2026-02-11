import { useHomeStore } from "./store";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

const App = () => {

  const count = useHomeStore((state) => state.count);
  const increment = useHomeStore((state) => state.increment);
  const decrement = useHomeStore((state) => state.decrement);

  return(
    <>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid sx={{minHeight: '1080px'}} item xs={2} className="sidebar shadow-xl">
              <SideBar />
            </Grid>
            <Grid sx={{minHeight: '1080px'}} item xs={10}>
              <MainContent />
            </Grid>
          </Grid>
        </Box>
    </>
  )
}

export default App;
