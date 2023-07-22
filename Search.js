import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import UserContext from "./utils/UserContext";
import { useContext } from "react";
import style from "./style";
import Reports from "./components/Reports";

const Search = () => {
  const { search,setSearch } = useContext(UserContext);
  const [set, setSet] = useState("");
  useEffect(() => {
    setSet(search);
    setTimeout(() => {
      setSearch("");
    }, 9000);
  }, []);

  return (
    <>
    <View style={style.container}>

      <Text style={style.loginheading}>Searching for "{set.trim()}"</Text>
      <Reports />
    </View>

      <Navbar />
    </>
  );
};

export default Search;
