import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import components from './components';
import layoutTheme from './layout';
import themePalette from './palette';

const theme = createTheme(deepmerge(layoutTheme, themePalette), components);

export default theme;
