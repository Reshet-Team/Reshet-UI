import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../Button/Button";
import {
  DrawerActions,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  type DrawerSnapPoint,
} from "./Drawer";

export default {
  title: "Overlays/Drawer",
  component: DrawerRoot,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DrawerRoot>;

type Story = StoryObj<typeof DrawerRoot>;

export const Default: Story = {
  name: "Bottom (default)",
  render: () => (
    <DrawerRoot>
      <DrawerTrigger>Open drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerTitle>Notifications</DrawerTitle>
        <DrawerDescription>You are all caught up. Good job!</DrawerDescription>
        <DrawerActions>
          <DrawerClose>Close</DrawerClose>
        </DrawerActions>
      </DrawerContent>
    </DrawerRoot>
  ),
};

export const RightPanel: Story = {
  name: "Right panel",
  render: () => (
    <DrawerRoot swipeDirection="right">
      <DrawerTrigger>Open panel</DrawerTrigger>
      <DrawerContent side="right">
        <DrawerTitle>Settings</DrawerTitle>
        <DrawerDescription>
          Adjust your preferences from this side panel. Swipe right to dismiss.
        </DrawerDescription>
        <DrawerActions>
          <DrawerClose>Close</DrawerClose>
        </DrawerActions>
      </DrawerContent>
    </DrawerRoot>
  ),
};

export const LeftPanel: Story = {
  name: "Left panel",
  render: () => (
    <DrawerRoot swipeDirection="left">
      <DrawerTrigger>Open menu</DrawerTrigger>
      <DrawerContent side="left">
        <DrawerTitle>Navigation</DrawerTitle>
        <DrawerDescription>
          Main navigation menu. Swipe left to dismiss.
        </DrawerDescription>
        <DrawerActions>
          <DrawerClose>Close</DrawerClose>
        </DrawerActions>
      </DrawerContent>
    </DrawerRoot>
  ),
};

export const WithActions: Story = {
  name: "With actions",
  render: () => (
    <DrawerRoot>
      <DrawerTrigger variant="danger">Delete account</DrawerTrigger>
      <DrawerContent>
        <DrawerTitle>Delete account?</DrawerTitle>
        <DrawerDescription>
          This action is permanent and cannot be undone. All your data will be
          removed immediately.
        </DrawerDescription>
        <DrawerActions>
          <DrawerClose>Cancel</DrawerClose>
          <DrawerClose variant="danger">Delete</DrawerClose>
        </DrawerActions>
      </DrawerContent>
    </DrawerRoot>
  ),
};

export const Controlled: Story = {
  render: function ControlledDrawer() {
    const [open, setOpen] = React.useState(false);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)",
          alignItems: "center",
        }}
      >
        <Button onClick={() => setOpen(true)}>Open programmatically</Button>
        <DrawerRoot open={open} onOpenChange={setOpen}>
          <DrawerContent>
            <DrawerTitle>Controlled drawer</DrawerTitle>
            <DrawerDescription>
              This drawer's open state is controlled externally.
            </DrawerDescription>
            <DrawerActions>
              <DrawerClose>Close</DrawerClose>
            </DrawerActions>
          </DrawerContent>
        </DrawerRoot>
      </div>
    );
  },
};

const TOP_MARGIN_REM = 2;
const SNAP_POINTS: DrawerSnapPoint[] = ["20rem", 1];

export const SnapPoints: Story = {
  name: "Snap points",
  render: function SnapPointsDrawer() {
    return (
      <DrawerRoot snapPoints={SNAP_POINTS}>
        <DrawerTrigger>Open snap drawer</DrawerTrigger>
        <DrawerContent
          snapLayout
          dragArea={<DrawerTitle>Snap points</DrawerTitle>}
          style={
            { "--top-margin": `${TOP_MARGIN_REM}rem` } as React.CSSProperties
          }
        >
          <DrawerDescription>
            Drag the sheet up to snap to full height, or swipe down to dismiss.
          </DrawerDescription>
          <div
            style={{ display: "grid", gap: "var(--space-3)" }}
            aria-hidden="true"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                style={{
                  height: "3rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--color-border)",
                }}
              />
            ))}
          </div>
          <DrawerActions>
            <DrawerClose>Close</DrawerClose>
          </DrawerActions>
        </DrawerContent>
      </DrawerRoot>
    );
  },
};

export const NestedDrawers: Story = {
  name: "Nested drawers",
  render: () => (
    <DrawerRoot>
      <DrawerTrigger>Open outer drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerTitle>Outer drawer</DrawerTitle>
        <DrawerDescription>
          Open a nested drawer. The outer drawer peeks above it, scaled down
          with content faded.
        </DrawerDescription>
        <DrawerActions>
          <DrawerRoot>
            <DrawerTrigger variant="primary">Open inner drawer</DrawerTrigger>
            {/* nested skips the inner backdrop so the outer drawer peek is visible */}
            <DrawerContent nested>
              <DrawerTitle>Inner drawer</DrawerTitle>
              <DrawerDescription>
                This is a nested drawer. Swipe or close to go back.
              </DrawerDescription>
              <DrawerActions>
                <DrawerClose>Close</DrawerClose>
              </DrawerActions>
            </DrawerContent>
          </DrawerRoot>
          <DrawerClose>Close outer</DrawerClose>
        </DrawerActions>
      </DrawerContent>
    </DrawerRoot>
  ),
};
