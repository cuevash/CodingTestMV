import { injectGlobal } from 'emotion'

// Fluid/Liquid layout with breakpoints

injectGlobal`
  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
  }

  /* 1em(16px) @ 36em(576px) increasing to 1.125em(18px) @ 48em(768px) */
  @media (min-width: 36em) {
    :root {
      font-size: calc(1rem + ((1vw - 0.36em) * 1.0417));
      /* Where: * 1.0417 = 100 * font_Size_Difference / viewport_Width_Difference */
    }
  }

  /* 1.125em(18px) @ 48em(768px) increasing to 1.25em(20px) @ 64em(1024px) */
@media (min-width: 48em) {
  :root {
    font-size: calc(1.125rem + ((1vw - 0.48em) * 0.7813));
    /* Where: * 0.7813 = 100 * font_Size_Difference / viewport_Width_Difference */
  }
}

/* 1.25em(20px) @ 64em(1024px) increasing to 1.375em(22px) @ 85.375em(1366px) */
@media (min-width: 64em) {
  :root {
    font-size: calc(1.25rem + ((1vw - 0.64em) * 0.5848));
    /* Where: * 0.5848 = 100 * font_Size_Difference / viewport_Width_Difference */
  }
}

  /* 1.375em(22px) @ 85.375em(1366px) increasing to 1.625em(26px) @ 113.75em(1820px) */
@media (min-width: 85.375em) {
  :root {
    font-size: calc(1.375rem + ((1vw - 0.85375em) * 0.8811));
    /* Where: * 0.8811 = 100 * font_Size_Difference / viewport_Width_Difference */
  }
}

/* 1.625em(26px) @ 113.75em(1820px) increasing to 1.875em(30px) @ 120em(1920px) */
@media (min-width: 113.75em) {
  :root {
    font-size: calc(1.625rem + ((1vw - 1.1375em) * 4));
    /* Where: * 4 = 100 * font_Size_Difference / viewport_Width_Difference */
  }
}
/* Prevent font scaling beyond this breakpoint */
@media (min-width: 120em) {
  :root {
    font-size: 1.875em;
  }
}

`   