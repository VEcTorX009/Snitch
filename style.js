import { Dimensions, StyleSheet } from "react-native";
const { width: screenWidth } = Dimensions.get('window');
const style = StyleSheet.create({
  text: {
    fontFamily: "Poppins-Regular",
  },
  onboardheading: {
    fontSize: 23,
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  onboardingpara: {
    marginTop: 10,
  },
  getstartedbutton: {
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: "#724ED9",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 132,
  },
  textcenter: {
    textAlign: "center",
  },
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  lesscontainer:{
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: "left",

  },
  scroll: {
    width: 340,
    marginBottom: 100,
  },
  textwhite: {
    color: "white",
    fontFamily: "Poppins-Regular",
  },
  buttontext: {
    fontSize: 16,
    color: "white",
    fontWeight: 500,
    textAlign: "center",
  },
  loginscreencontainer: {
    paddingTop: 20,
    paddingLeft: 20,
    textAlign: "left",
    paddingRight: 20,
    flex: 1,
  },
  loginheading: {
    fontSize: 24,
    fontWeight: 900,
  },
  form: {
    marginTop: 40,
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
    marginTop: 5,
    fontWeight: 800,
  },
  input: {
    marginTop: 5,
    fontSize: 13,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 5,
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 13,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    // height: 50,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  noborder: {
    borderWidth: 0,
  },
  inputwidth: {
    width: 230,
  },
  bold: {
    fontWeight: 900,
  },
  semibold: {
    fontWeight: 800,
  },
  buttonwidth: {
    width: 300,
  },
  comments: {
    marginTop: 10,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    textAlign: "center",
  },
  textpurple: {
    color: "#724ED9",
  },
  bottom: {
    marginTop: 50,
    bottom: 0,
  },
  extremebottom: {
    marginTop: 240,
  },
  rowcontainer: {
    display: "flex",
    flexDirection: "row",
    
  },
  gapmed: {
    gap: 4,
  },
  gaplesser: {
    gap: -4,
  },
  fontnormal: {
    marginTop: 3,
    fontSize: 14,
  },
  bell: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  searchwidth: {
    borderColor: "",
    backgroundColor: "#E9E9E9",
    width: 340,
    borderRadius: 300,
  },
  searchbutton: {
    width: 90,
    height: 43,
    marginTop: -1,
    marginLeft: -50,
  },
  download:{
    width: 200,
    height:90
  },
  center:{
justifyContent: "center",
alignItems: "center"
  },
  searchinputwidth: {
    width: 240,
  },
  banner: {
    marginTop: 20,
    height: 200,
    width: 350,
    borderRadius: 100,
  },

  backgroundImage: {
    flex: 1,
    zIndex: -1,
    resizeMode: "cover",

  },
  left: {
    textAlign: "left",
  },
  itemsleft: {
    alignContent: "flex-start",
    justifyContent: "flex-start",
    textAlign: "left",
    width: 340,
  },
  sliderbody: {
    marginTop: 10,
    width: 350,
    height: 45,
    display: "flex",
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: "row",
  },
  category: {
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginHorizontal: 5,
    marginVertical: 5,
    zIndex: 9999999,
  },
  cathead: {
    textAlign: "center",
    fontSize: 11,
  },
  report: {
    marginTop: -15,
    height: 180,
    width: "auto",
    gap: 15,
    display: "flex",
    flexDirection: "row",
  },
  reportimage: {
    width: 100,
    height: 100,
  },
  reportheading: {
    fontSize: 15,
  },
  reportlabel: {
    fontSize: 13,
    color: "gray",
  },
  pfp: {
    width: 30,
    height: 30,
  },
  reportutils: {
    color: "gray",
    fontSize: 13,
  },
  reportcontainer: {
    justifyContent : "center",
    width: 190, 
    gap: 10,
    display: "flex",
  },
  time: {
    color: "gray",
    fontSize: 12,
  },
  smalltext:{
    fontSize: 8,
  },
  noz:{
zIndex: -999999,
},
yesz:{
    zIndex: 999999,

  },
  navbarbody:{
    height: 85,
    alignItems: "center",
    justifyContent :"center",
    position: "absolute",
    bottom: 0,
    width: Dimensions.get('window').width,
    backgroundColor: "white",
    zIndex: 999999999,
    padding :5,
    gap: 30,
    flexDirection: "row"
  },
  navbaricons:{
    width: 30,
    height: 30,
    paddingBottom: 5,

    
  },
  posticon:{
    
    width: 40,
    height: 40
  },
  navbariconContainerActive: {
    paddingBottom: 5,
    borderBottomWidth: 2, // Add a border to the bottom of the active icon
    borderColor: 'blue', // Change this to the color you desire for the active icon underline
  },
  mapbg:{
    paddingVertical: 100,
    paddingHorizontal: 30,
    resizeMode :"cover",
    alignItems :"center"
  },
  loginsearch:{
    marginVertical: 10,
  },
  mapsearch:{
    marginTop: -100,
  },
  mapbody:{
    position: "absolute",
    width: 300,
    height: 400,
    top: 10,
  },
  school:{
    position: "absolute",
    width: 30,
    height: 34,
  },
  danger:{
    position: "absolute",
    width: 30,
    height: 34,
  },
  run:{
    width: 30,
    height: 34,
    position: "absolute"
  },
  
  run1:{
    top: 200,
    right: 60,
  },
  run2:{
    right: 50,
    top: 300,
  },
  run3:{
    left: 50,
    top: -150,
  },
  school1:{
    top: -170,
    right: 100,
  },
  school2:{
    left: 50,
    left: 100,
    top: 400,
  },
  school3:{
    left:50,
    top: 150,
  },
  danger1:{
    top: 350,
    right: 180,
  },
  danger2:{
    top: 90,
    right: 10,
  },
  danger3:{
    top: 150,
    right: 150,
  },
  noround:{
    borderRadius: 0
  },
  textleft:{
    textAlign: "left"
  },
  close: {
    position: "absolute",
    right: 0,
    top: 10,
  },addcontainer:{
    margin : 30,
    textAlign: "left",
    alignItems: "flex-start",
    justifyContent :"flex-start"
  },leftimg:{
    backgroundColor: "black",
    marginLeft: 80,
  }
});
export default style;
