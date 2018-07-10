// REACT
import React, { Component } from 'react'

// STYLES 
import { withTheme } from 'emotion-theming';
import styled, { css } from 'react-emotion'
import * as Ps from 'ProjStyles/'
import * as Bs from 'styles/base';
import * as Rb from 'rebass';
import * as CssUtils from 'ProjStyles/cssUtils';


const Footer = (props) => {

  return (
    <footer>
      <Bs.Flex>
        FOOTER
    </Bs.Flex>
    </footer>
  )
}

export default withTheme( Footer )




