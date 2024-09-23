import { Text, View,Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
export default function CartItem({image_url,name,price,quantity,id}){

  const {removeFromCart} =useContext(CartContext);

  return(<View style={styles.outer}>
    <View style={styles.container}>
      <Image source={{uri:image_url}} />
      <Text>{name}</Text>
      <Text>${price}</Text>
      <Text>{quantity}</Text>
      <View style={styles.close}>
      <Text style={styles.total}>${price*quantity}</Text>
     
      </View>

      </View>
      <Icon name="close" size={20} onPress={()=>removeFromCart(id)}/  >
    </View>
  )
}

const styles = StyleSheet.create({
  outer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    

  },
container:{
  display:"flex",
  flexDirection:"row",
  borderColor:"black",
  borderWidth:2,
  justifyContent:"space-between",
  padding:10,
  width:380,
  alignSelf:"center",
  marginTop:10,
  marginRight:10

},
close:{
  display:"flex",
  flexDirection:"row",
  alignContent:"center",
  justifyContent:"center",
  alignItems:"center"
},
total:{
  marginRight:5
}
})