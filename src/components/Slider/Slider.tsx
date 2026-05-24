import { Slider as BaseSlider } from '@base-ui/react/slider'
import React from 'react'
import {
  SliderControl,
  SliderIndicator,
  SliderLabel,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from './primitives'
import styles from './Slider.module.scss'

export interface SliderProps extends BaseSlider.Root.Props {
  label?: React.ReactNode
  showValue?: boolean
}

export function Slider({ label, showValue = true, ...props }: SliderProps) {
  const numThumbs = Array.isArray(props.defaultValue)
    ? props.defaultValue.length
    : Array.isArray(props.value)
      ? props.value.length
      : 1

  return (
    <SliderRoot {...props}>
      {(label || showValue) && (
        <div className={styles.header}>
          {label && <SliderLabel>{label}</SliderLabel>}
          {showValue && <SliderValue />}
        </div>
      )}
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          {Array.from({ length: numThumbs }, (_, i) => (
            <SliderThumb key={i} index={i} />
          ))}
        </SliderTrack>
      </SliderControl>
    </SliderRoot>
  )
}
