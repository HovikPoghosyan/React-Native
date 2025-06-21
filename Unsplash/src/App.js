import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";


import Route from "./Route";

import SearchContextProvider from "./SearchContext";


function App() {
    return (
        <GestureHandlerRootView>
            <SafeAreaProvider>
                <StatusBar 
                    hidden = { true }
                />
                <SearchContextProvider>
                    <Route />
                </SearchContextProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
        
    )
}

export default App;