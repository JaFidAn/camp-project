import React, { useState, useEffect}  from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, CardDescription } from 'semantic-ui-react'
import AllMatchService from '../services/allMatchService'

export default function MatchDetails() {
    let {id:matchID} = useParams();

    const [match, setMatch] = useState({});

  useEffect(()=>{
    let allMatchService = new AllMatchService();
    allMatchService.getMatchById(matchID).then(result=>setMatch(result.data.data))
  },[matchID])

  return (
    <div>
      <Card.Group>
    <Card fluid>
      <Card.Content>
        <Card.Header>{match.homeTeamName}-{match.awayTeamName}</Card.Header>
        <Card.Meta><small>{match.dateTime}</small></Card.Meta>
        <Card.Description>
          <strong>FT - {match.fT1} : {match.fT2}</strong>
        </Card.Description>
        <CardDescription>
        <small>HT - {match.hT1} : {match.hT2}</small>
        </CardDescription>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
    </div>
  )
}
