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
        this.fetchExperiments = this.fetchExperiments.bind(this);
        this.state = {
            experiments: []
        }
    }

    goToCreate() {
        this.props.history.push('/create');
    }

    fetchExperiments() {
        fetch('http://localhost:9000/experiments').then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    data.forEach((experiment) => {
                        experiment.title = `${experiment.independent} vs ${experiment.dependent}`
                    })
                    this.setState({experiments: data});
                })
            }
        })
    }

    render() {
        this.fetchExperiments();
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
             {this.state.experiments.map((experiment) =>
                <Grid key={experiment.title} item xs = {4}>
                    <ExperimentCard experiment = {experiment}/>
                </Grid>
             )}
        </Grid>
        </div>);
    }
}

export default withRouter(ExperimentList);