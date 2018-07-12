// REACT
import React from 'react'

// STYLES 
import { withTheme } from 'emotion-theming';
import * as Bs from 'styles/base';

const Top = ({theme, ...rProps}) => {
  return (
    <header>
      <Bs.Flex
        w={1}
        bg={theme.colors.greyDark}
        f='medium'
        px={['0.85em', '1.5em', '2.6em', '2.6em', '2.6em', '2.6em']} 
        py='1em' >

        <Bs.LinkReactR to={`/`}>

          {/* Company Name */}
          <Bs.Box
            f={['medium', 'big']}
            fontWeight='bold'>

            <Bs.Span
              color={theme.colors.orangeDark1}>
                Acme
            </Bs.Span>

            <Bs.Span
              color={theme.colors.white}>
                {' '}Company
            </Bs.Span>

          </Bs.Box>

        </Bs.LinkReactR>

      </Bs.Flex>
    </header>
  )
}

export default withTheme( Top )




