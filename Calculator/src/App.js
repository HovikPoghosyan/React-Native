import React from "react";
import { StyleSheet, View } from "react-native";

import Calculator from "./components/features/Calculatore";

function App() {

    return(
        <View style = { styles.wrapper }>
            <Calculator />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
})

export default App;