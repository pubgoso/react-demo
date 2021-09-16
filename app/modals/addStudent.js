import React, { Component } from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';
import { inject, observer } from 'mobx-react';
import { Option } from 'antd/lib/mentions';


@inject('ModalsStore','UserStore')
@observer
class AddStudent extends Component{
    constructor(props) {
        super(props);
    }

    onCancel = () => {
        const { ModalsStore } = this.props;
        ModalsStore.close('addStudent');
    }

    onOk = (Item) => {
        // todo
        const { ModalsStore, UserStore } = this.props;
        console.log('student=',Item);
        UserStore.addStudent(Item);
        ModalsStore.close('addStudent');
    }
    render() {
        const { modals } = this.props.ModalsStore;
        const { addStudent } = modals;
        const { mentorList} = this.props.UserStore;
        const optionList = []
        mentorList.forEach(item => {
            optionList.push(
                <Option key={item.id} value={item.id}>
                    {item.name}
                </Option>
            )
        });
        return (
            <Modal
                title='添加学生'
                visible={addStudent.open}
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
                            message: '请输入用户名!'
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
                    <Form.Item
                        label='班级'
                        name='class_field'
                        rules={[
                            {
                                required: true,
                                message: '请输入班级!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    
                    <Form.Item
                        label='mentor'
                        name='mid_id'
                        rules={[{
                            required:true,
                            message:'请选择mentor!'
                        }]}
                    >
                        <Select >
                            {optionList}
                        </Select>
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
export default AddStudent;