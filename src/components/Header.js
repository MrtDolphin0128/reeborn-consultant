import React from "react"
import styled from "styled-components"

const Header = () => (
  <Container>
    <span>
      <span className="bold">ree</span>born.
    </span>
  </Container>
)

export default Header

const Container = styled.div`
  min-height: 100px;
  padding: 0em 3em;
  position: absolute;
  display: flex;
  align-items: center;
  span {
    font-size: 22px;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    color: #084794;
  }
  .bold {
    font-weight: 800;
  }
`
