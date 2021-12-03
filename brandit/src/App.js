import './App.css';
import NavBar from './Components/NavBar'
import SideNav from './Components/SideNav';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <NavBar />
        <SideNav />
      </Container>
    </div>
  );
}

export default App;
