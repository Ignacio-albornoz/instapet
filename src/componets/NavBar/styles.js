import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../styles/animations'

export const Nav = styled.nav`
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  align-items: center;
  justify-content: space-around;
  display: flex;
  height: 50px;
  max-width: 500px;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
`
export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &[aria-current] {

      color: #000;
  }
`
