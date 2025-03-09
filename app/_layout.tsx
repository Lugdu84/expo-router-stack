import { Stack } from 'expo-router';

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				// headerShown: false,
				headerStyle: {
					backgroundColor: 'red',
				},
				headerTintColor: 'white',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}>
			<Stack.Screen
				name="index"
				options={{
					title: 'Leçon sur Expo Router : Stack',
					headerStyle: {
						backgroundColor: 'red',
					},
				}}
			/>
		</Stack>
	);
}
