import React, { useMemo, useContext } from "react";
import { Image, StyleSheet, Pressable, ImageBackground } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import FooterSheet from "../FooterSheet";
import { SearchContext } from "../SearchContext";

function PhotoViewScreen () {
    const { selectedPhotoData } = useContext( SearchContext );

    return (
        <GestureHandlerRootView 
            style = { styles.footer }
        >
            <Pressable
                onPress = { () => console.log( selectedPhotoData ) }
            >
                <ImageBackground 
                    src = { selectedPhotoData.urls.thumb }
                    style = {[ styles.image, { backgroundColor: selectedPhotoData.color } ]}
                >
                    <ImageBackground
                        src = { selectedPhotoData.urls.small }
                        style = { styles.image }
                    >
                        <Image 
                            src = { selectedPhotoData.urls.full }
                            style = { styles.image }
                        />
                    </ImageBackground>
                </ImageBackground>
            </Pressable>
            <FooterSheet data = { selectedPhotoData }/>
        </GestureHandlerRootView>
        )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    footer: {
        flex: 1,
        zIndex: 5,
        backgroundColor: 'red',
    },
    container: {
        flex: 1,
        zIndex: 5,
        backgroundColor: 'blue',
    }
})

export default PhotoViewScreen;