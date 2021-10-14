import React, {useState} from 'react'
import { View, Text, FlatList, TouchableOpacity, Pressable, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'



export default function Home({navigation}){

    const Tab = createBottomTabNavigator();
    const [list, setList] = useState([
        {name:"All", key:'1'},
        {name:"Road Bike", key:'2'},
        {name:"Mountain", key:'3'},
        {name:"Urban", key:'4'}
    ])

     const PRODUCT = (props) =>{
         return(
         <View style={{height:250,
          width:150, backgroundColor:"rgb(224,224,224)", 
          padding:20, 
          marginTop:30,
          borderRadius:20,
          marginLeft:20,
          position:"relative",
          flexDirection:'column'}}> 

        <TouchableOpacity onPress={()=>{
             <AntDesign name="heart" size={24} color="black" />
             
        }}>
          <AntDesign name="hearto" size={24} color="black" style={{}}/>
          </TouchableOpacity>


          <View><Image style={{height:150, width:100, padding:60}} source={{uri:"{props.imageUrl}"}}/></View>
            <Text>{props.title}</Text>
          <View style={{flexDirection:"row"}}>
          <Text style={{color:'orange'}}>$</Text><Text style={{color:"black", fontSize:20,fontWeight:"bold"}}>{props.price}</Text>
               </View>
         </View>
         )
     }


    
        {/**the NAVIGATION part of the Home Screen */}  
    return (
    <View style={{backgroundColor: "white", flex: 1, paddingTop:55, paddingHorizontal:20}}>
        <View style={{flexDirection: 'row', alignItems:"center", justifyContent:"space-between"}}>
            <Ionicons name="menu-outline" size={24} color="black" />

            <TouchableOpacity onPress={()=>{
                navigation.navigate("Cart")}

            }>
            <FontAwesome name="motorcycle" size={24} color="black" />
            </TouchableOpacity>

            <View style={{flexDirection:"row"}}>
            <AntDesign name="search1" size={20} color="black" />
            <Ionicons name="notifications" size={20} color="black" />
            </View>
        </View>

        {/**the HEADING part of the Home Screen */}
      <View style={{marginTop:20}}>  
        <Text style={{fontSize:20, color:'grey'}}>The World's <Text style={{fontSize:30, color:'orange', fontWeight: "bold"}}>Best Bike</Text></Text>
        </View>
<Text style={{
            marginTop: 30,
            fontWeight:'bold',
            fontSize: 27}}>
        Categories
        </Text>

        {/**the LIST part of the Home Screen */}
        <View style={{backgroundColor:"rgb(224,224,224)", borderRadius:10, marginTop:10, flexDirection:"column"}}>
        <FlatList horizontal={true} 
        data={list}
        renderItem={({item})=> (
        <TouchableOpacity onPress={()=>{
            color:"orange"
        }}>
        <Text style={{marginLeft:10, padding:20, borderRadius:10, fontSize:20}}>{item.name} </Text>
        </TouchableOpacity>
        )
        }/>
        </View>

        {/**the DATA PART */}
        <View style={{flexDirection:"row"}}> 
            <PRODUCT 
            title='Ghost Rider'
            imageUrl="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  price='1,700' />
            <PRODUCT imageUrl="https://images.unsplash.com/photo-1505705694340-019e1e335916?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmlrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" price='1,500.00' title='Banku Lovers'/>
        </View>

        <View style={{flexDirection:"row"}}> 
            <PRODUCT price='1,200.00' title='Bikers Dream'/>
            <PRODUCT price='9,80.00' title='Afrodite'/>
        </View>
        
        
        

    </View>

    )
}

  