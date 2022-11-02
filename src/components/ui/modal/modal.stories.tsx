import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./modal";

export default {
  title: "UI/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({ children, ...args }) => <Modal {...args}>{children}</Modal>;

export const ModalStory = Template.bind({});

ModalStory.args = {
  children: <h1>Test modal component</h1>,
  isOpen: true,
  handleClose: () => {},
};
