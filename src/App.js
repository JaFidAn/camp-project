import './App.css';
import Dashboard from './layouts/Dashboard';
import Navy from './layouts/Navy';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';



function App() {
  return (
    <div className="App">
      <Navy/>
      <Container className='main' >
      <Dashboard/> 
      </Container>
         
    </div>
  );
}

export default App;
