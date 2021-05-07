import React from 'react'
import { Button, View, Text, onStartShouldSetResponder } from 'react-native'

const DetailsScreen = ({ navigation, route }) => {
    console.log(navigation)
    console.log(route)
    const { screenNumber, favoriteColor } = route.params
    return (
        /* The return true from the inner view prevents a bubble up so the outer view's onStartShouldSetResponder's callback isn't invoked */
        <View 
            style={StyleSheet.outerView}
            onStartShouldSetResponder={() => { console.log('Outerview was clicked'); return false; }} >
        <View 
            style={StyleSheet.mainView}
            onStartShouldSetResponder={() => { console.log('mainView view was clicked'); return true; }} 
            onResponderGrant={() => console.log('Inner view says it will handle things! i.e. no bubble up') }
            onResponderMove={() => console.log('A finger is being moved on the screen')}>
            <Text>Image Screen</Text>
            <Button 
                title="Go BigImageView"
                onPress={() => { 
                    console.log("Go to BigImageView button was clicked")
                    navigation.navigate('BigImageView')
                }}  
            />
                <Text>My favorite color is: { favoriteColor ? favoriteColor : '... to be revealed' }</Text>
            <Button
                title="Go Back a Screen"
                onPress={() => {navigation.pop()}}
            />
        </View>
        </View>
    )
}

const StyleSheet = {
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    outerView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
}

export default DetailsScreen