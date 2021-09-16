import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import CopyRight from '../../component/copyRight';
import Header from '../../component/header';
import Contianer from './contianer';
import styles from '../../styles/index.css';
import { Redirect } from 'react-router';

@inject('UserStore')
@observer
class Root extends Component {
    constructor (props){
        super(props);
    }
    render() {
        const { userInfo } = this.props.UserStore;

        return (
            (
                userInfo.type && userInfo.type === 1 ?
                    <div className='Body'>
                        <Header history={this.props.history}/>
                        <Contianer />
                        <CopyRight />
                    </div> : <h1>请登录root权限账户</h1>
            )

        )
    }
}
export default Root;