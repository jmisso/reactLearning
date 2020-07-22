import React from 'react';
import FormComponent from "./FormComponent"


class FormContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    }
    this.handlChange = this.handlChange.bind(this)
  }

  handlChange(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ?
      this.setState({
        [name]: checked
      }) :
      this.setState({
        [name]: value
      })
  }

  render() {
    return (
      <FormComponent
        handlChange={this.handlChange}
        data={this.state}
      />
    )
  }

}

export default FormContainer
