import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class ExperimentSetup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            steps: ['Independent Variable', 'Dependent Variable', 'Description', 'Hypothesis'],
            answers: [],
        }
        this.goToExperiments = this.goToExperiments.bind(this);
        this.saveTextFieldContent = this.saveTextFieldContent.bind(this);
    }

    goToExperiments() {
      this.props.history.push('/');
    }

    getStepContent(step) {
        switch (step) {
            case 0:
                return 'What do you want to investigate?';
            case 1:
                return 'What are you measuring?';
            case 2:
                return 'What is this experiment about?';
            case 3:
                return 'What do you predict will happen?'
            default:
                return 'Unknown step';
        }
    }

    saveTextFieldContent(e) {
      let answers = this.state.answers;
      answers[this.state.activeStep] = e.target.value;
      this.setState({
        answers: answers
      });
    }

    postExperiment() {
      fetch('http://localhost:9000/experiments', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          independent: this.state.answers[0],
          dependent: this.state.answers[1],
          description: this.state.answers[2]
        })
      })
    }

    render() {

        return (
            <div>
              <Stepper activeStep={this.state.activeStep}>
                {this.state.steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <div>
                {this.state.activeStep === this.state.steps.length ? (
                  <div>
                    <Typography>
                      Setting up your experiment...
                    </Typography>
                  </div>
                ) : (
                  <div style={{display:'flex', flexDirection:'column'}}>
                      <div style={{float:'left'}}>
                        <Typography style={{textAlign:'left'}}>{this.getStepContent(this.state.activeStep)}</Typography>
                        <TextField id="standard-basic" style={{float:'left'}} onChange={this.saveTextFieldContent}/>
                      </div>
                    <div style={{float:'center'}}>
                      <Button disabled={this.state.activeStep === 0} onClick={() => this.setState({activeStep:this.state.activeStep-1})}>
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          if (this.state.activeStep !== this.state.steps.length - 1) {
                            this.setState({activeStep:this.state.activeStep + 1});
                          } else {
                            this.postExperiment();
                            this.goToExperiments();
                          }
                        }
                      }
                      >
                        {this.state.activeStep === this.state.steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        }
        
    }

export default withRouter(ExperimentSetup);