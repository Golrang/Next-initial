import { SubscriptionPanel } from "../app/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SubscriptionPanel> = {
  title: "Components/SubscriptionPanel",
  component: SubscriptionPanel,
};

export default meta;
type Story = StoryObj<typeof SubscriptionPanel>;

export const Primary: Story = {
  args: {
    title: "Title",
    description: "Description",
  },
};
