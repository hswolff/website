import Typography from 'typography';
import theme from 'typography-theme-parnassus';

const typography = new Typography(theme);
const { rhythm, scale } = typography;

export { rhythm, scale, typography as default };
