import React, { useState, useContext } from "react";
import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import { SearchContext } from "../SearchContext";

import Gallery from "../Gallery";

function Footer() {
    const { selectedPhotoData, imagesList, downloadIMG } = useContext( SearchContext );
    const [ isLiked, setIsLiked ] = useState( false );
    const userData = selectedPhotoData.user;

    return (
        <>
            <View style = { styles.bottomSheetHeader }>
                <Image 
                    style = { styles.userImage }
                    src = { userData.profile_image.large }
                />
                <View style = { styles.namesSection }>
                    <Text style = { styles.userName }>{ userData.name }</Text>
                    <Text style = { styles.userAccountName }>{ `@${ userData.username }` }</Text>
                </View>
                <View style = { styles.buttonsSection }>
                    <Pressable
                        onPress = { () => downloadIMG( selectedPhotoData.links.download ) }
                    >
                        <Icon 
                            name = "tray-arrow-down"
                            size = { 30 }
                            color = "#333a45"
                        />
                    </Pressable>
                    <Pressable
                        onPress = { () => setIsLiked( !isLiked ) }
                    >
                        {
                            isLiked 
                                ?
                                    <Icon 
                                        name = "heart"
                                        size = { 30 }
                                        color = "red"
                                    />
                                :
                                    <Icon 
                                        name = "heart-outline"
                                        size = { 30 }
                                        color = "#333a45"
                                    />
                        }
                    </Pressable>
                </View>
                
            </View>
            <Text style = { styles.galleryName }>Related photos</Text>
            <BottomSheetScrollView 
                scrollEnabled = { true }
            >
                <Gallery list = { imagesList }/>
            </BottomSheetScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    bottomSheetHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        marginHorizontal: '3%',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'gray',
        resizeMode: 'contain',
        shadowColor: 'black',
        elevation: 10,
        
    },
    userName: {
        fontWeight: 'bold',
        lineHeight: 20,
        fontSize: 20,
        color: '#333a46',
    },
    userAccountName: {
        lineHeight: 17,
        fontSize: 17,
        color: '#7e8eaa',
    },
    namesSection: {
        height: 50,
        justifyContent: 'space-evenly',
        marginLeft: 10,
    },
    buttonsSection: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        gap: 7,
    },
    galleryName: {
        fontWeight: '400',
        color: '#333a46',
        fontSize: 20,
        marginLeft: '3%',
        marginBottom: 10,
    }
})

export default Footer;