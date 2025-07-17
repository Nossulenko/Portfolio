import { withStyles } from '../../tools/withStyles';
import { Component } from './ResponsiveMenu';
import { styles } from './Menu.styles';
import { withRouter } from '../../tools/withRouter/index.js';

const ResponsiveMenu = withRouter(withStyles(styles)(Component));

export { ResponsiveMenu };
