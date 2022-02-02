import React from 'react'
import Country from './Country'
import MatchList from '../pages/MatchList'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={3}>
            <Country />
          </GridColumn>
          <GridColumn width={13}>
            <MatchList />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  )
}
