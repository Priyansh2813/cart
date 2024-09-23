import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Cart from './Cart';
import Categories from './Categories';
import Icon from "react-native-vector-icons/FontAwesome"
const Tab = createBottomTabNavigator();
export default function Navbar(){
  return (
    <Tab.Navigator intialRouteName="Home" 
    screenOptions={{
    
     tabBarShowLabel:false,
     headerShown:false

    }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon:()=>{return <Icon name="home" size={25}/>

        }
      }} />
       <Tab.Screen name="Categories" component={Categories} options={{
        tabBarIcon:()=>{return <Icon name="th-list" size={25}/>
      }
        }}/>
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarIcon:()=>{return <Icon name="shopping-bag" size={25}/>
      }
        }}/>
     
    </Tab.Navigator>
  );
}