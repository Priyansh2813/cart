import { ImageBackground ,StyleSheet,Text} from "react-native"

export default function CategoryCard({bgImg,title,onPress}){

  return (
   <ImageBackground source={bgImg} style={styles.background} >
    <Text style={styles.title} onPress={onPress}>{title}</Text>
   </ImageBackground>
  )
};

const styles = StyleSheet.create({
  background:{
    width:"100%",
    height:100,
    marginTop:10,
    overflow:"scroll"
  },
  title:{
    fontSize:20,
    color:"white",
    textAlign:"center",
    marginTop:"1%",
    

  }
});
