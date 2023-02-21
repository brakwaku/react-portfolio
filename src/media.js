import { css } from 'styled-components';

const sizes = {
   large: 1200,
   medium: 900,
   small: 768,
   extraSmall: 320
}
export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})