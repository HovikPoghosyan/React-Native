import { 
    useEffect, 
    useState } from "react";
import { 
    StyleSheet, 
    PermissionsAndroid, 
    Platform, 
    SectionList, 
    Text, 
    TouchableOpacity, 
    Modal,
    View, 
    Image, 
    TextInput} from "react-native";
import Contacts from 'react-native-contacts';
import _ from 'lodash';
// import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

import ContactModal from "./ContactModal";



function ContactsList() {
    const [ contactsData, setContactsData ] = useState([ ]);
    const [ selectedContact, setSelectedContact ] = useState( {} );
    const [ editingContact, setEditingContact ] = useState( {} )

    const getContactsPermission = () => {
        if ( Platform.OS == 'android' ) {
            PermissionsAndroid.request( PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                title: 'Contacts',
                message: 'This app would like to view your contacts.',
                buttonPositive: 'Grant permission',
            })
            .then(async ( result ) => {
                if ( result == 'granted' ) {
                    const data = _.chain( await Contacts.getAll() )
                    .groupBy( d => d.givenName ? d.givenName[ 0 ].toUpperCase() : '#')
                    .map(( data, title ) => ({ data, title }))
                    .sortBy( section => /^[A-Z]|^[А-Я]|^[Ա-Ֆ]/.test( section.title ) ? section.title[ 0 ] : 'Ֆ')
                    .value();
                    setContactsData( data );
                }
                    
            })
            .catch(async ( error ) => {
                console.log('Contacts permission error: ', error);
            });
        }
    }

    console.log(Contacts)
    const changeContact = ( editedContact ) => Contacts.addContact( editedContact )

    useEffect( getContactsPermission, [] )
    

    return (
        <>
            <SectionList
                sections = { contactsData }
                stickySectionHeadersEnabled
                ListEmptyComponent = { <Text>There aren't any contact</Text> }
                ListHeaderComponent = { () => <Text style = { styles.header_title }>Contacts</Text> }
                renderSectionHeader = {({ section }) => {
                    return <Text style = { styles.contact_section_title }>{ section.title }</Text>
                }}
                renderItem = { ({ item })  => {
                    const { givenName, familyName } = item;
                    return (
                        <TouchableOpacity onPress = { () => setSelectedContact( item ) }>
                            <Text style = { styles.contact_section_item }>{ `${ givenName } ${ familyName }` }</Text>
                        </TouchableOpacity>
                )}}
            />
            <View >
                { 
                    !_.isEmpty( selectedContact ) 
                        ?
                            <ContactModal changeContact = { changeContact }  contact = { selectedContact } closeRequest = { () => setSelectedContact({}) } />
                        : 
                            null 
                }
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    header_title: {
        fontSize: 50,
        fontWeight: 900,
        backgroundColor: '#07d5d9',
        textAlign: 'center',
    },
    contact_section_item: {
        lineHeight: 40,
        fontSize: 25,
        marginLeft: 55,
    },
    contact_section_title: {
        marginBottom: -50,
        width: 50,
        fontSize: 40,
        fontWeight: 700,
        backgroundColor: '#07d5d9',
        textAlign: 'center',
    },
    contact_modal: {
        margin: 'auto', 
        backgroundColor: '#ffffff', 
        width: '70%', 
        height: '50%',
        padding: '10%',
        borderRadius: 50,
    },
    contact_modal_background: {
        flex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
});

export default ContactsList;