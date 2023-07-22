import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import style from "./style";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Navbar from "./components/Navbar";
import UserContext from "./utils/UserContext";
import { useContext } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { useToast } from "react-native-toast-notifications";

const Add = () => {
  const options = ["Happening Now", "Has Happened", "Going to Happen"];
  const [selectedOption, setSelectedOption] = useState([]);
  const toast = useToast();
  const onSelect = (index, value) => {
    const currentDate = new Date();
    const selectedTime = new Date();
    selectedTime.setHours(selectedTime.getHours() - value);

    const day = currentDate.getDate();
    const month = currentDate.toLocaleString("default", { month: "long" });
    const time = currentDate.toLocaleString("default", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const formattedWhen = `${day} ${month} | ${time}`;

    const diff = Math.abs(currentDate - selectedTime);
    const hoursAgo = Math.floor(diff / (1000 * 60 * 60));
    const formattedTime = `${hoursAgo} ${
      hoursAgo === 1 ? "hour" : "hours"
    } ago`;

    setSelectedOption(options[value]);
    setCreatereport({
      ...createreport,
      time: formattedWhen,
      when: formattedTime,
    });
  };

  const { createreport, reports, setCreatereport, userdetails, setReports } =
    useContext(UserContext);
  const handlesubmit = async () => {
    console.log(createreport);
    if (
      createreport.location &&
      createreport.type &&
      createreport.title &&
      createreport.description &&
      createreport.timeline &&
      createreport.involved &&
      createreport.socials
    ) {
      await setReports((prevReports) => [
        ...prevReports,
        {
          category: "School",
          title: createreport.title,
          pfp: require("./assets/report1pfp.png"),
          image: require("./assets/report1.png"),
          authore: userdetails.firstname + " " + userdetails.lastname,
          time: createreport.when,
          description: createreport.description,
          tags: [createreport.type.split(",").map((keyword) => keyword.trim())],
          when: createreport.time,
          timeline: createreport.timeline,
          involved: createreport.involved,
          social: createreport.socials,
          location: createreport.location,
        },
      ]);

      setCreatereport({});
    } else {
      toast.show("Please Enter Details!", {
        type: "error", // You can use 'info', 'success', 'error', or 'warning'
      });
    }

    // const navigation = useNavigation();
    // navigation.navigate("Home");
  };

  const handlecancel = () => {
    setCreatereport({});
    const navigation = useNavigation();
    navigation.navigate("Home");
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
              Create a report
            </Text>
            <Text style={style.onboardingpara}>
              Enter your information based on your school and location.
            </Text>
            <View style={[style.form, { gap: 10 }]}>
              <Text style={style.label}>Title</Text>
              <View style={style.inputContainer}>
                <TextInput
                  style={[style.input, style.noborder]}
                  placeholder="Add a Title"
                  value={createreport?.title}
                  onChangeText={(e) =>
                    setCreatereport({ ...createreport, title: e })
                  }
                />
              </View>
              <Text style={style.label}>Location</Text>
              <View style={style.inputContainer}>
                <Icon name="map" size={20} color="#999" style={style.icon} />
                <TextInput
                  style={[style.input, style.noborder]}
                  placeholder="Type a city,school,neighborhood, etc."
                  value={createreport?.location}
                  onChangeText={(e) =>
                    setCreatereport({ ...createreport, location: e })
                  }
                />
              </View>
              <Text style={style.label}>Incident Type</Text>
              <View style={style.inputContainer}>
                <TextInput
                  style={[style.input, style.noborder]}
                  multiline={true}
                  placeholder="Add Tags for the incident with commas. For Example: School Risk, Online Harassment, Racism"
                  value={createreport?.type}
                  onChangeText={(e) =>
                    setCreatereport({ ...createreport, type: e })
                  }
                />
              </View>

              <Text style={style.label}>Description</Text>
              <View style={style.inputContainer}>
                <TextInput
                  multiline={true}
                  style={[style.input, style.noborder]}
                  placeholder={`Please provide as much detail as possible\nabout this incident with the names of victims and danger.`}
                  value={createreport?.description}
                  onChangeText={(e) =>
                    setCreatereport({ ...createreport, description: e })
                  }
                />
              </View>
              <SelectDropdown
                data={options}
                onSelect={onSelect}
                buttonTextAfterSelection={(selectedItem) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item) => {
                  return item;
                }}
                buttonStyle={{ backgroundColor: "#F5FCFF" }}
                buttonTextStyle={{ color: "#000" }}
                dropdownStyle={{ backgroundColor: "#F5FCFF" }}
                rowTextStyle={{ color: "#000" }}
              />
              <Text style={style.label}>Timeline</Text>
              <View style={style.inputContainer}>
                <TextInput
                  multiline={true}
                  style={[style.input, style.noborder]}
                  placeholder={`Please describe the event order and predicting outcomes.`}
                  value={createreport?.timeline}
                  onChangeText={(e) =>
                    setCreatereport({ ...createreport, timeline: e })
                  }
                />
              </View>
              <Text style={style.label}>Involved Students</Text>
              <View style={style.inputContainer}>
                <TextInput
                  style={[style.input, style.noborder]}
                  multiline={true}
                  placeholder="Add Involved Students for the incident with commas. For Example: John, Daniel..."
                  value={createreport?.involved}
                  onChangeText={(e) =>
                    setCreatereport({ ...createreport, involved: e })
                  }
                />
              </View>
              <Text style={style.label}>Social Media</Text>
              <View style={style.inputContainer}>
                <TextInput
                  multiline={true}
                  style={[style.input, style.noborder]}
                  placeholder={`Please include any relevant social media information regarding the perpetrators.
Ex. Instagram: jane_doe123`}
                  value={createreport?.socials}
                  onChangeText={(e) =>
                    setCreatereport({ ...createreport, socials: e })
                  }
                />
              </View>
              <TouchableOpacity
                onPress={handlesubmit}
                style={style.getstartedbutton}
              >
                <Text
                  style={[style.textwhite, style.textcenter, style.buttontext]}
                >
                  Submit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handlecancel}
                style={style.getstartedbutton}
              >
                <Text
                  style={[style.textwhite, style.textcenter, style.buttontext]}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <Navbar />
    </>
  );
};

export default Add;
