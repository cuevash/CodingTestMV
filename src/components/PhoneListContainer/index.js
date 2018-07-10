// REACT
import React, { Component } from 'react';

// STYLES 
import { withTheme } from 'emotion-theming';
import styled, { css } from 'react-emotion'
import * as Ps from 'ProjStyles/'
import * as Bs from 'styles/base/'
import * as CssUtils from 'ProjStyles/cssUtils';

class PhoneListContainer extends Component {

  componentDidUpdate(prevProps) {
  }

  render() {
    const {phoneList, theme, ...rProps} = this.props

    return (
      <Bs.Box>
        {phoneList.map( phone => (
          <Bs.Box>
            {phone.title}
          </Bs.Box>
        ))}
      </Bs.Box>
    )
  }
}

export default  withTheme( PhoneListContainer)