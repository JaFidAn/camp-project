import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'

export default function SignedIn({signOut}) {

  return (
    <div>
      <Menu.Item>
          <Image avatar spaced = "right" src ="https://image.shutterstock.com/z/stock-photo-young-hispanic-cool-man-smiling-and-raising-thumb-up-1516767638.jpg"/>
          <Dropdown pointing="top left" text='Rasim Alagezov'>
              <Dropdown.Menu>
                  <Dropdown.Item text="Information" icon="info"/>
                  <Dropdown.Item onClick={signOut} text="Exit" icon="sign-out"/>
              </Dropdown.Menu>
          </Dropdown>
      </Menu.Item>
    </div>
  )
}
