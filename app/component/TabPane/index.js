import React, { Component } from 'react';
import styles from './index.css';
import { Menu } from 'antd';
import { inject, observer } from 'mobx-react';

@inject("UserStore")
@observer
class TabPane extends Component {

    render() {
        const { infoList } = this.props.UserStore;
        return (

            <div className='box_TabPane'>
                <h1>
                    {infoList[0] && infoList[0].info || ""}
                </h1>
                <p>
                    {infoList[1] && infoList[1].info || ""}
                </p>
                <p>
                    {infoList[2] && infoList[2].info || ""}
                </p>
                <p>
                    {infoList[3] && infoList[3].info || ""}
                </p>
            </div>
        )
    }
}
export default TabPane;