import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../index.css';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import UpdateIcon from '@material-ui/icons/Update';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const databaseURL = "https://word-cloud-147d7.firebaseio.com/";
const apiURL = "http://localhost:5000";

const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: '20px',
        right: '20px'
    }
})


class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialog: false,
            textContent: '',
            wordS: {},
            imageUrl: null
        }
    }
    
    componentDidMount() {
        this._getText();
    }

    _get() {
        fetch(`${databaseURL}/text/${this.props.match.params.textID}.json`).then(res => {
            if(res.status != 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(texts => this.setState({textContent: text['textContent']})) ;
    }

    render () {
        return (
            <Card>
                <CardContent>
                    {this.props.match.params.textID}
                </CardContent>
            </Card>
        );
    }
}

export default Detail;