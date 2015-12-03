import React, { PropTypes } from 'react';
import Radium from 'radium';
import StartButton from './StartButton';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = this::this.buttons;
  }
  styles()  {
    return {
      buttons: {
        padding: '8px 16px',
        color: 'white'
      },
      container: {
        textAlign: 'center',
        padding: '20px'
      }
    }
  }
  buttons() {
    if (!this.props.buttons) return '';
    return this.props.buttons.map(button => <Button key={button} style={this.styles().buttons}>{button}</Button>)
  }
  render () {
    return (
      <div {...this.props} style={this.styles().container}>
        <div style={{marginBottom: '20px'}}>{this.buttons()}</div>
        <StartButton />
      </div>
    )
  }
}

export default Radium(ButtonPanel);
