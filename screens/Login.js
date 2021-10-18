import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

export default function Login({navigation}){
    return (
    <View style={{flex:1, alignItems: "center", justifyContent: 'center'}}>
            <Image
            style={{
                width: 200,
                height: 200,
                borderRadius: 20,
                marginBottom: 50,
                transform: [{rotate: '-40deg'}]
            }} 
            source={{
                uri: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                }}/>
                <Text style={{color:"black", fontSize: 24, color: "rgba(0,0,0,0.6)"}}>Welcome To </Text>

                <Text style={{color:"black", fontSize:50, fontWeight: '500', fontFamily: "Futura-CondensedExtraBold"}}>POWER BIKE SHOP</Text>

                <TouchableOpacity style={{
                  backgroundColor: '#e3e3e3',
                  padding: 10,
                  paddingHorizontal: 60, 
                  alignItems: 'center',
                  flexDirection: "row",
                  marginTop: 20, 
                  borderRadius: 10}}>
                        
                        <AntDesign name="google" size={24} color="rgb(265,100, 10)" />
                        <Text style={{fontSize: 17, marginLeft:15}}>Login with Gmail</Text>
                
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>{
                        navigation.navigate("Home")
                        console.log("Yo")
                }}
                style={{
                    
                backgroundColor: "black",
                 padding: 10,
                 flexDirection: "row",
                 alignItems: 'center',
                paddingHorizontal: 60, 
                marginTop: 20, 
                borderRadius: 10}}>

                    <AntDesign name="apple1" size={24} color="white" />
                    <Text style={{fontSize: 17, color:"white", marginLeft:15}}>Login with Apple</Text>

                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{marginTop: 10, fontWeight: '500', color:'grey'}}>Not a member? 
                        <Text style={{color:"orange", fontWeight:"bold"}}>Sign Up</Text>
                    </Text>

                    </TouchableOpacity>
    </View>
    );
    }