import { View, Text, Image, StyleSheet, Linking } from 'react-native'
import React from 'react'

import shop from '@/assets/images/shop.jpg'




const contact = () => {
  const openEmail =() =>{
    Linking.openURL('mailto:example@gmail.com')
  }

  const openWhatsapp =() =>{
    const phone = '8147257456'; // with country code if needed, e.g. '91xxxxxxxxxx'
    const message = 'Hello, I want to connect with you!';
    Linking.openURL(`whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`);
  }

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={shop}
        style={{ width: "100%", height: 400 }}
        resizeMode="cover"
      />
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 20,
          height: 35,
          width: "100%",
          backgroundColor: "#64748b",
          paddingTop:3
        }}
      >
        Contact Us
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "white",
          marginTop: 75,
          fontSize: 18,
          height: 35,
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        Darshan K Coffee Shop
      </Text>
      <Text style={styles.text}>Bengaluru</Text>
      <Text
        style={styles.text}
        onPress={() => Linking.openURL("tel:1234567890")}
      >
        Ph:1234567890
      </Text>
      <Text style={styles.text} onPress={openEmail} >Email</Text>
      <Text style={styles.text}onPress={openWhatsapp} >WhatsApp</Text>
     
    </View>
  );
}

export default contact

const styles = StyleSheet.create({
  text:{
    textAlign: "center",
          color: "white",
          marginTop: 5,
          fontSize: 18,
          height: 35,
          width: "100%",
          backgroundColor: "transparent",
  }
})