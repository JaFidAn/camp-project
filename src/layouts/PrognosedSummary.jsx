import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownDivider, DropdownItem } from 'semantic-ui-react'

export default function PrognosedSummary() {
  return (
    <div>
        <Dropdown item text='Prognoses'>
            <Dropdown.Menu>
              <Dropdown.Item>Arsenal - Manchester United</Dropdown.Item>
              <Dropdown.Item>Inter - Milan</Dropdown.Item>
              <Dropdown.Item>Real - Barcelona</Dropdown.Item>
              <DropdownDivider />
              <DropdownItem as={NavLink} to="/prognose" >Go To Prognose Details</DropdownItem>
            </Dropdown.Menu>
          </Dropdown>
      
    </div>
  )
}
