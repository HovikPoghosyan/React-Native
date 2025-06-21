import { Button } from "@react-navigation/elements";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

function EditBtn( ) {
    const navigation = useNavigation();
    
    return <Button onPressIn = { () => navigation.setParams({ editable: true }) }>Edit</Button>;
}

export default EditBtn; 