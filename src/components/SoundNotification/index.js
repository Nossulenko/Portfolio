import { withStyles } from '../../tools/withStyles';
import { withAnimation } from '../../tools/withAnimation';
import { withSounds } from '../../tools/withSounds';
import { Component } from './SoundNotification';
import { styles } from './SoundNotification.styles';

const SoundNotification = withAnimation()(withStyles(styles)(withSounds()(Component)));

export { SoundNotification };
