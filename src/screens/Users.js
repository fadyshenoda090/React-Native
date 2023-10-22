import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../style.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import routes from '../common/routes.js';
import { useNavigation } from '@react-navigation/native';
import Search from '../components/search.js';
import Button from '../components/Button.js';


const Users = ({ }) => {
  const { navigate } = useNavigation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setUsers(res.data);
    });
  }, []);
  const searchUser = (text) => {
    // Fetch user data based on the search query
    axios
      .get(`https://jsonplaceholder.typicode.com/users?name=${text}`)
      .then((res) => {
        if (res.data.length > 0) {
          // Update the users state with the search results
          setUsers(res.data);
        }
      })
      .catch((error) => {
        // Handle any errors from the API request
        console.error('Error fetching user data:', error);
      });
  };

  // const handleUserPress = (user) => {
  //   navigate(routes.detailes, { user })
  //   console.warn('User pressed:', user.name);
  // };

  return (
    <SafeAreaView style={styles2.safeArea}>
      <View style={styles2.container}>
        <Search></Search>
        <Button onPress={searchUser} />
      </View>
      {users.map((user) => (
        <Pressable
          key={user.id}
          style={styles2.itemContainer}
          onPress={() => navigate(routes.detailes, user.id)}
        >
          <Text style={styles2.text}>{user.name}</Text>
          <Icon name='arrow-right' size={20} color='#000' style={styles2.icon} />
        </Pressable>
      ))}
    </SafeAreaView>
  );
}

const styles2 = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    backgroundColor: '#444654',
    marginVertical: 2,
    padding: 10,
    color: '#fff',
    fontSize: 17,
    fontFamily: 'monospace',
    letterSpacing: 1,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  safeArea: {
    backgroundColor: '#2c2c2c',
    flex: 1,
    paddingLeft: 10,
  },
  icon: {
    // alignSelf:'end',
    position: 'absolute',
    right: '3%',
    marginTop: 8,
    backgroundColor: '#cacaca',
    padding: 3,
    borderRadius: 20,
  },
})

export default Users;
