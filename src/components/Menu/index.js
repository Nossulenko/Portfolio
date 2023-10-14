import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { withSounds } from '../../tools/withSounds';
import { Component } from './Menu';
import { styles } from './Menu.styles';
import { withRouter } from '../../tools/withRouter/index.js';
import { withConnectModal } from '../../tools/withConnectModal/index.js';
import { withUseAccount } from '../../tools/withUseAccount/index.js';

const Menu = withRouter(withConnectModal(withUseAccount(withAnimation()(withStyles(styles)(withSounds()(Component))))));

export { Menu };
