import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const addPost = () => {
    if (newPost) {
      const post = {
        id: Math.random().toString(),
        content: newPost,
      };

      setPosts([...posts, post]);
      setNewPost('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your text"
          value={newPost}
          onChangeText={(text) => setNewPost(text)}
        />

        <TouchableOpacity style={styles.button} onPress={addPost}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.postsContainer}>
        {posts.map((post) => (
          <View key={post.id} style={styles.post}>
            <Text>{post.content}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
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

export default App;
