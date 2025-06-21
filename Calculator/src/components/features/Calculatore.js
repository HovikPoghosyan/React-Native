import React, { useRef, useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

import Button from "../commons/Button";

function Calculator() {
    const [ textContent, setTextContent ] = useState( '' );
    return(
        <View style = { styles.container }>
            <View style = { styles.show_Content_Block }>
                <TextInput 
                    style = { styles.text_Content }
                    readOnly
                >
                    { textContent ? textContent : '0' }
                </TextInput>
            </View>
            <View style = { styles.buttons_Block }>
                <View style = { styles.row }>
                    <Button style = {[ styles.button, styles.number ]}>AC</Button>
                    <Button style = {[ styles.button, styles.number ]}>+/-</Button>
                    <Button style = {[ styles.button, styles.number ]}>%</Button>
                    <Button style = {[ styles.button, styles.mainOperators ]}>÷</Button>
                </View>
                <View style = { styles.row }>
                    <Button style = {[ styles.button, styles.number ]}>1</Button>
                    <Button style = {[ styles.button, styles.number ]}>2</Button>
                    <Button style = {[ styles.button, styles.number ]}>3</Button>
                    <Button style = {[ styles.button, styles.mainOperators ]}>×</Button>
                </View>
                <View style = { styles.row }>
                    <Button style = {[ styles.button, styles.number ]}>4</Button>
                    <Button style = {[ styles.button, styles.number ]}>5</Button>
                    <Button style = {[ styles.button, styles.number ]}>6</Button>
                    <Button style = {[ styles.button, styles.mainOperators ]}>-</Button>
                </View>
                <View style = { styles.row }>
                    <Button style = {[ styles.button, styles.number ]}>7</Button>
                    <Button style = {[ styles.button, styles.number ]}>8</Button>
                    <Button style = {[ styles.button, styles.number ]}>9</Button>
                    <Button style = {[ styles.button, styles.mainOperators ]}>+</Button>
                </View>
                <View style = { styles.row }>
                    <Button length = { 2 } style = {[ styles.button, styles.number, { textAlign: 'left', paddingLeft: '10%', margin: '4%'} ]}>0</Button>
                    <Button style = {[ styles.button, styles.number ]}>.</Button>
                    <Button style = {[ styles.button, styles.mainOperators ]}>=</Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingBottom: '7%',
    },
    show_Content_Block: {
        flex: 0.6,
    },
    text_Content: {
        flex: 1,
        fontSize: 70,
        color: 'white',
        textAlign: 'right',
        textAlignVertical: 'bottom',
    },
    buttons_Block: {
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        flex: 1,
        textAlign: 'center',
        margin: '5%',
        borderRadius: 100,
        textAlignVertical: 'center',
        fontSize: 40,
        color: 'white',
    },
    number: {
        backgroundColor: '#303030',
    },
    mainOperators: {
        backgroundColor: '#f5990a',
    }
})
export default Calculator;