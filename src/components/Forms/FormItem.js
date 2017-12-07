import React, { Component } from 'react'
import {
  FormControl,
  HelpBlock,
  FormGroup,
  ControlLabel
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
      bsSize
    } = this.props

    return (
      <FormGroup
        bsSize={ bsSize ? bsSize : 'small' }
        controlId={controlId}
        validationState={validationState()} >
          <ControlLabel>{label}</ControlLabel>
          <FormControl
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            min={min}
            max={max}
          />
          <FormControl.Feedback />
          { help ? <HelpBlock>{help}</HelpBlock> : null }
      </FormGroup>
    )
  }
}
