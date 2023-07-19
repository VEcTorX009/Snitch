import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import style from "./style";
import UserContext from "./utils/UserContext";
import Icon from "react-native-vector-icons/FontAwesome"; // Replace 'FontAwesome' with the desired icon library, such as 'MaterialIcons', 'Ionicons', etc.
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

const Home = () => {
  const { userdetails, logindetails } = useContext(UserContext);
  const details = userdetails.firstname ? userdetails : logindetails;
  const [search, setSearch] = useState("");
  const handleSearch = () => {};
  
  return (
    <View style={style.container}>
      <View style={[style.rowcontainer, style.gaplesser]}>
        <Icon name="map-marker" size={24} color="#724ED9" style={style.icon} />
        <Text style={[style.text, style.fontnormal]}>Bloxburg, RBX</Text>
      </View>
      <Icon
        name="bell"
        size={30}
        color="#724ED9"
        style={[style.icon, style.bell]}
      />
      <View style={style.container}>
        <View style={[style.inputContainer,style.searchwidth]}>
          <Icon name="search" size={25} color="#999" style={style.icon} />
          <TextInput
            style={[style.input, style.noborder, style.inputwidth,style.searchinputwidth]}
            placeholder="Find the news you want"
            value={search}
            onChangeText={(e) => setSearch(e)}
          />
          <TouchableOpacity
            onPress={handleSearch}
            style={[style.getstartedbutton,style.searchbutton]}
          >
            <Text style={[style.textwhite, style.textcenter, style.buttontext]}>
              Search
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
