import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
        <ItemText>
        <h1>Model S</h1>

        </ItemText>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: orange;

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
