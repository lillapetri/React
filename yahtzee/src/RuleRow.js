import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const {score, name, doScore, description} = this.props;
    const disabled = score !== undefined;
    return (
      <tr className={`RuleRow RuleRow-${disabled ? 'disabled' : 'active'}`}
          onClick={disabled ? null : doScore}>
        <td className="RuleRow-name">{name}</td>
        {score >= 0 ? <td className="RuleRow-score">{score} points</td>
        : <td className="RuleRow-description">{description}</td>}
      </tr>
    )
  }
}

export default RuleRow;