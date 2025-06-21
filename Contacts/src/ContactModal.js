import { 
    StyleSheet,
    Modal,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Pressable,
    Alert,
} from "react-native";
import _ from "lodash"
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import { useState } from "react";


function ContactModal ({ contact, closeRequest, changeContact }) {
    const { givenName, familyName, phoneNumbers } = contact;
    const [ isChanged, setIsChanged ] = useState( false );
    const numbers = [];
    
    for ( let i = 0; i < phoneNumbers.length; i++ ) {
        if ( numbers.includes( phoneNumbers[i].number ) ) {
            phoneNumbers.splice( i, 1 )
            } else numbers.push( phoneNumbers[i].number )
    }


    const updatedContact = contact
    const info = ( title, data, name ) => (
        <View>
            <Text style = { styles.contact_modal_title }>{ title }</Text>
            <TextInput onChangeText = { newData => ( updatedContact[ name ] = newData ) } readOnly = { !isChanged } style = { styles.contact_modal_data }>{ data }</TextInput>
        </View>
    )
    
    const call = ( number ) => {
        RNImmediatePhoneCall.immediatePhoneCall( number );
    }

    const saveNewData = () => {
        updatedContact.displayName = `${ updatedContact.givenName } ${ updatedContact.familyName }`
        changeContact( updatedContact );
        console.log( updatedContact );
        return setIsChanged( false );    
    };

    const closeRequestFunction = () => {
        if ( isChanged ) {
            Alert.alert(
                'Warning',
                'Do you want to leave without save',
                [
                  {
                    text: 'Save',
                    onPress: saveNewData
                  },
                  {
                    text: 'Leave',
                    onPress: closeRequest
                  },
                ],
              );
        }
    }

    return (
        <Modal
            visible
            onRequestClose = { () => { closeRequest(); closeRequestFunction() } }
            transparent = { true }
            animationType = "fade"
        >
            <Pressable
                style = { styles.contact_modal_background }
            >
                <ScrollView  
                    contentContainerStyle = { styles.contact_modal }
                >
                    { givenName ? info( 'Name', givenName, 'givenName' ) : null }
                    { familyName ? info( 'SurName', familyName, 'familyName' ) : null }
                    { phoneNumbers
                        ? 
                            phoneNumbers.map( phoneData => (
                                <View key = { phoneData.id }>
                                    <Text 
                                        style = { styles.contact_modal_title }
                                    >{ phoneData.label }</Text>
                                    <View style = { styles.call_row }>
                                        <TextInput 
                                            readOnly
                                            style = { styles.contact_modal_data }
                                        >{ phoneData.number }</TextInput>
                                        <TouchableOpacity
                                            onPress = { () => call( phoneData.number ) }
                                        >
                                            <Text 
                                                style = {[ styles.btn, styles.call_btn ]} 
                                            >&#128222;</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))
                        :
                            null
                    }
                    <View style ={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                        <TouchableOpacity
                            onPress = { () => setIsChanged( true ) }
                            style = {{ flex: 1, flexDirection: 'column-reverse' }}
                        >
                            <Text
                                style = {[ styles.btn, styles.save_btn, isChanged ? { backgroundColor: '#47ffb6' } : null ]} 
                            >Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            disabled = { !isChanged }
                            onPress = { saveNewData }
                            style = {{ flex: 1, flexDirection: 'column-reverse' }}
                        >
                            <Text
                                style = {[ styles.btn, styles.save_btn, isChanged ? null : { opacity: 0.5 } ]} 
                            >Save</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Pressable>
        </Modal>
    )
} 

const styles = StyleSheet.create({
    btn_block: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btn: {
        textAlign: 'center',
        borderColor: '#47ffb6',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 4,
    },
    call_btn: {
        lineHeight: 40,
        fontSize: 25,
        width: 50,
    },
    save_btn: {
        fontWeight: 700,
        lineHeight: 40,
        fontSize: 35,
        width: 120,
        color: '#07d5d9',
        alignSelf: 'center',
    },
    call_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    contact_modal: {
        margin: 'auto', 
        overflow: 'hidden',
        backgroundColor: '#ffffff', 
        width: '80%', 
        height: '60%',
        padding: '5%',
        borderRadius: 30,
        flexDirection: 'column',
    },
    contact_modal_background: {
        flex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    contact_modal_title: {
        fontSize: 35,
        width: '100%',
        color: '#07d5d9'
    },
    contact_modal_data: {
        fontSize: 30,
        lineHeight: 40,
    },
})

export default ContactModal;