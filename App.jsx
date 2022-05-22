import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";

export default function App() {
	// const [inputText, setInputText] = React.useState();
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

	return (
		// <SafeAreaView style={styles.safeArea}>
		// 	<View style={styles.container}>
		// 		<TextInput style={{ border: 2, padding: 10, backgroundColor: "white" }} />
		// 		<View style={styles.inputContainer}>
		// 			<TextInput
		// 				style={styles.input}
		// 				onChangeText={setInputText}
		// 				value={inputText}
		// 				placeholder="type"
		// 				keyboardType="numeric"
		// 			/>
		// 		</View>
		// 		<View style={styles.center}>
		// 			<Text style={styles.text}>Open up App.js to start working on your app!!!</Text>
		// 		</View>
		// 		<StatusBar style="auto" />
		// 	</View>
		// </SafeAreaView>
		<SafeAreaView>
			<TextInput style={styles.input} onChangeText={onChangeText} value={text} />
			<TextInput
				style={styles.input}
				onChangeText={onChangeNumber}
				value={number}
				placeholder="useless placeholder"
				keyboardType="numeric"
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	// safeArea: {
	// 	flex: 1,
	// 	backgroundColor: "#222",
	// },
	// container: {
	// 	flex: 1,
	// 	paddingTop: 50,
	// },
	// inputContainer: {
	// 	flexDirection: "row",
	// 	paddingHorizontal: 10,
	// },
	// input: {
	// 	flex: 1,
	// 	borderColor: "rgb(29, 161, 242)",
	// 	borderWidth: 2,
	// 	marginRight: 10,
	// 	borderRadius: 10,
	// 	color: "white",
	// 	paddingHorizontal: 10,
	// 	fontSize: 32,
	// },
	// text: {
	// 	color: "white",
	// },
	// center: {
	// 	paddingTop: 20,
	// 	display: "flex",
	// 	alignItems: "center",
	// 	justifyContent: "center",
	// },
});
