import { 
    Text,
} from "@react-navigation/elements";
import { 
    Pressable,
} from "react-native";

function Button({ clickFunction, style, name, isDisable = false }) {
    return (
        <Pressable
            aria-disabled = { isDisable }
            onPressIn = { clickFunction }
        >
            <Text style = { style }>{ name }</Text>
        </Pressable>
    )
}

export default Button;