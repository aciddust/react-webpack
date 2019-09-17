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

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
        ? { ...info, ...data } // 새 객체 만들어서 기존의 값과 전달받은 data덮어씀
        : info // 기존 값 그대로 유지
      )
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
        <PhoneInfoList
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </Layout>
    );
  }
}
export default FragPage;