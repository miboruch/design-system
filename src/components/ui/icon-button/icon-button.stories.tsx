import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IconButton } from "./icon-button";

export default {
  title: "UI/Icon Button",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = ({ children, ...args }) => (
  <IconButton {...args}>{children}</IconButton>
);

export const IconButtonTemplate = Template.bind({});

IconButtonTemplate.args = {
  children: "Success",
  variant: "add",
};
