import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        },
    }
    
    state = {
        // 수정 버튼 눌렀을 때 editing 값을 true로 설정할 것임.
        // 이 값이 true일 때, 기존에 텍스트 형태로 보여주던 것을
        // input 형태로 변환해서 보여주게됨.
        editing: false,
        // input의 값은 유동적임, input을 담기 위한 각 필드 값을 설정
        name: '',
        phone: '',
    }

    handleRemove = () => {
        // 삭제버튼 클릭시 onRemove에 id 넣어서 호출
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    // editing 값을 반전시키는 함수.
    handleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }

    // input에서 onChange 이벤트 발생시 호출되는 함수.
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // editing 값이 변할 때 처리할 로직들
        // 수정 누르면 기존 값이 input에 나타남.
        // 수정 적용시 input의 값들을 부모에게 전달.
        const {info, onUpdate} = this.props;
        if(!prevState.editing && this.state.editing) {
            // editing false -> true
            // info의 값을 state에 넣음
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if(prevState.editing && !this.state.editing) {
            // editing true -> false
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(!this.state.editing
            && !nextState.editing
            && nextProps.info === this.props.info){
            return false;        
        }
        return true;
    }

    render() {
        //console.log('render PhoneInfo '+ this.props.info.id);
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const { editing } = this.state;

        if (editing) {
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                    <input
                        value={this.state.phone}
                        name="phone"
                        placeholder="전화번호"
                        onChange={this.handleChange}
                    />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }
        
        // 일반모드
        const {
            name, phone
        } = this.props.info;

        return(
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }
}

export default PhoneInfo;