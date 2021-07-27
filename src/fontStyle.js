import { createGlobalStyle } from "styled-components";
import Hammersmith from "./fonts/HammersmithOne-Regular.ttf";
import DancingScript from "./fonts/DancingScript-VariableFont_wght.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Hammersmith One';
  font-family: 'Dancing Script';
  src: url(${Hammersmith}) format('ttf'),
       url(${DancingScript}) format('ttf');
}
`;

export default FontStyles;