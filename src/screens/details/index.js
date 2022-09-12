import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import StatChart from "../../components/StatChart";

import { clearDetail, getPokemonDetail } from "../../redux/reducers/Pokedex";
import {
  deciToCenti,
  getTypeColour,
  hectoToKilo,
  padLeadingZeros,
} from "../../utils/Helper";
import styles from "./styles";

const pokedexSelector = (state) => state.pokedex;

function TypePill(props) {
  const { type } = props;
  const color = getTypeColour(type);

  return (
    <View style={[styles.typeContainer, { backgroundColor: color }]}>
      <Text style={styles.typeText}>{type}</Text>
    </View>
  );
}

function GeneralComp(props) {
  const { label, value } = props;
  return (
    <View style={styles.generalSection}>
      <Text style={styles.generalLabel}>{label}</Text>
      <Text style={styles.generalText}>{value}</Text>
    </View>
  );
}

export default function PokemonDetails() {
  const { params } = useRoute();
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const { pokemonDetail, detailsLoading } = useSelector(pokedexSelector);

  useEffect(() => {
    if (params?.name) {
      navigation.setOptions({ title: params?.name });
      dispatch(getPokemonDetail(params.name));
    }

    return () => {
      dispatch(clearDetail());
    };
  }, []);

  const getTypes = () => {
    const arr = [];
    if (Array.isArray(pokemonDetail?.types)) {
      pokemonDetail?.types.forEach((type) => {
        arr.push(<TypePill type={type} key={type} />);
      });
    }

    return arr;
  };

  return (
    <SafeAreaView style={styles.container}>
      {detailsLoading ? (
        <ActivityIndicator color="grey" style={styles.spinner} />
      ) : (
        <ScrollView
          style={{
            height: "100%",
            width: "100%",
          }}
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
        >
          <Image
            style={styles.image}
            source={{ uri: pokemonDetail?.imageUrl }}
            resizeMethod="scale"
            resizeMode="contain"
          />

          {/* General Card Section */}
          <View style={styles.labelSection}>
            <View style={styles.generalContainer}>
              <GeneralComp
                label="ID"
                value={`#${padLeadingZeros(pokemonDetail?.id, 3)}`}
              />
              <GeneralComp label="Ability" value={pokemonDetail?.ability} />
            </View>
            <View style={styles.generalContainer}>
              <GeneralComp
                label="Height"
                value={`${deciToCenti(pokemonDetail?.height)} cm`}
              />
              <GeneralComp
                label="Weight"
                value={`${hectoToKilo(pokemonDetail?.weight)} kg`}
              />
            </View>
          </View>

          {/* Types Card Section */}
          <View style={styles.labelSection}>
            <Text style={styles.labelText}>Type</Text>
            <View style={styles.pillContainer}>{getTypes()}</View>
          </View>

          {/* Stat Card Section */}
          <View style={styles.labelSection}>
            <Text style={styles.labelText}>Stat</Text>
            {/* <View style={styles.generalContainer} /> */}
            {pokemonDetail?.stats && <StatChart data={pokemonDetail.stats} />}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
