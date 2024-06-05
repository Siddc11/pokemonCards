import { SafeAreaView, StyleSheet, StatusBar, Platform, ScrollView} from 'react-native';
import Card from './Component/Card';


export default function App() {

  //Pokemon info
  
  //Data of Charmandar
  const charmander = {
        name: 'Charmander',
        image: require('./assets/charmander.png'),
        type: 'Fire',
        hp: 39,
        moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
        weakness: ['Water', 'Rock'],
  };

   //Data of bulbasaurData
   const bulbasaur = {
    name: 'Bulbasaur',
    image: require('./assets/bulbasaur.png'),
    type: 'Grass',
    hp: 56,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weakness: ['Fire', 'Ice', 'Flying'],
};

 //Data of squirtleData
 const squirtle = {
  name: 'Squritle',
  image: require('./assets/squirtle.png'),
  type: 'Water',
  hp: 60,
  moves: ['Tackle', 'Water Gun', 'Withdraw'],
  weakness: ['Electric', 'Grass'],
};

 //Data of Charmandar
 const pikachu = {
  name: 'Pikachu',
  image: require('./assets/pikachu.png'),
  type: 'Electric',
  hp: 80,
  moves: ['Quick Attack', 'ThunderBolt'],
  weakness: ['Ground', 'Grass'],
};

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#f5f5f5"} barStyle={'dark-content'}/>
       <Card {...pikachu} />
       <Card {...bulbasaur} />
       <Card {...charmander} />
       <Card {...squirtle} />
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS==='android'? 15: 0,
  },
});
