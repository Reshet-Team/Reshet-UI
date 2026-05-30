import { Toolbar as BaseToolbar } from '@base-ui/react/toolbar'
import Primitives from './primitives'

const ToolbarRoot = Primitives.Root
const ToolbarButton = Primitives.Button
const ToolbarGroup = Primitives.Group
const ToolbarSeparator = Primitives.Separator
const ToolbarLink = Primitives.Link
const ToolbarInput = Primitives.Input

export type ToolbarRootProps = BaseToolbar.Root.Props
export type ToolbarButtonProps = BaseToolbar.Button.Props
export type ToolbarGroupProps = BaseToolbar.Group.Props
export type ToolbarSeparatorProps = BaseToolbar.Separator.Props
export type ToolbarLinkProps = BaseToolbar.Link.Props
export type ToolbarInputProps = BaseToolbar.Input.Props

export {
  ToolbarButton,
  ToolbarGroup,
  ToolbarInput,
  ToolbarLink,
  ToolbarRoot,
  ToolbarSeparator,
}
