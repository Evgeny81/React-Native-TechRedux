import React, {Component} from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({label, placeholder, value, onChangeText, secureTextEntry}) => {
    const {input, labelStyle, container} = styles;
    return (
        <View style={container}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}//to hide password text
                placeholder={placeholder}
                autoCorrect={false}//to get rid of notification about incorrect words
                value={value}
                onChangeText={onChangeText}
                style={input}
            />
        </View>
    )
};

const styles = {
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2

    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export {Input};
