import { Button, Space, Table } from 'antd';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react';
import React, { Component } from 'react';


@inject("ModalsStore", "UserStore")
@observer
class TaskList extends Component {
    constructor(props) {
        super(props);
    }

    Go = (text, record, status) => {
        console.log('data=', text, record, status);
        const {UserStore} = this.props;
        const params = {
            "id":record.id,
            "status":status,
        }
        UserStore.updateSubmission(params);
    }

    reload = () => {
        const {UserStore} =this.props;
        UserStore.getPendingJudgeList();
    }
    columns = [
        {
            title: '问题id',
            dataIndex: 'id',
            key: 'id',
            width: 100,
            align: 'center',
        },
        {
            title: '学生姓名',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
        },
        {
            title: '问题链接',
            dataIndex: 'qlink',
            key: 'qlink',
            render: (value) => (
                <a href={value} target='_blank'>
                    {value}
                </a>
            ),
            width: 150,
            textWrap: 'word-break',
            ellipsis: true,
            align: 'center',
        },
        {
            title: '回答链接',
            dataIndex: 'alink',
            key: 'alink',
            render: (value) => (
                value ?
                    <a href={value} target='_blank'>
                        {value}
                    </a>
                    : '-'
            ),
            width: 150,
            textWrap: 'word-break',
            ellipsis: true,
            align: 'center',
        },
        {
            title: '截止日期',
            dataIndex: 'end_time',
            key: 'end_time',
            valueType: 'date',
            render: (value) => (
                <data>{value}</data>
            ),
            align: "center",
        },
        {
            title: '分数',
            dataIndex: 'score',
            key: 'score',
            align: 'center',
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (text, record) => (
                <Space>
                    <a onClick={() => this.Go(text, record,20)}>
                        通过
                    </a>
                    <a onClick={() => this.Go(text,record,30)}>
                        打回
                    </a>
                </Space>

            )
        }
    ];
    data = [
        {
            id: '1',
            Sname: 'lfx',
            Qlink: "https://baidu.com",
            Alink: "https://baidu.com",
            score: "100",
            status: '20',
            end_time: "2021-09-21",
        }
    ]
    render() {
        const {UserStore} = this.props;
        return (
            <div>
                <Button onClick={this.reload}>
                    刷新
                </Button>

                <Table
                    columns={this.columns}
                    dataSource={UserStore.pendingList}
                    pagination={{
                        position: ["topRight"]
                    }}
                    loading={UserStore.pendingListLoading}
                >
                </Table>
            </div>

        )
    }
}

export default TaskList;