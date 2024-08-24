import {hex2hsv, hsv2hex} from '../../tw-color-utils';

const blockColors = {
    motion: {
        primary: '#000000',
        secondary: '#4C4C4C',
        tertiary: '#4C97FF',
        quaternary: '#4C97FF'
    },
    looks: {
        primary: '#000000',
        secondary: '#4C4C4C',
        tertiary: '#9966FF',
        quaternary: '#9966FF'
    },
    sounds: {
        primary: '#000000',
        secondary: '#4C4C4C',
        tertiary: '#CF63CF',
        quaternary: '#CF63CF'
    },
    control: {
        primary: '#000000',
        secondary: '#4C4C4C',
        tertiary: '#FFAB19',
        quaternary: '#FFAB19'
    },
    event: {
        primary: '#000000',
        secondary: '#4C4C4C',
        tertiary: '#FFBF00',
        quaternary: '#FFBF00'
    },
    sensing: {
        primary: '#000000',
        secondary: '#4C4C4C',
        tertiary: '#5CB1D6',
        quaternary: '#5CB1D6'
    },
    pen: {
        primary: '#000000',
        secondary: '#4C4C4C',
        tertiary: '#0fBD8C',
        quaternary: '#0fBD8C'
    },
    operators: {
        primary: '#000000',
        secondary: '#4C4C4C',
        tertiary: '#59C059',
        quaternary: '#59C059'
    },
    data: {
        primary: '#000000',
        secondary: '#4C4C4C',
        tertiary: '#FF8C1A',
        quaternary: '#FF8C1A'
    },
    data_lists: {
        primary: '#000000',
        secondary: '#4C4C4C',
        tertiary: '#FF661A',
        quaternary: '#FF661A'
    },
    more: {
        primary: '#000000',
        secondary: '#4C4C4C',
        tertiary: '#FF6680',
        quaternary: '#FF6680'
    },
    addons: {
        primary: '#000000',
        secondary: '#4C4C4C',
        tertiary: '#34e4d0',
        quaternary: '#34e4d0'
    },
    text: 'rgba(255, 255, 255, .7)',
    textFieldText: '#E5E5E5',
    textField: '#4C4C4C',
    menuHover: 'rgba(255, 255, 255, 0.3)'
};

const extensions = {};

const customExtensionColors = {
    primary: primary => {
        const hsv = hex2hsv(primary);
        hsv[2] = Math.max(hsv[2] - 70, 20);
        return hsv2hex(hsv);
    },
    secondary: () => '#4C4C4C',
    tertiary: primary => primary,
    quaternary: primary => primary,
    categoryIconBackground: primary => customExtensionColors.primary(primary),
    categoryIconBorder: primary => customExtensionColors.tertiary(primary)
};

export {
    blockColors,
    extensions,
    customExtensionColors
};
