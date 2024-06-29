import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const LandingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/mksu.png')} style={styles.logo} />
      <Text style={styles.appName}>Connect Machakos University</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  button: {
    backgroundColor: '#80669d',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default LandingScreen;
