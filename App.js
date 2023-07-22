import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Onboarding from "./components/Onboarding";
import { Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins";
import style from "./style";
import LoginScreen from "./LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import { useState } from "react";
import UserContext from "./utils/UserContext";
import { ToastProvider } from "react-native-toast-notifications";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faCross, faWarning } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
import Map from "./Map";
import Search from "./Search";
import ReportDetails from "./ReportDetails";
import Add from "./Add";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": Poppins_400Regular,
  });

  const [userdetails, setUserdetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [selectedReport, setSelectedReport] = useState(null); // State to manage selected report
  const [reports, setReports] = useState([{}]);
  const [logindetails, setLogindetails] = useState({ email: "", password: "" });
  const [isloggedin, setIsloggedin] = useState(false);
  const [search, setSearch] = useState("");
  const [createreport, setCreatereport] = useState(
    {
      location: "",
      type: "",
      title:"",
      description: "",
      when: "",
      timeline: "",
      involved: "",
      evidence: null,
      socials: "",
      time: "",
    },
  );
  useEffect(() => {
    setIsloggedin(true); // Set this to true if the user is logged in
    setReports([
      {
        category: "School",
        title: "Reporting student prevents\ndrug ring and wins gold medal",
        pfp: require("./assets/report1pfp.png"),
        image: require("./assets/report1.png"),
        authore: "Sierra Jaren",
        time: "5 hours ago",
        description:
          "Paul Rogan notiched drug ring in his school at 9:00 am , 10 July and reported to SafeSentry. The Police arrived and caught the victims to prision and investigation. Paul Rogan got rewarded with a gold medal for his act.",
        tags: ["shooter risk", "online harassment", "racism", "sexism"],
        when: "10 July | 9:00 am",
        timeline: "Four Guy masked in Black are chasing a vehicle",
        involved: "Paul Rogan, Sierra Jaren",
        social: "Instagram : sierrajaren_",
        location: "Sienna College",
      },

      {
        category: "School",
        title: "Reporting student prevents\ndrug ring and wins gold medal",
        pfp: require("./assets/report1pfp.png"),
        image: require("./assets/report1.png"),
        authore: "Sierra Jaren",
        time: "5 hours ago",
        description:
          "Paul Rogan notiched drug ring in his school at 9:00 am , 10 July and reported to SafeSentry. The Police arrived and caught the victims to prision and investigation. Paul Rogan got rewarded with a gold medal for his act.",
        tags: ["shooter risk", "online harassment", "racism", "sexism"],
        when: "10 July | 9:00 am",
        timeline: "Four Guy masked in Black are chasing a vehicle",
        involved: "Paul Rogan, Sierra Jaren",
        social: "Instagram : sierrajaren_",
        location: "Sienna College",
      },
      {
        category: "National",
        title: "Student stops school shooting\nacross 4 states",
        description:
          "Paul Rogan notiched drug ring in his school at 9:00 am , 10 July and reported to SafeSentry. The Police arrived and caught the victims to prision and investigation. Paul Rogan got rewarded with a gold medal for his act.",
        pfp: require("./assets/report2pfp.png"),
        image: require("./assets/report2.png"),
        authore: "Aarav Cona",
        time: "8 hours ago",
        tags: ["shooter risk", "online harassment", "racism", "sexism"],
        when: "10 July | 9:00 am",
        timeline: "Four Guy masked in Black are chasing a vehicle",
        involved: "Paul Rogan, Sierra Jaren",
        social: "Instagram : sierrajaren_",
        location: "Sienna College",
      },
      {
        description:
          "Paul Rogan notiched drug ring in his school at 9:00 am , 10 July and reported to SafeSentry. The Police arrived and caught the victims to prision and investigation. Paul Rogan got rewarded with a gold medal for his act.",
        category: "National",
        title: "Student stops school shooting\nacross 4 states",
        pfp: require("./assets/report2pfp.png"),
        image: require("./assets/report2.png"),
        authore: "Aarav Cona",
        time: "8 hours ago",
        tags: ["shooter risk", "online harassment", "racism", "sexism"],
        when: "10 July | 9:00 am",
        timeline: "Four Guy masked in Black are chasing a vehicle",
        involved: "Paul Rogan, Sierra Jaren",
        social: "Instagram : sierrajaren_",
        location: "Sienna College",
      },
    ]);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ToastProvider
      placement="top"
      duration={5000}
      animationType="slide-in"
      animationDuration={250}
      successColor="green"
      dangerColor="red"
      warningColor="orange"
      normalColor="gray"
      successIcon={<FontAwesomeIcon icon={faCheck} />}
      dangerIcon={<FontAwesomeIcon icon={faWarning} />}
      warningIcon={<FontAwesomeIcon icon={faCross} />}
      textStyle={{ fontSize: 16 }}
      offset={50}
      offsetTop={30}
      offsetBottom={40}
      swipeEnabled={true}
    >
      <View style={[styles.safeView, style.text]}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <UserContext.Provider
            value={{
              userdetails,
              setUserdetails,
              logindetails,
              setLogindetails,
              setIsloggedin,
              setSearch,
              setCreatereport,
              createreport,
              search,
              selectedReport,
              setSelectedReport,
              reports,
              setReports
            }}
          >
            <Stack.Navigator>
              {!isloggedin ? (
                <>
                  <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    component={LoginScreen}
                    name="Login"
                    options={{ headerShown: false }}
                  />
                </>
              ) : selectedReport ? (
                <Stack.Screen
                  name="ReportDetails"
                  component={ReportDetails}
                  options={{ headerShown: false }}
                />
              ) : (
                <>
                  <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Map"
                    component={Map}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Add"
                    component={Add}
                    options={{ headerShown: false }}
                  />
                </>
              )}
            </Stack.Navigator>
          </UserContext.Provider>
        </NavigationContainer>
      </View>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
