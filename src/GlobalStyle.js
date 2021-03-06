import React, { Component }  from 'react'
import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  html, body {
    font-family: 'Open Sans', sans-serif;
    height: 100%;
    margin: 0;
  }

  #root {
    display: flex;
    min-height: 100vh;
    flex-direction: column;    
  }
`