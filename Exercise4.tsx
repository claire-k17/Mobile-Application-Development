import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TextInput from './component/TextInput';
import Button from './component/button';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput placeholder="Masukan username anda" label="Username" />
      <TextInput
        placeholder="Masukan password anda"
        label="Password"
        secureTextEntry={true}
      />
      <Button label="Sign In" />
      <Button label="Create New Account" color="#797171" colorText="#ffffff" />
      <Button label="Sign in google" color="#ff0000ff" colorText="#ffffff" />
      <Button label="Sign in Facebook" color="#003cffff" colorText="#ffffff" />
      <Button label="sign in  Apple" color="#000000ff" colorText="#ffffff" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});