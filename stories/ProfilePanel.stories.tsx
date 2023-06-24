import { ProfilePanel } from "../app/components/profile-panel";
import type { Meta, StoryObj } from "@storybook/react";


const meta: Meta<typeof ProfilePanel> = {
  title: "Components/ProfilePanel",
  component: ProfilePanel,
};

export default meta;
type Story = StoryObj<typeof ProfilePanel>;

export const Primary: Story = {
//   args: {
//     title: "Title",
//     description: "Description",
//   },
};
