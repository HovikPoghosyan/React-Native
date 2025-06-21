import { 
    Pressable,
    StyleSheet,
    Text,
    TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function NoteItem({ title, content }) {
    const navigation = useNavigation();

    return(
        <Pressable 
            style = { styles.note }
            onPress={ () => navigation.navigate( 'Selected Note', { title, content })}
        >
            <TextInput readOnly style = { styles.title }>{ title }</TextInput>
            <TextInput readOnly style = { styles.content }>{ content }</TextInput>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    note: {
        backgroundColor: '#fff187',
        borderRadius: 20,
        margin: 10,
        maxHeight: 250,
        overflow: 'scroll',
    },
    title: {
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 20,
        textTransform: 'uppercase'
    },
    content: {
        padding: 10,
    }
})

export default NoteItem;