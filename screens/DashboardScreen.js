import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DashboardScreen = ({navigation}) => {
  const [greeting, setGreeting] = useState('');
  const [username, setUsername] = useState('John'); // Replace with actual user data

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  const upcomingEvents = [
    {id: '1', title: 'Career Fair', date: '2023-07-15', icon: 'briefcase'},
    {id: '2', title: 'Alumni Meet', date: '2023-07-20', icon: 'people'},
    {id: '3', title: 'Tech Seminar', date: '2023-07-25', icon: 'laptop'},
    {id: '4', title: 'Spring Festival', date: '2023-08-01', icon: 'flower'},
  ];

  const trendingSocials = [
    {
      id: '1',
      title: 'Campus Movie Night',
      likes: 120,
      image: '../assets/movie.jpg',
    },
    {
      id: '2',
      title: 'Freshman Welcome Party',
      likes: 89,
      image: '../assets/party.jpg',
    },
    {
      id: '3',
      title: 'Hackathon 2023',
      likes: 156,
      image: '../assets/hack.jpg',
    },
  ];

  const renderEventItem = item => (
    <TouchableOpacity key={item.id} style={styles.eventItem}>
      <View style={styles.eventIcon}>
        <Ionicons name={item.icon} size={24} color="#007AFF" />
      </View>
      <View>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderSocialItem = item => (
    <TouchableOpacity key={item.id} style={styles.socialItem}>
      <Image source={{uri: item.image}} style={styles.socialImage} />
      <Text style={styles.socialTitle}>{item.title}</Text>
      <Text style={styles.socialLikes}>{item.likes} likes</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.greeting}>
          {greeting}, {username}!
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle-outline" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Events</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.eventsContainer}>
          {upcomingEvents.map(renderEventItem)}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trending Socials</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {trendingSocials.map(renderSocialItem)}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Analytics</Text>
        <View style={styles.analyticsContainer}>
          <View style={styles.analyticItem}>
            <Text style={styles.analyticValue}>85%</Text>
            <Text style={styles.analyticLabel}>Attendance</Text>
          </View>
          <View style={styles.analyticItem}>
            <Text style={styles.analyticValue}>3.8</Text>
            <Text style={styles.analyticLabel}>GPA</Text>
          </View>
          <View style={styles.analyticItem}>
            <Text style={styles.analyticValue}>5</Text>
            <Text style={styles.analyticLabel}>Clubs</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  eventsContainer: {
    marginTop: 10,
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    width: 200,
  },
  eventIcon: {
    marginRight: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  eventDate: {
    fontSize: 12,
    color: 'gray',
  },
  socialItem: {
    width: 150,
    marginRight: 10,
  },
  socialImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 5,
  },
  socialTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  socialLikes: {
    fontSize: 12,
    color: 'gray',
  },
  analyticsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  analyticItem: {
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '30%',
  },
  analyticValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  analyticLabel: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
});

export default DashboardScreen;
