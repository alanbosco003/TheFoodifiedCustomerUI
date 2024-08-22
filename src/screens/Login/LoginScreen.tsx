// src/screens/Login/LoginScreen.tsx

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextField from '../../components/atoms/TextField/TextField';
import CustomButton from '../../components/atoms/buttons/CustomButton';

interface LoginProps {
    navigation: any;
  }

const LoginScreen: React.FC<LoginProps> = ({ navigation })=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  const handleSignUp = () => {
    // Handle sign up logic here
  };

  return (
    <View style={styles.container}>
      <TextField
        placeholder="Username"
        onChangeText={setUsername}
        value={username}  // Pass the username state as value
      />
      <TextField
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}  // Pass the password state as value
      />

      <CustomButton title="Login" onPress={handleLogin} />

      <View style={styles.divider} />

      <CustomButton title="Sign Up" onPress={handleSignUp} isPrimary={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#C2BCA8',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
    marginVertical: 25,
  },
});

export default LoginScreen;
