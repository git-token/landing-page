import React, { Component } from 'react'
import {
  FormControl,
  HelpBlock,
  FormGroup,
  ControlLabel,
  InputGroup,
  Button
} from 'react-bootstrap'

export default class FormItem extends Component {
  constructor() {
    super()
  }

  render() {
    const {
      type,
      value,
      placeholder,
      onChange,
      validationState,
      label,
      controlId,
      help,
      min,
      max,
      bsSize,
      bsStyle,
      onClick,
      button
    } = this.props

    return (
      <FormGroup
        bsSize={ bsSize ? bsSize : 'sm' }
        controlId={controlId}
        validationState={validationState()} >
          <InputGroup>
            <ControlLabel>{label}</ControlLabel>
            <FormControl
              type={type}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              min={min}
              max={max}
            />
            { help ? <HelpBlock>{help}</HelpBlock> : null }
            <FormControl.Feedback />
            { button ? <InputGroup.Button>
              <Button
                style={{ marginTop: '-30px' }}
                bsSize={ bsSize ? bsSize : 'sm' }
                bsStyle={ bsStyle ? bsStyle : 'default' }
                onClick={onClick}
                >
                {button}
              </Button>
            </InputGroup.Button> : null }
          </InputGroup>
      </FormGroup>
    )
  }
}
