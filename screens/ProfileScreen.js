import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{uri: 'https://via.placeholder.com/150'}}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.info}>Student ID: 12345</Text>
      <Text style={styles.info}>Major: Computer Science</Text>
      <Text style={styles.info}>Year: Junior</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  button: {
    backgroundColor: '#80669d',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default ProfileScreen;
