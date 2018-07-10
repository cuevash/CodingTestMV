// REACT
import React, { Component } from 'react'

// STYLES 
import { withTheme } from 'emotion-theming';
import styled, { css } from 'react-emotion'
import * as Ps from 'ProjStyles/'
import * as Bs from 'styles/base';
import * as Rb from 'rebass';
import * as CssUtils from 'ProjStyles/cssUtils';


const Top = ({theme, ...rProps}) => {
  return (
    <header>
      <Bs.Flex
        w={1}
        bg={theme.colors.greyDark}
        f='medium'
        px={['0.85em', '1.5em', '2.6em', '2.6em', '2.6em', '2.6em']} >

        <Ps.TextAsH1
          color={theme.colors.orangeDark1}>
          TOP
        </Ps.TextAsH1>

      </Bs.Flex>
    </header>
  )
}

export default withTheme( Top )




