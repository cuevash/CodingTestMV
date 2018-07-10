// REACT
import React from "react";

// STYLES
import { withTheme } from "emotion-theming";
import styled, { css } from "react-emotion";
import * as Ps from "ProjStyles/";
import * as Bs from "styles/base";
import * as CssUtils from "ProjStyles/cssUtils";
import * as chroma from "chroma-js";

// ALL
import Footer from "sections/Footer"
import Top from "sections/Footer"

const PageStd = ({ children, ...rProps }) => {
  return (
    <Bs.Box>
      <Top />
      {children}
      <Footer />
    </Bs.Box>
  )
}


export default withTheme( PageStd )
