import React from "react";
import { StyleSheet, Text } from "react-native";


function Message({ content = 'Loading ...'}) {

    return <Text style = { styles.Message }>{ content }</Text>
}

const styles = StyleSheet.create({
    Message: {
        fontSize: 35,
        fontWeight: 'bold',
    }
})

export default Message;