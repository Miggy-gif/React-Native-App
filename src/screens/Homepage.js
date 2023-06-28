import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';

export default class Homepage extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPost: "",
    };
  }

  addPost = () => {
    const {posts, newPost} = this.props
    if (newPost) {
      const post = {
        id: Math.random().toString(),
        content: newPost,
      };

      this.posts([...posts, post]);
      this.newPost('');
    }
    else{
      alert("No input")
    }
  };



    render(){
        const {navigate} = this.props.navigation
        return (
          <><View style={styles.container}>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your text"
              onChangeText={(newPost) => this.setState({newPost})} />
    
            <TouchableOpacity style={styles.button} onPress={this.addPost}>
              <Text style={styles.buttonText}>Post</Text>
            </TouchableOpacity>
          </View>
    
          <ScrollView style={styles.postsContainer}>
            {this.state.posts.map((post) => (
              <View key={post.id} style={styles.post}>
                <Text>{post.content}</Text>
              </View>
    
            ))}
          </ScrollView>
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
            height: 40,
          }}
        >
            <Text onPress={() => navigate('Profile')} style={{ color: 'white', fontFamily: 'SemiBold'}}>
              Profile
            </Text>
          </View>
          <View
          style={{
            marginHorizontal: 55,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            backgroundColor: '#00716F',
            paddingVertical: 10,
            borderRadius: 23,
            height: 40,
          }}
        >
            <Text onPress={() => navigate('Login')} style={{ color: 'white', fontFamily: 'SemiBold'}}>
              Logout
            </Text>
          </View>
          </>

        );
                    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  postsContainer: {
    flex: 1,
  },
  post: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
});

