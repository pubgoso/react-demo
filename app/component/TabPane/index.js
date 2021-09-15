import React, { Component } from 'react';
import styles from './index.css';
import { Menu } from 'antd';

class TabPane extends Component{

    render(){
        return (

            <div className='box_TabPane'>
                <Selection>
                    <h1>
                        Hap V0.0.1
                    </h1>
                    <text>
                        支持发布，审核，回答问题。有任何bug和建议直接联系我。
                        QQ:1143335638
                    </text>
                </Selection>
            </div>
        )
    }
}
export default TabPane;