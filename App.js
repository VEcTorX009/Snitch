import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from "./components/Onboarding"
import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';
import style from './style';
import LoginScreen from './LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={[styles.safeView,style.text]}>
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}


const styles = StyleSheet.create({
  safeView:{
     flex: 1,
     paddingTop: Platform.OS === 'android' ? 25 : 0, 
   },
});
