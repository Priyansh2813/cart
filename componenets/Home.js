

import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import NewButton from './NewButton';
import Categories from './Categories';

export default function Home({navigation}){
  return (
    <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.background}
      >
        <View>
         <Text style={styles.upto}>Up to 50% off !!</Text>
         <Image source={require("../assets/logo.png")} style={styles.logo}></Image>
         <Text style={styles.get}>Get everything thing you want
          at lowest prices</Text>
          <View style={styles.button}>
 <NewButton title="Explore!!" onPress={()=>navigation.navigate(Categories)}/>
 </View>
        </View>
        
      </ImageBackground>
  )
}
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  logo:{
    width: 280,
    height: 275,
    marginLeft: '15%',
    marginTop: '10%'
  },
  text: {
    color: 'white',
    marginTop: '-25%',
    marginLeft: '20%'
  },
 upto:{
  color:'#795757',
  textAlign:"center",
  marginTop:'25%',
  fontSize:50,
 },
 get:{
  color:'#B17457',
  fontSize:25,
  textAlign:'center',
  fontStyle:"italic",
  marginTop:'30%'
 
 },
 button:{
  marginTop:"10%"
 },
});