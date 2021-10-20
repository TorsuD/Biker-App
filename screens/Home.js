import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
  Image,
  StyleSheet,
 SafeAreaView,
 ScrollView,
 StatusBar
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';






export default function Home({ navigation }) {
 

   
  
 

  const [heartNames, setHeartNames] = useState([
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          "heart-outline",
          ])

   const heart = (id) => {
    return <Ionicons
            
            name={heartNames[id]}
            size={24}
            color="orange"
            style={{ marginLeft: 80 }}

            
          />;
  }

  const [list, setList] = useState([
    { name: "All", key: "1" },
    { name: "Road Bike", key: "2" },
    { name: "Mountain", key: "3" },
    { name: "Urban", key: "4" },
  ]);

  {
    /**LIST OF PRODUCTS */
  }

const updateHeart = (id) => {
  console.log(id);

  // loop over the todos list and find the provided id.
  let updatedList = heartNames.map((item,index) => 
    {
      if (index == id){
        if (heartNames[index] == "heart-outline"){
          return "heart";
        }
        else
        {
          return 'heart-outline';
        }
         //gets everything that was already in item, and updates "done"
      }
      return item; // else return unmodified item 
    });

  setHeartNames( updatedList); // set state to new object with updated list
}

  const PRODUCT = (props) => {
    return (
      <View
        style={{
          height: 250,
          width: 150,
          backgroundColor: "rgb(224,224,224)",
          padding: 20,
          marginTop: 30,
          borderRadius: 20,
          marginLeft: 20,
          position: "relative",
          flexDirection: "column",
        }}
      >
        {/**THE BODY */}
        {/**the HEART ICON */}
        <TouchableOpacity onPress={()=>updateHeart(
        props.id)
        }>
          {heart(props.id)}
        </TouchableOpacity>

        {/**the PHOTO */}
        
          <Image
            style={{ alignItems:"center", justifyContent:"center", marginTop:10, marginBottom:10, height: 130, maxWidth: 100, borderRadius:20 }}
            source={{uri:props.image}}
            
          />
        

        {/** THE PRICE AND DESCRIPTION */}
        <Text>{props.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "orange" }}>$</Text>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            {props.price}
          </Text>
        </View>
      </View>
    );
  };

  {
    /**the TOP NAVIGATION  */
  }
  return (
      
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Ionicons name="menu-outline" size={24} color="black" />

        
          <FontAwesome name="motorcycle" size={24} color="black" />
     

        <View style={{ flexDirection: "row" }}>
          <AntDesign name="search1" size={20} color="black" />
          <Ionicons name="notifications" size={20} color="black" />
        </View>
      </View>

      {/**the FIRST AND SECOND HEADER*/}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, color: "grey" }}>
          The World's{" "}
          <Text style={{ fontSize: 30, color: "orange", fontWeight: "bold" }}>
            Best Bike
          </Text>
        </Text>
      </View>

      <Text
        style={{
          marginTop: 20,
          fontWeight: "bold",
          fontSize: 27,
        }}
      >
        Categories
      </Text>




      {/**the SORT VIEW */}
      <View
        style={{ borderRadius: 10, marginTop: 10, flexDirection: "column" }}
      >
        <FlatList
          horizontal={true}
          data={list}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Text
                style={{
                  marginLeft: 10,
                  padding: 20,
                  borderRadius: 10,
                  fontSize: 20,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>




      {/**the PROPS OF THE GRID */}
      
      <SafeAreaView style={{height:570}}>
      <ScrollView >
      <View style={{ flexDirection: "row" }}>
        
          
          <PRODUCT
            title="Ghost Rider"
            image="https://images.unsplash.com/photo-1505705694340-019e1e335916?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmljeWNsZXMlMjBwbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            id={0}
            price="1,700.00
            "
          />
          <PRODUCT
          id={1}
            price="1,500.00"
            title="Banku Lovers"
            image="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmljeWNsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          
        
      </View>

      <View style={{ flexDirection: "row" }}>
        <PRODUCT id={2} price="1,200.00" title="Bikers Dream" image="https://images.unsplash.com/photo-1611523349407-dde0aa3ffa19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmljeWNsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
        />
        <PRODUCT id={3} price="1,180.00" title="Afrodite" image="https://images.unsplash.com/photo-1571333250630-f0230c320b6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJpY3ljbGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </View>

      <View style={{ flexDirection: "row" }}>
        <PRODUCT id={4} price="1,400.00" title="Champagne Poetry" image="https://images.unsplash.com/photo-1601391721091-4646369e0bb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpY3ljbGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <PRODUCT id={5} price="9,180.00" title="Papi's Home" image="https://images.unsplash.com/photo-1558190596-69daf12cf424?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJpY3ljbGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </View>

      <View style={{ flexDirection: "row" }}>
        <PRODUCT id={6} price="2,000.00" title="Girls want girls" image="https://images.unsplash.com/photo-1624342430388-2f1e77612bba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJpY3ljbGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <PRODUCT id={7} price="800.00" title="In the Bible" image="https://images.unsplash.com/photo-1583220113679-91e9833f1ff7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpY3ljbGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </View>

      <View style={{ flexDirection: "row" }}>
        <PRODUCT id={8} price="1,100.00" title="Love All" image="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpY3ljbGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <PRODUCT id={9} price="9,180.00" title="Fair Trade" image="https://images.unsplash.com/photo-1616257240427-07e5165722ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJpY3ljbGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </View>
      </ScrollView>
    </SafeAreaView>

    {/**BOTTOM NAV BAR */}

    <View style={{backgroundColor:'rgb(224,224,224)',width:1000,height:80,position:'absolute', bottom:0}}>
    <View style={{flexDirection:"row"}}>
    <Entypo name="home" size={30} color="orange" style={{marginTop:20, marginLeft:30}} />

        <FontAwesome name="microphone" size={30} color="white" style={{
        marginTop:1,
         marginLeft:120,
         backgroundColor:"black",
         padding:17,
         borderRadius:27,
         borderColor:"black",
         borderWidth:1,
         overflow:'hidden'
         }}/>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Cart")
            }}>
         <SimpleLineIcons name="bag" size={30} color="black" style={{marginLeft:120, marginTop:20}} />
        </TouchableOpacity>
    </View>
    
        
    </View> 
    </View>
   


    
    
  );
}
