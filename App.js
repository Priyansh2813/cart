


import Cart from './componenets/Cart';
import Categories from './componenets/Categories';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './componenets/Navbar';
import Home from './componenets/Home';
const Stack = createNativeStackNavigator();
import { CartProvider } from './context/CartContext';
import Product from './componenets/Product';
function App() {
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Shopper">
        <Stack.Screen name="Shopper" component={Navbar}  />
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Categories" component={Categories}/>
        <Stack.Screen name="Product" component={Product}/>
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}

export default App;
