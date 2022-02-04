import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import PrognosedSummary from './PrognosedSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useSelector } from 'react-redux'


export default function Navy() {
  const { prognoseItems } = useSelector((state) => state.prognose)
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

          {prognoseItems.length>0&&<PrognosedSummary/>}
          {isAuthenticated ? <SignedIn signOut={handleSignOut}/> : <SignedOut signIn={handleSignIn}/>}
        </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}
