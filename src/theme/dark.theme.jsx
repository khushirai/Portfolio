import { createMuiTheme } from '@material-ui/core/styles';
import { amber } from '@material-ui/core/colors';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: amber[600],
    },
  },
});
