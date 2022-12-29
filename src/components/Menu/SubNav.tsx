import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from 'inve-swap-uikit'

const StyledNav = styled.nav`
  margin-top: -2vw;
  margin-bottom: 0px;
  text-align: flex-start;
  margin-left:2.5vw;
  min-width:400px;
`
const getActiveIndex = (pathname: string): number => {
  if (
    pathname.includes('/pool') ||
    pathname.includes('/create') ||
    pathname.includes('/add') ||
    pathname.includes('/remove') ||
    pathname.includes('/find') ||
    pathname.includes('/liquidity') 
  ) {
    return 3
  }
  if(    pathname.includes('/bridge') 
  ){
    return 1
  }
  if(    pathname.includes('/stable') 
  ){
    return 2
  }
  return 0
}

export default function Nav() {
  const location = useLocation()

  return (
    <StyledNav>
      <ButtonMenu activeIndex={getActiveIndex(location.pathname)} scale="sm" variant="primary">
        <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
          Swap
        </ButtonMenuItem>
        <ButtonMenuItem id="bridge-nav-link" to="/bridge" as={Link}>
          Bridge
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/stable" as={Link}>
          Stable
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
          Liquidity
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledNav>
  )
}
