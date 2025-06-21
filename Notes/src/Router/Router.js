import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NotesList from "../Screens/NotesList";
import SelectedNotePage from "../Screens/SelectedNote";

const Stack = createNativeStackNavigator({
    screens: {
        'Notes List': {
            screen: NotesList,
        },
        'Selected Note': {
            screen: SelectedNotePage,
        },
    },
    screenOptions: {
        headerTitleAlign: 'center',
        gestureEnabled: true,
        fullScreenGestureEnabled: true,   
    },
});

const Router = createStaticNavigation( Stack );
export default Router;