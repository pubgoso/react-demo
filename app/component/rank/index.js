import React, { Component } from 'react';
import { Button, Table } from 'antd';
import { inject, observer } from 'mobx-react';
import userStore from '../../store/userStore';

@inject('UserStore')
@observer
class RankList extends Component {
    constructor(props) {
        super(props);
    }


    reload = () => {
        userStore.rankLoading = true;
        userStore.fetchStudentList();
        userStore.rankLoading = false;
    }
    render() {
        const { mentorList } = this.props.UserStore;
        const columns = [
            {
                title: 'rank',
                dataIndex: 'rank',
                key: 'rank',
                align: 'center',
                render: (value) => (
                    value <= 3 ?
                        <svg class="icon" aria-hidden="true">
                            <use href={value === 1 ? '#icon-guanjun' : (value === 2 ? '#icon-yajun' : '#icon-jijun')}></use>
                        </svg>
                        //     
                        : <span>{value}</span>
                )
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                align: 'center',
            },
            // {
            //     title: '班级',
            //     dataIndex: 'class_field',
            //     key: 'class_field',
            //     align: 'center',
            // },
            // {
            //     title: 'mentor',
            //     dataIndex: 'mid_id',
            //     key: 'mid_id',
            //     align: 'center',
            //     render: (value) => (
            //         <span>
            //             {(mentorList.filter(item => item.id === value)).length > 0 && ((mentorList.filter(item => item.id === value))[0]).name || '-'}
            //         </span>
            //     ),

            // },
            {
                title: '积分',
                key: 'score',
                dataIndex: 'score',
                align: 'center',
            },
        ];

        // 从数据库 拿 数据 
        const { studentList, rankLoading } = this.props.UserStore;

        return (

            <div>
                {/* <Button onClick={this.reload}>
                    刷新
                </Button> */}
                <Table
                    loading={rankLoading}
                    columns={columns}
                    dataSource={studentList}
                    pagination={{
                        position: ["topRight"]
                    }}
                >

                </Table>
            </div>
        )
    }
}

export default RankList;