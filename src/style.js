import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  @font-face {font-family: "iconfont";
    src: url('./statics/font/iconfont.eot?t=1562341965053'); /* IE9 */
    src: url('./statics/font/iconfont.eot?t=1562341965053#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAATAAAsAAAAACWAAAARxAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqGJIUsATYCJAMQCwoABCAFhG0HQBsWCMgOJc3AwAAAAAZABPVrnz27b+EIHZJiKH/qFGDCLhY9kbPxiVARho34Vzl1TwoQKMgvIDAUyHFOjswjK8BWEApyioxPoF/7wqU1tQWSFRLj6urNX4FYAYCqAiGrgG2FIhoACDUhuxktt4hncaHShJy4mUCzQbHQUVGFCKwkbF0gHjMKGVhlDFJDbqiFsuLEBPEeCnU2StwD8M7+ffyH5LACmSIHtvX4bmEj5Pzy+FxLGv8b4VTjQAhnw+w0cswDibhf6bhG+vA8UvMm2cwKUHNbBtQY+lz7/z8VXYuipv/yyGWCKIEpWgl5SZe7Y0LJJecP4pLxp1b0BBSJHF+jG0QB4gxsHpkWRZezrT2TO4or2zgF29m0is4/h2fPREgkRi9fSvkXEkmaYnxeK73wYvko0H2Z27Zjzdqd292RCK3cNbYHIX7v+G53CVpZleyZYNq5fbVbgpqtnlLTSjZHpo3t4ffa2o7vNu6yQTKhp9VdvKrUu81DiuzS7TvXekiEHdvm3JEURAGABinCChHWSpGlz63eXmZau2aHGxIjGIUN5Lz2ehPvQYvwqvGOs8SM3LTB9A5ewMKYW0bWxZfoxQtJ+aWePxePv8zOzFhpdMe7x2Oy9/LRHZ1QGap51IsX7RkrxzxoKV5l/H1u/vz3CYZcYvjYsWEip5cdlXPe7M8fs/ML8zf/7svU/+/0E+BbtHr+BuGzcr2gglslYD8WEOzo5Rjsn+zw1AGefp3sUK/rFNYr1ecXw40dr5QnCyKuC5+ZmxNboH3BP8VB5Rjcel7BEzjJfBFuGPJvmCnuH6HmVefOKaUK7e0SpphFcKcEHMb8U+y3OGx0TzpAERxqQTNtWPgz4FXNyfbPO45P1IyRBCXfwWHx8N4tDskB+kNgk74hcZakpS5enJqGncNIRkKwLBJb7XHaY4UKFy0qQuEizruXnSlwEqF76+O4PGL5lcuzJMeIllw+feDlK8uJPC7u9T2nQqeC6JiglCDknOKS0edL8vv28UpKEjvBExFRDL8qbfYltPS0+Pnn5fn7KdyAAmhcJC+Ruf+sZX5cs/uz1DHjl5XtS9vys3BFpa1oGM0gfwn+HsLOwv+RsGNN2oqZMaW1RAp20eQDtLz5Npq5mX9PnG4fIFx9INpCPRdiyFQGIFcbxyfyPBRaLEGptgvN5hSf3qIHixTJGpg1iCB0OgiZdt8g1+k+PpHfQ6HfDyh1BgnNTsL1gi0mg7HJZ7GMw41UQzvFyHVaWpg5G5dbhxXNahmbii1DglkD46OS4hPzsWKsxSzEDkOLIpnjaIpmdRqqCN0Oq9U6Ss/qlFjOxTdxnD4tIYGu+qZ4uU4DNg6xMBkO1ojSoB2FIaejRevmHJvC79fBFJqpybANVTe8EhjLgJmckiReYgd8sULbqeq5zDZooZCMw6HpKhpLR4NShG2Ymod1KPrqRUqYHCde04CgXpoE0ojuqog/vkrzCvdAM/bUFAQikRkyh/REz2gtlIysQ8ZYGLCMlTcBAAAAAA==') format('woff2'),
    url('./statics/font/iconfont.woff?t=1562341965053') format('woff'),
    url('./statics/font/iconfont.ttf?t=1562341965053') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./statics/font/iconfont.svg?t=1562341965053#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-spin:before {
    content: "\e851";
  }

  .icon-jiazai:before {
    content: "\e801";
  }
  
  .icon-search:before {
    content: "\e616";
  }
`
export default GlobalStyle;