import React from "react";
import { useState } from "react";
import { View, Text, Button } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import style from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { CommonActions } from "@react-navigation/native";

const LoginScreen = ({ navigation }) => {
  const [userdetails, setUserdetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [logindetails, setLogindetails] = useState({ email: "", password: "" });


  const [showsignup, setShowsignup] = useState(true);

  const handleLoginNow = () => {
    setUserdetails({});
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }], //pass logindetails to home
        params: { logindetails: logindetails },
      }))
  };
  const handleforgotpassword = () => {};
  const handleSignUp = () => {
    setLogindetails({});
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }], //pass logindetails to home
        params: { userdetails: userdetails },
      }))
  };

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <ScrollView style={[style.loginscreencontainer]}>
      {showsignup ? (
        <>
          <Text style={style.loginheading}>Create an account</Text>
          <Text style={style.onboardingpara}>
            Enter your information based on your school and location.
          </Text>
          <View style={style.form}>
            <Text style={style.label}>First Name</Text>
            <TextInput
              style={style.input}
              placeholder="Your First Name"
              value={userdetails?.firstname}
              onChangeText={(e) =>
                setUserdetails({ ...userdetails, firstname: e })
              }
            />
            <Text style={style.label}>Last Name</Text>
            <TextInput
              style={style.input}
              placeholder="Your Last Name"
              value={userdetails?.lastname}
              onChangeText={(e) =>
                setUserdetails({ ...userdetails, lastname: e })
              }
            />
            <Text style={style.label}>Email</Text>
            <View style={style.inputContainer}>
              <Icon name="envelope" size={20} color="#999" style={style.icon} />
              <TextInput
                style={[style.input, style.noborder]}
                placeholder="School Email"
                value={userdetails?.email}
                onChangeText={(e) =>
                  setUserdetails({ ...userdetails, email: e })
                }
              />
            </View>
            <Text style={style.label}>Password</Text>
            <View style={style.inputContainer}>
              <Icon name="lock" size={25} color="#999" style={style.icon} />
              <TextInput
                style={[style.input, style.noborder, style.inputwidth]}
                placeholder="Password"
                secureTextEntry={!isPasswordVisible}
                value={userdetails?.password}
                onChangeText={(e) =>
                  setUserdetails({ ...userdetails, password: e })
                }
              />
              <TouchableOpacity onPress={handleTogglePasswordVisibility}>
                <Icon
                  name={isPasswordVisible ? "eye" : "eye-slash"}
                  size={25}
                  color="#999"
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={style.onboardingpara}>
            By signing up, you agree to our{" "}
            <Text style={style.semibold}> Terms & Conditions</Text> and{" "}
            <Text style={style.semibold}>Privacy Policy.</Text>*
          </Text>
          <View style={style.container}>
            <TouchableOpacity
              style={[style.getstartedbutton, style.buttonwidth]}
              onPress={handleSignUp}
            >
              <Text style={style.buttontext}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowsignup(false)}>
              <Text style={[style.comments, style.bottom]}>
                Have an account? <Text style={style.textpurple}>Login Now</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Text style={style.loginheading}>Login</Text>
          <Text style={style.onboardingpara}>
            Welcome back! Please login to continue.
          </Text>
          <View style={style.form}>
            <Text style={style.label}>Email</Text>
            <TextInput
              style={style.input}
              placeholder="Your Email"
              value={logindetails?.firstname}
              onChangeText={(e) =>
                setLogindetails({ ...logindetails, email: e })
              }
            />

            <Text style={style.label}>Password</Text>
            <View style={style.inputContainer}>
              <Icon name="lock" size={25} color="#999" style={style.icon} />
              <TextInput
                style={[style.input, style.noborder, style.inputwidth]}
                placeholder="Password"
                secureTextEntry={!isPasswordVisible}
                value={logindetails?.password}
                onChangeText={(e) =>
                  setLogindetails({ ...logindetails, password: e })
                }
              />
              <TouchableOpacity onPress={handleTogglePasswordVisibility}>
                <Icon
                  name={isPasswordVisible ? "eye" : "eye-slash"}
                  size={25}
                  color="#999"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.container}>
            <TouchableOpacity
              style={[style.getstartedbutton, style.buttonwidth]}
              onPress={handleLoginNow}
            >
              <Text style={style.buttontext}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleforgotpassword}>
              <Text style={[style.comments]}>
                <Text style={style.textpurple}>Forgot Password</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowsignup(true)}>
              <Text style={[style.comments, style.extremebottom]}>
                Don't Have an account?{" "}
                <Text style={style.textpurple}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default LoginScreen;
