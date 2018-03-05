import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Grid, Row, Col} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';
import {Button, ButtonGroup} from 'react-bootstrap';
import Stepper from 'react-stepper-horizontal'; 
import brace from 'brace';
import AceEditor from 'react-ace';
import ReactCountdownClock from 'react-countdown-clock';

class Banner extends React.Component {
  render(){
      return (
        <Grid>
          <Row className="show-grid">
            <Col md={9}>
              <h1> Try Functions </h1>
              <p>Quickly and easily build serverless apps with Azure Functions.</p>
              <p>Try Azure Functions for a limited time without a subscription and free of charge or commitment.</p>
            </Col>
            <Col md={3}>
              <img width="150" height="150" src="data:image/png;base64,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"/>
            </Col>
          </Row>
        </Grid>
      );
  }
}

class Wizard extends React.Component {

  constructor(props){
    super(props);
    this.langs = [
      {
        "name":"C# Script",
        "img":"https://developer.fedoraproject.org/static/logo/csharp.png",
        "text":"Azure Functions supports C# and C# script programming languages. To learn more about using C# to write a Function in the Azure Portal, see the C# script(.csx) developer guide.",
        "mode":"csharp",
        "template": `using System.Net;

        public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, TraceWriter log)
        {
            log.Info("C# HTTP trigger function processed a request.");
        
            // parse query parameter
            string name = req.GetQueryNameValuePairs()
                .FirstOrDefault(q => string.Compare(q.Key, "name", true) == 0)
                .Value;
        
            // Get request body
            dynamic data = await req.Content.ReadAsAsync<object>();
        
            // Set name to query string or body data
            name = name ?? data?.name;
        
            return name == null
                ? req.CreateResponse(HttpStatusCode.BadRequest, "Please pass a name on the query string or in the request body")
                : req.CreateResponse(HttpStatusCode.OK, "Hello " + name);
        }
        `,
      },
      {
        "name":"JavaScript",
        "img":"https://camo.githubusercontent.com/a523d5fd70dcec79fecc4db5d641327749aea13d/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6e6f64656a732d69636f6e2e737667",
        "text":"The JavaScript experience for Azure Functions makes it easy to export a function for communicating with the runtime and for receiving and sending data via bindings. To learn more about using JavaScript to write a Function , see the JavaScript developer guide.",
        "mode":"javascript",
        "template": `module.exports = function (context, req) {
          context.log('JavaScript HTTP trigger function processed a request.');
      
          if (req.query.name || (req.body && req.body.name)) {
              context.res = {
                  // status: 200, /* Defaults to 200 */
                  body: "Hello " + (req.query.name || req.body.name)
              };
          }
          else {
              context.res = {
                  status: 400,
                  body: "Please pass a name on the query string or in the request body"
              };
          }
          context.done();
      };`,
      },
      {
        "name":"Python",
        "img":"https://www.python.org/static/opengraph-icon-200x200.png",
        "text":"(Coming Soon)"
      }
    ];
    this.state = {
      activeLanguage : 0,
      currentStep : 1,
    };
  }

  renderStepTwo(i){
    if(this.state.currentStep==2){
      return(
          <div class="step2-body">
            <div>
              <AceEditor
                theme="kuroir"
                name="UNIQUE_ID_OF_DIV"
                editorProps={{$blockScrolling: true}}
                mode = {this.langs[i].mode}
                value = {this.langs[i].template}
                height = '300px'
                width = '700px'
              />
            </div>
            <div class="timer">
              <p>
                Your trial is about to expire!
                <ReactCountdownClock seconds={3600}
                            color="#3E3D4B"
                            alpha={0.9}
                            size={75}
                  />
              </p>
            </div>
          </div>
      );
    }
}

  handleClick(i){
    this.setState({
      activeLanguage : i,
      currentStep : 1
    });
  }

  handleNext(){
    this.setState({
      activeLanguage : this.state.activeLanguage,
      currentStep : 2,
    });
  }

  renderStepOne(){
    if(this.state.currentStep == 1){
      return(
        <div class = "step1-icon">
          <div class = "lang-group">
            <ButtonGroup>
              {this.renderLanguage(0)}
              {this.renderLanguage(1)}
              {this.renderLanguage(2)}
            </ButtonGroup>
          </div>
          <div class = "step1-body">
            <p>{this.langs[this.state.activeLanguage].text}</p>
            <Button bsStyle="primary" bsSize="large" onClick = {()=> this.handleNext()}>
              Next
            </Button>
          </div>
        </div>
      );
    }
  }

  renderLanguage(i){
    return (
      <Language
      value = {this.langs[i]}
      onClick = {()=> this.handleClick(i)}
      />
    )
  }

  renderText(i){
      return (
        this.langs[i].text
      );
  }
  
  render(){
    return (
      <div>
          <Grid>
            <Row>
              <Col md ={3}>
                <Stepper steps={ [{title: 'Pick a language'}, {title: 'See it working'}] } activeStep={this.state.currentStep - 1} />
              </Col>
            </Row>
          </Grid>
          {this.renderStepOne()}
          {this.renderStepTwo(this.state.activeLanguage)}
      </div>
    );
  }

}

function Language(props) {
  return(
    <button class = "lang-icon" onClick={props.onClick}>
        <img width="140" length="140" src={props.value.img}/>
        <h5>{props.value.name}</h5>
    </button>
  );
}

class Main extends React.Component {
    render() {
      return (
        <div class = "body">
          <div class = "main-banner">
            <Banner />
          </div>
          <div class = "main-wizard"> 
            <Wizard />
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );
  
  