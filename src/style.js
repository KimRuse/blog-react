import { createGlobalStyle } from 'styled-components';
import main from './statics/main-bg.png'

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
    background: url(${main}) #deffa1;
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
    src: url('/statics/font/iconfont.eot?t=1562910758629'); /* IE9 */
    src: url('/statics/font/iconfont.eot?t=1562910758629#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAABBIAAsAAAAAHbAAAA/4AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCEeAqrYKIfATYCJAM4Cx4ABCAFhG0HgTsbCBijooaTVphkf5lgAxnqKmR/EVbOEOJWt1xbOxCutvlFelJ/stXlML7q3tK9BE+Gh36en9uf+2rxtsfIGtUbRm/QJhU2ONoi7WFRPbqtGEZiFWIUvxC7Podzec/kM1RE4PNt0l4hV3zUc3pKTci9cKMQbrd+SCkEjImOgDj1MzmxYCxiodju8G5qrSS9GiyUHeaxPd9vWky7Z3DnzEyX1DTpijtyJgK/zK9CWk98TQR599fcp0V2oHCP3QlFVuzb5MMGbv4eb45xDwoEkkioCpX8YnII6tKy7BeuV1UjKkW1q63XtRhuO7CClGkzwflGxPoAAeAysiDRXD18QB5BKAgHnNDgkB+qQ0xJR9g1lGfeGNAFiR3mPFcBFLmfj/7wTh4AQ0Yg3un3Xepw8uMfkp9roQ0j03EAKL0DAAdgD4AACLK3ZVBdau9Uru/wVQPAQJ3/Lniv1Ghdx2rmnNHS5/7Pj46hsddXKz7cgSnnJu4PMZD/zQMg8fBhCGxcOBYKwkEDlAJUHo/uG+WD0UiXARKMZiSifrSA1NAqMMCg1WBAQGvBgA3tijLABc9nDHCnPVEGWGAsYEBBm6EMIPDqUAY44IMBNKEydh4DAGsAawnAvoEe7TiGrUUchUZ2hykTpK6bzly1kBfOXB1OQYvX4TZ0tOmFF/SmTKH5iaKitsmb3PxWZ+vTbS+95PL88zr60rZXl708kGtCGCMDPIcz6ivzkUmoWGmUL1erphr4N/NcrESRCUwLpKnjJbY9OMWNdznnk+pGlPF5f+nH1mcXvI+znwnCXP11523s7OesY5vZheYy50+/G1r73MGT/mKboyEljq3cO0uSPy54y23TOkdsQapuxa95P6noQtqVJPZyIOKwG+kKqFh7PhyBYMD7i6K/1KNR/8cVd+CTKsl9Vk/bwMjj+a8ff+w9IY/ch3O//qRwPftpzZu88IKPqQud4UfzlKBK6hmguePTK62NLyYVKk2tO8LanwMr+G4iWQxU4IiHSKVSoXrR4mTUrrz0oQroZdpmFZOFUpgvFyEwAV1nCwAy66QKbUB9Ip4hysVAH4DpAnZEMZCADTPqmraJXaoN+IzrhRYLZAE5wGLFch7ZvFSQEDgkqkJY5wCoJkQHmFQGxblNz4clHViARlUptb92lbRDl2WKMmTXtulUn8oY0KEvaSANnXIRqgIhXuA8X4QijwDHvCSpLHGEMoYp6sfKGAsIRTkoejJgktJaWCoc5aVPZFTZW5GI78c8QfR0p8FvHy31budJRmQy3sTMYh6zfZDdKGK2B8UiZEFPH4HBuE7PKkxKeryk0yEsTkC2aJFIrQzoHQoBG3b8MOQywCnvkgVegwsjiE8CL0V8BCw6FUPlryRdcj6xr0ZrjydmFFnx/xvZuSGON9iVd91O3o2iDpI6GikGRVLOlzXt8JO2xvOhSz3aXzPCw+aG4Udf7fQ6pWFXjeqNXv39w2AoDXzf9YGf/ErGyMkmNTw9bjRm1spw4kikEOprHubVvtZI3avVH6+4Vavvyldvm/ZqY7ltz8jh5Z1zcGtbZkmuy1lnCpxuuRFDhgVf/ckmZZCZQpig/UfwmZ7iORiYwAmMoHUjrCFUKnEBxN4YkjBYx+Im9dMC4oZy7fL840tptIpZRHD0OMX4QAxPRTplTOB8slktRYOVeBtzlkHFmesOFh7nuhyH7A2ilWdgMWqE8z1QT7bz23OvzlT2xhYTJPZJgo8sOHEM3ot0XULG8JGzlro8WgO8Aln1TbHKnI+0GXuqj+3T3iB3ciLUowTVjJP7qLrBuXp6Eme5IONFLOine6cOL2K3HILFkVbg7c8ijrGYnM5vr6U7ABbDq0N6F8vuAAZ7sYu33rGcNZkVjjM9i1Z0zUZtrcbibKe91iKbwRM72UIoilik665ZzNN1JUH3SxHQ+cYidmiQuswk+ImXBeevN0Usjg2weGmOlbxOcJpOP5x00wCLeBaLTVoOYp64g8+05fcjHukYNMmFNLK5hNVb76lu9XgafkW/Dqlb2vccY0R43KeWyvzRbnXNc85zrc6yfuVdnwOQKQhTFJeafOCP9pN0RwhYQUBFdptNvIp3hZ1AXaZpecJiT0JNiJAd/PX0K898HkXq9fuGE1SP1UEjHX49me4Epy4uR+DVentPPwZeuuHErWlmeF1ayKoBtLC4dAuahpKeDHWILrwypPmu54V7Zi3DXtzo58UxNAwNRZwbMpnYikLRM0SQD90c4uK1OqBjx1bnDt8e9uuA0KBRy3AUN/dQT4Me3nhnEp1XAZi8PKLtmA5WfdyCxlfwchUIz6yk6dDaK+eP6wKdd7S/Xies6shyfl6ldmStbY8ld2etWNHT0aYRVK7x61h4+BOnZCmWdeBAFibZIn5Icpz4/Zs4Hune/Gvr0OXjUWYwI8rpcrIyNuHKNb36upR/3TOcxR5MN+P5vyzDd24Qv5vx0Janj+9tNeMRMF2tu9fNrbtHNWXHw/ThHVTgVMNDQf4B70PfqwSrBAQEew/ZomXyzKVIZmzJxJZha2KRnO8V43Xw8L4DXIxe4d/4v+079u5xWyi3FV7BhZE4llpXm4olvLYW6wRq68yhzpFC52PCu3fH1aA/SkhA8PsXAb6++zA10GRodYjZ5ajoXt9eNlvpq4yO6jMLYQ1RwqUZjkuF88zmieeJ/EauuLvXV65gsyO2FxWtDDVbfeNGtm42fLvc+rspifXH8Q0rIT6B9cbJmSTNB4OZZsLtaktZzwPWG0d7h4sAtbe9OQwc/DIyJi8rLSaHRlpGzlGr1yydnJblFIB4poVBk0Rgolh9F5PglW1ieINiLL5ekQAXfYBvZiRU0VERGoqYOwxs5AXrE+s2KOrjE48vgsGO+/GHPazOK8biLuS3ACMyFDMJKsLgYB634XDcC8Vgsvtgx0RzFPzIhs7C+ITEcaOiMG4hXPYBxsxQzG9hGuz2elKgg4C4yoaXfkaQ53d43VjHwXy/eQjgcxsY8eI7WxiRkTUB409uSuLbN1wpMcD4cXBCSfT/Csv1UM+OoK5P1VnOL7zMIGwXsfqQn6Ujn87eP2xlPD24O7BMPguLadoWifS3tkFxq5c4rS0jZ+3aX5s01uk5ovF/U3W8LEYfdnjkbn0Qk+3HcdU6+3X39R6hpLZUWrHnzmJ7m/nafqqRaQ5tfmMNroYe7qGQhJy4SpX5S949ChQtGRrRWNHj2bTMZ56XlfrqW5SxSK38wBbGnr/jnrht7pL49wLNQw/8SqmoCSHG00dN1p3+mwUxh2vRas1qzj/vatqcBiMPpPgq6dZ5M6cR1DwLi50NxPO50n69SSA6HY55ey/5f+fC6bOJU4HWUR8lNnGsaDqnBcvklrVqR3MkuKfQjX1qL2uzpZqFR1zDgiLWBG3RWlSbLVtfCs9yR3iMj72WXThDj8iD2QfZwfIRSdURSV3MFo8wqsxBfcSI6n9DqhZrjXsA4+FnQYf9STHKqfFj9I6erzp/VG9kmBo0yXym0bxgHn3GEjLwtgw4rcmS+K38LQP/QuHqBdi3ycZbHXv9zMmdM8821uBqfpXiCjkwIP4cbD+nK2H1JH3PpVfiXcwrMsLfpbh6MW7qJv7EFBdnhwLnVI5r29oo48/3Flter5LZqgnQrrlByQLng6umTQFz3R0lcZ5zr210Ueo6EVKP/f8lA3Ev53DnMnPfwAlMPxXLMRPwfAKgYx5KPoKCXEmfkm3Ebn44G10K4Si1IHSGu/S0QCD10bAxjhFxY5rEH6UWk3Pu4vgdKVL13P9NjpARGa0QlWQ7vUATdbaEi6SlvlNcFk6EtECex/qDZfEjQpB/rus+SVNdhIbGOaEcZUEG+C/apNiKmFwmn0jEFKcS83eyirfqys9l/a3wtFtpMOFLpOX/sHCRw3XkoGqqYV2+1VzOkiw2SWMJpjjKetWyAl6SYpPbYRjOQaooXe2E0UecZMr1fffOMcAK5ni+ZQxSa57qzAwWZGS4l75HezfZeqnjr545e3DmTYnjDeTntD+ilFdFn4PsI7oTMIF0soaJv5uGJz/FVSbSCyt2c41zebxK38t7UgEpDjL3WTbRk6uhiDArFalPKFge1WbGTSP6SaFzmCYyl5m20lObTWW10Vzv8beY7krgJuEinS0TLwVoVbfK9rn7kINb+03eniSdYj6xaNWpStQb4zhZNb0iK1zw1nIOGZJo4GmvuJ11QG5Sa8xX1VPVF+gJrqlnW2Zb6M5MVrVAhtVM2fzQhIf0s1rQVfXJGFlb2d2C++3Ozyplqo2Y8CP0w9UiLax6BDUqNYKe9gRjZlkkHzB5eWwrixNu8S9QMlKHlNFp9rA0wt1PRmpTQwmUdioVM5ROuFEyx2Po9PHnTiOkVBRwH+Q8gLNzH3zkZwdbvGmtwgusZFQBKatZLZGR7pAsK4oFDeZmMWQwJSuIItPJDRoDLE/TSV7H8DRR5pcmka1aH6V2EAAfBAKXyEVIVSpBsmbGFMGjdx42mRnFqcbGwYMNTXOczD2sBhOM9UbVNL9e2Xg7TuQinS5fvdtdatMit3AXoB09PsE1ruy50+Dt9BCUnIxCr10Ldc0hKJRNfnKFPWdOZqaO09Hpke8MDZyMjT8EGLXXrmW3hvjLs0hIL3tnbq5HQ+2jbIxmd/sa2Qb59Z2YpOVv62vU3dBsKaRFDoRcvxq4DLqztgzwXG6luerJV8LIYOCUFWeAc1HbOF1oEnONuOImtYbzg3vH6QW4z1ne8HBS33T++k6tZacva9p5TjLYZ1PHqqbs3O00MPlxzjF2Cd/ifF5iQl9YE8z6DaL4NVZgEb4MsvFjCsatby/gJcC4sgN5uZyTnUpJc253ODeqGA6PzXnfJAU5jyvNgJ7yhUtGznSimVRtu1T6F+AgvFmpzKjegy/50p/C/geDdN7B8qh8+eHybjaMaEXg995Jmxg/QARlL6tn4jrxyw7W2zd+rkwiyWOi6bBJlkW58haAX3kdaiZM14yWf2Dqmn2EYTFEODbzcCLaHpForojCNgtx2blemKYukIJiDgDY+k4QIvCDMIyTCCfwi4ER/YdIWv4RRTApxBUyrWXSLAeL54HgkdBZd8hQIyVVY1RMD3wTRuzwYNDrsr9EEGI/W11aGR2/FkoEFDZhz1iLIslkQC67SjYmHIeYF5AltGjJjCJvb3lZ+myXNHKhyF1A4CJbXMd0DcsjDVHk3SPFsf1/IxhiDi6YcsZG+S9CIIQvzqxashIRfq2qqDOuy+GhHsOaiA1JjCzNJi7minHBkSOE8fwvswiayBIzx5BnzzK7koxVl5avu6e6CiffWcXXZQIM4YhAJKIQC7ERB3ERjXiIjxikAsTZQ5XjuBgROdlQ8EAzC6EplOEjV0Xl3siMySGDshbyEceMjj7GKaSw4gnsc2UMUemcqkG4n9A1MlF1j0xaYX2AnDSSIIPY5ih5VTNDIYAcf2MRAAAAAA==') format('woff2'),
    url('/statics/font/iconfont.woff?t=1562910758629') format('woff'),
    url('/statics/font/iconfont.ttf?t=1562910758629') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('/statics/font/iconfont.svg?t=1562910758629#iconfont') format('svg'); /* iOS 4.1- */
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

  .icon-ai-tool:before {
    content: "\e627";
  }

  .icon-search:before {
    content: "\e751";
  }

  .icon-shengqian:before {
    content: "\e63e";
  }

  .icon-anzhuologo:before {
    content: "\e603";
  }

  .icon-jiazai:before {
    content: "\e801";
  }

  .icon-diqiu:before {
    content: "\e7b9";
  }

  .icon-ios:before {
    content: "\e64b";
  }

  .icon-peiwangyindao:before {
    content: "\eb65";
  }

  .icon-rengongzhineng:before {
    content: "\e692";
  }

  .icon-js:before {
    content: "\f1db";
  }

  .icon-xiaochengxukaifa:before {
    content: "\e610";
  }

  .icon-changyongicon-:before {
    content: "\e618";
  }
`
export default GlobalStyle;