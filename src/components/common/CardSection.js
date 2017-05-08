import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

const CardSection =(props) => (
    <View style={styles.containerStyle}>
        {props.children}
    </View>
);

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',//horizontal layout
        borderColor: '#ddd',
        position: 'relative'
    }
};

export {CardSection};