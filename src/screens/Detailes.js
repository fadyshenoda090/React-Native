import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const Detailes = () => {
  const userout= useRoute()
  console.warn(userout);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text>Detailes of </Text>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  safeAreaView:{
    marginTop: Platform.OS === "android" ? 30 : 0
  }
})

export default Detailes