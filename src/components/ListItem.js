import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';//take all exports and assign it to actions

class ListItem extends Component {
    render() {
        const {titleStyle} = styles;
        console.warn(Object.keys(this.props));
        return (
            <CardSection>
                <Text style={titleStyle}>
                    {this.props.library.title}
                </Text>
            </CardSection>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default connect(null, actions)(ListItem);