"use client";

// added from volteric's new site

import { CssVarsProvider, extendTheme } from "@mui/joy";
import colours from "tailwindcss/colors";

export const ClientCssProvider = ({ children }) => {

    // add tailwind colours as colour tokens (i.e. colours.red.500 turns into tailwind-red-500)
    // tailwind colours is an object { red: { 50: '#fff' } }
    const colourTokens = Object.keys(colours).reduce((acc, colour) => {
        // filter out inherit, current, transparent
        if (colour === 'inherit' || colour === 'current' || colour === 'transparent') return acc;
        // normalise black and white
        if (colour === 'black') return { ...acc, 'tailwind-black': '#000' };
        if (colour === 'white') return { ...acc, 'tailwind-white': '#fff' };
        // filter out old names (coolGray, warmGray, trueGray, blueGray, lightBlue)
        if (colour === 'coolGray' || colour === 'warmGray' || colour === 'trueGray' || colour === 'blueGray' || colour === 'lightBlue') return acc;
        const shades = colours[colour];
        const shadeTokens = Object.keys(shades).reduce((acc, shade) => {
            const hex = shades[shade];
            const token = `tailwind-${colour}-${shade}`;
            acc[token] = hex;
            return acc;
        }, {});
        return { ...acc, ...shadeTokens };
    }, {});

    const customTheme = extendTheme({
        fontFamily: {
            body: 'var(--font-outfit)',
        },
        colorSchemes: {
            light: {
                palette: {
                    ...colourTokens
                }
            },
            dark: {
                palette: {
                    ...colourTokens
                }
            }
        }
    });

    return (
        <CssVarsProvider defaultMode="dark" theme={customTheme}>
            {children}
        </CssVarsProvider>
    )
};