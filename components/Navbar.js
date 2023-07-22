import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';
import style from '../style'

const Navbar = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={style.navbarbody}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={[style.navbariconContainer, route.name === 'Home' && style.navbariconContainerActive]}
      >
        <Image source={require("../assets/home.png")} style={style.navbaricons} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Map')}
        style={[style.navbariconContainer, route.name === 'Map' && style.navbariconContainerActive]}
      >
        <Image source={require("../assets/map.png")} style={style.navbaricons} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Add')}
        style={[style.navbariconContainer, route.name === 'Add' && style.navbariconContainerActive]}
      >
        <Image source={require("../assets/post.png")} style={[style.navbaricons, style.posticon]} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Emergency')}
        style={[style.navbariconContainer, route.name === 'Emergency' && style.navbariconContainerActive]}
      >
        <Image source={require("../assets/warning.png")} style={style.navbaricons} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={[style.navbariconContainer, route.name === 'Settings' && style.navbariconContainerActive]}
      >
        <Image source={require("../assets/profile.png")} style={style.navbaricons} />
      </TouchableOpacity>
    </View>
  )
}

export default Navbar;
