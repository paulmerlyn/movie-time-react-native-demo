import React from 'react'
import { Button, View, Text } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'

const ImageScreen = ( { navigation }) => {
    return (
        <PanGestureHandler onGestureEvent={
            gestureEvent => { 
                let tranX = gestureEvent.nativeEvent.translationX
                let tranY = gestureEvent.nativeEvent.translationY
                console.log(`TranslateX: ${tranX}, and TransalteY: ${tranY}`)
            }}>
            <View style={StyleSheet.mainView}>
                <Text>Image Screen</Text>
                <Button 
                    title="Go Home"
                    onPress={() => { 
                        console.log("Go Home button was clicked")
                        navigation.navigate('Home')
                    }} />
            </View>
        </PanGestureHandler>
    )
}

const StyleSheet = {
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
}

export default ImageScreen