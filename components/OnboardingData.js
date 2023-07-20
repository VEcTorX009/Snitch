import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import style from "../style";
import Carousel from "./Carousel";
import { useNavigation } from "@react-navigation/native";

const OnboardingData = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Carousel>
        <Image
          source={require("../assets/onboard1.png")}
          style={[styles.image, { width, resizeMode: "cover" }]}
        />
        <Image
          source={require("../assets/onboard2.png")}
          style={[styles.image, { width, resizeMode: "cover" }]}
        />
        <Image
          source={require("../assets/onboard3.png")}
          style={[styles.image, { width, resizeMode: "cover" }]}
        />
      </Carousel>
      <View style={styles.container}>
        <Text style={[style.text, style.textcenter, style.onboardheading]}>
          {"Our determination\n for safety"}
        </Text>
        <Text style={style.onboardingpara}>
          {
            "SafeSentry is dedicated to make sure\nevery student is safe in every campus,\nclassroom, and moment."
          }
        </Text>
        <TouchableOpacity onPress={handleLogin} style={style.getstartedbutton}>
          <Text style={[style.textwhite, styles.textcenter, style.buttontext]}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    justifyContent: "center",
    borderRadius: 25,
  },
  textcenter: {
    textAlign: "center",
  },
});

export default OnboardingData;
