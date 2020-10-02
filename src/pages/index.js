import React from "react"
import styled from "styled-components"
import SEO from "../components/Seo"
import Header from "../components/Header"
import Body from "../components/Body"
import "../styles/main.scss"

const IndexPage = () => {
  return (
    <Container>
      <SEO />
      <Header />
      <Body />
    </Container>
  )
}

export default IndexPage

const Container = styled.div`
  background-image: url(${require("../images/bg.png")});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  background-position-x: left;
`
