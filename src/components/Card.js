import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import styles from "./styles";
import { padLeadingZeros } from "../utils/Helper";

export default function Card(props) {
  const { hidden, item, onClikcView } = props;
  return (
    <View
      style={[
        styles.cardContainer,
        { backgroundColor: hidden ? "transparent" : "#CCC" },
      ]}
    >
      <Text>{`#${padLeadingZeros(item?.id, 3)}`}</Text>
      <Text>{item?.name}</Text>
      <View style={styles.cardImageContainer}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: item?.imageUrl }}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity style={styles.cardButton} onPress={onClikcView}>
        <Text style={{ color: "white" }}>View</Text>
      </TouchableOpacity>
    </View>
  );
}
