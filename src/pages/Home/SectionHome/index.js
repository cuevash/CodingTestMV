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

// COMPONENTS
import PhoneListContainer from 'components/PhoneListContainer'

// ALL
import phoneDat from 'mock/phoneDat'

const SectionHome = (props) => {
  return (
    <Bs.Box>
      <PhoneListContainer phoneList={phoneDat}/>
    </Bs.Box>
  )
}


export default withTheme( SectionHome )