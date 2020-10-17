import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class ExperimentCard extends Component {
    render() {
        var experiment = this.props.experiment;
        return (
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography variant='h5' component = 'h2'> {experiment.title} </Typography>
                        <Typography variant='body2' component='p'> {experiment.description} </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default ExperimentCard;