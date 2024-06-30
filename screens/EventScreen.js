import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const events = [
  {id: '1', name: 'Freshman Orientation', date: '2023-08-25'},
  {id: '2', name: 'Career Fair', date: '2023-09-15'},
  {id: '3', name: 'Homecoming', date: '2023-10-10'},
  {id: '4', name: 'Finals Week', date: '2023-12-12'},
];

const EventItem = ({name, date}) => (
  <TouchableOpacity style={styles.eventItem}>
    <Text style={styles.eventName}>{name}</Text>
    <Text style={styles.eventDate}>{date}</Text>
  </TouchableOpacity>
);

const EventsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      <FlatList
        data={events}
        renderItem={({item}) => <EventItem name={item.name} date={item.date} />}
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
  eventItem: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 16,
    color: 'gray',
  },
});

export default EventsScreen;
