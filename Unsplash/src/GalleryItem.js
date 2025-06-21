import React, { useContext } from "react";
import { Image, StyleSheet, Pressable, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SearchContext } from "./SearchContext";



function GalleryItem({ data }) {
    const { setSelectedPhotoData } = useContext( SearchContext );
    const navigation = useNavigation();
    const { imgWidth } = useContext( SearchContext );
    const coefficient = data.height / data.width;
    const imgHeight = imgWidth * coefficient;
    
    return (
        <Pressable
            onPress = { () => {
                navigation.navigate('Photo');
                setSelectedPhotoData( data );
            } }    
        >
            <ImageBackground
                style = {[ styles.galleryItem, { width: imgWidth , height: imgHeight }, { backgroundColor: data.color } ]}
                src = { data?.urls?.thumb }
            >
                <Image 
                    style = {[ { width: imgWidth , height: imgHeight } ]}
                    accessibilityLabel = { data?.alt_description }
                    src = { data?.urls?.small }
                />  
            </ImageBackground>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    galleryItem: {
        borderRadius: 20,
        resizeMode: 'contain',
        marginVertical: 10,
        overflow: 'hidden',
    }
})

export default GalleryItem;