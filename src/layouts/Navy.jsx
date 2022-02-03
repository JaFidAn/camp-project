import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import PrognosedSummary from './PrognosedSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'


export default function Navy() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const navigate = useNavigate();

  function handleSignOut(){
    setIsAuthenticated(false);
    navigate("/");
  }

  function handleSignIn(){
    setIsAuthenticated(true);
    navigate("/");
  }

  return (
    <div>
      <Menu inverted fixed='top'>
        <Container>
        <Menu.Item
          name='home'
         
        />
        <Menu.Item
          name='messages'
         
        />

        <Menu.Menu position='right'>

          <PrognosedSummary/>
          {isAuthenticated ? <SignedIn signOut={handleSignOut}/> : <SignedOut signIn={handleSignIn}/>}
        </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}
