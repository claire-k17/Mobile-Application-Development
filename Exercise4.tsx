import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TextInput from './component/TextInput';
import Button from './component/button';
import { useState } from 'react';

const Login = () => {
  const [fromData, setFormData] = useState({
    nama: '',
    username: '',
    email: '',
    address: '',
    phoneNumber: ''
  }); 

  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const onSignIn = () => {
    console.log('Data Register:');
    console.log('Nama:', fromData.nama);
    console.log('Username:', fromData.username);
    console.log('Email:', fromData.email);
    console.log('Address:', fromData.address);
    console.log('Phone Number:', fromData.phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput 
        placeholder="Masukan nama lengkap anda" 
        label="nama" 
        onChangeText={(text) => handleInputChange('nama', text)}
      />
      <TextInput
        placeholder="Masukan username anda"
        label="Username"
        onChangeText={(text) => handleInputChange('username', text)}
      />
      <TextInput 
        placeholder="Masukan Email anda" 
        label="Email" 
        onChangeText={(text) => handleInputChange('email', text)}
        />
        <TextInput 
        placeholder="Masukan Address anda" 
        label="Address" 
        onChangeText={(text) => handleInputChange('address', text)}
        />
        <TextInput 
        placeholder="Masukan nomor telepon anda" 
        label="Phone number" 
        onChangeText={(text) => handleInputChange('phoneNumber', text)}
        />
      <Button label="register" color="#ca0bf0ff" colorText="#ffffff" onPress={onSignIn} />
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