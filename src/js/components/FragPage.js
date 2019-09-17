import React, { Component } from 'react';
import Layout from './Layout';
import PhoneForm from './PhoneForm';
import PhoneInfoList from './PhoneInfoList';

class FragPage extends Component{
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: 'Hello',
        phone: '010-0000-1234'
      },
      {
        id: 1,
        name: 'World',
        phone: '010-0000-5678'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })
  }
  render() {
    return(
      <Layout>
        <h2>Page: Fragment</h2>
        <p>Hello</p>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList data={this.state.information}/>
      </Layout>
    );
  }
}
export default FragPage;