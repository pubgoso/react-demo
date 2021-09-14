import React, { Component } from 'react';
import styles from './index.css';
import { Menu } from 'antd';

class TabPane extends Component{

    render(){
        return (

            <div className='box_TabPane'>
                <h1 >
                    Root菜单
                </h1>
                <Menu>
                    <Menu.Item key={0} >
                        信息管理
                    </Menu.Item>
                    <Menu.Item key={1}>
                        Rank
                    </Menu.Item>
                    
                </Menu>
            </div>
        )
    }
}
export default TabPane;