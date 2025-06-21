import React, { useMemo, useContext } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { StyleSheet } from "react-native";

import { SearchContext } from "./SearchContext";

import Footer from "./Layouts/Footer";

function FooterSheet({ }) {
    const { fetchData, imagesList } = useContext( SearchContext );
    const snapPoints = useMemo(() => [ 142, '75%' ], []);

    return (
        <BottomSheet
            index = { 0 }
            snapPoints = { snapPoints }
            enableDynamicSizing = { false }
            // enablePanDownToClose = { true }
        >
            <BottomSheetView style = { styles.container }>
                <Footer />
            </BottomSheetView>
        </BottomSheet>
        
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginHorizontal: '3%',
    },
})

export default FooterSheet;