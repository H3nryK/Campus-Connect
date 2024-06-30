import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const clubs = [
  {id: '1', name: 'Chess Club'},
  {id: '2', name: 'Debate Society'},
  {id: '3', name: 'Robotics Club'},
  {id: '4', name: 'Drama Club'},
  {id: '5', name: 'Environmental Society'},
];

const ClubItem = ({name}) => (
  <TouchableOpacity style={styles.clubItem}>
    <Text style={styles.clubName}>{name}</Text>
  </TouchableOpacity>
);

const ClubsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clubs & Societies</Text>
      <FlatList
        data={clubs}
        renderItem={({item}) => <ClubItem name={item.name} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  clubItem: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  clubName: {
    fontSize: 18,
  },
});

export default ClubsScreen;
