import React, { Component } from 'react'
import ReactDOM             from 'react-dom'

import styled               from 'styled-components'


import SectionCursor       from 'box/nav/cursor/web/section/SectionCursor'
import GlobalStyle         from './GlobalStyle'


const Page = styled.div``

const App = () => (
  <Page>
    <GlobalStyle />
    <SectionCursor />
  </Page>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
