import { Link, Stack } from 'expo-router';
import { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function Index() {
	const [count, setCount] = useState(0);
	return (
		<View style={styles.container}>
			{/* <Stack.Screen
				options={{
					headerShown: true,
					headerStyle: {
						backgroundColor: 'blue',
					},
					title: `Expo Router : Stack`,
				}}
			/> */}
			<Text>Leçon sur Expo Router : Stack</Text>
			<Link
				href={'/counter'}
				asChild>
				<Button title="counter" />
			</Link>
			<Link
				href={{
					pathname: '/counter',
					params: { name: 'John' },
				}}
				asChild>
				<Button title="counter with name" />
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		gap: 10,
	},
});
