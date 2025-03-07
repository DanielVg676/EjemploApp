import React from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity, TextInput } from "react-native";

const ExampleEvent = () => {
    const handlePress = (numeroBoton) => {
        Alert.alert(`Boton ${numeroBoton} presionado`); 
    };

const handleChangeText = (text) => {
    Alert.alert(`Texto cambiado: ${text}`)
};
    

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Presionar Boton</Text>
            <TouchableOpacity style={styles.button} onPress={() => handlePress(1)}>
                <Text style={styles.buttonText}>Boton 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress(2)}>
                <Text style={styles.buttonText}>Boton 2</Text>
            </TouchableOpacity>
                <TextInput placeholder="Escribe algo aqui" onChangeText={handleChangeText} style={styles.input} placeholderTextColor="red"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131d75',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        color: 'white',
    },
    button: {
        backgroundColor: 'red',
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    input: {
        borderBlockColor: 'White',
        marginTop: '50',
        paddingVertical: '15',
        paddingHorizontal: '30',
        backgroundColor: "white",
    },
});

export default ExampleEvent;
