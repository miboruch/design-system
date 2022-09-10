import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./button";

export default {
  title: "Form/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const First = Template.bind({});

First.args = {
  text: "First button text",
  variant: "primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  text: "Secondary button text",
  variant: "secondary",
};
