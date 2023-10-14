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

class Skills extends React.Component {
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
                <h3><Text>Skills</Text></h3>
              </header>
              <p><Text>Revolutionizing Crypto Trading with a Fund of Funds Approach! Our advanced algorithmic bot meticulously tracks the industry's top traders on the blockchain, enabling it to make highly accurate predictions regarding the potential success of a token.</Text></p>
              <p><Text>Our cutting-edge cognitive bot meticulously analyzes every trade executed by these traders, utilizing a sophisticated mathematical model to foresee the future performance of the tokens. It possesses the capability to identify the next big opportunities and steer clear of risky investments. This represents the future of cryptocurrency trading.</Text></p>
              <br />
              <header>
                <h3><Text>How it works</Text></h3>
              </header>
              <p><Text>Leveraging the power of blockchain technology, our algorithmic bot actively monitors the wallets of the top traders. It meticulously compares their trading activities, employing advanced probability theory to assess the likelihood of a token's success. When the odds are in favor, it acts swiftly to capitalize on promising opportunities and possesses the precision to determine the optimal timing for position closures.</Text></p>
              <br />
              <header>
                <h3><Text>How do I get my split of the revenue?</Text></h3>
              </header>
              <p><Text>The distribution of profits is structured so that 85% of the net profit is earmarked for the investors, while the remaining 15% is allocated to the team & project.</Text></p>
              <br />
              <header>
                <h3><Text>How to claim your profits?</Text></h3>
              </header>
              <p><Text>You have the option to redeem your rewards on a weekly basis.</Text></p>
            </Fader>
          </article>
        </Secuence>
      </Main>

    );
  }
}

export default withStyles(styles)(Skills);
