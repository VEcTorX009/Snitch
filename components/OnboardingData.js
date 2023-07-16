import { View, Text, StyleSheet, FlatList, Image, useWindowDimensions } from 'react-native'


export default OnboardingData = ({ image, title, description }) => {

    const {width} = useWindowDimensions();
    
    return (
      <View style={[styles.container, {width}]}>
        <Image source={image} style={[styles.image, {width, resizeMode: 'cover'}]}  />

        <View>
            <Text>{title}</Text>
            <Text>{description}</Text>
        </View>
      </View>
    )

}

const styles = StyleSheet.create({
    container:{
        paddingTop: 20,
       justifyContent: 'center',
       alignItems: 'center'
     },
     image: {
        flex: 0.7,
        justifyContent: 'center'
     }
  });