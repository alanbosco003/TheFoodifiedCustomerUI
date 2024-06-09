// src/screens/SignUp.tsx

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/theme';
import TextField from '@/components/atoms/TextField/TextField';
import TextButton from '@/components/atoms/TextButton/TextButton';
import { SafeScreen } from '@/components/template';

interface SignUpProps {
  navigation: any;
}

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { colors, gutters, fonts } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle sign up logic here
  };

  return (
    <SafeScreen>
      <View style={[styles.container, gutters.paddingHorizontal_32]}>
        <Text style={[styles.title, { color: colors.gray800 }]}>Sign Up</Text>
        <TextField
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextField
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextField
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
        />
        <TextField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.purple50 }]}
          onPress={handleSignUp}
        >
          <Text style={[styles.buttonText, { color: colors.red500 }]}>Sign Up</Text>
        </TouchableOpacity>
        <TextButton title="Back to Login" onPress={() => navigation.navigate('Login')} />
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

export default SignUp;
