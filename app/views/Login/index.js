import React, { Component } from 'react';
import styles from './index.css';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { Redirect, Link, BrowserRouter } from 'react-router-dom';
import { Root } from '../Root';
import httpRequest from '../../service/httpRequest'
import { inject } from 'mobx-react';


import { observer } from 'mobx-react';
@inject('UserStore')

class Login extends Component {
    constructor(props) {
        super(props);

        //todo 

        //根据session来 设置免登陆 
        this.ref = React.createRef();
        // const { history } = this.props;
        // history.push('/user')
    }

    HandleOk = (Item) => {
        // 验证 登陆 信息 是否正确 
        const { UserStore } = this.props;
        if (UserStore.Login(Item)) {
            const { history } = this.props;
            const { userInfo } = UserStore;
            UserStore.fetchStudentList();
            UserStore.getInfoList();
            switch (userInfo.type) {
                case 1: {
                    history.push("/root");
                    UserStore.fetchQuestionList();
                    UserStore.getAuditLog();
                    UserStore.fetchMentorList();
                    break;
                }
                case 2: {
                    history.push("/mentor");
                    UserStore.fetchQuestionList();
                    break;
                }
                case 3: {
                    history.push("/user");
                    UserStore.getSubmissions();
                    break;
                }
                default: ;
            }
            // history.push("/root");
            // 
            // UserStore.fetchStudentList();
            // UserStore.fetchMentorList();
            // UserStore.fetchQuestionList();
            // UserStore.getAuditLog();
            // UserStore.getPendingJudgeList();

        }
    }
    HandleCancel = () => {
        // console.log('gggg');
    }
    render() {
        return (
            <div className='box'>
                <h2 >
                    登陆
                </h2>
                <Form
                    className='Form'
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={this.HandleOk}
                    onFinishFailed={this.HandleCancel}
                    autoComplete="off"
                    labelAlign="left"
                    ref={this}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输出用户名!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    {/* <Form.Item  >
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>记住我</Checkbox>
                        </Form.Item>


                    </Form.Item> */}

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit"  >
                            登陆
                        </Button>
                    </Form.Item>
                </Form>

            </div>

        )
    }
}
export default Login;