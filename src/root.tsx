import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, ImageBackground } from "react-native";

import Sprite from "./components/Sprite";
import Text from "./components/Text";
import { PokeList } from "./types";
import { getNumber } from "./utils";

const maxWidth = 513;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundWrapper: {
    maxWidth,
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: "100%",
    maxWidth,
    flex: 1,
    resizeMode: "contain",
  },
  glassWrapper: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  glass: {
    width: "100%",
    maxWidth,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
  screen: {
    width: "100%",
    height: 175,
    paddingLeft: "15%",
    paddingRight: "25%",
  },
  row: {
    height: 80,
    flexDirection: "row",
  },
  name: {
    display: "flex",
    height: 80,
    alignItems: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default function Root() {
  const [list, setList] = useState<PokeList>();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20").then(
      (response) =>
        response.json().then((data) => {
          setList(data);
        })
    );
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("./assets/bg-pokedex.png")}
        style={styles.backgroundWrapper}
        imageStyle={styles.background}
      >
        <ImageBackground
          source={require("./assets/glass.png")}
          style={styles.glassWrapper}
          imageStyle={styles.glass}
        >
          <View style={styles.screen}>
            <ScrollView>
              {list?.results.map((pokemon) => (
                <View style={styles.row} key={`pk_${pokemon.name}`}>
                  <Sprite num={getNumber(pokemon.url)} />
                  <Text text={pokemon.name} style={styles.name} />
                </View>
              ))}
            </ScrollView>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}
