import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native';
import React from 'react';
import routes from '../common/routes';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const { navigate } = useNavigation();

  return (
    <View>
      <ImageBackground
        source={require('../../assets/arsenic-solid-color-background-wallpaper-for-mobile-phone.png')}
        style={styles.background}
      >
        <View style={styles.container}>
          <Image
            source={require('../../assets/call_1033927.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.text}>Travel with people. Make new friends.</Text>
          <Pressable
            style={styles.pressable}
            onPress={() => {
              navigate(routes.users);
            }}
          >
            <Text style={styles.buttonText}>Users</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    position: 'absolute',
    top:80,
    backgroundColor: '#ffd380',
    padding: 10,
    borderRadius: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  text: {
    color: '#8bc349',
    fontSize: 18,
    marginLeft: 10,
  },
  buttonText: {
    fontFamily: 'monospace',
    fontSize: 20,
  },
});

export default Home;
