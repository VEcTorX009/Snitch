import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import React from "react";
import style from "./style";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Navbar from "./components/Navbar";
import UserContext from "./utils/UserContext";
import { useContext } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { useToast } from "react-native-toast-notifications";
import * as ImagePicker from "expo-image-picker";
// import RNFS from 'react-native-fs';
import * as FileSystem from 'expo-file-system';



const Emergency = () => {
  const writeJSONFile = async (data) => {
    try {
      const fileUri = FileSystem.documentDirectory + 'aids.json';
      const jsonString = JSON.stringify(data);
      await FileSystem.writeAsStringAsync(fileUri, jsonString, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      console.log("done writing")
    } catch (error) {
      console.error('Error writing JSON file:', error);
    }
  };
  
  
  const toast = useToast();


  const { userdetails, aids,setAids,createaid,setCreateaid,createreport } =
    useContext(UserContext);
  const handlesubmit = async () => {
    if (createaid.location!=""||createaid.services!=""||createaid.description!=""||createaid.injuries!="") {
      const currentDate = new Date();
      const selectedTime = new Date();
      selectedTime.setHours(selectedTime.getHours() - 2);
  
      const day = currentDate.getDate();
      const month = currentDate.toLocaleString("default", { month: "long" });
      const time = currentDate.toLocaleString("default", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
  
      const formattedWhen = `${day} ${month} | ${time}`;
  
  
      setCreateaid({
        ...createreport,
        when: formattedWhen,
      });
      await setAids((prevReports) => [
        ...prevReports,
        {
          authore: userdetails.firstname + " " + userdetails.lastname,
          description: createaid.description,
          tags: createaid.services.split(",").map((keyword) => keyword.trim()),
          when: createaid.when,
          injuries: createaid.injuries,
          location: createaid.location,
        },
      ]);
      await writeJSONFile(aids);
      setCreateaid({});
      toast.show("Thankyou For Sharing!", {
        type: "success", // You can use 'info', 'success', 'error', or 'warning'
      });
    } else {
      toast.show("Please Enter Details!", {
        type: "error", // You can use 'info', 'success', 'error', or 'warning'
      });
    }
  };

  const handlecancel = () => {
    setCreateaid({});
  };

  return (
    <>
      <ScrollView
        style={style.scroll}
        vertical
        showsVerticalScrollIndicator={false}
      >
        <View style={style.lesscontainer}>
          <View style={[style.close, style.left, style.yesz]}>
            <Image source={require("./assets/book.png")} style={style.icon} />
          </View>
          <View style={[style.addcontainer, style.left]}>
            <Text style={[style.loginheading, style.textleft]}>
              Emergency Aid
            </Text>
            <Text style={style.onboardingpara}>|
              Enter your information based on your school and location.
            </Text>
            <View style={[style.form, { gap: 10 }]}>
              
              <Text style={style.label}>Location</Text>
              <View style={style.inputContainer}>
                <Icon name="map" size={20} color="#999" style={style.icon} />
                <TextInput
                  style={[style.input, style.noborder]}
                  multiline={true}
                  placeholder={`Your location will be recorded as Saint\nJunes High School, West Wing \n(Class A12).`}
                  value={createaid?.location}
                  onChangeText={(e) =>
                    setCreateaid({ ...createaid, location: e })
                  }
                />
              </View>
              <Text style={style.label}>Requested Services</Text>
              <View style={style.inputContainer}>
                <TextInput
                  style={[style.input, style.noborder]}
                  multiline={true}
                  placeholder="Add Tags for the incident with commas. For Example: Ambulance, Fire Department,etc"
                  value={createaid?.services}
                  onChangeText={(e) =>
                    setCreateaid({ ...createaid, services: e })
                  }
                />
              </View>

              <Text style={style.label}>Description</Text>
              <View style={style.inputContainer}>
                <TextInput
                  multiline={true}
                  style={[style.input, style.noborder]}
                  placeholder={`Please tell us your situation. For immediate help, please skip.`}
                  value={createaid?.description}
                  onChangeText={(e) =>
                    setCreateaid({ ...createaid, description: e })
                  }
                />
              </View>
              <Text style={style.label}>Have you or others sustained injuries</Text>
              <View style={style.inputContainer}>
                <TextInput
                  multiline={true}
                  style={[style.input, style.noborder]}
                  placeholder={`Describe your or others’ wounds and the severity of these injuries.`}
                  value={createaid?.injuries}
                  onChangeText={(e) =>
                    setCreateaid({ ...createaid, injuries: e })
                  }
                />
              </View>
             
           
              <View style={[style.rowcontainer,style.gapmed,style.center]}>

              <TouchableOpacity
                onPress={handlecancel}
                style={[style.getstartedbutton,{width: 120}, {height: 40},{backgroundColor : "gray"}]}
              >
                <Text
                  style={[style.textwhite, style.textcenter, style.buttontext]}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={handlesubmit}
                style={[style.getstartedbutton,{width: 120}, {height: 40},{backgroundColor: "red"}]}              >
                <Text
                  style={[style.textwhite, style.textcenter, style.buttontext]}
                >
                  Request
                </Text>
              </TouchableOpacity>
            </View>
              </View>
          </View>
        </View>
      </ScrollView>
      <Navbar />
    </>
  );
};

export default Emergency;
