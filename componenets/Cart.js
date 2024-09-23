import {Text, ScrollView,StyleSheet,View} from "react-native";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
export default function Cart(){

  const { cartItems} = useContext(CartContext);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text></Text>
        <Text>Name</Text>
        <Text>Price</Text>
        <Text>Auantity</Text>
        <Text>Total</Text>
      </View>

      {cartItems.map((item)=>{
        return (
          <CartItem name={item.name} price={item.price} quantity={item.quantity} image_url={item.image_url} id={item.id}/>
        )
      })}
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row",
   
   
    justifyContent:"space-between",
    padding:10,
    width:400,
    alignSelf:"center",
    marginTop:10
  
  }
  })