import React from 'react';
import './style.scss';
import { Form, Input, Checkbox, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, Redirect } from 'react-router-dom';
import { handleReset } from '../../redux/actions/resetpassword';
import Notification from '../../components/elements/Notification';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { tokenReset } = useParams();
  const { isReseted } = useSelector((state) => state.auth);
  const onFinish = (values) => {
    if (values.password !== values.confirmPassword) {
      console.log('password khac confirm');
      Notification('error', "Confirm password don't match");
    } else {
      values.tokenReset = tokenReset;
      console.log(values);
      dispatch(
        handleReset(values, ({ error, message }) => {
          if (error) {
            Notification('error', message);
          }
        })
      );
    }
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  if (isReseted) {
    return <Redirect to={'/'} />;
  }
  return (
    <div className='loginWrapper'>
      <div className='resetContentWrapper'>
        <div className='content_password'>
          <h1>Reset password</h1>
        </div>
        <div className='loginForm'>
          <Form
            {...layout}
            name='normal_login'
            className='login-form'
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label='New Password'
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input.Password type='password' placeholder='Password' />
            </Form.Item>

            <Form.Item
              label='Confirm Password'
              name='confirmPassword'
              rules={[
                {
                  required: true,
                  message: 'Please input Confirm Password!',
                },
              ]}
            >
              <Input.Password type='password' placeholder='Confirm Password' />
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                Save Change
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
