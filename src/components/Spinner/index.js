// REACT
import React from 'react';

// STYLES 
import { withTheme } from 'emotion-theming';
import * as Bs from 'styles/base/'

// ALL
import { BounceLoader } from 'react-spinners';

const Spinner = ({ theme, loading, ...rProps }) => (
  <Bs.Flex
    justify='center'
    align='center'>
    <BounceLoader
      color={theme.colors.orangeDark2}
      loading={loading}
    />
  </Bs.Flex>
)

export default  withTheme( Spinner )
