import { Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import JobsList from '../pages/JobsList'
import HeaderBar from './HeaderBar'

function MainContent() {
  return (
    <>
      <HeaderBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs-list" element={<JobsList />} />
        </Routes>
      </Container>
    </>
  )
}

export default MainContent
