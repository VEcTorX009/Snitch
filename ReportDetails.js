import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import UserContext from "./utils/UserContext";
import style from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native-gesture-handler";

const ReportDetails = () => {
  const { selectedReport, setSelectedReport } = useContext(UserContext);
  const close = () => {
      setSelectedReport(null);
  };

  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>

    <View style={style.loginscreencontainer}>
        <TouchableOpacity style={[style.close,style.left,style.yesz]} onPress={close}>
      <Icon
      onPress={close}
            name="close"
            size={30}
            color="#724ED9"
            style={[style.icon, style.bell]}
          />
      </TouchableOpacity>
<View style= {[style.lesscontainer]}>

      <Text style={[style.text, style.loginheading, style.semibold,{marginTop: 30}]}>
        {selectedReport?.title}
      </Text>
      <Image source={selectedReport?.image} style={[style.banner,style.noround]} />
<View>

      <Text style={[style.textcenter]}>{selectedReport?.when}</Text>
      <Text style={[style.text,style.textleft]}>{selectedReport?.location}</Text>
</View>
      <View>
      <Text style={[style.text]}>{selectedReport?.description}</Text>
      <Text style={[style.text]}>People Involved: {selectedReport?.involved}</Text>
      <Text style={[style.text]}>Timeline: {selectedReport?.timeline}</Text>
      <Text style={[style.text]}>{selectedReport?.social}</Text>
      </View>
      <View style={style.sliderbody}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {selectedReport?.tags.map((val,index)=>{
        return (
          <TouchableOpacity
            key={index}
            style={[
              style.category,
               {backgroundColor: '#724ED9'} 
            ]}
          >
            <Text style={[style.cathead, { color: 'white' }]}>
              {val}
            </Text>
          </TouchableOpacity>
        )
      })}
      </ScrollView>
    </View>

      <View style={[style.container,style.rowcontainer, { marginTop: 10 }, {justifyContent :"center"}]}>
        <Image source={selectedReport?.pfp} style={style.pfp} />
        <Text style={[style.text, style.semibold, { marginLeft: 10 }]}>
          {selectedReport?.authore}
        </Text>
        <Text style={[style.text, { marginLeft: 5, color: "gray" }]}>
          - {selectedReport?.time}
        </Text>
</View>
      </View>
    </View>
    </ScrollView>

  );
};

export default ReportDetails;
