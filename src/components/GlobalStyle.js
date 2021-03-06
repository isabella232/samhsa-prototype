import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

const GlobalStyle = createGlobalStyle`
  body {
    ${tw`font-sans text-gray-darkest leading-normal`}
  }

  main {
    a {
      ${tw`text-blue`}
    }
  }

  @media print {
    * {
      ${tw`text-black`}
    }
  }
`;

export default GlobalStyle;
