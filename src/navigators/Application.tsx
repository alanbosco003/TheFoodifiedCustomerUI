import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Example, Startup } from '@/screens';
import { useTheme } from '@/theme';

import type { ApplicationStackParamList } from '@/types/navigation';
import LoginScreen from '@/screens/Login/LoginScreen';
import SignUp from '@/screens/SignUp/SignUp';
import Menu from '@/screens/Menu/Menu';


const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<NavigationContainer theme={navigationTheme}>
			<Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Startup" component={Startup} />
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="Home" component={Menu} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default ApplicationNavigator;
