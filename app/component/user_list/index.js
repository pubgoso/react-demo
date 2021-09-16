import React, { Component } from 'react';
import { Button, Table } from 'antd';
import { inject, observer } from 'mobx-react';
import { action } from 'mobx';
import styles from './index.css';

@inject('ModalsStore', 'UserStore')
@observer
class UserList extends Component {
    constructor(props) {
        super(props);
    }

    // manage_info  Modal open  

    open = (url) => {
        const { ModalsStore } = this.props;
        ModalsStore.open(url);
    }
    Go = (Now) => {
        //todo
        const { ModalsStore } = this.props;
        const { modals } = ModalsStore;
        modals.modifyUser.info = Now;
        this.open("modifyUser");
    }



    reload = () => {
        const {UserStore} = this.props;
        UserStore.fetchStudentList();
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
                title:'密码',
                dataIndex:'password',
                key:'password',
                align:'center',
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                align: 'center',
            },
            {
                title: '班级',
                dataIndex: 'class_field',
                key: 'class_field',
                align: 'center',
            },

            {
                title: 'mentor',
                dataIndex: 'mid_id',
                key: 'mid_id',
                align: 'center',
                render: (value) => (
                    <span>
                        {(mentorList.filter(item => item.id === value)).length > 0 && ((mentorList.filter(item => item.id === value))[0]).name || '-'}
                    </span>
                ),
            },
            {
                title: '积分',
                key: 'score',
                dataIndex: 'score',
                align: 'center',
            },

        ];
        const { studentList } = this.props.UserStore;
        // 从数据库 拿 数据 
        console.log('dd', studentList);
        return (

            <div>
                <Button onClick={this.reload}>
                    刷新
                </Button>

                {
                    userInfo.type === 1 ?
                     <Button onClick={ ()=>this.open("addStudent") } className="addStudent">
                        添加学生
                    </Button>: null
                }
                <Table
                    loading={UserStore.rankLoading}
                    columns={columns}
                    dataSource={studentList}
                    onRow={record => {
                        return {
                            onClick: event => { this.Go(record) }, // 点击行
                        };
                    }}
                    pagination={{
                        position: ["topRight"]
                    }


                    }
                />
            </div>
        )
    }
}

export default UserList;