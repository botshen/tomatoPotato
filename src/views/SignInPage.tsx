import React from "react";
import { Button, PasswordInput } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons";
export const SignUpPage: React.FC = () => {
  return (
    <div>
      <h1>番茄土豆注册</h1>
      <TextInput icon={<IconAt />} placeholder="请输入用户名" />
      <PasswordInput placeholder="密码" />
      <PasswordInput placeholder="确认密码" />
      <Button>Click me!</Button>
    </div>
  );
};
