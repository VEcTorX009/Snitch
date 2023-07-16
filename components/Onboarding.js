import { View, Text, StyleSheet, FlatList } from "react-native";
import onboard from "../onboard";
import OnboardingData from "./OnboardingData";

export default Onboarding = () => {
  return (
    <View>
      <FlatList
        data={onboard}
        renderItem={({ item }) => (
          <OnboardingData
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )}
        showsVerticalScrollIndicator
      />
    </View>
  );
};
