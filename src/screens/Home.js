import { DrawerActions, DrawerRouter, NavigationContainer } from "@react-navigation/native";
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
    TouchableOpacity,
    
  } from 'react-native';

import firebase from "firebase/compat";

import * as ImagePicker from 'expo-image-picker';


  export default function Home({navigation})
  {
    const onPressHandler2=()=>{
      navigation.navigate('Support')
    }
    const onPressHandler1=()=>{
      navigation.navigate('SelectFruit')
    }
    const onPressHandlerlogin=()=>{
      navigation.navigate('Login')
    }
    // ************************************************************************
    

    const [image, setImage] = useState(null)
    const [upload, setUpload] = useState(false) 

   const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,3],
        quality: 1
    });
    const source = {uri: result.assets[0].uri}
    console.log(source)
    setImage(source)
}; 

const uploadImage = async () => {
    setUpload(true)
    const response = await fetch(image.uri)
    const blob = response.blob()
    const filename = image.uri.substring(image.uri.lastIndexOf('/')+1)
    var ref = firebase.storage().ref().child(filename).put(blob)
    try {
        await ref;
    } catch (e){
        console.log(e)
    }
    setUpload(false)
    Alert.alert(
        'Image uploaded successfully'
    );
    setImage(null);
} 

    const[name,setNames]=useState('')
    useEffect(()=>{
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot)=>{
            if(snapshot.exists){
                setNames(snapshot.data())
            }
            else{
                console.log('User does not exists!')
            }
        })
    },[])
    
   



    return (
        <View
        style={styles.container}
        >
          
          <ImageBackground
        style={styles.img}
        source={require('../../assets/background.png')}
        
      >
        <Text style={{fontSize:20, fontWeight:'bold',top:50,left:250,color:"#ffffff"}}
      
      >Hello, {name.name}</Text>
        
          
            <Text style={styles.title}>
                FireApp
            </Text>
            
            
      
        <Pressable style={styles.button1}
       
        onPress={pickImage}

        >
          
          <Text style={styles.stylebutton1}>Pick File</Text>
        </Pressable>
        <Pressable style={styles.button1}
        
        onPress={uploadImage}

        >
          
          <Text style={styles.stylebutton1}>Upload File</Text>
        </Pressable>
        
            </ImageBackground>
            
       </View>
    
    )
  }

  const styles = StyleSheet.create({
    title:{
        textAlign:"center",
        color:"#fefdfe",
        fontSize:48,
        
        marginTop:80,
        paddingTop:45,
        
    },
    signouts:{
      fontSize:22,
      fontWeight:'bold',
    //   fontFamily:'JosefinSansSemiBold',
    },
    img:{
      height: '100%',
      width:'100%',
      // top:45,
    },
    container:{
      flex:1,
    //   backgroundColor:"#010010",
    },
    goodq:{
      marginLeft:160,
      color:"#0B5635",
        fontSize:20,
        // fontFamily:'OleoScriptRegular',
        // fontWeight:"200",
    },
    button:{
    //   fontFamily:'OleoScriptRegular',
      
    },
    buttons:{
      marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#9BCCA5',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        left:65,
    },
    stylebutton:{
      fontSize:36,
    //   fontFamily:'OleoScriptRegular',
      alignItems: 'center',
      justifyContent: 'center',
    },
    

    stylebutton1:{
      
      bottom:55,
      color:"#fefdfe",
      marginRight:170,
      fontSize:30,
      width:'100%',
    
      marginBottom:10,
    
    textAlign:"center",
    left:85,
    top:5,
      // justifyContent: 'center',
    },
    stylebutton2:{
      //flex:1,
      bottom:60,
      color:"#0B5635",
      fontSize:36,
      marginRight:130,
    //   fontFamily:'OleoScriptRegular',
      textAlign:'left',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    stylebutton3:{
      //flex:1,
      bottom:60,
      color:"#fefdfe",
      marginRight:125,
      fontSize:30,
      width:'100%',
      textAlign:"center",
    left:55,
    top:0,
    //   fontFamily:'OleoScriptRegular',
    //   textAlign:'left',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    button1: {
      textAlign:'left',
      backgroundColor:"#05577d",
      fontSize:36,
    //   fontFamily:'OleoScriptRegular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      marginTop:170,
      marginLeft:30,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,
    },
    button2: {
      backgroundColor:"#9bcca5",
      fontSize:36,
    //   fontFamily:'OleoScriptRegular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      //flexDirection: "centr",
      marginTop:25,
      marginLeft:30,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,
    },
    button3: {
      backgroundColor:"#05577d",
      fontSize:36,
    //   fontFamily:'OleoScriptRegular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      //flexDirection: "centr",
      marginTop:25,
      marginLeft:30,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,
    },

    logo:{
      width:58,
      height:62,
      marginLeft:225,
      marginTop:50,
    },
    login:{
      // backgroundColor:"#ffffff",
      top:50,
    },
    loginbutton:{
      color:"#000000",
    //   fontFamily:'OleoScriptRegular',
      fontSize:22,
      height:45,
      width:100,
      left:310,
    },
    
  })
