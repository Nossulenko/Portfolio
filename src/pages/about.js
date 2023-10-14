import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';

const styles = theme => ({
  root: {}
});

class About extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <Secuence stagger>
          <article>
            <Fader>
              <header>
                 <h3><Text>About Me</Text></h3>
               </header>
              <p><Text></Text></p>
              <p><Text></Text></p>
              <br />
              <header>
                 <h3><Text></Text></h3>
               </header>
              <p><Text></Text></p>
              <br />
              <header>
                 <h3><Text></Text></h3>
               </header>
              <p><Text></Text></p>
              <br />
              <header>
                 <h3><Text></Text></h3>
               </header>
              <p><Text></Text></p>
            </Fader>
          </article>
        </Secuence>
      </Main>

    );
  }
}

export default withStyles(styles)(About);
