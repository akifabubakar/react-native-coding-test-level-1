import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "aliceblue",
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  labelText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  labelSection: {
    backgroundColor: "lightgray",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: "100%",
    marginBottom: 10,
  },
  pillContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  typeContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  typeText: {
    color: "white",
    fontWeight: "bold",
  },
  generalContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  generalLabel: {
    fontWeight: "200",
  },
  generalSection: {
    flex: 1,
  },
  generalText: {
    fontSize: 24,
  },
  spinner: {
    marginTop: 20,
  },
});
