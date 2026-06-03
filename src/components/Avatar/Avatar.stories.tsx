import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarFallback, AvatarImage, AvatarRoot } from './Avatar'

const PORTRAIT_URL =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face'

export default {
  title: 'Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: { defaultValue: { summary: 'md' } },
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      table: { defaultValue: { summary: 'circle' } },
    },
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'success', 'warning', 'danger'],
      table: { defaultValue: { summary: 'neutral' } },
    },
  },
} satisfies Meta<typeof Avatar>

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    src: PORTRAIT_URL,
    alt: 'John Doe',
    size: 'md',
    shape: 'circle',
  },
}

export const WithInitials: Story = {
  args: {
    fallback: 'JD',
    size: 'md',
    shape: 'circle',
    color: 'primary',
  },
}

export const BrokenImage: Story = {
  args: {
    src: 'https://example.com/broken.jpg',
    alt: 'Broken image',
    fallback: 'JD',
    color: 'neutral',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
      <Avatar src={PORTRAIT_URL} alt='User' size='xs' />
      <Avatar src={PORTRAIT_URL} alt='User' size='sm' />
      <Avatar src={PORTRAIT_URL} alt='User' size='md' />
      <Avatar src={PORTRAIT_URL} alt='User' size='lg' />
      <Avatar src={PORTRAIT_URL} alt='User' size='xl' />
    </div>
  ),
}

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
      <Avatar src={PORTRAIT_URL} alt='Circle' shape='circle' size='lg' />
      <Avatar src={PORTRAIT_URL} alt='Square' shape='square' size='lg' />
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
      <Avatar fallback='AB' color='neutral' />
      <Avatar fallback='AB' color='primary' />
      <Avatar fallback='AB' color='success' />
      <Avatar fallback='AB' color='warning' />
      <Avatar fallback='AB' color='danger' />
    </div>
  ),
}

export const AvatarGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {(['primary', 'success', 'warning', 'danger'] as const).map((color, i) => (
        <Avatar
          key={color}
          fallback={String.fromCharCode(65 + i)}
          color={color}
          style={{
            marginInlineStart: i === 0 ? 0 : '-8px',
            outline: '2px solid var(--color-bg)',
          }}
        />
      ))}
    </div>
  ),
}

export const PrimitiveComposition: Story = {
  render: () => (
    <AvatarRoot data-size='md' data-shape='circle' data-color='neutral'>
      <AvatarImage src={PORTRAIT_URL} alt='User' />
      <AvatarFallback>JD</AvatarFallback>
    </AvatarRoot>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <Avatar src={PORTRAIT_URL} alt='User' size='xs' />
        <Avatar src={PORTRAIT_URL} alt='User' size='sm' />
        <Avatar src={PORTRAIT_URL} alt='User' size='md' />
        <Avatar src={PORTRAIT_URL} alt='User' size='lg' />
        <Avatar src={PORTRAIT_URL} alt='User' size='xl' />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <Avatar fallback='AB' color='neutral' />
        <Avatar fallback='CD' color='primary' />
        <Avatar fallback='EF' color='success' />
        <Avatar fallback='GH' color='warning' />
        <Avatar fallback='IJ' color='danger' />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <Avatar src={PORTRAIT_URL} alt='Circle' shape='circle' size='lg' />
        <Avatar src={PORTRAIT_URL} alt='Square' shape='square' size='lg' />
        <Avatar fallback='KL' shape='square' color='primary' size='lg' />
      </div>
    </div>
  ),
}
