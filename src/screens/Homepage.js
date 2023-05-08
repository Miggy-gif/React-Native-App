import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';




export default class Homepage extends React.Component{
    render(){
        const {navigate} = this.props.navigation
        return(

            <><View style={{
                marginHorizontal: 55,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 200,
            
            }}>
          <Text>You Have Successfully Logged In</Text>
            </View><>
            
            
            <View style={{
                marginHorizontal: 55,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 500,
                backgroundColor: "#00716F",
                paddingVertical: 10,
                borderRadius: 23
            }}>
                <Text
                    onPress={() => navigate('Login')}
                    style={{
                        color: "white",
                        fontFamily: "SemiBold"
                    }}>Logout</Text>
            </View>

                    <View style={{
                        marginHorizontal: 55,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 100,
                        backgroundColor: "#00716F",
                        paddingVertical: 10,
                        borderRadius: 23
                    }}>
                        <Text
                            onPress={() => navigate('Profile')}
                            style={{
                                color: "white",
                                fontFamily: "SemiBold"
                            }}>Profile</Text>

                    </View></></>
            
        )
    }
    
    
}

