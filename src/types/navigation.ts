import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	Startup: undefined;
	LoginScreen: undefined;
	SignUp: undefined;
	Home: undefined;
};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;
