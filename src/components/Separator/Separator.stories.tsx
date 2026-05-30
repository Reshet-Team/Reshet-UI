import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./Separator";

export default {
  title: "Layout/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Separator>;

type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div
      style={{
        width: 280,
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
      }}
    >
      <span
        style={{ fontSize: "var(--font-size-sm)", color: "var(--color-fg)" }}
      >
        Above
      </span>
      <Separator />
      <span
        style={{ fontSize: "var(--font-size-sm)", color: "var(--color-fg)" }}
      >
        Below
      </span>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        height: 24,
      }}
    >
      <span
        style={{ fontSize: "var(--font-size-sm)", color: "var(--color-fg)" }}
      >
        Home
      </span>
      <Separator orientation="vertical" />
      <span
        style={{ fontSize: "var(--font-size-sm)", color: "var(--color-fg)" }}
      >
        Pricing
      </span>
      <Separator orientation="vertical" />
      <span
        style={{ fontSize: "var(--font-size-sm)", color: "var(--color-fg)" }}
      >
        Blog
      </span>
    </div>
  ),
};
