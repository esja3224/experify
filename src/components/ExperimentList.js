import { Card, Grid, IconButton, CardActionArea, CardContent, Link } from '@material-ui/core';
import React, {Component, useCallback} from 'react';
import ExperimentCard from './ExperimentCard';
import {Add} from '@material-ui/icons';
import {withRouter} from 'react-router-dom/';
import Header from './Header'

class ExperimentList extends Component {

    constructor(props) {
        super(props);
        this.goToCreate = this.goToCreate.bind(this);
    }

    goToCreate() {
        console.log('clicked');
        console.log(this.props);
        this.props.history.push('/create');
    }

    render() {

        const hardcode = [
            {
                title: 'Room door closing',
                description: 'To prove that there is biased treatment in response the closing room doors'
            },
            {
                title:'Temperature affects mood',
                description: 'On the AC more?'
            },
            {
                title: 'Productivity vs Daily screentime',
                description: 'Encourage yourself to put down your phone'
            }
        ];
        window.localStorage.setItem('experiments', JSON.stringify(hardcode));
        const experiments = JSON.parse(window.localStorage.getItem('experiments'));
        return (<div><Grid container spacing = {3}>
            <Grid item xs = {4}>
                 <Card onClick={this.goToCreate}>
                     <CardActionArea>
                         <CardContent>
                                <Add></Add>
                         </CardContent>
                     </CardActionArea>
                 </Card>
             </Grid>
             {experiments.map((experiment) =>
                <Grid key={experiment.title} item xs = {4}>
                    <ExperimentCard experiment = {experiment}/>
                </Grid>
             )}
        </Grid>
        </div>);
    }
}

export default withRouter(ExperimentList);