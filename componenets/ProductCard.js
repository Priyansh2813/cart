import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import { CartContext } from '../context/CartContext';
import { useContext } from "react";
export default function ProductCard({image_url,name,description,price,id}){
  const { cartItems,addToCart,decreaseQuantity,increaseQuantity } = useContext(CartContext);

  let boolean = false;
  let quantity=0;
  cartItems.map((item)=>{
    if(item.id===id){
      boolean=true;
      quantity=item.quantity;
    }
  });
  return (
   
<View style={styles.container}>
      <Image source={{uri:image_url}} style={styles.img}></Image>
      <View style={styles.text}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{"$" + price}</Text>
      {!boolean ? (
        <Text onPress={()=>addToCart({id,name,quantity:1,price,image_url})}>Add to Cart</Text>
      ) : (<View>
        <Text><Icon name="plus" size={20} onPress={()=>increaseQuantity(id)}/>{quantity}<Icon name="minus" size={20} onPress={()=>decreaseQuantity(id)} /></Text> 
        </View>
      )}
      </View>
      </View>

  
  )
}

const styles = StyleSheet.create({
 img:{
height:50,
width:100
 },

container:{

  marginTop:10,
  backgroundColor:"#C4DAD2",
  width:400,
  alignSelf:"center",
  height:400
}
 
});