import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import AllMatchService from '../services/allMatchService'

export default function MatchList() {
  const [matches, setMatches] = useState([])

  useEffect(()=>{
    let allMatchService = new AllMatchService();
    allMatchService.getAllMatch().then(result=>setMatches(result.data.data))
  })

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date and Time</Table.HeaderCell>
            <Table.HeaderCell>Match</Table.HeaderCell>
            <Table.HeaderCell>Full Time</Table.HeaderCell>
            <Table.HeaderCell>Half Time</Table.HeaderCell>
            <Table.HeaderCell>League</Table.HeaderCell>
            <Table.HeaderCell>Country</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {matches.map((match) => (
            <Table.Row key={match.matchID}>
              <Table.Cell>{match.dateTime}</Table.Cell>
              <Table.Cell>{match.homeTeamName} - {match.awayTeamName}</Table.Cell>
              <Table.Cell>{match.fT1} : {match.fT2}</Table.Cell>
              <Table.Cell>{match.hT1} : {match.hT2}</Table.Cell>
              <Table.Cell>{match.leagueName}</Table.Cell>
              <Table.Cell>{match.countryName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
