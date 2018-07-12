// REACT
import React, { Component } from 'react'
import { connect } from 'react-redux';

// STYLES
import { withTheme } from "emotion-theming";
import * as Bs from "styles/base";

// ALL
import PhoneListContainer from 'components/PhoneListContainer'
import Spinner from 'components/Spinner'
import { Status } from 'rdx/phoneList'

class SectionHome extends Component {

  render() {
    const { phoneListDat, theme, ...rProps } = this.props

    let Comp = null

    switch (phoneListDat.status) {
      case Status.LOADING:
        Comp = Spinner
      break;
  
      case Status.ERROR:
        Comp = (props) => (
          <Bs.Text
            f='medium'>
            {`Error: ${phoneListDat.errorTxt}`}
          </Bs.Text>
        )
      break;      
  
      case Status.LOADED:
        Comp = (props) => <PhoneListContainer phoneList={phoneListDat.dat}/>
      break;      
    
      default:
        throw new Error('No status value');
    }

    return (
      <Comp/>
    )
  }
}

const mapStateToProps = (state) => ({
  phoneListDat: state.phoneList
})

const SectionHomeRdxContd = connect(
  mapStateToProps
)(SectionHome);


export default withTheme( SectionHomeRdxContd )