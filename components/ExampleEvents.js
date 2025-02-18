import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExampleEvent = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Presionar Boton</Text>
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
export default ExampleEvent;
