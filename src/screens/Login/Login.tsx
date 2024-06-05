// src/screens/Login.tsx

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/theme';
import TextField from '@/components/atoms/TextField/TextField';
import TextButton from '@/components/atoms/TextButton/TextButton';
import { SafeScreen } from '@/components/template';
import { Brand } from '@/components/molecules';
import ImageVariant from '@/components/atoms/ImageVariant/ImageVariant';

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {

  const onChangeTheme = () => {
		changeTheme(variant === 'default' ? 'dark' : 'default');
	};

  const {
		colors,
		variant,
		changeTheme,
		layout,
		gutters,
		fonts,
		components,
		backgrounds,
	} = useTheme();


  const { t } = useTranslation();
  // const { colors, gutters, fonts } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home')
    // Handle login logic here
  };

  return (
    <SafeScreen>
      <View style={[styles.container, gutters.paddingHorizontal_32]}>
        <Brand></Brand>
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
          style={[styles.button, { backgroundColor: colors.red500 }]}
          onPress={handleLogin}
        >
          <Text style={[styles.buttonText, { color: "white" }]}>Login</Text>
        </TouchableOpacity>
        <TextButton title="Sign Up" 
        onPress={	() => {
            console.log("Hit")
            navigation.navigate('SignUp')
        }
        } 
        />
        						<TouchableOpacity
							testID="change-theme-button"
							style={[components.buttonCircle, gutters.marginBottom_16]}
							onPress={() => onChangeTheme()}
						>
						</TouchableOpacity>
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
