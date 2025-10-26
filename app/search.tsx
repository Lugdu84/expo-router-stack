import { Stack } from 'expo-router';
import { useRef, useState } from 'react';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import { SearchBarCommands } from 'react-native-screens';
import { useHeaderHeight } from '@react-navigation/elements';

export default function SearchScreen() {
	// @ts-ignore
	const refSearch = useRef<SearchBarCommands>();

	// Si pas de FlatList, on peut utiliser useHeaderHeight pour iOS
	// pour gérer le décalage du header
	const headerHeight = useHeaderHeight();

	// console.log('headerHeight', headerHeight);

	const [searchText, setSearchText] = useState('');

	const handleChangeText = (text: string) => {
		setSearchText(text);
	};

	const languages = [
		{ id: '1', name: 'JavaScript' },
		{ id: '2', name: 'Python' },
		{ id: '3', name: 'Java' },
		{ id: '4', name: 'C++' },
		{ id: '5', name: 'Ruby' },
		{ id: '6', name: 'Go' },
		{ id: '7', name: 'Swift' },
		{ id: '8', name: 'PHP' },
		{ id: '9', name: 'C#' },
		{ id: '10', name: 'Kotlin' },
		{ id: '11', name: 'Rust' },
		{ id: '12', name: 'Dart' },
		{ id: '13', name: 'TypeScript' },
		{ id: '14', name: 'Scala' },
		{ id: '15', name: 'Perl' },
		{ id: '16', name: 'Haskell' },
		{ id: '17', name: 'Lua' },
		{ id: '18', name: 'Elixir' },
		{ id: '19', name: 'Clojure' },
		{ id: '20', name: 'F#' },
		{ id: '21', name: 'Objective-C' },
		{ id: '22', name: 'Visual Basic .NET' },
		{ id: '23', name: 'Assembly Language' },
		{ id: '24', name: 'COBOL' },
		{ id: '25', name: 'Fortran' },
	];

	const filteredLanguages = languages.filter((language) =>
		language.name.toLowerCase().includes(searchText)
	);

	console.log('filteredLanguages', filteredLanguages);

	return (
		<View
			style={[
				styles.container,
				// Platform.OS == 'ios' && { paddingTop: headerHeight },
			]}>
			<Stack.Screen
				options={{
					headerSearchBarOptions: {},
				}}
			/>
			<FlatList
				ListHeaderComponent={() => (
					<Text style={styles.title}>
						Filtrer des langages avec la Search Bar d'Expo Router
					</Text>
				)}
				contentInsetAdjustmentBehavior="automatic"
				data={filteredLanguages}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<View style={{ padding: 10 }}>
						<Text>{item.name}</Text>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		padding: 10,
	},
});
