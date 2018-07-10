// REACT
import React, { Component } from 'react'

// STYLES 
import { withTheme } from 'emotion-theming';

// LIBS


// COMPONENTS

// DATA


import { withRouter } from 'react-router-dom'

class SectionHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  componentWillMount() {

  }

  render() {

    return ""
  }
}

export default withTheme( withRouter( SectionHome ) )