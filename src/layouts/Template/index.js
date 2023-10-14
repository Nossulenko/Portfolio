import { withStyles } from '../../tools/withStyles';
import { Component } from './Template';
import { styles } from './Template.styles';
import { withRouter } from '../../tools/withRouter/index.js';

const Template = withRouter(withStyles(styles)(Component));

export default Template;
