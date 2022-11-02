import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./button";

export default {
  title: "Form/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => <Button {...args}>{children}</Button>;

export const First = Template.bind({});

First.args = {
  children: "First button text",
  size: "small",
  variant: "contained",
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: "Secondary button text",
  variant: "outlined",
  size: "normal",
};
