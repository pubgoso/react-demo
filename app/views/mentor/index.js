import React, { Component } from 'react';
import styles from '../../styles/index.css';
import CopyRight from '../../component/copyRight';
import Header from '../../component/header';
import Contianer from './Contianer';
import { inject, observer } from 'mobx-react';


@inject('UserStore')
@observer
class Mentor extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { userInfo } = this.props.UserStore;
        return (
            (
                userInfo.type && userInfo.type === 2 ? <div>
                    <div className='Body'>

                        <Header />
                        <Contianer />
                        {/* <CopyRight/> */}
                    </div>
                </div> : <h1>请登录mentor权限账号</h1>
            )

        )

    }
}

export default Mentor;