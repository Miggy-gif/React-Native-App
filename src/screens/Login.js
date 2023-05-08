import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Login extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                
               

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:200,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput style={{paddingHorizontal:10}}  placeholder="Enter Email"/>
                    

                </View>
                
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="key" color="#00716F" size={24}/>
                    <TextInput 
                        
                        placeholder="Enter Password"
                        style={{paddingHorizontal:10}} secureTextEntry={true}
                    />

                    

                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text 
                     onPress={()=>navigate('Homepage')}
                    style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Login</Text>
                </View>

                <Text 
                
                onPress={()=>navigate('Register')}
                
                style={{
                    alignSelf:"center",
                    color:"#00716F",
                    fontFamily:"SemiBold",
                    paddingVertical:30
                }}>Register</Text>
            </View>
        )
    }
}