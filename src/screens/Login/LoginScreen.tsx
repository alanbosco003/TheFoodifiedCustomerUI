import React, { useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import TextField from '../../components/atoms/TextField/TextField';
import CustomButton from '../../components/atoms/buttons/CustomButton';
import ScrollingFoodIcons from '@/components/molecules/ScrollingFoodItems/ScrollingFoodItems';
import Icon1 from '../../theme/assets/icons/food1.png';
import Icon2 from '../../theme/assets/icons/food2.png';
import Icon3 from '../../theme/assets/icons/food3.png';
import Icon4 from '../../theme/assets/icons/food4.png';
import Icon5 from '../../theme/assets/icons/food5.png';
import Icon6 from '../../theme/assets/icons/food6.png';
import Icon7 from '../../theme/assets/icons/food7.png';
import Icon8 from '../../theme/assets/icons/food8.png';
import Icon9 from '../../theme/assets/icons/food9.png';
import Icon10 from '../../theme/assets/icons/food10.png';

interface LoginProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const images = [
    Icon1,
    Icon2,
    Icon3,
    Icon4,
    Icon5,
    Icon6,
    Icon7,
    Icon8,
    Icon9,
    Icon10,
  ];

  const handleSignUp = () => {
    // Handle sign up logic here
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.appTitle}>{"Foodified"}</Text>
          <Text style={styles.appSubtitle}>{"Your Meal, Just a Tap Away"}</Text>
          <View style={{ height: 20 }} />
          <View style={styles.foodScrollContainer}>
            <ScrollingFoodIcons images={images} />
          </View>
          <View style={{ height: 60 }} />
          <TextField
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
          />
          <View style={styles.sizedBox} />
          <TextField
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
          <View style={styles.divider} />
          <CustomButton title="Login" onPress={handleLogin} />
          <View style={styles.sizedBox} />
          <CustomButton title="Sign Up" onPress={handleSignUp} isPrimary={false} />
        </View>
        <Text style={styles.consentText}>
          By signing in, you agree to our{' '}
          <Text style={styles.link}>Terms & Conditions</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 0,
    alignItems: 'center',
  },
  consentText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  link: {
    textDecorationLine: 'underline',
    color: '#888',
  },
  foodScrollContainer: {
    height: 50,
  },
  sizedBox: {
    height: 18,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: "600",
    color: "black",
    fontFamily: "Pacifico-Regular",
  },
  appSubtitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: "500",
    fontFamily: "Muli-1GDlj",
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#F3F1E9",
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  divider: {
    height: 0.6,
    width: '60%',
    backgroundColor: 'grey',
    marginVertical: 20,
    marginHorizontal: 30,
  },
});

export default LoginScreen;
