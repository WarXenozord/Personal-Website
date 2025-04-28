import { createContext,useState,useMemo } from "react";
import { createTheme } from "@mui/material/styles"

export const tokens = (mode) => ({
    ...(mode === "dark" ? {
        blue: {
          100: "#cce2f1",
          200: "#99c5e3",
          300: "#67a9d5",
          400: "#348cc7",
          500: "#016fb9",
          600: "#015994",
          700: "#01436f",
          800: "#002c4a",
          900: "#001625"
        },
        red: {
          100: "#fbdcd2",
          200: "#f7b8a6",
          300: "#f49579",
          400: "#f0714d",
          500: "#ec4e20",
          600: "#bd3e1a",
          700: "#8e2f13",
          800: "#5e1f0d",
          900: "#2f1006"
        },
        primary: {
            500: "#121212",
        },
        secondary: {
            500: "#201f1f",
        },
        grey:{
              100: "#000000",
              500: "#7a7f87",
              600: "#f5f5f5",
              900: "#ffffff"
        }
    } : {
        blue: {
          900: "#cce2f1",
          800: "#99c5e3",
          700: "#67a9d5",
          600: "#348cc7",
          500: "#016fb9",
          400: "#015994",
          300: "#01436f",
          200: "#002c4a",
          100: "#001625"
        },
        red: {
          900: "#fbdcd2",
          800: "#f7b8a6",
          700: "#f49579",
          600: "#f0714d",
          500: "#ec4e20",
          400: "#bd3e1a",
          300: "#8e2f13",
          200: "#5e1f0d",
          100: "#2f1006"
        },
        primary: {
          500: "#f5f5f5",
        },
        secondary: {
          500: "#ffffff",
        },
        grey:{
            900: "#000000",
            800: "#121212",
            600: "#201f1f",
            500: "#7a7f87",
            300: "#d9d9d9",
            100: "#f5f5f5"
      }
    })
})

export const themeSettings = (mode) => {
    const colors = tokens(mode)

    return{
        palette:{
            mode: mode,
            ...(mode === "dark" ?
                {
                    primary: {
                        main: colors.primary[500]
                    },
                    secondary:{
                        main: colors.blue[500]
                    },
                    neutral:{
                        dark: colors.grey[100],
                        main: colors.secondary[500],
                        light: colors.grey[500]
                    },
                    background:{
                        default: colors.primary[500]
                    }
                }:{
                    primary: {
                        main: colors.primary[500]
                    },
                    secondary:{
                        main: colors.blue[500]
                    },
                    neutral:{
                        dark: colors.grey[100],
                        main: colors.secondary[500],
                        light: colors.grey[500]
                    },
                    background:{
                        default: colors.primary[500]
                    }
                }
            )
        }, typography: {
            fontFamily: '"Chau Philomene One", sans-serif',
            h1:{
                fontSize: '6rem',
            },
            h2:{
                fontSize: '2.5rem',
            },
            h3:{
                fontSize: '2rem',
            },
            h4:{
                fontSize: '1.8rem',
                fontWeight: 'normal'
            },
            h5:{

            },
            h6:{

            },
            body1:{
                fontSize: '1.1rem',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 'bold'
            },
            body2:{
                fontSize: '1.2rem',
                fontFamily: '"Inter", sans-serif'
            }
        }
    }
}

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () =>{
    const [mode,setMode] = useState("dark")

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => 
                setMode((prev) => (prev === "light" ? "dark":"light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode]
}