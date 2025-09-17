import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const Exercise2 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image style={styles.photo} source={require('./img/PittNewsSpongebob.jpg')} />
      <Image
        source={{
          uri: 'https://eu-images.contentstack.com/v3/assets/blt8770191dea35bccc/bltad9a4364a9fe050f/64d3ea26dda23141d2428958/SpongeBob_SquarePants.jpg?width=1280&auto=webp&quality=80&format=jpg&disable=upscale',
        }}
      />
      <Image
        style={styles.photo2}
        source={{
          uri: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      <Image
        style={styles.photo2}
        source={{
          uri: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
    </ScrollView>
  );
};
export default Exercise2;

const styles = StyleSheet.create({
  photo: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
  },
  photo2: {
    width: 350,
    height: 300,
    resizeMode: 'contain',
  },
});