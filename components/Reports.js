import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "../style";

const Reports = ({ filter }) => {
  const { search, setSearch } = useContext(UserContext);
  const [set, setSet] = useState("");
  useEffect(() => {
    setSet(search);
    setTimeout(() => {
      setSearch("");
    }, 9000);
  }, []);

  const reports = [
    {
      category: "School",
      title: "Reporting student prevents\ndrug ring and wins gold medal",
      pfp: require("../assets/report1pfp.png"),
      image: require("../assets/report1.png"),
      authore: "Sierra Jaren",
      time: "5 hours ago",
    },
    {
      category: "School",
      title: "Reporting student prevents\ndrug ring and wins gold medal",
      pfp: require("../assets/report1pfp.png"),
      image: require("../assets/report1.png"),
      authore: "Sierra Jaren",
      time: "5 hours ago",
    },
    {
      category: "National",
      title: "Student stops school shooting\nacross 4 states",
      pfp: require("../assets/report2pfp.png"),
      image: require("../assets/report2.png"),
      authore: "Aarav Cona",
      time: "8 hours ago",
    },
    {
      category: "National",
      title: "Student stops school shooting\nacross 4 states",
      pfp: require("../assets/report2pfp.png"),
      image: require("../assets/report2.png"),
      authore: "Aarav Cona",
      time: "8 hours ago",
    },
  ];
  return search === ""
    ? reports.map((val, index) => {
        return !filter ? (
          <TouchableOpacity
            key={index}
            style={[style.container, style.rowcontainer, style.report]}
          >
            <View>
              <Image source={val.image} style={[style.reportimage]} />
            </View>
            <View style={[style.reportcontainer]}>
              <Text style={[style.reportlabel]}>{val.category}</Text>
              <Text style={[style.reportheading]}>{val.title}</Text>
              <View style={[style.rowcontainer, style.gapmed]}>
                <Image source={val.pfp} style={style.pfp} />
                <Text style={[style.label, style.reportutils]}>
                  {val.authore}
                </Text>
                <Text style={[style.label, style.reportutils]}>
                  - {val.time}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : val.category === filter ? (
          <TouchableOpacity
            key={index}
            style={[style.container, style.rowcontainer, style.report]}
          >
            <View>
              <Image source={val.image} style={[style.reportimage]} />
            </View>
            <View style={[style.reportcontainer]}>
              <Text style={[style.reportlabel]}>{val.category}</Text>
              <Text style={[style.reportheading]}>{val.title}</Text>
              <View style={[style.rowcontainer, style.gapmed]}>
                <Image source={val.pfp} style={style.pfp} />
                <Text style={[style.label, style.reportutils]}>
                  {val.authore}
                </Text>
                <Text style={[style.label, style.reportutils]}>
                  - {val.time}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
          ""
        );
      })
    : reports.map((val, index) => {
        return val.title.includes(set) ? (
          <TouchableOpacity
            key={index}
            style={[style.container, style.rowcontainer, style.report]}
          >
            <View>
              <Image source={val.image} style={[style.reportimage]} />
            </View>
            <View style={[style.reportcontainer]}>
              <Text style={[style.reportlabel]}>{val.category}</Text>
              <Text style={[style.reportheading]}>{val.title}</Text>
              <View style={[style.rowcontainer, style.gapmed]}>
                <Image source={val.pfp} style={style.pfp} />
                <Text style={[style.label, style.reportutils]}>
                  {val.authore}
                </Text>
                <Text style={[style.label, style.reportutils]}>
                  - {val.time}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : (
         ""
        );
      });
};

export default Reports;
