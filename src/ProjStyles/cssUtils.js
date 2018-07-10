const stdScreenWidth = 1920

const stdPxRem = ( nRem ) => ( nRem * 16 )

// const RatioVertDsgScr = (780/1080)
// const RatioHoriDsgScr = (1400/1920)

// Calc px for the width , by default calculates for a standard witdh of 1920
// must be synchronized with size in global.js file
const calcPxForRem = ( nRem, width = stdScreenWidth ) => (
  ((0.833 * width) / 100 ) + 1 * stdPxRem( nRem )
)

// tslint:disable:no-console
console.log("1 Rem for 1920 is = ", calcPxForRem(1))
console.log("1 Rem for 1920 is = ", calcPxForRem(3.71))

// const calcVertGblPxToRemNum = (nx) => (
//   (nx * RatioVertDsgScr) / calcPxForRem( 1 )
// )

const calcVertGblPxToRem = (nx) => (
  `${nx / calcPxForRem( 1 )}rem`
)

const calcHoriGblPxToRemNum = (nx) => (
  nx / calcPxForRem( 1 )
)

const calcHoriGblPxToRem = (nx) => (
  `${nx / calcPxForRem( 1 )}rem`
)

const calcGblPxToRemNum = (nx) => (
  nx / calcPxForRem( 1 )
)

const calcGblPxToRem = (nx) => {
  if (nx instanceof Array) {
    return nx.map( ele => (calcGblPxToRem(ele)) )
  } else {
    return `${nx / calcPxForRem( 1 )}rem`
  }
}

export { calcVertGblPxToRem, calcPxForRem, calcHoriGblPxToRem, calcGblPxToRemNum, calcGblPxToRem }