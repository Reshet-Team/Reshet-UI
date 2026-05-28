import type { Meta, StoryObj } from '@storybook/react'
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  ChevronDown,
  Search,
  Link,
  Image,
  Table,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { Toggle } from '../Toggle/Toggle'
import { ToggleGroup } from '../ToggleGroup/ToggleGroup'
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuSeparator,
} from '../Menu/Menu'
import {
  SelectRoot,
  SelectTrigger,
  SelectList,
  SelectItem,
} from '../Select/Select'
import { NumberFieldRoot, NumberFieldInput } from '../NumberField/NumberField'
import {
  ToolbarRoot,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarInput,
} from './Toolbar'

export default {
  title: 'Navigation/Toolbar',
  component: ToolbarRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ToolbarRoot>

type Story = StoryObj<typeof ToolbarRoot>

export const Default: Story = {
  render: () => (
    <ToolbarRoot aria-label='Formatting toolbar'>
      <ToggleGroup
        multiple
        defaultValue={['bold']}
        aria-label='Text style'
        style={{
          border: 'none',
          background: 'transparent',
          padding: 0,
          gap: 1,
        }}
      >
        <ToolbarButton render={<Toggle />} value='bold' aria-label='Bold'>
          <Bold size={18} />
        </ToolbarButton>
        <ToolbarButton render={<Toggle />} value='italic' aria-label='Italic'>
          <Italic size={18} />
        </ToolbarButton>
        <ToolbarButton
          render={<Toggle />}
          value='underline'
          aria-label='Underline'
        >
          <Underline size={18} />
        </ToolbarButton>
      </ToggleGroup>
      <ToolbarSeparator />
      <ToggleGroup
        defaultValue={['left']}
        aria-label='Text alignment'
        style={{
          border: 'none',
          background: 'transparent',
          padding: 0,
          gap: 1,
        }}
      >
        <ToolbarButton render={<Toggle />} value='left' aria-label='Align left'>
          <AlignLeft size={18} />
        </ToolbarButton>
        <ToolbarButton
          render={<Toggle />}
          value='right'
          aria-label='Align right'
        >
          <AlignRight size={18} />
        </ToolbarButton>
      </ToggleGroup>
      <ToolbarSeparator />
      <ToolbarGroup aria-label='Actions'>
        <ToolbarButton
          aria-label='More options'
          style={{ paddingInline: 8, gap: 4 }}
        >
          Options <ChevronDown size={14} />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarLink
        href='#'
        style={{ marginInlineStart: 'auto', marginInlineEnd: 8 }}
      >
        Last saved 2m ago
      </ToolbarLink>
    </ToolbarRoot>
  ),
}

export const WithMenu: Story = {
  render: () => (
    <ToolbarRoot aria-label='Rich text toolbar'>
      <MenuRoot>
        <ToolbarButton
          render={<MenuTrigger />}
          style={{
            paddingInline: 'var(--space-3)',
            gap: 'var(--space-2)',
            minWidth: 120,
          }}
        >
          Paragraph <ChevronDown size={14} aria-hidden />
        </ToolbarButton>
        <MenuContent>
          <MenuItem>Normal text</MenuItem>
          <MenuItem>Heading 1</MenuItem>
          <MenuItem>Heading 2</MenuItem>
          <MenuItem>Heading 3</MenuItem>
          <MenuSeparator />
          <MenuItem>Code block</MenuItem>
          <MenuItem>Quote</MenuItem>
        </MenuContent>
      </MenuRoot>
      <ToolbarSeparator />
      <ToggleGroup
        multiple
        defaultValue={['bold']}
        aria-label='Text style'
        style={{
          border: 'none',
          background: 'transparent',
          padding: 0,
          gap: 1,
        }}
      >
        <ToolbarButton render={<Toggle />} value='bold' aria-label='Bold'>
          <Bold size={18} />
        </ToolbarButton>
        <ToolbarButton render={<Toggle />} value='italic' aria-label='Italic'>
          <Italic size={18} />
        </ToolbarButton>
        <ToolbarButton
          render={<Toggle />}
          value='underline'
          aria-label='Underline'
        >
          <Underline size={18} />
        </ToolbarButton>
      </ToggleGroup>
      <ToolbarSeparator />
      <MenuRoot>
        <ToolbarButton
          render={<MenuTrigger />}
          style={{ paddingInline: 'var(--space-3)', gap: 'var(--space-2)' }}
        >
          Insert <ChevronDown size={14} aria-hidden />
        </ToolbarButton>
        <MenuContent>
          <MenuItem>
            <Image size={14} aria-hidden /> Image
          </MenuItem>
          <MenuItem>
            <Link size={14} aria-hidden /> Link
          </MenuItem>
          <MenuItem>
            <Table size={14} aria-hidden /> Table
          </MenuItem>
          <MenuSeparator />
          <MenuItem>Horizontal rule</MenuItem>
        </MenuContent>
      </MenuRoot>
    </ToolbarRoot>
  ),
}

export const WithSelect: Story = {
  render: () => (
    <ToolbarRoot aria-label='Text formatting toolbar'>
      <SelectRoot defaultValue='sans'>
        <ToolbarButton
          render={<SelectTrigger size='sm' placeholder='Font' />}
        />
        <SelectList>
          <SelectItem value='sans'>Sans-serif</SelectItem>
          <SelectItem value='serif'>Serif</SelectItem>
          <SelectItem value='mono'>Monospace</SelectItem>
        </SelectList>
      </SelectRoot>
      <ToolbarSeparator />
      <SelectRoot defaultValue='16'>
        <ToolbarButton
          render={<SelectTrigger size='sm' />}
          style={{ minWidth: 72 }}
        />
        <SelectList>
          <SelectItem value='12'>12</SelectItem>
          <SelectItem value='14'>14</SelectItem>
          <SelectItem value='16'>16</SelectItem>
          <SelectItem value='18'>18</SelectItem>
          <SelectItem value='24'>24</SelectItem>
          <SelectItem value='32'>32</SelectItem>
        </SelectList>
      </SelectRoot>
      <ToolbarSeparator />
      <ToggleGroup
        multiple
        aria-label='Text style'
        style={{
          border: 'none',
          background: 'transparent',
          padding: 0,
          gap: 1,
        }}
      >
        <ToolbarButton render={<Toggle />} value='bold' aria-label='Bold'>
          <Bold size={18} />
        </ToolbarButton>
        <ToolbarButton render={<Toggle />} value='italic' aria-label='Italic'>
          <Italic size={18} />
        </ToolbarButton>
        <ToolbarButton
          render={<Toggle />}
          value='underline'
          aria-label='Underline'
        >
          <Underline size={18} />
        </ToolbarButton>
      </ToggleGroup>
      <ToolbarSeparator />
      <ToggleGroup
        defaultValue={['left']}
        aria-label='Text alignment'
        style={{
          border: 'none',
          background: 'transparent',
          padding: 0,
          gap: 1,
        }}
      >
        <ToolbarButton render={<Toggle />} value='left' aria-label='Align left'>
          <AlignLeft size={18} />
        </ToolbarButton>
        <ToolbarButton
          render={<Toggle />}
          value='center'
          aria-label='Align center'
        >
          <AlignCenter size={18} />
        </ToolbarButton>
        <ToolbarButton
          render={<Toggle />}
          value='right'
          aria-label='Align right'
        >
          <AlignRight size={18} />
        </ToolbarButton>
        <ToolbarButton render={<Toggle />} value='justify' aria-label='Justify'>
          <AlignJustify size={18} />
        </ToolbarButton>
      </ToggleGroup>
    </ToolbarRoot>
  ),
}

export const WithInputs: Story = {
  render: () => (
    <ToolbarRoot aria-label='Document toolbar'>
      <ToolbarGroup aria-label='Zoom'>
        <ToolbarButton aria-label='Zoom out'>
          <ZoomOut size={18} />
        </ToolbarButton>
        <NumberFieldRoot
          defaultValue={100}
          min={10}
          max={400}
          aria-label='Zoom percent'
        >
          <ToolbarInput
            render={<NumberFieldInput />}
            style={{ width: 52, textAlign: 'center' }}
          />
        </NumberFieldRoot>
        <ToolbarButton aria-label='Zoom in'>
          <ZoomIn size={18} />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarInput
        type='text'
        placeholder='Find in document…'
        aria-label='Search'
        style={{ width: 200 }}
      />
      <ToolbarSeparator />
      <ToolbarButton style={{ paddingInline: 8, gap: 6 }}>
        <Search size={16} /> Find all
      </ToolbarButton>
      <ToolbarSeparator />
      <ToolbarLink href='#'>Help</ToolbarLink>
    </ToolbarRoot>
  ),
}

export const WithInput: Story = {
  render: () => (
    <ToolbarRoot aria-label='Search toolbar'>
      <ToolbarGroup aria-label='Formatting'>
        <ToolbarButton aria-label='Bold'>
          <Bold size={18} />
        </ToolbarButton>
        <ToolbarButton aria-label='Italic'>
          <Italic size={18} />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarInput
        placeholder='Search…'
        aria-label='Search'
        style={{ width: 160 }}
      />
    </ToolbarRoot>
  ),
}

export const Disabled: Story = {
  render: () => (
    <ToolbarRoot aria-label='Formatting toolbar' disabled>
      <ToolbarButton aria-label='Bold'>
        <Bold size={18} />
      </ToolbarButton>
      <ToolbarButton aria-label='Italic'>
        <Italic size={18} />
      </ToolbarButton>
      <ToolbarSeparator />
      <ToolbarButton aria-label='Underline'>
        <Underline size={18} />
      </ToolbarButton>
    </ToolbarRoot>
  ),
}
