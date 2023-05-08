import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Profile extends React.Component{
    render(){
        const {navigate} = this.props.navigation
        return (
            <><View style={styles.container}>
                <Image
                    source={{ uri: 'https://www.bootdey.com/image/900x400/FF7F50/000000' }}
                    style={styles.coverImage} />
                <View style={styles.avatarContainer}>
                    <Image
                        source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar1.png' }}
                        style={styles.avatar} />
                    <Text style={[styles.name, styles.textWithShadow]}>User</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>Email:</Text>
                        <Text style={styles.infoValue}>user@example.com</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>Location:</Text>
                        <Text style={styles.infoValue}>Cagayan de Oro City</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoLabel}>Bio:</Text>
                        <Text style={styles.infoValue}>Users bio</Text>
                    </View>
                </View>
                <View style={{
                marginHorizontal: 55,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 400,
                backgroundColor: "#00716F",
                paddingVertical: 10,
                borderRadius: 23
            }}>
                    <Text
                        onPress={() => navigate('Homepage')}
                        style={{
                            color: "white",
                            fontFamily: "SemiBold"
                        }}>Back</Text>
                </View>
            </View>
            
            </>

        );
                    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  coverImage: {
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color:'white'
  },
  content: {
    marginTop: 20,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoValue: {
    marginTop: 5,
  },
});

