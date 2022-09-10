import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.contactButton} onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.contactText}>Contact Us</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
