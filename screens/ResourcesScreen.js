import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const resources = [
  {id: '1', name: 'Library', icon: '📚'},
  {id: '2', name: 'Computer Labs', icon: '💻'},
  {id: '3', name: 'Career Center', icon: '🎓'},
  {id: '4', name: 'Health Center', icon: '🏥'},
  {id: '5', name: 'Student Services', icon: '🛎️'},
];

const ResourceItem = ({name, icon}) => (
  <TouchableOpacity style={styles.resourceItem}>
    <Text style={styles.resourceIcon}>{icon}</Text>
    <Text style={styles.resourceName}>{name}</Text>
  </TouchableOpacity>
);

const ResourcesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>School Resources</Text>
      <FlatList
        data={resources}
        renderItem={({item}) => (
          <ResourceItem name={item.name} icon={item.icon} />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
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
    color: '#333',
  },
  resourceItem: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
  },
  resourceIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  resourceName: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});

export default ResourcesScreen;
