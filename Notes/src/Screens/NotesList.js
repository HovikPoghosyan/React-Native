import { 
    StyleSheet,
    Text,
} from "react-native";
import { 
    useNavigation,
    useIsFocused,
    useRoute
} from "@react-navigation/native";
import { 
    useCallback,
    useEffect,
    useState
} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import MasonryList from '@react-native-seoul/masonry-list';

import Button from "../Button";
import NoteItem from "../NoteItem";

function NotesList() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [ noteslist, setNotesList ] = useState([ { title: 'anun1', content: 'azgaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaanun1azgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaanun1azgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaanun1azgaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaanun1'}, { title: 'anun2', content: 'azganun2'}, { title: 'anun3', content: 'azganun3'}]);

    const addNote = () => navigation.navigate('Selected Note')

    const HeaderRight = useCallback(() => (
        <Button 
            name = { <Icon size = { 30 } name = "add"/>}
            clickFunction = { addNote }
        />
    ), [])

    useEffect(() => {

        if ( isFocused ) {
            navigation.setOptions({
                headerRight: HeaderRight,
            })
        }
    }, [ isFocused ])

    return (
        <SafeAreaView style = { styles.wrapper }>
            <MasonryList 
                data = { noteslist }
                keyExtractor = { ( ___, index ) => index }
                numColumns = { 2 }
                renderItem={ ({ item, i }) => <NoteItem title = { item.title } content = { item.content }/> }
            />
            
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
    addBtn: {
        height: 50,
        width: 50,
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: '#33c1de',
        borderRadius: 50,
        textAlignVertical: 'center',
        position: 'absolute',
        right: 20,
        bottom: -20,
    },
});

export default NotesList;