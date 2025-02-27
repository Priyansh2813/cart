import { Text, ScrollView } from "react-native";
import ProductCard from "./ProductCard";

export default function Product({route}){
const category1 = JSON.stringify(route.params.category);
const category = category1.substring(1,category1.length - 1);

const products = [
  {
    "id": "1",
    "name": "Apples",
    "description": "Fresh and crunchy apples",
    "price": 50.0,
    "category": "Fruits",
    "image_url": "https://t4.ftcdn.net/jpg/03/10/32/03/240_F_310320316_xcQ2MHvAh9VtBndM6fxjZ7DGKdKpujei.jpg"
  },
  {
    "id": "2",
    "name": "Bananas",
    "description": "Ripe and delicious bananas",
    "price": 40.0,
    "category": "Fruits",
    "image_url": "https://t3.ftcdn.net/jpg/05/25/23/64/240_F_525236499_1J6BTWO61V3xc0eOiJMRfrFsb8HIkGI3.jpg"
  },
  {
    "id": "3",
    "name": "Milk",
    "description": "Fresh cows milk",
    "price": 30.0,
    "category": "Dairy",
    "image_url": "https://t3.ftcdn.net/jpg/06/11/55/12/240_F_611551249_mIew1biF3U0qNpdgesFgajH0je6HpFeM.jpg"
  },
  {
    "id": "4",
    "name": "Bread",
    "description": "Whole wheat bread",
    "price": 25.0,
    "category": "Dairy",
    "image_url": "https://t4.ftcdn.net/jpg/03/31/50/91/240_F_331509128_T8PZMPob1ejALzCAY7lxkiDBp2yAwEUF.jpg"
  },
  {
    "id": "5",
    "name": "Eggs",
    "description": "Farm-fresh eggs",
    "price": 45.0,
    "category": "Dairy",
    "image_url": "https://t4.ftcdn.net/jpg/06/26/29/81/240_F_626298104_lpVXSPpQjAhUTKpFwlZjotTUBeayedVs.jpg"
  },
  {
    "id": "6",
    "name": "Tomatoes",
    "description": "Juicy red tomatoes",
    "price": 35.0,
    "category": "Vegetables",
    "image_url": "https://t4.ftcdn.net/jpg/02/32/98/31/240_F_232983161_9lmUyHKnWbLW0vQPvWCrp5R5DSpexhbx.jpg"
  },
  {
    "id": "7",
    "name": "Rice",
    "description": "Premium quality basmati rice",
    "price": 60.0,
    "category": "Grains",
    "image_url": "https://t4.ftcdn.net/jpg/02/51/90/35/240_F_251903598_zCslE1D4J9kPxzEEDjTqDgu0y6fttqSj.jpg"
  },
  {
    "id": "8",
    "name": "Onions",
    "description": "Fresh onions",
    "price": 20.0,
    "category": "Vegetables",
    "image_url": "https://t4.ftcdn.net/jpg/02/46/63/85/240_F_246638516_ThBoK7W98wU4Fbfs9t1pTXALCNAKBLIU.jpg"
  },
  {
    "id": "9",
    "name": "Potatoes",
    "description": "Organic potatoes",
    "price": 30.0,
    "category": "Vegetables",
    "image_url": "https://t3.ftcdn.net/jpg/06/20/37/04/240_F_620370457_dksrEKSXg7gSlG7XB6mJW1GHnTb3XAfL.jpg"
  },
  {
    "id": "10",
    "name": "Carrots",
    "description": "Crunchy carrots",
    "price": 25.0,
    "category": "Vegetables",
    "image_url": "https://t3.ftcdn.net/jpg/03/15/25/54/240_F_315255413_UH7npDVzrKDphtARSf3xZgMSt2Yo36SN.jpg"
  },
  {
    "id": "11",
    "name": "Cereal",
    "description": "Healthy breakfast cereal",
    "price": 40.0,
    "category": "Grains",
    "image_url": "https://t4.ftcdn.net/jpg/01/12/82/25/240_F_112822558_37Hkr2QjkcRVnhqLC855Fh3k5sbiKC6E.jpg"
  },
  {
    "id": "12",
    "name": "Cheese",
    "description": "Imported cheese",
    "price": 80.0,
    "category": "Dairy",
    "image_url": "https://t3.ftcdn.net/jpg/02/79/85/72/240_F_279857241_FdqFGCtgrhxZBNHzWYekIEIS5zEttGJz.jpg"
  },
  {
    "id": "13",
    "name": "Yogurt",
    "description": "Creamy yogurt",
    "price": 35.0,
    "category": "Dairy",
    "image_url": "https://t3.ftcdn.net/jpg/02/13/07/40/240_F_213074047_cawY119znjH325cYG3LtU1eG7AjxJCFm.jpg"
  },
  {
    "id": "14",
    "name": "Spinach",
    "description": "Leafy green spinach",
    "price": 20.0,
    "category": "Vegetables",
    "image_url": "https://t3.ftcdn.net/jpg/02/63/20/82/240_F_263208242_Ui7jL4wY6CnjaPnZX6daAVCGToqtVzzp.jpg"
  },
  {
    "id": "15",
    "name": "Oranges",
    "description": "Sweet and tangy oranges",
    "price": 40.0,
    "category": "Fruits",
    "image_url": "https://t3.ftcdn.net/jpg/01/95/83/48/240_F_195834894_BXbEvnS4O7hNRv6rPvx8vQvyfgJHNcfO.jpg"
  },
  {
    "id": "16",
    "name": "Laptop",
    "description": "High-performance laptop with Intel Core i7 processor",
    "price": 74999.25,
    "category": "Electronics",
    "image_url": "https://t4.ftcdn.net/jpg/02/61/37/29/240_F_261372924_eo4C2IqaLe3lLpfn0INpE57DInWX6VKb.jpg"
  },
  {
    "id": "17",
    "name": "Smartphone",
    "description": "High-end smartphone with dual-camera setup",
    "price": 52499.25,
    "category": "Electronics",
    "image_url": "https://t4.ftcdn.net/jpg/02/25/08/49/240_F_225084948_genL9DSDZCfr2C1n0AaX6Itslq7YtAfQ.jpg"
  },
  {
    "id": "18",
    "name": "Wireless Headphones",
    "description": "Premium wireless headphones with active noise cancellation",
    "price": 11249.25,
    "category": "Electronics",
    "image_url": "https://t3.ftcdn.net/jpg/02/88/97/48/240_F_288974893_Br9aR3kwIBAXxzLQzbY3AVAloFVJ4eu6.jpg"
  },
  {
    "id": "19",
    "name": "4K Ultra HD TV",
    "description": "Experience stunning visuals with 4K resolution",
    "price": 112499.25,
    "category": "Electronics",
    "image_url": "https://t3.ftcdn.net/jpg/04/89/12/36/240_F_489123687_FUEDiuorGzfHvswXyKEXBQExcS57jP08.jpg"
  },
  {
    "id": "20",
    "name": "Toaster",
    "description": "Japanese Toaster for a refreshing taste",
    "price": 749.25,
    "category": "Kitchen Appliances",
    "image_url": "https://t3.ftcdn.net/jpg/02/52/23/82/240_F_252238216_gTKiO94GzzG2IMXe6hcrYTj5gY5FnT0K.jpg"
  },
  {
    "id": "21",
    "name": "Gaming PC",
    "description": "High-performance gaming PC with NVIDIA RTX 3080 graphics card",
    "price": 149999.25,
    "category": "Electronics",
    "image_url": "https://t3.ftcdn.net/jpg/03/31/83/46/240_F_331834623_ByzkK0eGEezZw2ZF3HsuybZPzVakJHSL.jpg"
  },
  {
    "id": "22",
    "name": "Mechanical Keyboard",
    "description": "Customizable mechanical keyboard with RGB lighting",
    "price": 6749.25,
    "category": "Electronics",
    "image_url": "https://t4.ftcdn.net/jpg/05/23/56/47/240_F_523564722_ooONZYK0VB7pZYbtBzItSRXcx9iqQ7tB.jpg"
  },
  {
    "id": "23",
    "name": "External Hard Drive",
    "description": "1TB portable external hard drive for storing your data",
    "price": 5999.25,
    "category": "Electronics",
    "image_url": "https://t3.ftcdn.net/jpg/00/73/14/42/240_F_73144222_GPRcB9LqNU5gliVRPRveA1asrLje66wC.jpg"
  },
  {
    "id": "24",
    "name": "Bluetooth Speaker",
    "description": "Waterproof Bluetooth speaker with 10 hours of battery life",
    "price": 2999.25,
    "category": "Electronics",
    "image_url": "https://t4.ftcdn.net/jpg/02/67/37/29/240_F_267372904_VUmX19a0mljb3UJf6NBGeSqf9IupfDT1.jpg"
  },
  {
    "id": "25",
    "name": "Fitness Tracker",
    "description": "Track your fitness activities with this wearable device",
    "price": 5999.25,
    "category": "Fitness",
    "image_url": "https://t4.ftcdn.net/jpg/00/77/29/25/240_F_77292533_FCHR5WU7Ii3opL415sbiNIQ7unqg5CvA.jpg"
  },
  {
    "id": "26",
    "name": "Coffee Maker",
    "description": "Automatic coffee maker for brewing your favorite beverages",
    "price": 4499.25,
    "category": "Kitchen Appliances",
    "image_url": "https://t3.ftcdn.net/jpg/02/12/26/92/240_F_212269256_WpfOW22dBoahTz0cK8PTRc5fv26BYVmu.jpg"
  },
  {
    "id": "27",
    "name": "Wireless Mouse",
    "description": "Ergonomic wireless mouse for comfortable computing",
    "price": 2249.25,
    "category": "Electronics",
    "image_url": "https://t3.ftcdn.net/jpg/02/55/58/84/240_F_255588426_mLd8jcTcD519c4bLz7FUnbpi2SxcqKVS.jpg"
  },
  {
    "id": "28",
    "name": "Yoga Mat",
    "description": "Premium yoga mat for yoga and fitness exercises",
    "price": 3749.25,
    "category": "Fitness",
    "image_url": "https://t3.ftcdn.net/jpg/05/90/89/42/240_F_590894230_AEpvQe7WOVruxz8OZREfke488DYm27BC.jpg"
  },
  {
    "id": "29",
    "name": "Smartwatch",
    "description": "Stay connected with this feature-packed smartwatch",
    "price": 11249.25,
    "category": "Electronics",
    "image_url": "https://t3.ftcdn.net/jpg/00/85/51/56/240_F_85515668_dbMmOjChn3nNgpl8vKlQ7IXtHgboiuPB.jpg"
  },
  {
    "id": "30",
    "name": "Kitchen Blender",
    "description": "Powerful blender for making smoothies and shakes",
    "price": 5249.25,
    "category": "Kitchen Appliances",
    "image_url": "https://t4.ftcdn.net/jpg/06/01/26/03/240_F_601260316_59JFChIza2DgTNFtuXlWhSjIBDxEc9nn.jpg"
  }
]


const curr = products.filter((item)=>{return item.category===category});
  return(
    <ScrollView>
      {curr.map((item)=>{
        return (
          <ProductCard image_url={item.image_url} name={item.name} price={item.price} description={item.description} key={item.id} id={item.id}/>
        )
      })}
    </ScrollView>
  )
}