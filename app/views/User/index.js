import React, { Component } from 'react';
import styles from '../../styles/index.css';
import CopyRight from '../../component/copyRight';
import Header from '../../component/header';
import Contianer from './Contianer';
import { inject, observer } from 'mobx-react';


@inject("UserStore")
@observer
class User extends Component {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const { UserStore } = this.props;
        if (UserStore.userInfo.type == 3) {
            UserStore.fetchStudentList();
            UserStore.getInfoList();
            UserStore.fetchMentorList();
            UserStore.getSubmissions();
        }

    }
    render() {
        const { userInfo } = this.props.UserStore;
        return (
            (
                userInfo.type && userInfo.type == 3 ? <div>
                    <div className='Body'>
                        <Header history={this.props.history} />
                        <Contianer />
                        <CopyRight />
                    </div>
                </div> : <h1>请登录学生账号</h1>
            )

        )

    }
}

export default User;