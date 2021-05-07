import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const HomeScreen = ( { navigation, route }) => {
    console.log(navigation)
    console.log(route)
    return (
        <View style={styles.mainView}>
            <Text>Home Screen</Text>
            <TouchableOpacity 
                style={styles.touchableView}
                onPress={() => { 
                    console.log("The Go to Details (Star Wars) button on the home screen was clicked")
                    navigation.navigate('Details', { screenNumber: 1, favoriteColor: 'blue' })
                }}>
                <View>
                    <Text style={styles.touchableText}>Star Wars</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.touchableView}
                onPress={() => { 
                    console.log("The go to Details (About Time) button on the home screen was clicked")
                    navigation.navigate('Details', { screenNumber: 1, favoriteColor: 'blue' })
                }}>
                <View>
                    <Text style={styles.touchableText}>About Time</Text>
                </View>
            </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    touchableView: {
        marginBottom: 30,
        width: 150,
        height: 50,
        alignItems: 'center',
        backgroundColor: 'orange',
        borderWidth: 5,
        borderRadius: 10,
    },
    touchableText: {
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
})

export default HomeScreen