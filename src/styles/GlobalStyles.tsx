import { StyleSheet } from "react-native";
import { myColors } from "./Colors"; 

export const Styles = StyleSheet.create({
    // Button
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 7,
        backgroundColor: myColors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 1,
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 7,
        backgroundColor: myColors.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 1,
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 7,
        backgroundColor: myColors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 1,
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 7,
        backgroundColor: myColors.btnGray,
        justifyContent: "center",
        alignItems: "center",
        margin: 1,
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },
    // Keyboard
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
})