import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
    container: {
        width: "100%",
        height: "auto",
        minHeight: "100%",
        paddingLeft:50,
        paddingRight:50,
    },
    linearGradient: {
        paddingLeft: 1,
        paddingRight: 1,
        borderRadius: 5
    },
    card: {
        backgroundColor:'rgb(69,56,74)',
        borderRadius: 30
    },
    cardHeader: {
        backgroundColor:'rgb(87,77,102)',
        padding: 8,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomRadius: 0
    },
    button: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        backgroundColor: '#464356'
    },
    cardList: {
        backgroundColor: '#464356',
        width: '100%',
        padding: 10,
        marginBottom: 5
    },
    header: {
        flex: 1,
    },
    body: {
        flex: 8
    },
    footer: {
        flex: 1
    }
});
