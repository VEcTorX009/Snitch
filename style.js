import { StyleSheet } from "react-native";

const style= StyleSheet.create({

   text: {
    fontFamily: 'Poppins-Regular',
  },
  onboardheading:{
    fontSize: 23,
    alignContent:"center",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  
  onboardingpara:{
    marginTop: 10,   
  },
  getstartedbutton:{
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: "#724ED9",
    alignContent:"center",
    justifyContent:"center",
    textAlign: "center",
    borderRadius: 132,
  },
     textcenter:{
      textAlign: "center"
     }, container:{
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: "center"
    },
    textwhite:{
      color:"white",
      fontFamily: "Poppins-Regular"
    },
    buttontext:{
      fontSize:16,
      color: "white",
      fontWeight: 500,
      textAlign:"center"
    },
    loginscreencontainer:{
      marginTop: 30,
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      flex: 1,
    },
    loginheading:{
      fontSize: 24,
      fontWeight: 900,
    },
    form:{
      marginTop: 40,
    },
    label:{
      fontSize: 15,
      marginBottom: 5,
      marginTop: 5,
      fontWeight: 800,
    },
    input:{
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
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 13,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  noborder:{
    borderWidth:0
  },
  inputwidth:{
    width: 230,
  },
  bold:{
    fontWeight: 900
  },
  semibold:{
    fontWeight: 800
  },
  buttonwidth:{
    width:300,
  },
  comments: {
    marginTop: 10,
    fontFamily:"Poppins-Regular",
    fontSize: 14,
    textAlign: "center"
  },
  textpurple:{
    color: "#724ED9"
  },
  bottom:{
    marginTop: 50,
    bottom: 0,
  },
  extremebottom:{
    marginTop: 240,
  },
  rowcontainer:{
    display: "flex",
    flexDirection: "row"
  },
  gapmed:{
    gap: 4,
  },
  gaplesser:{
    gap: -4,
  },
  fontnormal:{
    marginTop: 3,
    fontSize:14
  },
  bell:{
    position: "absolute",
    top: 20,
    right: 20
  },
  searchwidth:{
    width: 340,
    borderRadius: 300,
  },
  searchbutton:{
    width: 90,
    height: 43,
    marginTop: -1,
    marginLeft: -53,
  },
  searchinputwidth:{
    width: 240,
  }

})
export default style;