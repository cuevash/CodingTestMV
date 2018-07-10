// REACT
import React, { Component } from 'react'

// STYLES 
import { withTheme } from 'emotion-theming';
import styled, { css } from 'react-emotion'
import * as Ps from 'ProjStyles/'
import * as Bs from 'styles/base';
import * as Rb from 'rebass';
import * as CssUtils from 'ProjStyles/cssUtils';

// LIBS
import * as R from 'ramda'
import _ from 'lodash'
import { withProps } from 'recompose';
import getAssetSrc from 'util/getAssetSrc'

const Top = (props) => {
  const { className, menuDat, menuIdx, visible = true, theme, ...rProps } = props

  return (
    <Bs.Flex>
      FOOTER
    </Bs.Flex>
  )
}

export default withTheme( Top )




