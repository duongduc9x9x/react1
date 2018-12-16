import React, { Component } from 'react'

class Meota extends Component {
  render() {
    const {name, email, phone} = this.props;
    return (
      <div>
       <table width="80%" border="1">
        <tr>{name}</tr>
        <tr>{email}</tr>
        <tr>{phone}</tr>
       </table>      
      </div>
    );
  }
}
export default Meota;