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
  const [logindetails, setLogindetails] = useState({ email: "", password: "" });
  const [isloggedin, setIsloggedin] = useState(false);
  const [search, setSearch] = useState("")

  useEffect(() => {
    setIsloggedin(true); // Set this to true if the user is logged in
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
              search
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
