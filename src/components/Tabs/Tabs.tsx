import { Tabs as BaseTabs } from '@base-ui/react/tabs'
import Primitives from './primitives'

const TabsRoot = Primitives.Root
const TabsTab = Primitives.Tab
const TabsPanel = Primitives.Panel
const TabsPanelAnimated = Primitives.PanelAnimated

export type TabsVariant = 'underline' | 'background'

export type TabsListProps = BaseTabs.List.Props & {
  variant?: TabsVariant
}

function TabsList({
  variant = 'underline',
  children,
  ...props
}: TabsListProps) {
  return (
    <Primitives.List {...props}>
      <Primitives.Indicator data-variant={variant} />
      {children}
    </Primitives.List>
  )
}

export type { TabsRootProps } from '@base-ui/react/tabs'
export type TabsRootOrientation = BaseTabs.Root.Orientation

export { TabsRoot, TabsList, TabsTab, TabsPanel, TabsPanelAnimated }
