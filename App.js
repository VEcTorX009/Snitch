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
import Emergency from "./Emergency";
import reportsData from "./reports.json"; // Import the JSON data
import * as FileSystem from 'expo-file-system';

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
  
const writeJSONFile = async (data) => {
  try {
    const fileUri = FileSystem.documentDirectory + 'reports.json';
    const jsonString = JSON.stringify(data);
    await FileSystem.writeAsStringAsync(fileUri, jsonString, {
      encoding: FileSystem.EncodingType.UTF8,
    });
  } catch (error) {
    console.error('Error writing JSON file:', error);
  }
};
  useEffect(() => {
    setIsloggedin(true); // Set this to true if the user is logged in
    const fetchReports = async () => {
      try {
        const fileUri = FileSystem.documentDirectory + 'reports.json';
        const fileExists = await FileSystem.getInfoAsync(fileUri);
        if (fileExists.exists) {
          const data = await FileSystem.readAsStringAsync(fileUri);
          setReports(JSON.parse(data));
        } else {
          // If the file doesn't exist, create it and initialize it with default data
          setReports(reportsData);
          await writeJSONFile(reportsData);
        }
      } catch (error) {
        console.error('Error reading JSON file:', error);
        // If there's an error reading the file, use the default data
        setReports(reportsData);
      }
    };

    fetchReports();

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
                  <Stack.Screen
                    name="Emergency"
                    component={Emergency}
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
