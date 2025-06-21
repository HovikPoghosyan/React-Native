import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

function Button({ children, style, length = 1 }) {
    const [ isPressed, setIsPressed ] = useState( false );

    return(
        <TouchableOpacity style = {{ flex: length }}>
            <Text style = { style }>{ children }</Text>
        </TouchableOpacity>
    );
}

export default Button;