// REACT
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// STYLES
import { withTheme } from "emotion-theming";
import styled, { css } from "react-emotion";
import * as Ps from "ProjStyles/";
import * as Bs from "styles/base";
import * as CssUtils from "ProjStyles/cssUtils";
import * as chroma from "chroma-js";

const SectionHome = (props) => {
  return (
    <Bs.Text>
      Section Home
      </Bs.Text>
  )
}


export default withTheme( SectionHome )