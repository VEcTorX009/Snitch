import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useContext } from "react";
import style from "./style";
import UserContext from "./utils/UserContext";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import Carousel from "./components/Carousel";
import CategorySlider from "./components/CategorySlider";
import Navbar from "./components/Navbar";
import { useNavigation } from "@react-navigation/native";
import Reports from "./components/Reports";

const Home = () => {
  const navigator = useNavigation();
  const { userdetails, logindetails, setSearch, search } =
    useContext(UserContext);
  
  const details = userdetails.firstname ? userdetails : logindetails;
  const handleSearch = () => {
    if(emp){
      setSearch(emp)
      setEmp("")
      navigator.navigate("Search");
    }
  };
  const [filter, setFilter] = useState("");
  const [emp, setEmp] = useState("")

  return (
    <>
      <View style={[style.container, style.noz]}>
        <View style={[style.rowcontainer, style.gaplesser]}>
          <Icon
            name="map-marker"
            size={24}
            color="#724ED9"
            style={style.icon}
          />
          <Text style={[style.text, style.fontnormal]}>Bloxburg, RBX</Text>
        </View>
        <Icon
          name="bell"
          size={30}
          color="#724ED9"
          style={[style.icon, style.bell]}
        />
        <View style={style.container}>
          <View
            style={[style.inputContainer, style.searchwidth, style.noborder]}
          >
            <Icon name="search" size={25} color="#999" style={style.icon} />
            <TextInput
              style={[
                style.input,
                style.noborder,
                style.inputwidth,
                style.searchinputwidth,
              ]}
              placeholder="Find the news you want"
              value={emp}
              onChangeText={(e) => setEmp(e)}
            />
            <TouchableOpacity
              onPress={handleSearch}
              style={[style.getstartedbutton, style.searchbutton]}
            >
              <Text
                style={[style.textwhite, style.textcenter, style.buttontext]}
              >
                Search
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.banner}>
            <Carousel>
              <ImageBackground
                source={require("./assets/banner.png")}
                style={style.backgroundImage}
              ></ImageBackground>
              <ImageBackground
                source={require("./assets/banner.png")}
                style={style.backgroundImage}
              ></ImageBackground>
              <ImageBackground
                source={require("./assets/banner.png")}
                style={style.backgroundImage}
              ></ImageBackground>
            </Carousel>
          </View>
          <View style={[style.container, style.itemsleft]}>
            <Text style={[style.loginheading, style.left, style.text]}>
              Local Recommendations
            </Text>
            <CategorySlider setFilter={setFilter} />
          </View>
          <ScrollView
            style={style.scroll}
            vertical
            showsVerticalScrollIndicator={false}
          >
            <View style={[style.container]}>
             <Reports filter={filter}/>
            </View>
          </ScrollView>
        </View>
      </View>
      <Navbar />
    </>
  );
};

export default Home;
