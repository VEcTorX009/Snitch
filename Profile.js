import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Navbar from './components/Navbar'
import style from './style'

const Profile = () => {
  return (
    <>
      <View style={style.profilebih}>
        <ImageBackground source={require("./assets/settings.png")} style={style.backgroundImage}></ImageBackground>
      </View>
    <Navbar/></>
  )
}

export default Profile