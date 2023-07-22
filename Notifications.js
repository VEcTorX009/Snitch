import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import Navbar from "./components/Navbar";
import { useNavigation } from "@react-navigation/native";

const Notifications = () => {
  const { aids } = useContext(UserContext);
  const navigation = useNavigation()
  const close = () => {
    navigation.navigate("Home")
};
  return(<>
<View style={style.container}>
<TouchableOpacity style={[style.close,style.left,style.yesz]} onPress={close}>
      <Icon
      onPress={close}
            name="close"
            size={30}
            color="#724ED9"
            style={[style.icon, style.bell]}
          />
      </TouchableOpacity>
    <Text style={style.loginheading}>Notifications</Text>

 {aids.map((val, index) => {
        return  (
          <View
            key={index}
            style={[style.container, style.rowcontainer, style.report]}
          >
            <View>
            <Image source={require("./assets/mapdanger.png")} ></Image>
            </View>
            <View style={[style.reportcontainer]}>
              <Text style={[style.reportheading]}>{val.location}</Text>
              <Text style={[style.reportlabel]}>{val.tags.map(e=> e)}</Text>
              <Text style={[style.reportlabel]}>{val.injuries}</Text>
              <View style={[style.rowcontainer]}>
                <Image source={{ uri: val.pfp }} style={style.pfp} />
                <Text style={[style.label, style.reportutils]}>
                  {val.authore}
                </Text>
                <Text style={[style.label, style.reportutils]}>
                  - {val.when}
                </Text>
              </View>
            </View>
          </View>
        )})
 }
</View><Navbar/>
 </>

  )
};

export default Notifications;
