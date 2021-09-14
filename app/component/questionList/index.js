import React, { Component } from 'react';
import { Button, Table } from 'antd';
import styles from './index.css';
import { inject, observer } from 'mobx-react';

@inject('ModalsStore', 'UserStore')
@observer
class QuestionList extends Component {
    constructor(props) {
        super(props);
    }

    addQuestion = () => {
        const { ModalsStore } = this.props;
        ModalsStore.open("addQuestion");

    }

    reload = () => {
        const { UserStore } =this.props;
        UserStore.fetchQuestionList();
        //todo 
        //重新读取数据
    }

    columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
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
            width: 250,
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
    render() {

        const { questionList,questionListLoading } = this.props.UserStore;

        // 从数据库 拿 数据 

        return (

            <div>
                <Button className="add_question" onClick={this.addQuestion}>
                    新增问题
                </Button>

                <Button onClick={this.reload}>
                    刷新
                </Button>
                <Table
                    loading={questionListLoading}
                    columns={this.columns}
                    dataSource={questionList}
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

export default QuestionList;