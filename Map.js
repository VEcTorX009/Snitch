import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import style from './style'
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from 'react-native-gesture-handler';
import UserContext from './utils/UserContext';
import { useContext } from 'react';

const Map = () => {
    const {  setSearch, search } =
    useContext(UserContext);
  const handleSearch = () => {};

  return (
    <>
     <View style={style.container}>
     <ImageBackground source={require("./assets/mapbg.png")}   style={style.backgroundImage}>
  
        <View style={[style.inputContainer, style.searchwidth, style.noborder]}>
          <Icon name="search" size={25} color="#999" style={style.icon} />
          <TextInput
            style={[
              style.input,
              style.noborder,
              style.inputwidth,
              style.searchinputwidth,
            ]}
            placeholder="Find the news you want"
            value={search}
            onChangeText={(e) => setSearch(e)} />
          <TouchableOpacity
            onPress={handleSearch}
            style={[style.getstartedbutton, style.searchbutton]}
          >
            <Text style={[style.textwhite, style.textcenter, style.buttontext]}>
              Search
            </Text>
          </TouchableOpacity>
        </View>
    </ImageBackground>
        </View>
      <Navbar/>
    </>
  )
}

export default Map