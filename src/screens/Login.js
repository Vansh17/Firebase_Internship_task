import { DrawerActions, DrawerRouter, getFocusedRouteNameFromRoute, NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useState,useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TextInput,
    ImageBackground,
    Button,
    Pressable,
    
  } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";


  
import { firebase } from '../../config';

  export default function Login({})
  {
    

    const onPressHandlerSignup=()=>{
        navigation.navigate('CreateAccount')
      }

    const onPressHandlers=()=>{
        navigation.navigate('Home')
    }
    
    const navigation = useNavigation()
      const [email,setEmail] = useState('');
      const[password,setPassword]=useState('');

      const loginUser= async (email,password)=>{
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password)
            
        } catch(error){
            alert(error.message)
        }
      
    }

    const forgetPassword=()=>{
        firebase.auth().sendPasswordResetEmail(email)
        .then(()=>{
            alert("Password reset email sent")
        }).catch((error)=>{
            alert(error)
        })
    }

    

    return (

      
        <View
            style={styles.container}
        >
            
            
          <View style={styles.inner}>
            <Text style={styles.text}>
                Login to your Account
            </Text>
            <View style={styles.innerinner}>
                <Text style={styles.textmail}>
                    Email:
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(email)=> setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoComplete='off'
                />
                <Text style={styles.textmail}>
                    Password:
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={(password)=> setPassword(password)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                



                <TouchableOpacity 
                    onPress={()=> {forgetPassword()}}
                    style={styles.button3}
                >
                    
                    <Text style={styles.forget}>Forgot Password</Text>
                </TouchableOpacity>
                <Pressable style={styles.button}
                    // onPress={onPressHandlers}
                    onPress={()=>loginUser(email,password)}
                >
                    
                    <Text style={styles.stylebutton}>Login</Text>
                </Pressable>
                <Text style={styles.textnew}>
                    New User? 
                </Text>
                <Pressable
                    onPress={onPressHandlerSignup}
                    style={styles.button1}
                >
                    <Text style={styles.text1}>Sign Up</Text>
                </Pressable>
            </View>
          </View>
       </View>

    )
  }
//   }
  const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#040405",
      },
      inner:{
          backgroundColor:"#2b045d",
          height:588,
          width:'100%',
          borderRadius:40,
          top:150,
          
      },
      text1:{
          color:"#ffffff",
          paddingTop:5,
          // backgroundColor:'#00b',
          // fontFamily:'Sarabun',
          textAlign:'center',
        //   top:-20,
        //   left:110,
      },
      innerinner:{
          backgroundColor:'#5004b7',
          height:454,
          top:30,
          width:'100%',
          borderRadius:40,
  
      },
      text:{
          fontSize:28,
          color:'#ffffff',
          // fontFamily:'Sarabun',
          textAlign:'center',
          top:10,
      },
      login_logo:{
          width: '60%',
          height: '40%',
          left: 70,
          top: -5,
          marginBottom:-320,
          alignItems:'center',
          
      },
      textmail:{
          // fontFamily:'Sarabun',
          color:'#ffffff',
          top:30,
          left:58,
          fontSize:25,
          padding:5,
      },
      input:{
          top:30,
          borderColor:'#ffffff',
          borderWidth:1,
          borderRadius:15,
          width:'70%',
          height:50,
          color:"#ffffff",
          padding:10,
          left:55,
      },
      forget:{
          // fontFamily:'Sarabun',
          color:'#ffffff',
        //   left:60,
        //   top:35,
          fontSize:15,
      },
      button:{
        top:150,
          backgroundColor:"#D9D9D9",
          borderRadius:15,
          top:45,
          width: 146,
          height: 48,
          left: 120,
          alignItems:'center',
          marginTop:20,
        //   backgroundColor:"#00b",
  
      },
      button3:{
        top:150,
        //   backgroundColor:"#D9D9D9",
          borderRadius:15,
          top:30,
          width: 146,
          height: 35,
          left: 200,
          alignItems:'center',
          marginTop:20,
        //   backgroundColor:"#00b",
  
      },
      button1:{
        // backgroundColor:"#D9D9D9",
        borderRadius:15,
        top:25,
        width: 146,
        height: 48,
        left: 190,
        alignItems:'center',
        marginTop:20,

    },
      stylebutton:{
          // fontFamily:'Sarabun',
          fontSize:20,
          color:'#000000',
          // backgroundColor:'#00b'
          textAlign:'center',
          top:5,
      },
      textnew:{
          color:'#ffffff',
          paddingTop:30,
          textAlign:'center',
          top:70,
          // fontFamily:'Sarabun',
          textAlign:'center',
      }
  })
