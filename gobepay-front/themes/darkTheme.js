import { createTheme } from "@rneui/themed";

export const darkTheme = createTheme({
  components: {
    Button: {
      buttonStyle: {
        borderRadius: 50,
        borderWidth: 2,
        padding: 12,
      },
      titleStyle: {
        fontWeight: "600",
      },
    },
    Input: {
      inputContainerStyle: {
        borderWidth: 1,
        borderColor: "#9da3a6",
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 8,
      },
      containerStyle: {
        paddingHorizontal: 0,
      },
    },
  },
  lightColors: {
    primary: "#000",
  },
});