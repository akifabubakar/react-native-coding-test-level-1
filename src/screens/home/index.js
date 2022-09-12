import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Contact")}
          testID="navigateButton"
        >
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Pokedex")}
        >
          <Text style={styles.buttonText}>View Catalog</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
