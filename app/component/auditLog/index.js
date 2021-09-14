import React, { Component } from 'react';
import { Button, Table } from 'antd';
import styles from './index.css';
import { inject, observer } from 'mobx-react';

@inject('ModalsStore', 'UserStore')
@observer
class AuditLog extends Component {
    constructor(props) {
        super(props);
    }

    reload = () => {
        const { UserStore } = this.props;
        UserStore.getAuditLog();
        //todo 
        //重新读取数据
    }


    render() {

        const { auditLogLoading, auditLogList, mentorList, studentList, questionList } = this.props.UserStore;
        const columns = [
            {
                title: '学生姓名',
                dataIndex: 'id',
                ket: 'id',
                align: 'center',
                render: (value) => (
                    <span>{studentList.filter(item => item.id === value)[0].name}</span>
                )
            },
            {
                title: 'mentor姓名',
                dataIndex: 'mentor_id',
                width: 200,
                textWrap: 'word-break',
                ellipsis: true,
                align: 'center',
                render: (value) => (
                    <span>{mentorList.filter(item => item.id === value)[0].name}</span>
                )
            },
            {
                title: '问题id',
                dataIndex: 'question_id',
                key: 'question_id',
                align: 'center',

            },
            {
                title: '发布日期',
                dataIndex: 'time_log',
                key: 'time_log',
                align: 'center',
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                align: 'center',
            },

        ];
        // 从数据库 拿 数据 

        return (

            <div>

                <Button onClick={this.reload}>
                    刷新
                </Button>
                <Table
                    loading={auditLogLoading}
                    columns={columns}
                    dataSource={auditLogList}
                    pagination={{
                        position: ["topRight"]
                    }


                    }
                >

                </Table>
            </div>
        )
    }
}

export default AuditLog;