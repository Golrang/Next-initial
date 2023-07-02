import { Post } from "../components/post";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Post> = {
  title: "Components/Post",
  component: Post,
};

export default meta;
type Story = StoryObj<typeof Post>;

export const Primary: Story = {
  args: {
    title: "Title",
    description: "Description",
  },
};
