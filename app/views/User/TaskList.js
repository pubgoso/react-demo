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

    columns = [
        {
            title: 'id',
            dataIndex: 'id',
            ket: 'id',
            align: 'center',
        },
        {
            title: 'info',
            dataIndex: 'info',
            width: 200,
            textWrap: 'word-break',
            ellipsis: true,
            align: 'center',
        },
        {
            title: 'link',
            dataIndex: 'link',
            key: 'link',
            width: 300,
            textWrap: 'word-break',
            ellipsis: true,
            align: 'center',
            render: (value) => (
                <a href={value} target='_blank'
                >
                    {value}
                </a>
            )
        },
        {
            title: '发布日期',
            dataIndex: 'start_time',
            key: 'start_time',
            align: 'center',
        },
        {
            title: '截止日期',
            dataIndex: 'end_time',
            key: 'end_time',
            align: 'center',
        },
        {
            title: '分数',
            dataIndex: 'score',
            key: 'score',
            align: 'center',
        },
    ];

    reload = () => {
        // const { UserStore } = this.props;
        // UserStore.get
    }

    Go = (record) => {
        const { ModalsStore } = this.props;
        console.log('record=',record)
        ModalsStore.setInfo("modifyQuestion", record);
        ModalsStore.open("modifyQuestion");
    }
    render() {
        const { UserStore } = this.props;
        const { questionList } = UserStore;
        return (
            <div>
                <Button onClick={this.reload}>
                    刷新
                </Button>
            <Table
                columns={this.columns}
                dataSource={questionList}
                onRow={record => {
                    return {
                        onClick: event => { this.Go(record) }, // 点击行
                    };
                }}
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

export default TaskList;