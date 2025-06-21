import React, { useContext } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

import { SearchContext } from "../SearchContext";

import Header from "../Layouts/Header";
import Search from "../Search";
import Gallery from "../Gallery";

function HomeScreen() {
    const { imagesList, fetchData, error } = useContext( SearchContext );
    if ( !imagesList.length && !error ) {
        fetchData();
    }

    return (
        <View style = { styles.wrapper }>
            <Header />
            <Search />
            <Gallery list = { imagesList }/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginHorizontal: '3%',
        overflow: 'hidden',
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: 'red'
    }
})

export default HomeScreen;