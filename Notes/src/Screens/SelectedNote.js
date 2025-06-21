import { useFocusEffect, useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState, useCallback } from "react";
import { Alert, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Button  from "../Button";
import { SafeAreaView } from "react-native-safe-area-context";

function SelectedNote() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const { params } = useRoute();
    const [ isEditable, setIsEditable ] = useState( false );
    const [ title, setTitle ] = useState( params?.title || '');
    const [ content, setContent ] = useState( params?.content || '');

    const saveNote = async () => {
        console.log('title: ', title)
    }

    const HeaderRight = useCallback(() => <Button
            name = { <Icon  size = { 30 } name = { isEditable ? 'save' : 'edit' }/>}
            clickFunction = { () => setIsEditable( !isEditable ) }
        />,
    [ isEditable, setIsEditable ]);

    const HeaderLeft = useCallback(() => <Button
            name = { <Icon  size = { 30 } name = "arrow-back-ios"/> }
            clickFunction = { () => Alert.alert(
                'Alert Title',
                'My Alert Msg',
                [
                    {
                        text: 'Delet',
                        onPress: navigation.goBack,
                    },
                    {
                        text: 'Save',
                        onPress: saveNote,
                    }
        ]) }
        />,
    [ ]);

    useEffect(() => {
        navigation.setOptions({
            headerRight: HeaderRight,
        })

    }, [ isEditable ]);

    useEffect(() => {
        navigation.setOptions({
            title: title,
        })

    }, [ title ]);

    useEffect(() => {
        navigation.setOptions({
            title: title,
            headerLeft: HeaderLeft,
        })
    }, [ isFocused ]);

    return (
            <SafeAreaView>
                <TextInput 
                    value = { title }
                    style = { styles.title }
                    onChangeText = { ( newTitle ) => setTitle( newTitle ) }
                    readOnly = { !isEditable }
                    placeholder = "Title"
                ></TextInput>
                <TextInput 
                    value = { content }
                    style = { styles.note }
                    onChangeText = { ( newContent ) => setContent( newContent ) }
                    readOnly = { !isEditable }
                    scrollEnabled = { true }
                    placeholder = "Your note"
                ></TextInput>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 60,
        width: '100%',
        height: '100%',
        backgroundColor: '#ccc'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 45,
    },
    note: {
        fontSize: 25,
        backgroundColor: 'red',
        
    }
})

export default SelectedNote;