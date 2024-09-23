import { View,Text ,StyleSheet} from "react-native";
import CategoryCard from "./CategoryCard";

export default function Categories({navigation}){
  return (
    <View><Text style={styles.view}>View our Categories:</Text>
    
    
    <CategoryCard bgImg={require("../assets/vegetables.jpeg")} title="Vegetables" onPress={()=>{navigation.navigate("Product",{
      category:"Vegetables"
    })}}/>
    <CategoryCard bgImg={require("../assets/fruits.webp")} title="Fruits" onPress={()=>{navigation.navigate("Product",{
      category:"Fruits"
    })}}/>
    <CategoryCard bgImg={require("../assets/grains.jpg")} title="Grains" onPress={()=>{navigation.navigate("Product",{
      category:"Grains"
    })}}/>
    <CategoryCard bgImg={require("../assets/kitchen-appliances.jpeg")} title="Kitchen Appliances" onPress={()=>{navigation.navigate("Product",{
      category:"Kitchen Appliances"
    })}}/>
    <CategoryCard bgImg={require("../assets/fitness.jpeg")} title="Fitness" onPress={()=>{navigation.navigate("Product",{
      category:"Fitness"
    })}}/>
    <CategoryCard bgImg={require("../assets/dairy.jpeg")} title="Dairy" onPress={()=>{navigation.navigate("Product",{
      category:"Dairy"
    })}}/>
    <CategoryCard bgImg={require("../assets/electronics.jpeg")} title="Electronics" onPress={()=>{navigation.navigate("Product",{
      category:"Electronics"
    })}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  view:{
    fontSize:20,
  }
});