import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

const App = () => {

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
