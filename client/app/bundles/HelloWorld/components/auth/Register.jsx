import React, { PropTypes } from 'react';
import Form from "react-jsonschema-form";

const schema = {
  title: "Sign Up",
  type: "object",
  required: ["email", "password"],
  properties: {
    first_name: {type: "string", title: "first_name"},
    last_name: {type: "string", title: "last_name"},
    email: {type: "string", title: "email"},
    password: {type: "string", title: "password"}
  }
};

const onSubmit = ({formData}) => console.log(formData);

export default class CreateProduct extends React.Component {
  _notificationSystem: null

  constructor() {
    super();
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  signUp({formData}) {
    console.log('********* hello *************');
    // $.ajax({
    //   url: '/products',
    //   type: 'POST',
    //   data: { product: formData },
    //   success: (response) => {
    //     this.props.gofetch();
    //     this._notificationSystem.addNotification({
    //       message: response.msg,
    //       level: 'success'
    //     });
    //   }
    // });
  }

  render () {
    return (
      <div>
        <Form schema={schema}
              onSubmit={this.signUp.bind(this)} />
      </div>
    )
  }
}
