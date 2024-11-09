import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useState } from 'react';

export default function Second1({ route }) {
  const { number } = route.params;

  const [disabledBoxes, setDisabledBoxes] = useState([]);
  const [boxCharacters, setBoxCharacters] = useState([]);

  const getCharacterForPlayer = (number) => {

    let char = [];
    if (number === 4) {
      char = ['Werewolf', 'Seer', 'Healer', 'Villager'];
    } else if (number > 4 && number <= 7) {
      char = ['Werewolf', 'Seer', 'Healer', ...char];
    } else if (number > 7 && number < 12) {
      char = ['Werewolf', 'Werewolf', 'Seer', 'Healer', ...char];
    } else {
      char = ['Werewolf', 'Werewolf', 'Werewolf', 'Seer', 'Healer', ...char];
    }

    const villagersCount=number-char.length;
    char=[...char,...Array(villagersCount).fill('Villager')];

    return char;
  };



  const [remainingChars, setRemainingChars] = useState(
    getCharacterForPlayer(number)
  );

  const handleBoxClick = (index) => {
    if (!disabledBoxes.includes(index) && remainingChars.length>0)
    {
      const randomIndex = Math.floor(Math.random() * remainingChars.length);
      const selectedChar = remainingChars[randomIndex];

       setDisabledBoxes([...disabledBoxes, index]);
      setBoxCharacters({ ...boxCharacters, [index]: selectedChar });

      const newremainingChars=[...remainingChars];
      newremainingChars.splice(randomIndex,1);
      setRemainingChars(newremainingChars);

      
      Alert.alert('You are a', selectedChar, [
        {
          text: 'Close',
        },
      ]);
    }
  };

  const printCharacters = () => {
    
    return char[randomIndex];
  };

  const boxes = Array.from({ length: number }, (_, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => handleBoxClick(index)}
      disabled={disabledBoxes.includes(index)}>
      <View
        key={index}
        style={[styles.box, disabledBoxes.includes(index) && styles.openedBox]}>
        <Text style={styles.player}>Player {index + 1}</Text>

        <Image source={require('../assets/profile.jpg')} style={styles.img} />
      </View>
    </TouchableOpacity>
  ));
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Pick one Card</Text>
      <View style={styles.line}></View>

      <ScrollView vertical contentContainerStyle={styles.boxContainers}>
        {boxes}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#d68df2',
  },
  box: {
    width: 130,
    height: 160,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation:10,
    margin: 7,
    marginBottom: 10,
    borderWidth: 0.875, // Border width (black border)
    borderColor: 'black',
  },
  openedBox: {
    backgroundColor: '#d4d4d4',
  },
  boxContainers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  head: {
    fontSize: 30,
    textAlign: 'center',
    padding: 0,
    marginTop: 70,
    marginBottom: 20,
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 20,
    alignSelf: 'center',
    padding: 3,
  },
  player: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    textShadowColor: 'black',
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    marginBottom: 20,
  },
});
