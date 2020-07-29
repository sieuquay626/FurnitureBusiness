import React from 'react';
import { IMAGES } from '../../assets';
import { Form, Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.scss';
import { useDispatch } from 'react-redux';
import { handleRecover } from '../../redux/actions/recoverpassword';
import Notification from '../../components/elements/Notification';

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(
      handleRecover(values, ({ error, message }) => {
        if (error) {
          Notification('error', message);
        } else {
          Notification('success', message);
        }
      })
    );
  };
  return (
    <div className='loginWrapper'>
      <div className='forgetContentWrapper'>
        <div className='forgetContent'>
          <div className='forgetContentLeft'>
            <div className='logo'>
              <img src={IMAGES.forgot_password} alt='logo' />
            </div>
          </div>
          <div className='forgetContentRight'>
            <div className='card-header'>
              <div className='card-title'>
                <h4>Recover your password</h4>
              </div>
            </div>
            <p>
              Please enter your email address and we'll send you instructions on
              how to reset your password.
            </p>
            <div className='forgetForm'>
              <Form
                name='normal_login'
                className='login-form'
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name='email'
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined className='site-form-item-icon' />}
                    placeholder='Email'
                  />
                </Form.Item>

                <Form.Item>
                  <div className='return-login'>
                    <Link to='/Login'>Back to Login</Link>
                  </div>
                  <div className='send-email'>
                    <Button
                      type='primary'
                      htmlType='submit'
                      className='login-form-button'
                    >
                      Recover password
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
