import React from 'react'
import Country from './Country'
import MatchList from '../pages/MatchList'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Routes, Route } from 'react-router-dom'
import MatchDetails from '../pages/MatchDetails'
import PrognoseDetail from '../pages/PrognoseDetail'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={3}>
            <Country />
          </GridColumn>
          <GridColumn width={13}>
            <Routes>
              <Route exact path="/" element={<MatchList />} />
              <Route exact path="/allmatches" element={<MatchList />} />
              <Route path="/allmatches/:id" element={<MatchDetails />} />
              <Route path="/prognose" element={<PrognoseDetail />} />
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  )
}
