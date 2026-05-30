import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

export default {
  title: "Inputs/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    label: "Volume",
    defaultValue: 25,
  },
};

export const WithValue: Story = {
  args: {
    label: "Brightness",
    defaultValue: 60,
  },
};

export const Range: Story = {
  args: {
    label: "Price range",
    defaultValue: [20, 80],
  },
};

export const NoLabel: Story = {
  args: {
    defaultValue: 40,
    showValue: false,
  },
};

export const Steps: Story = {
  args: {
    label: "Rating",
    defaultValue: 3,
    min: 1,
    max: 5,
    step: 1,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    defaultValue: 40,
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)",
      }}
    >
      <Slider label="Default" defaultValue={30} />
      <Slider label="Range" defaultValue={[20, 70]} />
      <Slider label="Steps (1–5)" defaultValue={3} min={1} max={5} step={1} />
      <Slider label="No value display" defaultValue={50} showValue={false} />
      <Slider label="Disabled" defaultValue={40} disabled />
    </div>
  ),
};
