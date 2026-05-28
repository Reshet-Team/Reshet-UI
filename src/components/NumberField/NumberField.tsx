import { NumberField as BaseNumberField } from '@base-ui/react/number-field'
import { Minus, Plus } from 'lucide-react'
import {
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
} from './primitives'

export type NumberFieldSize = 'sm' | 'md' | 'lg'

export interface NumberFieldProps extends BaseNumberField.Root.Props {
  size?: NumberFieldSize
  hideSteppers?: boolean
}

export { NumberFieldRoot, NumberFieldInput } from './primitives'

export function NumberField({
  size = 'md',
  hideSteppers = false,
  ...props
}: NumberFieldProps) {
  return (
    <NumberFieldRoot {...props}>
      <NumberFieldGroup data-size={size}>
        {!hideSteppers && (
          <NumberFieldDecrement aria-label='Decrease'>
            <Minus size={12} aria-hidden />
          </NumberFieldDecrement>
        )}
        <NumberFieldInput />
        {!hideSteppers && (
          <NumberFieldIncrement aria-label='Increase'>
            <Plus size={12} aria-hidden />
          </NumberFieldIncrement>
        )}
      </NumberFieldGroup>
    </NumberFieldRoot>
  )
}
