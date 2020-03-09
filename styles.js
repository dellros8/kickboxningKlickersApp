import { StyleSheet } from 'react-native';

export const protokollStyles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        height: "100%"
    },
    button: {
        position: "absolute",
        bottom: 0,
        left: "50%",
        marginLeft: -5,
        backgroundColor: "#e7e7e7",
        width: 100,
        height: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
    },
    redSideProtocol: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "40%",
        marginTop: 15,
    },
    blueSideProtocol: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "auto",
        alignItems: "center",
        width: "40%",
        marginTop: 15,
    },
    middlePageProtocol: {
        width: "20%",
        alignItems: "center",
    },
    blueScoresTable: {
        justifyContent: "space-around",
        width: "100%",
    },
    blueScoresTable: {
        justifyContent: "space-around",
        width: "100%",
        flexDirection: "row"
    },
    redScoresTable: {
        justifyContent: "space-around",
        width: "100%",
        flexDirection: "row"
    },
    newMatch: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f7f7",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 5,
        position: "absolute",
        marginTop: 10,
        height: 40,
        width: 150,
        fontSize: 18,
    },
    protokollParagraphs: {
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "solid",
        borderColor: "lightgrey",
        borderTopWidth: 1,
        color: "green"
    },
    redWinner: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        color: "white",
        borderRadius: 100,
    },
    blueWinner: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
        color: "white",
        borderRadius: 100,
    }

});

export const klickersStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row"
    },
    button: {
        position: "absolute",
        top: 0,
        left: "50%",
        marginLeft: -55,
        backgroundColor: "#e7e7e7",
        width: 100,
        height: 40,
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        justifyContent: "center",
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
    },
    flexcenter: {
        alignItems: "center",
        alignSelf: "flex-start",
        width: "100%"
    },
    pointsCount: {
        fontSize: 35,
        marginBottom: 10,
        marginTop: 20,
    },
    klickers: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        width: "100%"
    },
    klickerIncr: {
        justifyContent: "center",
        alignItems: "center",
        width: 180,
        height: 180,
        borderWidth: 0,
        borderRadius: 100
    },
    red: {
        backgroundColor: "red"
    },
    blue: {
        backgroundColor: "blue"
    },
    klickerDecr: {
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
        borderWidth: 0,
        borderRadius: 100,
    },
    penaltyWrapper: {
        alignItems: "center",
        marginTop: 20
    },
    penaltyKlicker: {
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        backgroundColor: "#f7f7f7",
        borderStyle: "solid",
        borderColor: "lightgrey",
        borderWidth: 0,
        borderRadius: 100
    },
    redSideKlickers: {
        flexDirection: "row",
        width: "40%",
    },
    blueSideKlickers: {
        flexDirection: "row",
        width: "40%",
    },
    middlePageKlickers: {
        flexDirection: "row",
        width: "20%",
        alignItems: "center",
        marginTop: 50
    },
    roundDoneButton: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 5,
        width: "95%",
        backgroundColor: "rgba(0, 255, 0, 0.2)"
    }
});