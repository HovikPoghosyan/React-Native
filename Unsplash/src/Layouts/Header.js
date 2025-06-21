import React from "react";
import { 
    StyleSheet, 
    Text, 
    View
} from "react-native";

import Logo from "../assets/svg/Logo";

function Header() {
    
    return (
        <View style = { styles.header }>
            <Logo 
                height = { 60 }
            />
            <Text style = { styles.name }>Unsplash</Text>
            <Text style = { styles.description }>Beautiful, free photos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: '10%',
    },
    logo: {
        position: 'absolute',
        left: 0,
    },
    name: {
        position: 'absolute',
        right: 0,
        top: 30, 
        fontSize: 40,
        fontWeight: 700,
        fontStyle: 'italic',
        color: '#393f48',
    },
    description: {
        lineHeight: 30,
        fontSize: 25,
        marginBottom: 30,
        color: '#393f48',
        flexWrap: 'nowrap',
        fontSize: 20,
        textAlign: 'right',
    }
})

export default Header;