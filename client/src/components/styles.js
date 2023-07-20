import { createTheme } from "@mui/material/styles";

// Define custom breakpoints for responsive styles
const theme = createTheme();
const customBreakpoints = {
    ...theme.breakpoints,
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
};

export const styles = {
    cropContainer: {
        position: 'relative',
        width: '100%',
        height: 200,
        background: '#333',
        [customBreakpoints.up('sm')]: {
            height: 400,
        },
    },
    cropButton: {
        flexShrink: 0,
        marginLeft: 16,
    },
    controls: {
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        [customBreakpoints.up('sm')]: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    },
    sliderContainer: {
        display: 'flex',
        flex: '1',
        alignItems: 'center',
    },
    sliderLabel: {
        minWidth: 65,
        [customBreakpoints.up('sm')]: {
            minWidth: 'auto',
        },
    },
    slider: {
        padding: '22px 0px',
        marginLeft: 16,
        [customBreakpoints.up('sm')]: {
            flexDirection: 'row',
            alignItems: 'center',
            margin: '0 16px',
        },
    },
};
