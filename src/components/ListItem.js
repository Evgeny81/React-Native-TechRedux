import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';//take all exports and assign it to actions

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescrioption() {
        const{ library, expanded } = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{flex: 1}}>
                        {library.description}
                    </Text>
                </CardSection>
            )
        }
    }
    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescrioption()}
                </View>
            </TouchableWithoutFeedback>

        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {//ownProps passed to component we wrapping (ListItem)
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded }
};

export default connect(mapStateToProps, actions)(ListItem);