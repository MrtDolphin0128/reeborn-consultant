import React, { useState } from "react"
import styled from "styled-components"

const Body = () => {
  const [action, setAction] = useState(0)

  return (
    <Container>
      <h1>
        <span className="bold">Reeborn </span>Consultant
      </h1>
      <p>Une histoire qui renaît sans cesse... </p>
      <p>
        Voici les maîtres-mots de Reeborn. Une idée en constante évolution
        n'ayant que pour seul but se réinventer, se dépasser et donner le
        meilleur de soi.{" "}
        <button onClick={() => setAction(1)} className={action ? "hide" : ""}>
          more
        </button>
      </p>
      <div className={action ? "show more-block" : "more-block"}>
        <p>
          Donner tout, s'investir complètement afin de créer en se réinventant.
        </p>
        <p>
          Il n'est pas toujours évident de définir exactement ce qu'est Reeborn,
          mais pour beaucoup, il s’agit d’un corps étranger s'intégrant dans un
          organisme dit entreprise afin de le faire évoluer et de le développer.
        </p>
        <p>
          Après plusieurs années de forte croissance, certains dirigeants
          n’évoluent plus comme ils le souhaiteraient, bloqué, ne sachant plus
          dans quelle direction aller.
        </p>
        <p>
          Reeborn est pour beaucoup la solution leur permettant de se détacher
          un peu du projet afin d'avoir une vision d'ensemble, en allant
          ensemble dans une direction commune jusqu’à maintenant inatteignable.
        </p>
        <p>
          Il n'y a rien de magique, une conviction certaine dans les projets sur
          lesquels on choisit de travailler, une connaissance du marché mais
          surtout un regard extérieur ouvrant la porte à de nouvelles
          possibilités.
        </p>
        <p>
          Ce corps étranger se déplace à son gré, choisi ses évolutions afin
          d'être sûr de pouvoir se développer. Cette sélection fait aussi partie
          de cette force croisant valeur et engagement d'avoir pour seul
          objectif de toujours dépasser les attentes de son hôte.
        </p>
        <p>
          Seul, vous irez probablement loin avec une bonne vision des affaires
          car certains d'entre vous ne serons pas compatible à ce corps
          étranger. Mais ensemble, l’évolution sera d'un tout autre niveau.
        </p>
        <p>
          Notre impact ne se limitant pas au monde des affaires, les
          répercussions sur votre culture d'entreprise seront similaires aux
          ondes sur l'eau d'un lac après un ricochet. Mais dans notre cas, nous
          diront ondes... positives.
        </p>
        <p>
          Une expérience, sans limite pour votre entreprise, car après tout une
          révolution ne se mène jamais seul.
        </p>
      </div>
      <div className="names">
        <h6>Jean Theroux & Sofiane Guizani</h6>
      </div>
    </Container>
  )
}

export default Body

const Container = styled.div`
  font-family: "Nunito", sans-serif !important;
  max-width: 580px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-left: 7em;
  padding-top: 18em;
  padding-bottom: 2em;
  padding-right: 15px;
  h1 {
    font-size: 42px;
    font-family: "Nunito", sans-serif;
    font-weight: 500;
    color: #084794;
    margin-bottom: 1em;
  }
  .bold {
    font-weight: 800;
  }
  button {
    cursor: pointer;
    background: transparent;
    color: #0a56b4;
    border: none;
    font-size: 15px;
    font-weight: 500;
    outline: none;
  }
  p {
    color: #081929;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5em;
    margin: 0.25em 0;
    text-align: justify;
  }
  h5 {
    color: #6b6567;
    font-size: 16px;
    font-weight: 500;
  }
  h6 {
    color: #081929;
    font-size: 16px;
    font-weight: 600;
    margin-top: 3em;
  }
  .names {
    margin-top: 8em;
  }
  .more-block {
    max-height: 0;
    transition: max-height 1.2s ease-in-out;
    overflow: hidden;
  }
  .show {
    max-height: 2000px;
  }
  .hide {
    display: none;
  }
  @media only screen and (max-width: 1500px) {
    margin-left: 3.5em;
    max-width: 550px;
  }
  @media only screen and (max-width: 740px) {
    margin: auto;
    padding-left: 15px;
    padding-right: 15px;
    h1 {
      font-size: 36px;
    }
  }
`
