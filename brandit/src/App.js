import './App.css';
import NavBar from './Components/NavBar'
import SideNav from './Components/SideNav';
import Dashboard from './Pages/Dashboard'
import Container from '@mui/material/Container';

import { lightBlue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {

  const theme = createTheme({
    palette: {
      //mode: 'dark',
      primary: {
        main: lightBlue[300],
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <NavBar />
        <SideNav />
        <div className="content">
          <Dashboard />
        </div>
      </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
