// REACT
import React, { Component } from 'react'

// STYLES 
import { withTheme } from 'emotion-theming';
import styled, { css } from 'react-emotion'
import * as Ps from 'ProjStyles/'
import * as Bs from 'styles/base';
import * as Rb from 'rebass';
import * as CssUtils from 'ProjStyles/cssUtils';


const Footer = ({theme, ...rProps}) => {

  return (
    <footer>
      <Bs.Flex
        w={1}
        justifyContent='center'
        bg={theme.colors.orangeDark2}
        f='medium'
        px={['0.85em', '1.5em', '2.6em', '2.6em', '2.6em', '2.6em']} 
        py='2em' >

        {/* Copyright */}
        <Bs.Box
          f={['small', 'medium']}
          fontWeight='bold'>
          <Bs.Text
            display='inline'
            color={theme.colors.white}>
            Acme React services, copyright © 2018
          </Bs.Text>
        </Bs.Box>

      </Bs.Flex>
    </footer>
  )
}

export default withTheme( Footer )




