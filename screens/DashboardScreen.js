import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const DashboardScreen = ({navigation}) => {
  const sections = [
    {title: 'Profile', icon: '👤'},
    {title: 'School Departments', icon: '🏫'},
    {title: 'Events', icon: '📅'},
    {title: 'School Resources', icon: '📚'},
    {title: 'Clubs & Societies', icon: '🤝'},
  ];

  const handleSectionPress = section => {
    switch (section) {
      case 'Profile':
        navigation.navigate('Profile');
        break;
      case 'School Departments':
        navigation.navigate('Departments');
        break;
      case 'Events':
        navigation.navigate('Events');
        break;
      case 'School Resources':
        navigation.navigate('Resources');
        break;
      case 'Clubs & Societies':
        navigation.navigate('Clubs');
        break;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.welcome}>Welcome to Campus Connect!</Text>

      <View style={styles.sectionsContainer}>
        {sections.map((section, index) => (
          <TouchableOpacity
            key={index}
            style={styles.sectionButton}
            onPress={() => handleSectionPress(section.title)}>
            <Text style={styles.sectionIcon}>{section.icon}</Text>
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  welcome: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  sectionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sectionButton: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  sectionIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});

export default DashboardScreen;
