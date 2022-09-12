import { useEffect } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { getPokemons } from "../../redux/reducers/Pokedex";
import ColumnList from "../../components/ColumnList";
import Card from "../../components/Card";

const pokedexSelector = (state) => state.pokedex;

export default function PokedexScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { pokemons, offset, listLoading } = useSelector(pokedexSelector);

  useEffect(() => {
    if (pokemons.length < 1) {
      dispatch(getPokemons(offset));
    }
  }, []);

  const gotoDetails = (name) => {
    navigation.navigate("Details", { name });
  };

  const renderItem = ({ item }) => (
    <Card item={item} onClikcView={() => gotoDetails(item.name)} />
  );

  const renderFooter = () =>
    pokemons.length > 0 && listLoading ? (
      <ActivityIndicator color="grey" style={styles.spinner} />
    ) : null;

  return (
    <SafeAreaView style={styles.container}>
      {pokemons.length < 1 && listLoading ? (
        <ActivityIndicator color="grey" style={styles.spinner} />
      ) : (
        <ColumnList
          renderItem={renderItem}
          data={pokemons}
          onEndReached={() => dispatch(getPokemons(offset))}
          listFooterComponent={renderFooter}
        />
      )}
    </SafeAreaView>
  );
}
