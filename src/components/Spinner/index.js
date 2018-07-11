// REACT
import React, { Component } from 'react';

// STYLES 
import { withTheme } from 'emotion-theming';
import styled, { css } from 'react-emotion'
import * as Ps from 'ProjStyles/'
import * as Bs from 'styles/base/'
import * as CssUtils from 'ProjStyles/cssUtils';

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
