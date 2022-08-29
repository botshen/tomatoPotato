import React from "react";
import { Button, PasswordInput } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons";
import s from "./SignInPage.module.scss";
export const SignUpPage: React.FC = () => {
  return (
    <div className={s.SignInWrapper}>
      <h1>番茄土豆注册</h1>
      <TextInput
        className={s.InputWrapper}
        icon={<IconAt />}
        placeholder="请输入用户名"
      />
      <PasswordInput className={s.InputWrapper} placeholder="密码" />
      <PasswordInput className={s.InputWrapper} placeholder="确认密码" />
      <Button>Click me!</Button>
    </div>
  );
};
