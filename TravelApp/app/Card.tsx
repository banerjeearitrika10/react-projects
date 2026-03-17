import { View, Text, StyleSheet } from 'react-native';

export default function Card({ item }:any) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 320,
    height: 420,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5
  },
  text: {
    fontSize: 24
  }
});