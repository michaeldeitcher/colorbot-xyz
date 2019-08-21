import { createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';

const theme = createMuiTheme({
    palette: {
        primary: yellow,
        secondary: {
            main: '#f44336',
        },
    },
});

export default theme;