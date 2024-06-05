import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	Startup: undefined;
	Login: undefined;
	SignUp: undefined;
	Home: undefined;
};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;
