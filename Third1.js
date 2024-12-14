import {View,Text,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
export default function Third1({navigation})
{
  return(
    <ScrollView style={styles.container}>
    <View style={styles.head}>
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FirstPage")}>
      <Text style={styles.text}>{'\u2302'}</Text>
    </TouchableOpacity>

    <Text style={styles.heading}>About this Game</Text>
</View>
    <View style={styles.line}/>

      <Text style={styles.intro}>
      Werewolf is a great party game. You need at least 4 people to play. 
      </Text>
      <Text style={styles.select}>
      There will be a Narrator.
      Every player should select a card. You always have 1 Seer, 1 Healer, and atleast 1 Werewolf. The rest of the players should all be Villagers.
      Each player should look at their card, but they must keep it a secret.
   </Text>

    <Text style={styles.phases}>
      The game alternates between Night and Day phases, starting with the Night. At the start of Night, the Narrator tells all players, "Close your eyes."  Then, the Narrator prompts the following characters to wake up one by one...
 </Text>

 <Text style={styles.night}>Night Phase</Text>
   <Text style={styles.wolf}>
   The Narrator says, "Werewolves, open your eyes" The Werewolves do so, and look around and choose a person to kill. The Narrator should also note who the Werewolves are.All other players remain with their eyes closed. After choosing,the Narrator says "Werewolves, close your eyes."
    </Text>

<Text style={styles.heal}>
The Narrator awakens the Healer and says, "Healer, who would you like to heal?" The Healer can select anyone they'd like to keep alive.
The Healer points to who they'd like to heal, confirming with the Narrator. The person chosen, which could be themself, will survive if the Werewolves chose the same player to kill.
Healer goes back to sleep. If someone was killed, and then saved by the Healer, the Narrator will let the Village know by saying, "No one is killed", at the beginning of the Day phase.
</Text>

<Text style={styles.seer}>
The Narrator says "Seer, open your eyes." The Seer opens their eyes and silently points at another player.
The Narrator silently signs thumbs-up if the seer pointed at a Werewolf, and thumbs-down if the Seer pointed at others.
The Seer now has information they can use to persuade the Village.Seer goes back to sleep.
</Text>

<Text style={styles.day}>Day Phase</Text>
<Text style={styles.daytime}>
The Narrator says, "Everybody open your eyes; it's now daytime" and then announces who has been killed (or saved) last night. If someone was killed, that person is immediately out of the game, and they can reveal their character. 
</Text>

<Text style={styles.vothead}>
Voting Time:
</Text>

<Text style={styles.kill}>
Players vote for who they think the werewolf is . The person who got majority of votes will be killed for the day.
</Text>

<Text style={styles.winhead}>
Winner:
</Text>

<Text style={styles.winner}>
The Villagers win and saved the Village if they kill all of the Werewolves.
The Werewolves win if the number of Werewolves equal the number of Villagers left.
</Text>

    </ScrollView>
  );
}

const styles=StyleSheet.create({
 container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#e1a4f5',
    padding:0,
  },
  heading:{
    fontSize:27,
    // textAlign:'center',
    marginTop:45,
    paddingTop:17,
    marginRight:40,
  },
    line: {
    height: 1, // Thickness of the line
    backgroundColor: '#000', // Color of the line
    marginVertical: 10, // Space around the line
    width: '100%', // Full width of the parent container
  },
  intro:{
    fontSize:20,
    padding:15,
    marginBottom:6,
  },
  select:{
      fontSize:20,
    padding:15,
    marginBottom:6,
  },
  phases:{
    fontSize:20,
    padding:15,
    marginBottom:6,
  },
  night:{
   fontSize:27,
    paddingTop:15,
    paddingLeft:15,
    paddingRight:15,
  },
  wolf:{
    fontSize:20,
    padding:15,
    marginBottom:6,
  },
  heal:{
    fontSize:20,
    padding:15,
    marginBottom:6,
  },
  seer:{
    fontSize:20,
    padding:15,
    marginBottom:6,
  },
  day:{
   fontSize:27,
    paddingTop:15,
    paddingLeft:15,
    paddingRight:15,
  },
  daytime:{
fontSize:20,
    padding:15,
    marginBottom:6,
  },
  vothead:{
fontSize:27,
    paddingTop:15,
    paddingLeft:15,
    paddingRight:15,
  },
kill:{
  fontSize:20,
    padding:15,
    marginBottom:6,
},
winhead:{
fontSize:27,
    paddingTop:15,
    paddingLeft:15,
    paddingRight:15,
},
winner:{
  fontSize:20,
    padding:15,
    marginBottom:6,
},
 button: {
   backgroundColor: '#e1a4f5',
    borderRadius: 5, 
     marginTop:40,
    paddingTop:17,
  },
  text: {
    textAlign:'center',
    fontSize: 24,
    padding:10,
  },
  head:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
  }
})