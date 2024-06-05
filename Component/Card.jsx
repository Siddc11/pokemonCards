import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
        return {borderColor: '#A0A0A0', emoji: '😃'}
  }
};

export default function Card({ name, image, type, hp, moves, weakness }) {
  
    const {borderColor, emoji} = getTypeDetails(type);

    return (
    
    <View style={styles.Card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>
      <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      />
      <View style={styles.badgeContainer}>
        <View style={[styles.badge, {borderColor}]}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.text}>{type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.WeaknessText}>Weakness: {weakness.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Card: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 20,
    margin: 20,
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 2,
    elevation: 10,
    shadowColor: 'black',
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
   badgeContainer:{
    marginBottom: 15,
    alignItems:'center',
   },
   badge:{
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 5,
      borderWidth: 2,
      borderRadius: 20,
      elevation:20,
      backgroundColor: '#faf5f5'
   },
   emoji: {
    fontSize: 30,
    marginRight: 12,
   },
   text:{
    fontSize: 22,
    fontWeight: 'bold'
   },
   movesContainer:{
      marginBottom: 10
   },
   movesText:{
    fontSize: 18, 
    fontWeight: 'bold'
   },

   weaknessContainer:{
       marginBottom: 5
   },
   WeaknessText:{
     fontSize: 18, 
     fontWeight: 'bold'
   }
});
