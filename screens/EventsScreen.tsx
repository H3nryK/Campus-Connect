// screens/EventsScreen.js
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const events = [
  {id: '1', title: 'Freshers Orientation', date: '2024-07-01'},
  {id: '2', title: 'Tech Talk', date: '2024-07-05'},
  {id: '3', title: 'Sports Day', date: '2024-07-10'},
];

const EventsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.eventItem}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDate}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  eventItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  eventTitle: {
    fontSize: 18,
  },
  eventDate: {
    fontSize: 14,
    color: '#888',
  },
});

export default EventsScreen;
