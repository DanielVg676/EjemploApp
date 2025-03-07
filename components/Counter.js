import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Counter = () => {
    //Para definir un estado tenemos que definir las variables y posteriormente el numero en el que el estado inicializa
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1)
    };
    const reset = () =>{
        setCount(0)
    };

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Contador: {count}</Text>
            <Ionicons
                name="add-circle-outline"
                size={40}
                color="green"
                onPress={increment}
                style={styles.icon}
            />
            <MaterialIcons name="wifi-protected-setup" size={40} color="red" onPress={reset} />
            {/* <Button title="Incrementar" style={styles.Button} onPress={increment}/> */}
            {/* <Button title="Reiniciar" style={styles.Button} onPress={reset}/> */}
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
    Button: {
        fontSize: 20,
        backgroundColor: 'red',
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 20,
    },
  });
  

  //El elemento export default exportara la funcion en donde contendremos todo el contenido de nuestra vista
export default Counter;
