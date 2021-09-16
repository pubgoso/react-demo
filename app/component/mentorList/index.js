import React, { Component } from 'react';
import { Button, Table } from 'antd';
import { inject, observer } from 'mobx-react';
import { action } from 'mobx';
import styles from './index.css';

@inject('ModalsStore', 'UserStore')
@observer
class MentorList extends Component {
    constructor(props) {
        super(props);
    }

    // manage_info  Modal open 

    open = (url) => {
        const { ModalsStore } = this.props;
        ModalsStore.open(url);
    }

    
    reload = () => {
        const {UserStore} = this.props;
        UserStore.fetchMentorList();
    }
    render() {
        const { UserStore } = this.props;
        const { mentorList } = UserStore;
        const { userInfo } = UserStore;
        const columns = [
            {
                title: '用户名',
                dataIndex: 'username',
                key: 'username',
                align: 'center',
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                align: 'center',
            },
            {
                title: '密码',
                dataIndex: 'password',
                key: 'password',
                align: 'center',
            },

        ];
        const { MentorList } = this.props.UserStore;
        // 从数据库 拿 数据 
        return (

            <div>
                <Button onClick={this.reload}>
                    刷新
                </Button>

                {
                    userInfo.type === 1 ?
                     <Button onClick={ ()=>this.open("addMentor") } className="addMentor">
                        添加mentor
                    </Button>: null
                }
                <Table
                    loading={UserStore.rankLoading}
                    columns={columns}
                    dataSource={mentorList}
                    pagination={{
                        position: ["topRight"]
                    }


                    }
                />
            </div>
        )
    }
}

export default MentorList;