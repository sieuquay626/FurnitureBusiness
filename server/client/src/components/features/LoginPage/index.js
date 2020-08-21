import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { IMAGES } from '../../../assets';
import 'antd/dist/antd.css';
import './style.scss';
import { handleLogin } from '../../../redux/actions/login';
// import Notification from '../../components/elements/Notification';
const LoginPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isOAuth } = useSelector((state) => state.auth);
  const onFinish = (values) => {
    dispatch(
      //   // handleLogin(values, ({ error, message }) => {
      //   //   if (error) {
      //   //     Notification('error', message);
      //   //   }
      //   // })
      handleLogin(values)
    );
  };

  const { from } = location.state || { from: { pathname: '/' } };

  if (isOAuth) {
    return <Redirect to={from} />;
  }

  return (
    <div className='loginWrapper'>
      <div className='loginContentWrapper'>
        <div className='loginContent'>
          <div className='loginContentLeft'>
            <div className='logo'>
              <img src={IMAGES.login} alt='logo' />
            </div>
          </div>

          <div className='loginContentRight'>
            <div className='card-header'>
              <div className='card-logo'>
                <Link to='/'>
                  <img src={IMAGES.logo} alt='No logo' />
                </Link>
              </div>

              <div className='card-title'>
                <h4>Login</h4>
              </div>
            </div>
            <p>Welcome back, please login to your account.</p>
            <div className='loginForm'>
              <Form
                name='normal_login'
                className='login-form'
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name='username'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!',
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className='site-form-item-icon' />}
                    placeholder='Username'
                  />
                </Form.Item>
                <Form.Item
                  name='password'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className='site-form-item-icon' />}
                    type='password'
                    placeholder='Password'
                  />
                </Form.Item>

                <Form.Item>
                  <div className='check-remember'>
                    <Form.Item name='remember' valuePropName='checked' noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </div>

                  <div className='forgot-link'>
                    <Link className='login-form-forgot' to='/recover-password'>
                      Forgot password
                    </Link>
                  </div>
                </Form.Item>

                <Form.Item>
                  <Button
                    type='primary'
                    htmlType='submit'
                    className='login-form-button'
                  >
                    Log in
                  </Button>

                  <div className='account-signup'>
                    <span>Don’t have an account ? </span>
                    <Link to='/signup'>Sign up</Link>
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

export default LoginPage;
