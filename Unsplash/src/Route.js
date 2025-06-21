import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";

import HomeScreen from "./Screens/HomeScreen";
import PhotoViewScreen from "./Screens/PhotoViewScreen";

const Navigation = createNativeStackNavigator({
    screens: {
      Home: HomeScreen,
      Photo: PhotoViewScreen,
    },
    screenOptions: {
      headerShown: false,
    },
});

const Route = createStaticNavigation( Navigation );

export default Route;