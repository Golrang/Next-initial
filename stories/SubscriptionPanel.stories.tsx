import type { Meta, StoryObj } from "@storybook/react";

const SubscriptionPanel = () => (
  <div className="bg-gray-300 w-1/4 h-32 dark:bg-red-400">
    SubscriptionPanel
  </div>
);

const meta: Meta<typeof SubscriptionPanel> = {
  title: "Components/SubscriptionPanel",
  component: SubscriptionPanel,
};

export default meta;
type Story = StoryObj<typeof SubscriptionPanel>;

export const Primary: Story = {};
