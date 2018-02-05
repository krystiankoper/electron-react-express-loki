import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FormItem = Form.Item;

const CancelButton = styled(({ className }) => (
  <Link to="/">
    <Button className={className}>Cancel</Button>
  </Link>
))`
  margin-left: 8px;
`;

const UserForm = Form.create({
  mapPropsToFields(props) {
    const { user } = props;
    return {
      firstName: Form.createFormField({
        ...user.firstName,
        value: user.firstName,
      }),
      lastName: Form.createFormField({
        ...user.lastName,
        value: user.lastName,
      }),
      email: Form.createFormField({
        ...user.email,
        value: user.email,
      }),
      phone: Form.createFormField({
        ...user.phone,
        value: user.phone,
      }),
    };
  },
})((props) => {
  const { form } = props;
  const { getFieldDecorator } = form;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { user: { id }, submit } = props;
    form.validateFieldsAndScroll((err, user) => {
      if (!err) {
        const userData = { ...user };
        if (id) {
          userData.id = id;
        }
        submit(userData);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormItem
        {...formItemLayout}
        label="First Name"
      >
        {
          getFieldDecorator('firstName', {
            rules: [{
              required: true, message: 'Please input user First Name!',
            }],
          })(<Input />)
        }
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Last Name"
      >
        {
          getFieldDecorator('lastName', {
            rules: [{
              required: true, message: 'Please input user Last Name!',
            }],
          })(<Input />)
        }
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="E-mail"
      >
        {
          getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input user E-mail!',
            }],
          })(<Input />)
        }
      </FormItem>
      <FormItem
        {...formItemLayout}
        label="Phone"
      >
        {
          getFieldDecorator('phone', {
            rules: [{
              required: true, message: 'Please input user phone number!',
            }],
          })(<Input />)
        }
      </FormItem>
      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">Save</Button>
        <CancelButton />
      </FormItem>
    </Form>
  );
});

export default UserForm;
