import React, { useContext, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import MasonryList from '@react-native-seoul/masonry-list';

import { SearchContext } from "./SearchContext";

import GalleryItem from "./GalleryItem";
import Message from "./Loading";


function Gallery({ list }) {
    const { onRefresh, error } = useContext( SearchContext );
    return (
        <MasonryList 
            data = { list }
            spacing = { 5 }
            ListEmptyComponent = { () => <Message content = { error }/> }
            keyExtractor = { ( ___, index ) => index }
            onRefresh = { onRefresh }
            contentContainerStyle = { styles.gallery } 
            numColumns = { 2 }
            showsVerticalScrollIndicator = { false }
            renderItem = { ({ item }) => <GalleryItem key = { item?.id } data = { item }/> }
        />
    )
}

const styles = StyleSheet.create({
    gallery: {
        marginTop: 0,
    },
})
export default Gallery;