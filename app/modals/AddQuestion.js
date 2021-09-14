import React, { Component } from 'react';
import { Modal, Form, Input, Select, Button, DatePicker, InputNumber } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('ModalsStore', 'UserStore')
@observer
class AddQuestion extends Component {

    constructor(props) {
        super(props);
        //todo
        // 拿到 mentor list  
    }
    time = null

    setTime = (current) =>{
        this.time = current
    }

    onCancel = () => {
        const { ModalsStore } = this.props;
        ModalsStore.close('addQuestion');
    }

    onOk = (Item) => {
        // todo
        const { ModalsStore, UserStore } = this.props;
        console.log('Item=', Item)
        Item.end_time = this.time;
        UserStore.addQuestion(Item);
        ModalsStore.close('addQuestion');
    }
    render() {
        const { modals } = this.props.ModalsStore;
        const { addQuestion } = modals;
        return (
            <Modal
                title='添加问题'
                visible={addQuestion.open}
                onCancel={this.onCancel}
                onOk={this.onOk}
                footer={null}

            >
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    labelAlign="left"
                    name='question'
                    onFinish={this.onOk}
                >
                    <Form.Item
                        label='描述'
                        name='info'
                        rules={[{
                            required: true,
                            message: '请输入问题描述'
                        }


                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='链接'
                        name='link'
                        rules={[
                            {
                                required: true,
                                message: '请输入链接!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='积分'
                        name='score'
                        rules={[
                            {

                                required: true,
                                message: '请输入积分'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='截止日期'
                        name='end_time'
                        rules={[
                            {

                                required: true,
                                message: '请选择截止时间'
                            }
                        ]}
                    >
                        <DatePicker format='YYYY-MM-DD' onOk={this.setTime}
                            onChange={(data,dataString) =>{
                                this.time = dataString
                            }}
                        />
                    </Form.Item>

                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        添加
                    </Button>
                </Form>
            </Modal>
        )
    }
}
export default AddQuestion;