import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ChevronDown } from "lucide-react";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuLinkItem,
  MenuSeparator,
  MenuGroup,
  MenuGroupLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuCheckboxItem,
  MenuSubmenuRoot,
  MenuSubmenuTrigger,
} from "./Menu";

export default {
  title: "Overlays/Menu",
  component: MenuRoot,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MenuRoot>;

type Story = StoryObj<typeof MenuRoot>;

export const Primary: Story = {
  render: () => (
    <MenuRoot>
      <MenuTrigger>
        Song <ChevronDown size={14} aria-hidden />
      </MenuTrigger>
      <MenuContent>
        <MenuItem>Add to Library</MenuItem>
        <MenuItem>Add to Playlist</MenuItem>
        <MenuSeparator />
        <MenuItem>Play Next</MenuItem>
        <MenuItem>Play Last</MenuItem>
        <MenuSeparator />
        <MenuItem>Favorite</MenuItem>
        <MenuItem>Share</MenuItem>
      </MenuContent>
    </MenuRoot>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <MenuRoot>
      <MenuTrigger>
        Actions <ChevronDown size={14} aria-hidden />
      </MenuTrigger>
      <MenuContent>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Duplicate</MenuItem>
        <MenuSeparator />
        <MenuItem disabled>Archive (unavailable)</MenuItem>
        <MenuItem>Delete</MenuItem>
      </MenuContent>
    </MenuRoot>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <MenuRoot>
      <MenuTrigger>
        View <ChevronDown size={14} aria-hidden />
      </MenuTrigger>
      <MenuContent>
        <MenuGroup>
          <MenuGroupLabel>Layout</MenuGroupLabel>
          <MenuItem>List</MenuItem>
          <MenuItem>Grid</MenuItem>
          <MenuItem>Columns</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>Sort By</MenuGroupLabel>
          <MenuItem>Name</MenuItem>
          <MenuItem>Date Modified</MenuItem>
          <MenuItem>Size</MenuItem>
        </MenuGroup>
      </MenuContent>
    </MenuRoot>
  ),
};

export const WithCheckboxItems: Story = {
  render: function WithCheckboxItemsStory() {
    const [showMinimap, setShowMinimap] = React.useState(true);
    const [showSearch, setShowSearch] = React.useState(true);
    const [showSidebar, setShowSidebar] = React.useState(false);

    return (
      <MenuRoot>
        <MenuTrigger>
          Workspace <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuCheckboxItem
            checked={showMinimap}
            onCheckedChange={setShowMinimap}
          >
            Minimap
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showSearch}
            onCheckedChange={setShowSearch}
          >
            Search Panel
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showSidebar}
            onCheckedChange={setShowSidebar}
          >
            Sidebar
          </MenuCheckboxItem>
        </MenuContent>
      </MenuRoot>
    );
  },
};

export const WithRadioItems: Story = {
  render: function WithRadioItemsStory() {
    const [value, setValue] = React.useState("date");

    return (
      <MenuRoot>
        <MenuTrigger>
          Sort <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuRadioGroup value={value} onValueChange={setValue}>
            <MenuRadioItem value="date">Date</MenuRadioItem>
            <MenuRadioItem value="name">Name</MenuRadioItem>
            <MenuRadioItem value="type">Type</MenuRadioItem>
            <MenuRadioItem value="size">Size</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </MenuRoot>
    );
  },
};

export const WithRadioAndCheckboxGroups: Story = {
  render: function WithRadioAndCheckboxGroupsStory() {
    const [sortValue, setSortValue] = React.useState("date");
    const [showMinimap, setShowMinimap] = React.useState(true);
    const [showSearch, setShowSearch] = React.useState(true);
    const [showSidebar, setShowSidebar] = React.useState(false);

    return (
      <MenuRoot>
        <MenuTrigger>
          View <ChevronDown size={14} aria-hidden />
        </MenuTrigger>
        <MenuContent>
          <MenuGroup>
            <MenuGroupLabel>Sort</MenuGroupLabel>
            <MenuRadioGroup value={sortValue} onValueChange={setSortValue}>
              <MenuRadioItem value="date">Date</MenuRadioItem>
              <MenuRadioItem value="name">Name</MenuRadioItem>
              <MenuRadioItem value="type">Type</MenuRadioItem>
            </MenuRadioGroup>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuGroupLabel>Workspace</MenuGroupLabel>
            <MenuCheckboxItem
              checked={showMinimap}
              onCheckedChange={setShowMinimap}
            >
              Minimap
            </MenuCheckboxItem>
            <MenuCheckboxItem
              checked={showSearch}
              onCheckedChange={setShowSearch}
            >
              Search Panel
            </MenuCheckboxItem>
            <MenuCheckboxItem
              checked={showSidebar}
              onCheckedChange={setShowSidebar}
            >
              Sidebar
            </MenuCheckboxItem>
          </MenuGroup>
        </MenuContent>
      </MenuRoot>
    );
  },
};

export const NestedMenu: Story = {
  render: () => (
    <MenuRoot>
      <MenuTrigger>
        Song <ChevronDown size={14} aria-hidden />
      </MenuTrigger>
      <MenuContent>
        <MenuItem>Add to Library</MenuItem>
        <MenuSubmenuRoot>
          <MenuSubmenuTrigger>Add to Playlist</MenuSubmenuTrigger>
          <MenuContent
            side="right"
            sideOffset={-4}
            align="start"
            alignOffset={-4}
          >
            <MenuItem>Get Up!</MenuItem>
            <MenuItem>Inside Out</MenuItem>
            <MenuItem>Night Beats</MenuItem>
            <MenuSeparator />
            <MenuItem>New playlist…</MenuItem>
          </MenuContent>
        </MenuSubmenuRoot>
        <MenuSeparator />
        <MenuItem>Play Next</MenuItem>
        <MenuItem>Play Last</MenuItem>
        <MenuSeparator />
        <MenuItem>Favorite</MenuItem>
        <MenuItem>Share</MenuItem>
      </MenuContent>
    </MenuRoot>
  ),
};

export const WithLinkItems: Story = {
  render: () => (
    <MenuRoot>
      <MenuTrigger>
        Navigate <ChevronDown size={14} aria-hidden />
      </MenuTrigger>
      <MenuContent>
        <MenuLinkItem href="#">Dashboard</MenuLinkItem>
        <MenuLinkItem href="#">Projects</MenuLinkItem>
        <MenuLinkItem href="#">Settings</MenuLinkItem>
        <MenuSeparator />
        <MenuLinkItem href="#">Documentation</MenuLinkItem>
      </MenuContent>
    </MenuRoot>
  ),
};
