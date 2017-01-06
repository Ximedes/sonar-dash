import React, { Component } from 'react';

class ProjectRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metrics: {}
        };
    }

    componentDidMount() {
      const key = this.props.project.k;
      fetch('/api/measures/component?componentKey=' + key + '&metricKeys=ncloc,complexity,violations')
      .then(response => response.json())
      .then(json => {
          const metrics = {};
          json.component.measures.forEach(m => metrics[m.metric] = m.value);
          this.setState({metrics: metrics});
        });
    }

    render() {
      const p = this.props.project;
      const metrics = this.state.metrics;
      return <tr>
                <td title={p.k} style={{textAlign: "left"}}>{p.nm}</td>
                <td style={{textAlign: "right"}}>{metrics.ncloc}</td>
                <td style={{textAlign: "right"}}>{metrics.complexity}</td>
                <td style={{textAlign: "right"}}>{metrics.violations}</td>
            </tr>;
    }
}

export default ProjectRow;