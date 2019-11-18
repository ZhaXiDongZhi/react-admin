/*
  登陆路由组件
* */

import React from "react";
import {Form,Icon,Input,Button} from "antd"
import "./login.css"
 class login extends  React.Component {

     handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFields((err,values) => {
                console.log(values)
            })
     }

    render(){
        const { getFieldDecorator  } = this.props.form;
        return(
            <div className="login">
                  <div className="login-content">
                      <h1>用户登录</h1>
                      <Form className="login-form" onSubmit={this.handleSubmit}>
                        <Form.Item>
                          {
                              getFieldDecorator("userName")(
                                  <Input
                                      prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}}/>}
                                      placeholder="用户名:"
                                  />
                              )
                          }
                      </Form.Item>
                        <Form.Item>
                              {
                                  getFieldDecorator("password")(
                                      <Input
                                          placeholder="密码:"
                                          prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}}/>}
                                      />
                                  )
                              }
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                             登录
                          </Button>
                      </Form>
                  </div>
            </div>
        )
    }
}
const WrappedDemo = Form.create()(login);
export default WrappedDemo;