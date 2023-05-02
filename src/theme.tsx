import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    borders: {
      100: "#FFF0F5",
    },
    "red": {
        "50": "#FBE9E9",
        "100": "#F4C3C3",
        "200": "#ED9C9C",
        "300": "#E67575",
        "400": "#DF4E4E",
        "500": "#D72828",
        "600": "#AC2020",
        "700": "#811818",
        "800": "#561010",
        "900": "#2B0808"
      },
      "orange": {
        "50": "#FEF3E7",
        "100": "#FCDDBB",
        "200": "#FAC88F",
        "300": "#F8B263",
        "400": "#F59C37",
        "500": "#F3870C",
        "600": "#C36C09",
        "700": "#925107",
        "800": "#613605",
        "900": "#311B02"
      },
      "blue": {
        "50": "#EBEFFA",
        "100": "#C6D2F1",
        "200": "#A1B5E8",
        "300": "#7C97DF",
        "400": "#577AD5",
        "500": "#335DCC",
        "600": "#294BA3",
        "700": "#1E387B",
        "800": "#142552",
        "900": "#0A1329"
      },
      brand: {
        "bg": "#F5F7E5"
      }
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

export default theme;
