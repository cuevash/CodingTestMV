// REACT
import React, { Component } from 'react'

// STYLES 
import { withTheme } from 'emotion-theming';

// LIBS
import { DataFrame as DataFram } from 'dataframe-js';
import { getPublicUrl }  from 'util/url-utils'
import getAssetSrc  from 'util/getAssetSrc'
import { connect } from 'react-redux'

// COMPONENTS
import {Box, Text} from 'styles/base'
import BarHighChart from 'components/BarHighChart'
import Loading from 'components/Loading'

// DATA
import dataFile from 'data/out/data.csv'


import { withRouter } from 'react-router-dom'
//import TestChart from 'components/TestChart'
import Papa from 'papaparse'

import axios from 'axios'

// import img_1_i from 'media/gdelt-screenshot-blog-crop.1.png'
// import img_2_i from 'media/gdelt-screenshot-blog-crop.2.png'
// import img_3_i from 'media/gdelt-screenshot-blog-crop.3.png'
// import img_4_i from 'media/gdelt-screenshot-blog-crop.4.png'
// import img_5_i from 'media/gdelt-screenshot-blog-crop.5.png'
// import img_6_i from 'media/gdelt-screenshot-blog-crop.6.png'
// import img_7_i from 'media/gdelt-screenshot-blog-crop.7.png'
// import img_8_i from 'media/gdelt-screenshot-blog-crop.8.png'
// import img_9_i from 'media/gdelt-screenshot-blog-crop.9.png'
// import img_10_i from 'media/gdelt-screenshot-blog-crop.10.png'
// import img_11_i from 'media/gdelt-screenshot-blog-crop.11.png'
// import img_12_i from 'media/gdelt-screenshot-blog-crop.12.png'
// import img_13_i from 'media/gdelt-screenshot-blog-crop.13.png'
// import img_14_i from 'media/gdelt-screenshot-blog-crop.14.png'
// import img_15_i from 'media/gdelt-screenshot-blog-crop.15.png'
// import img_16_i from 'media/gdelt-screenshot-blog-crop.16.png'
// import img_17_i from 'media/gdelt-screenshot-blog-crop.17.png'
// import img_18_i from 'media/gdelt-screenshot-blog-crop.18.png'
// import img_19_i from 'media/gdelt-screenshot-blog-crop.19.png'
// import img_20_i from 'media/gdelt-screenshot-blog-crop.20.png'
// import img_21_i from 'media/gdelt-screenshot-blog-crop.21.png'
// import img_22_i from 'media/gdelt-screenshot-blog-crop.22.png'
// import img_23_i from 'media/gdelt-screenshot-blog-crop.23.png'
// import img_24_i from 'media/gdelt-screenshot-blog-crop.24.png'
// import img_25_i from 'media/gdelt-screenshot-blog-crop.25.png'
// import img_26_i from 'media/gdelt-screenshot-blog-crop.26.png'
// import img_27_i from 'media/gdelt-screenshot-blog-crop.27.png'
// import img_28_i from 'media/gdelt-screenshot-blog-crop.28.png'
// import img_29_i from 'media/gdelt-screenshot-blog-crop.29.png'
// import img_30_i from 'media/gdelt-screenshot-blog-crop.30.png'

import DataLoader from 'components/DataLoader'

// DATA
import datafile from 'data/out/data.csv'

// const img_11 = getAssetSrc(img_11_i)
// const img_12 = getAssetSrc(img_12_i)
// const img_13 = getAssetSrc(img_13_i)
// const img_14 = getAssetSrc(img_14_i)
// const img_15 = getAssetSrc(img_15_i)
// const img_16 = getAssetSrc(img_16_i)
// const img_17 = getAssetSrc(img_17_i)
// const img_18 = getAssetSrc(img_18_i)
// const img_19 = getAssetSrc(img_19_i)
// const img_20 = getAssetSrc(img_20_i)
// const img_21 = getAssetSrc(img_21_i)
// const img_22 = getAssetSrc(img_22_i)
// const img_23 = getAssetSrc(img_23_i)
// const img_24 = getAssetSrc(img_24_i)
// const img_25 = getAssetSrc(img_25_i)
// const img_26 = getAssetSrc(img_26_i)
// const img_27 = getAssetSrc(img_27_i)
// const img_28 = getAssetSrc(img_28_i)
// const img_29 = getAssetSrc(img_29_i)
// const img_30 = getAssetSrc(img_30_i)

// tslint:disable:no-console
// console.log("img_25", img_25)


// // Performing a GET request
// console.log("ennnnnnnn", process.env.NODE_ENV)
// if (process.env.NODE_ENV === 'development') {
//   axios.get(
//     'https://schibsted-motor-dev.singularfact.com/' + 'index.bis.html',
//     {
//       responseType: 'document', // default
//     } )
//   .then(function(response){
//     console.log("daattttttt", response.data); // ex.: { user: 'Your User'}
//     console.log(response.status); // ex.: 200
//     let eles = response.data.querySelectorAll(
//       '[data="/static/media/gdelt-screenshot-blog-crop.4.38a1d894.png"] > source')
//     console.log("docs", eles)
//     console.log("jjjjj", eles[0].getAttribute("srcset"))
//   });  
// }




console.log("fagsfagsf", datafile)

let dat = null

// Papa.parse(datafile, {
//   download: true,
//   delimiter: ";",
//   header: true,
//   complete: function(res) {
//       console.log("asdasds", res);
//       dat =  res
//   }
// });


// console.log("igmmmm", img_29)


const SurveyDataLoader = connect(
  (state) => ({
    datLoading: state.surveyData
  })
)(DataLoader)


class SectionHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  componentWillMount() {

    // axios
    // .get(dataFile, {
    //   responseType: 'text'
    // })
    // .then( resp => {
    //   console.log("Donekkkkk", resp)
    //   return resp
    // }).then ( resp => {
    //   console.log("dasdasdasd", resp)
    //   DataFram.fromDSV( resp.data, ';', true )
    // }).then( df => {
    //   console.log("DataframeLoaded", df)
    // })

    // new Promise( (resolve, reject) => {
    //   // do a thing, possibly async, then…
    
    //   // To Json
    //   Papa.parse(dataFile, {
    //     delimiter: ";",
    //     header: true,
    //     download: true,
    //     complete: function (data) {
    //       console.log("DataframeLoaded", data)
    //       // transformCSV(results, 'output')
    //       resolve({
    //         data
    //       });
    //     }
    //   });
    // });



      // DataFram.fromDSV( `${getPublicUrl()}${dataFile}`, ';', true ).then(df => {
      //   console.log("DataframeLoaded", df)
      //   df.show()
      //   this.setState({
      //     data: df
      //   })
      // }).catch( err => {
      //   console.log("Dataframe", err)
      // })

  }

  render() {
    console.log("proppppppp", this.props)

    if (true) {
      return (
        <Box>
          
          {this.state.data ? <div>DONE!!!</div> : ""}

          <SurveyDataLoader>
            <div color='red'>
              TEST!===
              <div>
                rejoo
                <div>
                  yaya
                </div>
              </div>
            </div>
          </SurveyDataLoader>

{/*           <img alt="hhhh" src={img_11}/>
          <img alt="hhhh" src={img_12}/>
          <img alt="hhhh" src={img_13}/>
          <img alt="hhhh" src={img_14}/>
          <img alt="hhhh" src={img_15}/>
          <img alt="hhhh" src={img_16}/>
          <img alt="hhhh" src={img_17}/>
          <img alt="hhhh" src={img_18}/>
          <img alt="hhhh" src={img_19}/>
          <img alt="hhhh" src={img_20}/> */}

          {/* <img alt="hhhh" src={img_21}/>
          <img alt="hhhh" src={img_22}/>
          <img alt="hhhh" src={img_23}/>
          <img alt="hhhh" src={img_24}/>
          <img alt="hhhh" src={img_25}/>
          <img alt="hhhh" src={img_26}/>
          <img alt="hhhh" src={img_27}/>
          <img alt="hhhh" src={img_28}/>
          <img alt="hhhh" src={img_29}/>
          <img alt="hhhh" src={img_30}/>           */}
          <BarHighChart
            w={1 / 2}
            css={{
              height: '300',
            }} />

            <BarHighChart
            w={1 / 2}
            css={{
              height: '300',
            }} />


          <BarHighChart
            w={1 / 2}
            css={{
              height: '300',
            }} />

          <BarHighChart
            w={1 / 2}
            css={{
              height: '300',
            }} />                                             

        </Box>

      )
    } else {
      return <Loading />
    }
  }
}

const SectionHomeWithData = connect(
  (state) => ({
    surveyData: state.surveyData
  })
)(SectionHome)

export default withTheme( withRouter( SectionHomeWithData ) )