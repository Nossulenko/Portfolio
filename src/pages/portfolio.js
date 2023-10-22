import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';
import { createRoot } from 'react-dom/client';
import { Global } from '@emotion/react';
import { createAppTheme } from '@arwes/theme';
import { Fragment } from 'react';

const styles = theme => ({
  root: {}
});

const t = createAppTheme({
  settings: {
    hues: {
      primary: 200,
      secondary: 80
    },
    fontFamilies: {
      title: 'Copperplate, Copper, "Comic Sans"',
      body: 'Electrolize, Techno, Trebuchet'
    }
  }
});

class Portfolio extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <Fragment>
      <Global styles={{
        html: {
          margin: t.space(2),
          lineHeight: 1.6,
          backgroundColor: t.colors.error.main(9)
        },
        h2: {
          marginTop: t.space(5),
        },
        hr: {
          margin: t.space([0, 0, 4]),
          border: 'none',
          height: 2,
          background: `linear-gradient(
            90deg,
            ${t.colors.primary.deco(5)},
            ${t.colors.secondary.deco(10)}
          )`
        },
        p: {
          margin: t.space([0, 0, 4]),
          ...t.typography.body(1),
          color: t.colors.error.text(1)
        },
        img: {
          margin: t.space([5, 5, 5]),
          maxWidth: '100%',
          borderRadius: t.space(2)
        },
        cardDiv: {
          display: 'flex',
        }

      }} />

      <main style={{
        display: 'flex',
        flexDirection: 'row',
        border: `1px solid ${t.colors.error.main(5)}`,
        borderRadius: t.space(4),
        background: `linear-gradient(
          to bottom right,
          ${t.colors.error.main(8)},
          ${t.colors.error.main(9)}
        )`
      }}>

        <img width={150} height={150} src="https://ipsf.net/wp-content/uploads/2021/12/dummy-image-square.webp" />

        <div className='cardDiv'>
        <h2>Titel</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        </div>
      </main>
    </Fragment>
      </Main>

    );
  }
}

export default withStyles(styles)(Portfolio);
