// REACT
import React from "react";

// STYLES
import { withTheme } from "emotion-theming";
import * as Bs from "styles/base";

// ALL
import Footer from "sections/Footer"
import Top from "sections/Top"

const PageStd = ({ children, ...rProps }) => {
  return (
    <Bs.Flex
      flexDirection='column'
      w={1} 
      minHeight='100vh'> {/* Min height the window height */}

      <Top/>  
      {children}
      <Footer/>

    </Bs.Flex>
  )
}

export default withTheme( PageStd )
