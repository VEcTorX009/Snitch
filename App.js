import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from "./components/Onboarding"

export default function App() {
  return (
    <View style={styles.safeView}>
      <StatusBar style="auto" />
  <Onboarding />
    </View>
  );
}


const styles = StyleSheet.create({
  safeView:{
     flex: 1,
     paddingTop: Platform.OS === 'android' ? 25 : 0, 
   }
});
