import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Button, FlatList } from 'react-native';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      userComment: '',
    };
  }

  handleCommentChange = (comment) => {
    this.setState({ userComment: comment });
  };

  handleCommentSubmit = () => {
    const { comments, userComment } = this.state;
    this.setState({ comments: [...comments, userComment], userComment: '' });
  };

  render() {
    const { navigate } = this.props.navigation;
    const { comments, userComment } = this.state;

    return (
      <>
        <View
          style={{
            marginHorizontal: 55,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 200,
          }}
        >
          <Text>You Have Successfully Logged In</Text>
        </View>

        <View
          style={{
            marginHorizontal: 55,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 500,
            backgroundColor: '#00716F',
            paddingVertical: 10,
            borderRadius: 23,
          }}
        >
          <Text onPress={() => navigate('Login')} style={{ color: 'white', fontFamily: 'SemiBold' }}>
            Logout
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: 55,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100,
            backgroundColor: '#00716F',
            paddingVertical: 10,
            borderRadius: 23,
          }}
        >
          <Text onPress={() => navigate('Profile')} style={{ color: 'white', fontFamily: 'SemiBold' }}>
            Profile
          </Text>
        </View>

        <View style={{ marginHorizontal: 55, marginTop: 20 }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Enter your comment"
            value={userComment}
            onChangeText={this.handleCommentChange}
          />
          <Button onPress={this.handleCommentSubmit} title="Post Comment" />
          <FlatList
            data={comments}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </>
    );
  }
}
