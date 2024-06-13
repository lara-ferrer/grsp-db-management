import blockContent from './block-content'
import city from './city'
import { review } from './components/review'
import { schedule } from './components/schedule'
import business from './business'
import { timeValue } from './types/time-value'
import { scheduleHours } from './components/schedule-hours'

export const schemaTypes = [
  blockContent,
  business,
  city,
  timeValue,
  schedule,
  scheduleHours,
  review
]
