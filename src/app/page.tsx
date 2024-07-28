"use client";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";
import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";

type FieldType = {
  username: string;
  password: string;
};

export default function Home() {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    // Check Form Input
    if (values.username === "test" && values.password === "test123") {
      router.push("/list");
    } else {
      messageApi.open({
        type: "error",
        content: "Username or password is wrong",
      });
    }
  };

  return (
    <main className="flex items-center justify-center w-full h-screen">
      {contextHolder}
      <Form
        name="normal_login"
        layout="vertical"
        size="large"
        className="login-form flex flex-col justify-between gap-4 bg-white p-4 border-slate-500 border rounded-lg w-full max-w-md"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h1 className="text-2xl text-center font-bold">Login</h1>
        <div>
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
            label="Username"
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
            label="Password"
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button w-full"
        >
          Submit
        </Button>
      </Form>
    </main>
  );
}
