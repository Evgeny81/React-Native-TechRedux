import React, {Component} from 'react';
import { ListView } from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';


//Connect gives LibraryList access to app state

class LibraryList extends Component {

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries); //initialize data source for ListView
    }

    renderRow(library) {
        return <ListItem library={library} />
    }

    render() {
        //console.log(this.props); returns array of data objects
        return(
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    //console.log(mapStateToProps) returns array of data objects
    return {libraries: state.libraries}
};

export default connect(mapStateToProps)(LibraryList);