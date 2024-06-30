import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement sign up logic here
    console.log('Sign up:', {username, email, password});
    // Navigate to Dashboard after successful sign up
    navigation.navigate('MainApp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start Connecting</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={'#333'}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'#333'}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#333'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#80669d',
    paddingHorizontal: 30,
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

export default SignUpScreen;
