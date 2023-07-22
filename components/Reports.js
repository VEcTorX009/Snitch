import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "../style";

const Reports = ({ filter }) => {
  const { search, setSearch, setSelectedReport,reports } = useContext(UserContext);
  const [set, setSet] = useState("");
  useEffect(() => {
    setSet(search);
  }, []);
  
  const handleReportPress = (report) => {
    setSelectedReport(report);
  };
  return search === ""
    ? reports.map((val, index) => {
        return !filter ? (
          <TouchableOpacity
            key={index}
            style={[style.container, style.rowcontainer, style.report]}
            onPress={() => handleReportPress(val)} // Pass the report when pressed
          >
            <View>
              <Image source={{ uri: val.image }} style={[style.reportimage]} />
            </View>
            <View style={[style.reportcontainer]}>
              <Text style={[style.reportlabel]}>{val.category}</Text>
              <Text style={[style.reportheading]}>{val.title}</Text>
              <View style={[style.rowcontainer, style.gapmed]}>
                <Image source={{ uri: val.pfp }} style={style.pfp} />
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
            onPress={() => handleReportPress(val)} // Pass the report when pressed
          >
            <View>
              <Image source={{ uri: val.image }} style={[style.reportimage]} />
            </View>
            <View style={[style.reportcontainer]}>
              <Text style={[style.reportlabel]}>{val.category}</Text>
              <Text style={[style.reportheading]}>{val.title}</Text>
              <View style={[style.rowcontainer, style.gapmed]}>
                <Image source={{ uri: val.pfp }} style={style.pfp} />
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
        return val.title.toLowerCase().includes(set.trim().toLowerCase()) ||
          val.category.toLowerCase().includes(set.trim().toLowerCase()) || val.description.toLowerCase().includes(set.trim().toLowerCase()) || val.authore.toLowerCase()===(set.trim.toLowerCase())   ? (
          <TouchableOpacity
            key={index}
            style={[style.container, style.rowcontainer, style.report]}
            onPress={() => handleReportPress(val)} // Pass the report when pressed
          >
            <View style={[style.container,style.reportcontainer,style.leftimg]}>
              <Image source={{ uri: val.image }} style={[style.reportimage]} />
            </View>
            <View style={[style.reportcontainer]}>
              <Text style={[style.reportlabel]}>{val.category}</Text>
              <Text style={[style.reportheading]}>{val.title}</Text>
              <View style={[style.rowcontainer, style.gapmed]}>
                <Image source={{ uri: val.pfp}} style={style.pfp} />
                <Text style={[ style.reportutils]}>
                  {val.authore}
                </Text>
                <Text style={[ style.reportutils]}>
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
