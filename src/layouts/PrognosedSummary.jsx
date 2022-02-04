import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownDivider, DropdownItem, Label } from 'semantic-ui-react'

export default function PrognosedSummary() {
  const { prognoseItems } = useSelector((state) => state.prognose)
  return (
    <div>
      <Dropdown item text="Prognoses">
        <Dropdown.Menu>
          {prognoseItems.map((prognoseItem) => (
            <Dropdown.Item key={prognoseItem.match.matchID}>
              {prognoseItem.match.homeTeamName} - {prognoseItem.match.awayTeamName}
              <Label>
                {prognoseItem.quantity}
              </Label>
            </Dropdown.Item>
          ))}

          <DropdownDivider />
          <DropdownItem as={NavLink} to="/prognose">
            Go To Prognose Details
          </DropdownItem>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
