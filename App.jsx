import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Tiempo from "./Tiempo";

export default function App() {
  const ciudades = [
    "Madrid",
    "Quito",
    "Buenos Aires",
    "Lima",
    "Sevilla",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{textAlign: "center", fontSize: 30}}>Clima API</Text>
      <View>
        <Tiempo nombre={"Guadalajara"} />
      </View>
      <View>
        <FlatList
          style={{marginTop: 50}}
          data={ciudades}
          renderItem={({ item }) => <Tiempo nombre={item} />}
          keyExtractor={(item) => item}
          horizontal={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: "auto",
    paddingTop: 50
  },
});
