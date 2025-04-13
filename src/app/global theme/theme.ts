import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
    colors: {
        black: '#000000',
        totalBlack: '#000000ea',
        white: '#ffffff',
        lightGray: '#d9d9d9',
        lime: {
            600: '#2DB100',
            400: '#b1ff2e',
            150: '#d7ff94',
            300: '#c4ff61',
        },
        lightYellow: '#ffffd3',
    },
    breakpoints: {
        base: '0px',
        sm: '360px',
        md: '768px',
        lg: '1440px',
        xl: '1920px',
    },
});
