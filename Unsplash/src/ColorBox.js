import React, { useContext, useState, memo } from "react";
import { Pressable, StyleSheet, TouchableWithoutFeedback, View, } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SearchContext } from "./SearchContext";

function ColorBox({ color }) {
    const { colors, addColor, removeColor } = useContext( SearchContext );
    const [ isSelected, setIsSelected ] = useState( colors.includes( color ) );


    const boxToggle = () => {
        isSelected ? removeColor( color ) : addColor( color );
        return setIsSelected( !isSelected );
    };

    if ( typeof( color ) == 'object' ) {
        const count = color.length;
        let borderStyle = {};

        return (
            <Pressable 
                style = {[ styles.box, { backgroundColor: color } ]}
                onPress = { boxToggle }
            >
                { 
                    color.map(( color, index ) => {
                        if ( color == 'white' ) {
                            if ( index == 0 ) {
                                borderStyle = styles.borderLeft;
                            } else if ( index == ( count - 1 ) ) {
                                borderStyle = styles.borderRight;
                            } else {
                                borderStyle = styles.borderVertical;
                            }

                        }
                        return <View
                                    key = { color + 'Box' }
                                    style = {[ 
                                        { backgroundColor: color, flex: 2 }, 
                                        color == 'white' ? { ...borderStyle } : null ,
                                    ]}>
                                </View>
                    })
                }
                <Icon 
                    style = {[ { position: 'absolute', left: 4, top: 4, }, isSelected ? null : { display: 'none' } ]} 
                    name = "check-bold" 
                    size = { 25 }
                    color = "gray"
                />
            </Pressable>
        )
    }
    return (
        <Pressable 
            onPress = { boxToggle }
            style = {[ 
                styles.box,
                { backgroundColor: color },
                color == 'white' ? { borderWidth: 2, borderColor: 'black' } : null
            ]}
        >
            <Icon 
                style = {[ styles.checkMark, isSelected ? null : { display: 'none' } ]} 
                name = "check-bold" 
                size = { 25 }
                color = { color == 'black' ? 'white' : 'black'}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    box: {
        position: 'relative',
        flexDirection: 'row',
        borderRadius: 13,
        width: 35,
        height: 35,
        overflow: 'hidden',
        marginHorizontal: 4,
        marginBottom: 20,
    },
    checkMark: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    borderLeft: { 
        borderWidth: 2,
        borderColor: 'black',
        borderRightWidth: 0,
        marginRight: -3, 
        borderTopLeftRadius: 13,
        borderBottomLeftRadius: 13 
    },
    borderRight: { 
        borderWidth: 2, 
        borderColor: 'black', 
        borderLeftWidth: 0, 
        borderTopRightRadius: 13, 
        borderBottomRightRadius: 13 
    },
    borderVertical: { 
        borderWidth: 2, 
        borderColor: 'black', 
        borderLeftWidth: 0, 
        borderRightWidth: 0, 
    },
})


export default ColorBox;