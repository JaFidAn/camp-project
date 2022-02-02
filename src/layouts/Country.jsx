import React from 'react'
import { Menu, Dropdown, Input } from 'semantic-ui-react'

export default function Country() {
  return (
    <div>
       <Menu vertical>
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>

        <Dropdown item text='England'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Premier League' />
            <Dropdown.Item icon='globe' text='Championship' />
            <Dropdown.Item icon='settings' text='League One' />
            <Dropdown.Item icon='settings' text='League Two' />
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text='Turkey'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Super Lig' />
            <Dropdown.Item icon='globe' text='1.Lig' />
          </Dropdown.Menu>
        </Dropdown>

      </Menu>
    </div>
  )
}
