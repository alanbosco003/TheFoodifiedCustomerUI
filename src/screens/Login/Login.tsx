// src/screens/Login.tsx

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/theme';
import TextField from '@/components/atoms/TextField/TextField';
import TextButton from '@/components/atoms/TextButton/TextButton';
import { SafeScreen } from '@/components/template';

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { colors, gutters, fonts } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <SafeScreen>
      <View style={[styles.container, gutters.paddingHorizontal_32]}>
        <Text style={[styles.title, { color: colors.gray800 }]}>Hi login</Text>
        <TextField
          placeholder="User Name"
          value={username}
          onChangeText={setUsername}
        />
        <TextField
          placeholder="Passwor"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.purple50 }]}
          onPress={handleLogin}
        >
          <Text style={[styles.buttonText, { color: colors.red500 }]}>"Login"</Text>
        </TouchableOpacity>
        <TextButton title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
      </View>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
