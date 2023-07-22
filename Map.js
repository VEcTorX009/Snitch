import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import style from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const Map = () => {
  const [filter, setFilter] = useState("");
  const handleSearch = () => {};
  const categories = [
    { id: 0, name: "All" }, // Change id to 0 for 'All' category
    { id: 1, name: "School" },
    { id: 2, name: "Exits" },
    { id: 3, name: "Reported" },
    // Add more categories as needed
  ];
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState(0);

  function handleCategoryPress  (categoryId)  {
    setSelectedCategory(categoryId);
    setFilter(
      categories[categoryId].name === "All" ? "" : categories[categoryId].name
    );
  };

  return (
    <>
      <ImageBackground
        source={require("./assets/mapbg.png")}
        style={style.backgroundImage}
      >
        <View style={style.mapbg}>
          <View
            style={[
              style.inputContainer,
              style.searchwidth,
              style.noborder,
              style.loginsearch,
            ]}
          >
            <Icon name="search" size={25} color="#999" style={style.icon} />
            <TextInput
              style={[
                style.input,
                style.noborder,
                style.inputwidth,
                style.searchinputwidth,
              ]}
              placeholder="Find your location"
              value={search}
              onChangeText={(e) => setSearch(e)}
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
        </View>
        <View style={[style.mapsearch]}>
          <ScrollView
            style={style.mapcat}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  style.category,
                  selectedCategory === category.id
                    ? { backgroundColor: "#724ED9" }
                    : { backgroundColor: "#F0F0F0" }, 
                ]}
                onPress={() => handleCategoryPress(category.id)}
              >
                <Text
                  style={[
                    style.cathead,
                    selectedCategory === category.id && { color: "white" },
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={style.mapbody}>
            {filter === "" ? (
              <>
                <Image
                  source={require("./assets/mapdanger.png")}
                  style={[style.danger, style.danger1]}
                />
                <Image
                  source={require("./assets/mapdanger.png")}
                  style={[style.danger, style.danger2]}
                />
                <Image
                  source={require("./assets/mapdanger.png")}
                  style={[style.danger, style.danger3]}
                />
                <Image
                  source={require("./assets/maprun.png")}
                  style={[style.run, style.run1]}
                />
                <Image
                  source={require("./assets/maprun.png")}
                  style={[style.run, style.run2]}
                />
                <Image
                  source={require("./assets/maprun.png")}
                  style={[style.run, style.run3]}
                />
                <Image
                  source={require("./assets/mapschool.png")}
                  style={[style.school, style.school1]}
                />
                <Image
                  source={require("./assets/mapschool.png")}
                  style={[style.school, style.school2]}
                />
                <Image
                  source={require("./assets/mapschool.png")}
                  style={[style.school, style.school3]}
                />
              </>
            ) : filter === "School" ? (
              <>
                <Image
                  source={require("./assets/mapschool.png")}
                  style={[style.school, style.school1]}
                />
                <Image
                  source={require("./assets/mapschool.png")}
                  style={[style.school, style.school2]}
                />
                <Image
                  source={require("./assets/mapschool.png")}
                  style={[style.school, style.school3]}
                />
              </>
            ) : filter==="Reported" ? (
              <>
                <Image
                  source={require("./assets/maprun.png")}
                  style={[style.run, style.run1]}
                />
                <Image
                  source={require("./assets/maprun.png")}
                  style={[style.run, style.run2]}
                />
                <Image
                  source={require("./assets/maprun.png")}
                  style={[style.run, style.run3]}
                />
                
              </>
            ):  <><Image
                    source={require("./assets/mapdanger.png")}
                    style={[style.danger, style.danger1]} /><Image
                      source={require("./assets/mapdanger.png")}
                      style={[style.danger, style.danger2]} /><Image
                      source={require("./assets/mapdanger.png")}
                      style={[style.danger, style.danger3]} /></>}
          </View>
        </View>
      </ImageBackground>
      <Navbar />
    </>
  );
};

export default Map;
