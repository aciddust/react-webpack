import React, { Component } from 'react';
import Layout from './Layout';
import PhoneForm from './phonebook/PhoneForm';
import PhoneInfoList from './phonebook/PhoneInfoList';

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
    ],
    keyword: ''
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
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
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return(
      <Layout>
        <h2>Page: Fragment</h2>
        <p>Hello</p>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <p>
          <input
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <hr />
        <PhoneInfoList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </Layout>
    );
  }
}
export default FragPage;