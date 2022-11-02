import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Badge } from "./badge";

export default {
  title: "UI/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = ({ children, ...args }) => <Badge {...args}>{children}</Badge>;

export const BadgeTemplate = Template.bind({});

BadgeTemplate.args = {
  children: "Success",
  variant: "success",
};
