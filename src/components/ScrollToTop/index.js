// @flow

//
// IMPORTS
//

// React
import { Component } from 'react';
import { withRouter } from 'react-router-dom'

// Styles
import { withTheme } from 'glamorous'
import * as glamor from 'glamor'
import { createElement } from 'glamor/react'
/* @jsx createElement */


class ScrollToTop extends Component {

  componentDidMount() {
    const loc = this.props.location

    // Only force to top if it is not an link with anchor 
    if (!loc.hash) {

      window.scrollTo(0, 0)  
    } else {
      // To anchor
      const eleWithHash = window.document.getElementById(loc.hash.substring(1));
      if (eleWithHash) {
        eleWithHash.scrollIntoView()
      }

      //Account for the fixed header
      window.scrollBy(0, -(this.props.theme.topHeightNum + 20));
    }
  }


  componentDidUpdate(prevProps) {
    const loc = this.props.location

      // Only force to top if it is not an link with anchor and there is
      // a change on the page.
    if ((loc !== prevProps.location) && !loc.hash) {

      window.scrollTo(0, 0)  
    } else {
      const eleWithHash = window.document.getElementById(loc.hash.substring(1));
      if (eleWithHash) {
        eleWithHash.scrollIntoView()
      }

      //Account for the fixed header
      window.scrollBy(0, -(this.props.theme.topHeightNum + 20));
    }
  }

  render() {
    return this.props.children
  }
}

export default  withRouter(withTheme( ScrollToTop))