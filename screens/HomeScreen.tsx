// screens/HomeScreen.js
import React from 'react';
import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import {useEffect, useRef} from 'react';

const HomeScreen = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.logoContainer, opacity: fadeAnim}}>
        <Image source={require('../assets/mksu.png')} style={styles.logo} />
      </Animated.View>
      <Animated.View style={{...styles.contentContainer, opacity: fadeAnim}}>
        <Text style={styles.logoText}>Campus Connect</Text>
        <Text style={styles.title}>Welcome to Campus Connect</Text>
        <Text style={styles.subtitle}>
          Your gateway to all things happening in Machakos University
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: '#3498db',
  },
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#333',
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default HomeScreen;
