import React from "react";
import { withTheme } from 'emotion-theming';
import * as Bs from 'styles/base';

export const TextAsH1 = Bs.Text.withComponent('h1')

export const Title1 = withTheme( ({ theme, className, ...props }) => {
  return (
    <TextAsH1
      align='center'
      className={className}
      fontFamily={theme.altMainFont}
      fontSize={['huge','huge','huge','huge','huge','hugePlus']}
      lineHeight='0.92em'
      pt='0.24em'
      pb='0.5em'
      // my={CssUtils.calcVertGblPxToRem(58)}
      {...props} />
  )
} )

