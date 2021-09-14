import { inject, observer } from 'mobx-react';
import { Button, Space, Table } from 'antd';
import React, { Component } from 'react';


@inject("ModalsStore", "UserStore")
@observer
class Submissions extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { UserStore } = this.props;
        UserStore.getSubmissions();
    }

    Go = (record) => {
        console.log(record);
    }

    reload = () => {
        const { UserStore } = this.props;
        UserStore.getSubmissions();
    }
    column = [
        {
            title:'提交时间',
            dataIndex:'time',
            key:'time',
            width: 200,
        },
        {
            title: '问题简述',
            dataIndex: 'info',
            key: 'info',
            align: 'center',
            width: 200,
            textWrap: 'word-break',
            ellipsis: true,
            align: 'center',
        },
        {
            title: '问题链接',
            dataIndex: 'qlink',
            key: 'qlink',
            align: 'center',
            render:(value)=>(
                <a href={value}>
                    {value}
                </a>
            ),
            width: 200,
            textWrap: 'word-break',
            ellipsis: true,
            align: 'center',
        },
        {
            title: '回答链接',
            dataIndex: 'alink',
            key: 'qlink',
            align: 'center',
            render:(value)=>(
                <a href={value}>
                    {value}
                </a>
            ),
            width: 200,
            textWrap: 'word-break',
            ellipsis: true,
            align: 'center',
        },
        {
            title: '积分',
            dataIndex: 'score',
            key: 'score',
            align: 'center'
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            align: 'center',
            render:(value)=>(
                <span className='status'>
                    <svg class="icon" aria-hidden="true">
                        <use href={value === 10 ? '#icon-dengdai1 ' :(value === 30 ? '#icon-cuowu' : '#icon-tongguo')}></use>
                    </svg>

                    {/* <i class={value === 10 ? 'iconfont icon-dengdai1 ' :(value === 30 ? 'iconfont icon-cuowu' : 'iconfont icon-tongguo')}/> */}
                    {value === 10 ? '等待' :(value === 30 ? '驳回' : '通过')}
                </span>
                
            )
        },


    ]

    render() {
        const { UserStore } = this.props;
        return (
            <div>
                <Button onClick={this.reload}>
                    刷新
                </Button>
            <Table
                columns={this.column}
                loading={UserStore.submissionListLoading}
                dataSource={UserStore.submissionList}
                pagination={{
                    position: ["topRight"]
                }}
                onRow={record => {
                    return {
                        onClick: event => { this.Go(record) }, // 点击行
                    };
                }}
            >

            </Table>
            </div>

        )

    }
}
export default Submissions;