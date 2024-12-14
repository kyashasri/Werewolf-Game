import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  Modal,
} from 'react-native';
import { useState } from 'react';

export default function Second1({ route, navigation }) {
  const { number } = route.params;

  // State to control modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  // State to store the selected character for the modal
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // State for disabling clicked boxes
  const [disabledBoxes, setDisabledBoxes] = useState([]);
  const [boxCharacters, setBoxCharacters] = useState([]);

  // Generate characters based on player count
  const getCharacterForPlayer = (number) => {
    let char = [];
    if (number === 4) {
      char = ['Werewolf', 'Seer', 'Healer', 'Villager'];
    } else if (number > 4 && number <= 7) {
      char = ['Werewolf', 'Seer', 'Healer', ...char];
    } else if (number > 7 && number < 12) {
      char = [
        'Werewolf',
        'Werewolf',
        'Seer',
        'Healer',
        ...char,
      ];
    } else {
      char = [
        'Werewolf',
        'Werewolf',
        'Werewolf',
        'Seer',
        'Healer',
        ...char,
      ];
    }

    const villagersCount = number - char.length;
    char = [...char, ...Array(villagersCount).fill('Villager')];

    return char;
  };

  // Initialize remaining characters
  const [remainingChars, setRemainingChars] = useState(
    getCharacterForPlayer(number)
  );

  const handleBoxClick = (index) => {
    if (!disabledBoxes.includes(index) && remainingChars.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingChars.length);
      const selectedChar = remainingChars[randomIndex];

      // Update state for clicked box
      setDisabledBoxes([...disabledBoxes, index]);
      setBoxCharacters({ ...boxCharacters, [index]: selectedChar });

      // Remove character from the remaining list
      const newRemainingChars = [...remainingChars];
      newRemainingChars.splice(randomIndex, 1);
      setRemainingChars(newRemainingChars);

      // Show modal with selected character
      setSelectedCharacter(selectedChar);
      setModalVisible(true);
    }
  };

  const boxes = Array.from({ length: number }, (_, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => handleBoxClick(index)}
      disabled={disabledBoxes.includes(index)}>
      <View
        style={[styles.box, disabledBoxes.includes(index) && styles.openedBox]}>
        <Text style={styles.player}>Player {index + 1}</Text>
        <Image source={require('../assets/profile.jpg')} style={styles.img} />
  
      </View>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.head}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FirstPage')}>
          <Text style={styles.text}>{'\u2302'}</Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Pick one Card</Text>
      </View>
      <View style={styles.line}></View>

      {/* Player Boxes */}
      <ScrollView vertical contentContainerStyle={styles.boxContainers}>
        {boxes}
      </ScrollView>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>You are a:</Text>
            <Text style={styles.characterText}>{selectedCharacter}</Text>

              {selectedCharacter === "Werewolf" && (
                <Image 
                  source={require('../assets/wolfpic.jpeg')} 
                  style={styles.charimg} 
                />
              )}

            {selectedCharacter === "Healer" && (
                <Image 
                  source={require('../assets/healerpic.jpeg')} 
                  style={styles.charimg} 
                />
              )}
            } 
             {selectedCharacter === "Seer" && (
                <Image 
                  source={require('../assets/seerpic.jpg')} 
                  style={styles.charimg} 
                />
              )}
            {selectedCharacter === "Villager" && (
                <Image 
                  source={require('../assets/villagerpic.jpeg')} 
                  style={styles.charimg} 
                />
              )}
            <Button
              title="Close"
              onPress={() => setModalVisible(false)}
              color="purple"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1a4f5',
  },
  box: {
    width: 130,
    height: 160,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 10,
    margin: 7,
    marginBottom: 10,
    borderWidth: 0.875,
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
  heading: {
    fontSize: 29,
    marginTop: 55,
    paddingTop: 17,
    marginRight: 42,
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
  },
  line: {
    width: '100%',
    height: 1.75,
    backgroundColor: 'black',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#e1a4f5',
    borderRadius: 5,
    marginTop: 50,
    paddingTop: 17,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    padding: 10,
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    height:350,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  characterText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  charimg: {
    width: 170,
    height: 170,
    borderRadius: 20,
    alignSelf: 'center',
    padding: 3,
    marginBottom:12,
  },
 
});
