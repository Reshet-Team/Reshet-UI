import type { Meta, StoryObj } from "@storybook/react";
import { CheckCircle2 } from "lucide-react";
import { Chip } from "./Chip";

export default {
  title: "Display/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["amber", "orange", "rose", "purple", "blue", "green", "taupe"],
      description: "Color palette",
      table: { defaultValue: { summary: "blue" } },
    },
    variant: {
      control: "select",
      options: ["filled", "outline"],
      description: "Visual style variant",
      table: { defaultValue: { summary: "filled" } },
    },
    icon: {
      control: false,
      description:
        "Leading element — defaults to colored dot, pass null to hide",
    },
    children: {
      control: "text",
      description: "Chip label",
    },
  },
} satisfies Meta<typeof Chip>;

type Story = StoryObj<typeof Chip>;

export const Filled: Story = {
  args: {
    color: "blue",
    children: "Chip",
  },
};

export const Outline: Story = {
  args: {
    color: "purple",
    variant: "outline",
    children: "Chip",
  },
};

export const WithIcon: Story = {
  args: {
    color: "green",
    icon: <CheckCircle2 size={12} />,
    children: "Verified",
  },
};

export const NoDot: Story = {
  args: {
    color: "green",
    icon: null,
    children: "Chip",
  },
};

export const AllColors: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "var(--space-2)",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Chip color="amber">Amber</Chip>
      <Chip color="orange">Orange</Chip>
      <Chip color="rose">Rose</Chip>
      <Chip color="purple">Purple</Chip>
      <Chip color="blue">Blue</Chip>
      <Chip color="green">Green</Chip>
      <Chip color="taupe">Taupe</Chip>
    </div>
  ),
};

export const AllColorsOutline: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "var(--space-2)",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Chip color="amber" variant="outline">
        Amber
      </Chip>
      <Chip color="orange" variant="outline">
        Orange
      </Chip>
      <Chip color="rose" variant="outline">
        Rose
      </Chip>
      <Chip color="purple" variant="outline">
        Purple
      </Chip>
      <Chip color="blue" variant="outline">
        Blue
      </Chip>
      <Chip color="green" variant="outline">
        Green
      </Chip>
      <Chip color="taupe" variant="outline">
        Taupe
      </Chip>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "var(--space-2)",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Chip color="amber">Amber</Chip>
        <Chip color="orange">Orange</Chip>
        <Chip color="rose">Rose</Chip>
        <Chip color="purple">Purple</Chip>
        <Chip color="blue">Blue</Chip>
        <Chip color="green">Green</Chip>
        <Chip color="taupe">Taupe</Chip>
      </div>
      <div
        style={{
          display: "flex",
          gap: "var(--space-2)",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Chip color="amber" variant="outline">
          Amber
        </Chip>
        <Chip color="orange" variant="outline">
          Orange
        </Chip>
        <Chip color="rose" variant="outline">
          Rose
        </Chip>
        <Chip color="purple" variant="outline">
          Purple
        </Chip>
        <Chip color="blue" variant="outline">
          Blue
        </Chip>
        <Chip color="green" variant="outline">
          Green
        </Chip>
        <Chip color="taupe" variant="outline">
          Taupe
        </Chip>
      </div>
      <div
        style={{
          display: "flex",
          gap: "var(--space-2)",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Chip color="amber" icon={null}>
          Amber
        </Chip>
        <Chip color="orange" icon={null}>
          Orange
        </Chip>
        <Chip color="rose" icon={null}>
          Rose
        </Chip>
        <Chip color="purple" icon={null}>
          Purple
        </Chip>
        <Chip color="blue" icon={null}>
          Blue
        </Chip>
        <Chip color="green" icon={null}>
          Green
        </Chip>
        <Chip color="taupe" icon={null}>
          Taupe
        </Chip>
      </div>
    </div>
  ),
};
