import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const departments = [
  {id: '1', name: 'Computer Science'},
  {id: '2', name: 'Engineering'},
  {id: '3', name: 'Business'},
  {id: '4', name: 'Arts and Humanities'},
  {id: '5', name: 'Natural Sciences'},
];

const DepartmentItem = ({name}) => (
  <TouchableOpacity style={styles.departmentItem}>
    <Text style={styles.departmentName}>{name}</Text>
  </TouchableOpacity>
);

const DepartmentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>School Departments</Text>
      <FlatList
        data={departments}
        renderItem={({item}) => <DepartmentItem name={item.name} />}
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
  departmentItem: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  departmentName: {
    fontSize: 18,
  },
});

export default DepartmentsScreen;
