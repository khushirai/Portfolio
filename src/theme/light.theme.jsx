import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: blue[500],
    },
  },
});
