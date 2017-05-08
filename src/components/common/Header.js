import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// There are two types of components in React:
// Functional and Class Components.
// Functional presents static data,
//            can't handle fetching data,
//            easy to write
// Class components used for dynamic sources of data,
//                  handles any data that might change,
//                  knows when it gets rendered to the device,
//                  more code to write

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',// doesn't work with Android
        shadowOffset: { width: 0, height: 2},// doesn't work with Android
        shadowOpacity: 0.9,// doesn't work with Android, from 0 to 1
        elevation: 2,//shadow for Android
        position: 'relative'
    },
    textStyle: {
       fontSize: 20
   }
});

export {Header}; //shortcut for export {Header: Header}