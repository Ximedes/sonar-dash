import React, { Component } from 'react';
import logo from './logo.svg';
import ProjectRow from './ProjectRow';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    fetch('/api/projects/index')
    .then( response => response.json())
    .then(projects => this.setState({projects: projects}));
  }

  render() {
    return (
      <div className="App">
        <table style={{border: "1px solid black", marginLeft: "auto", marginRight: "auto"}}>
        <thead>
          <tr>
            <td style={{textAlign: "left"}}>Name</td>
            <td style={{textAlign: "right"}}>Lines of code</td>
            <td style={{textAlign: "right"}}>Complexity</td>
            <td style={{textAlign: "right"}}>Violations</td>
          </tr>
        </thead>
        <tbody>
          {this.state.projects.map(p => {
              return <ProjectRow key={p.id} project={p} />;
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;