import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter, Stack, useLocalSearchParams } from 'expo-router';

export default function CounterScreen() {
	const [count, setCount] = useState(0);
	const router = useRouter();
	const params = useLocalSearchParams();

	const increment = () => setCount(count + 1);

	const decrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const minusColor = count > 0 ? 'green' : 'red';

	const getName = () => {
		if (params.name) {
			return ` de ${params.name}`;
		}
		return '';
	};

	const updateName = () => {
		router.setParams({ name: 'David' });
	};

	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					title: 'Counter' + getName() + ' : ' + count,
					headerStyle: {
						backgroundColor: 'white',
					},
					headerTintColor: 'black',
					// headerBackVisible: false,
					headerLeft: () => (
						<Pressable onPress={() => router.back()}>
							<AntDesign
								name="arrowleft"
								size={24}
								color="blue"
							/>
						</Pressable>
					),
					headerRight: () => (
						<View style={styles.buttons}>
							<Pressable onPress={decrement}>
								<AntDesign
									name="minuscircle"
									size={24}
									color={minusColor}
								/>
							</Pressable>
							<Pressable onPress={increment}>
								<AntDesign
									name="pluscircle"
									size={24}
									color="green"
								/>
							</Pressable>
						</View>
					),
				}}
			/>
			<Text style={styles.title}>Counter : {count} </Text>
			<View style={styles.buttons}>
				<Pressable onPress={decrement}>
					<AntDesign
						name="minuscircle"
						size={24}
						color={minusColor}
					/>
				</Pressable>
				<Pressable onPress={increment}>
					<AntDesign
						name="pluscircle"
						size={24}
						color="green"
					/>
				</Pressable>
			</View>
			<Button
				title="Update name"
				onPress={updateName}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		gap: 50,
		alignItems: 'center',
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		gap: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
