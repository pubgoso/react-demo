import React, { Component } from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';
import { inject, observer } from 'mobx-react';
import { Option } from 'antd/lib/mentions';


@inject('ModalsStore','UserStore')
@observer
class AddMentor extends Component {
    constructor(props) {
        super(props);
    }

    onCancel = () => {
        const { ModalsStore } = this.props;
        ModalsStore.close('addMentor');
    }

    onOk = (Item) => {
        // todo
        const { ModalsStore, UserStore } = this.props;
        Item.end_time = this.time;
        UserStore.addMentor(Item);
        ModalsStore.close('addMentor');
    }
    render() {
        const { modals } = this.props.ModalsStore;
        const { addMentor } = modals;
        return (
            <Modal
                title='添加mentor'
                visible={addMentor.open}
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
                        label='用户名'
                        name='userName'
                        rules={[{
                            required: true,
                            message: '请输入用户名'
                        }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='密码'
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='姓名'
                        name='name'
                        rules={[
                            {
                                required: true,
                                message: '请输入姓名!'
                            }
                        ]}
                    >
                        <Input />
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
export default AddMentor;