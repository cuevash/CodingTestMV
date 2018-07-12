// REACT
import React from 'react'

// STYLES 
import { withTheme } from 'emotion-theming';
import * as Bs from 'styles/base';

const Footer = ({theme, ...rProps}) => {

  return (
    <footer>
      <Bs.Flex
        w={1}
        justifyContent='center'
        bg={theme.colors.orangeDark2}
        f='medium'
        px={['0.85em', '1.5em', '2.6em']} 
        py='2em' >

        {/* Copyright */}
        <Bs.Box
          f={['small', 'medium']}
          fontWeight='100'>

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




