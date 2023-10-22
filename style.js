import { StyleSheet } from "react-native"

export default StyleSheet.create({
  containerStyle: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 30 : 0
  },
  inputStyle: {
    marginTop: 20,
    border: "1px solid black",
    width: "100%",
    height: 40,
    borderRadius: 10,
    borderColor: "royalblue",
    borderWidth: 2,
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center"
  },
  colorText: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  sectionHeader: {
    fontSize: 30,
    backgroundColor: 'royalblue',
    color: 'white',
    padding: 7,
    width: '100%',
    borderRadius: 10
  },
  sectionItem: {
    fontSize: 20,
    color: 'white',
    padding: 5,
    backgroundColor: 'teal',
    width: '85%',
    marginVertical: 2,
    borderRadius: 10
  },
  dataText: {
    fontSize: 20,
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  imageStyle: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginHorizontal: 6
  },
  searchBar: {
    color: 'white',
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    width: '95%',
    borderRadius: 10,
    borderColor: 'royalblue',
    borderWidth: 2,
    marginHorizontal: 10,
    fontSize: 20,
    padding: 5
  },
})