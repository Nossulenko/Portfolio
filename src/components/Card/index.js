import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { Component } from './Card';
import { styles } from './Card.styles';

const Card = withAnimation()(withStyles(styles)(Component));

export { Card };
