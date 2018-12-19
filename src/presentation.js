// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import Titles from './slides/titles';
import Purpose from './slides/purpose';

import Functions from './slides/functions';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}>

          {/* Title */}
          <Slide transition={['zoom']} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} 
            textColor="secondary">"Sassy" Talk</Heading>
          </Slide>
          <Slide transition={['fade']} bgColor="secondary">
            <Titles />
          </Slide>

          <Slide transition={['fade']} bgColor="secondary">
            <Purpose />
          </Slide>

          <Slide transition={['fade']} bgColor="secondary">
            <Functions />
          </Slide>

      </Deck>
    );
  }
}
