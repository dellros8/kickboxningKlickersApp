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
        marginLeft: -35,
        backgroundColor: "#f7f7f7",
        borderStyle: "solid",
        borderColor: "lightgrey",
        borderWidth: 1,
        width: 70,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        color: "black",
    },
    redSideProtocol: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "45%",
    },
    blueSideProtocol: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "auto",
        alignItems: "center",
        width: "45%",
    },
    middlePageProtocol: {
        width: "10%",
        alignItems: "center"
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
        marginTop: 15,
        height: 40,
        width: 150,
        fontSize: 18,
    },
    protokollParagraphs: {
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "solid",
        borderTopColor: "lightgrey",
        borderTopWidth: 1
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
        marginLeft: -35,
        backgroundColor: "#f7f7f7",
        borderStyle: "solid",
        borderColor: "lightgrey",
        borderWidth: 1,
        width: 70,
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        color: "black",
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
        width: 35,
        height: 35,
        backgroundColor: "#f7f7f7",
        borderStyle: "solid",
        borderColor: "lightgrey",
        borderWidth: 1
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