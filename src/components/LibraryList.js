import React, {Component} from 'react';
import {connect} from 'react-redux';

//Connect gives LibraryList access to app state

class LibraryList extends Component {
    render() {
        //console.log(this.props); returns array of data objects
        return;
    }
}

const mapStateToProps = state => {
    //console.log(mapStateToProps) returns array of data objects
    return {libraries: state.libraries}
};

export default connect(mapStateToProps)(LibraryList);