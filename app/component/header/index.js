import React, { Component } from 'react';
import styles from './index.css';
import { Dropdown, Menu,Span,Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { inject, observer } from 'mobx-react';

@inject('UserStore')
@observer
class Header extends Component {
    constructor(props) {
        super(props);
    }

    modify = () => {
        // 修改密码 
        console.log('modify');
    }
    logout = () => {
        console.log('logout');
    }
    render() {
        const {userInfo} = this.props.UserStore;
        const  name  = this.props.name && this.props.name || 'pubgoso';
        const menu = (
            <Menu>
                <Menu.Item key="1" disabled={true}>
                    积分: 0
                </Menu.Item>
                <Menu.Item key="0">
                    <a onClick={this.modify}>
                        修改密码
                    </a>
                </Menu.Item>

                <Menu.Divider />
                <Menu.Item key="3">
                    <a onClick={this.logout}>
                        退出登陆
                    </a>
                </Menu.Item>
            </Menu>
        );
        return (

            <div className='box_header'>
                <span
                    className='welcome'
                >
                    welcome~
                </span>
                <Dropdown
                    trigger={['click']}
                    overlay={menu}
                    className='user-info'
                    arrow={true}
                >
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {userInfo.name} <DownOutlined />
                    </a>
                </Dropdown>
            </div>
        )
    }
}
export default Header;