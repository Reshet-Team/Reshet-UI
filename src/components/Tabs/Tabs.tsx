import { Tabs as BaseTabs } from '@base-ui/react/tabs'
import Primitives from './primitives'

const TabsRoot = Primitives.Root
const TabsList = Primitives.List
const TabsTab = Primitives.Tab
const TabsPanel = Primitives.Panel
const TabsPanelAnimated = Primitives.PanelAnimated

export type TabsIndicatorVariant = 'underline' | 'background'

export type TabsIndicatorProps = BaseTabs.Indicator.Props & {
  variant?: TabsIndicatorVariant
}

function TabsIndicator({
  variant = 'underline',
  ...props
}: TabsIndicatorProps) {
  return <Primitives.Indicator data-variant={variant} {...props} />
}

export type { TabsRootProps } from '@base-ui/react/tabs'
export type TabsRootOrientation = BaseTabs.Root.Orientation

export {
  TabsRoot,
  TabsList,
  TabsTab,
  TabsIndicator,
  TabsPanel,
  TabsPanelAnimated,
}
