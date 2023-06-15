import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      name: '',
      lastname: '',
      number: '',
      gender: '',
      birthdate: '',
    };
  }

  handleSubmit = () => {
    const { email, pass, name, lastname, number, gender, birthdate } = this.state;

    if (email === '' || pass === '' || name === '' || lastname === '' || number === '' || gender === '' || birthdate === '') {
      alert('Fill out details first!');
      return;
    }

    const userData = {
      name: name,
      email: email,
      password: pass,
      re_password: pass,
      lastname: lastname,
      number: number,
      gender: gender,
      birthdate: birthdate,
    };

    axios
      .post('http://yourbackendapi.com/register', userData)
      .then(response => {
        alert('You have successfully registered!');
        // Redirect to another screen or perform other actions
      })
      .catch(error => {
        alert('Registration failed.');
      });
  };

  render() {
    return (
      <View style={{ backgroundColor: '#FFF', height: '100%' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 50,
            paddingHorizontal: 10,
            borderColor: '#00716F',
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor="#00716F"
            style={{ paddingHorizontal: 10 }}
            onChangeText={text => this.setState({ email: text })}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: '#00716F',
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#00716F"
            style={{ paddingHorizontal: 10 }}
            onChangeText={text => this.setState({ name: text })}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: '#00716F',
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#00716F"
            style={{ paddingHorizontal: 10 }}
            onChangeText={text => this.setState({ lastname: text })}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: '#00716F',
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <TextInput
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#00716F"
            style={{ paddingHorizontal: 10 }}
            onChangeText={text => this.setState({ pass: text })}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: '#00716F',
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <TextInput
            secureTextEntry
            placeholder="Confirm Password"
            placeholderTextColor="#00716F"
            style={{ paddingHorizontal: 10 }}
          />
        </View>

        <TouchableOpacity
          style={{
            marginHorizontal: 55,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            backgroundColor: '#00716F',
            paddingVertical: 10,
            borderRadius: 23,
          }}
          onPress={this.handleSubmit}
        >
          <Text style={{ color: 'white', fontFamily: 'SemiBold' }}>Register</Text>
        </TouchableOpacity>

        
        
      </View>
    );
  }
}
