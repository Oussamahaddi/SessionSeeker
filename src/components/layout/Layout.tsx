import React, { Suspense } from 'react'
import Header from '../partials/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../partials/Footer'
import LoadingSpinner from '../LoadingSpinner'
import styled from "styled-components"

export default function Layout() {
  return (
    <StyledContainer>
      <Header />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  min-height: 100vh;
`