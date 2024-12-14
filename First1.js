import { Text, View, StyleSheet,TouchableOpacity,ImageBackground } from 'react-native';
import React,{useState} from 'react';
import { useFonts } from 'expo-font';

export default function First1({navigation}) {
  const img = require('../assets/werewolf_super_hd.jpeg');
  //  let [fontsLoaded] = useFonts({
  //   'Creepster': require('../assets/Creepster-Regular.ttf'),
  // });

  // // Ensure the font is loaded before rendering the rest
  // if (!fontsLoaded) {
  //   return <Text>Loading...</Text>;
  // }

  const[number,setNumber]=useState(4);

  const increment=()=>setNumber(number<20?number+1:20);
  const decrement=()=>setNumber(number>4?number-1:4);
  return (
   <View style={styles.container}>
   <ImageBackground source={img} resizeMode="cover" style={styles.img}>

   <Text style={styles.head}>Werewolf</Text>
  
   <View style={styles.naa}>
      <Text style={styles.num}>No.of Players : {number}</Text>

      <View style={styles.whole}>
        <TouchableOpacity style={styles.up} onPress={increment}>
          <Text style={styles.ua}>˄</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dow} onPress={decrement}>
          <Text style={styles.da}>˅</Text>
        </TouchableOpacity>
        </View>
      </View>

       <View style={styles.aboutbtn}>
        <TouchableOpacity onPress={()=>navigation.navigate("ThirdPage")}>
          <Text style={styles.about}> ABOUT </Text>
        </TouchableOpacity>
      
      </View>

       <View style={styles.strtbtn}>
        <TouchableOpacity onPress={()=>navigation.navigate("SecondPage",{number})}>
          <Text style={styles.strt}> START </Text>
        </TouchableOpacity>
      
      </View>
    </ImageBackground>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
  },
  img:{
    flex:1,
    width:'100%',
    height:'100%',
      transform: [{ scale: 0.971 }],
  },

  head:{
    // fontFamily:'Creepster', 
    textAlign:'center',
    fontSize:46,
    marginTop:80,
    fontWeight:'bold',
    color:'#48195e',
    textShadowColor:'#d8a7d3',
    textShadowOffset: { width: 4, height: 2 }, 
    textShadowRadius: 5,  
  },
  naa:{
    marginTop:330,
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#efdaf5',
    borderRadius:20,
    width:325,
    height:73,
    marginLeft:20,
    alignSelf:'center',
    elevation:6,    
  },
  num:{
    fontSize:24,
    textAlign:'center',
    marginTop:15,
    marginLeft:25,
  
 },
  ua:{
      backgroundColor:'#d2cdd4',
      borderRadius:1,
      fontSize:24,
      textAlign:'right',
      marginLeft:275,
      width:50,
      textAlign:'center',
      borderTopRightRadius:21,

  },
  da:{
     backgroundColor:'#d2cdd4',
      borderRadius:1,
      fontSize:24,
      textAlign:'right',
      marginLeft:275,
      width:50,
      textAlign:'center',
      borderBottomRightRadius:21,
  },
  whole:{
    position:'absolute',
  },
 
  strtbtn:{
    width:120,
    height:60,
    backgroundColor:'#efdaf5',
    fontSize:300,
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    borderRadius:14,
    alignSelf:'center',
  },
  strt:{
    fontSize:20,
  },
  aboutbtn:{
    width:120,
    height:60,
    backgroundColor:'#efdaf5',
    fontSize:300,
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    borderRadius:14,
    alignSelf:'center',
  },
  about:{
    fontSize:20,
  }



  
});
