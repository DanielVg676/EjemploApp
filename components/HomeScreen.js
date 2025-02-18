import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Pantalla de inicio</Text>
            <StatusBar style="light" />
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
  });
  

  //El elemento export default exportara la funcion en donde contendremos todo el contenido de nuestra vista
export default HomeScreen;
