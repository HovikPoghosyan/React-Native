import React, { useContext, memo } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { SearchContext } from "./SearchContext";

import ColorBox from "./ColorBox";

const Search = memo(function Search() {
    const { name, setName } = useContext( SearchContext );

    return(
        <View style = {{ }}>
            <TextInput 
                style = { styles.input }
                placeholderTextColor = { '#c1c3c7' }
                placeholder = "Search photos"
                value = { name }
                onChangeText = { ( newName ) => setName( newName ) } 
            />
            <ScrollView 
                contentContainerStyle = { styles.colorPicker }
                horizontal = { true }
                
                showsHorizontalScrollIndicator = { false }
            >
                <ColorBox color = {[ "black", "white" ]}/>
                <ColorBox color = "black"/>
                <ColorBox color = "white"/>
                <ColorBox color = "yellow"/>
                <ColorBox color = "orange"/>
                <ColorBox color = "red"/>
                <ColorBox color = "purple"/>
                <ColorBox color = "magenta"/>
                <ColorBox color = "green"/>
                <ColorBox color = "teal"/>
                <ColorBox color = "blue"/>
            </ScrollView>
        </View>
    )
});

const styles = StyleSheet.create({
    input: {
        lineHeight: 25,
        fontSize: 20,
        borderColor: '#cbcbcb',
        paddingHorizontal: 25,
        borderWidth: 3,
        borderRadius: 50,
    },
    colorPicker: {
        marginTop: 20,
    }
})

export default Search;