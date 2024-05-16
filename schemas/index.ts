import blockContent from './block-content'
import businessCategory from './business-category'
import city from './city'
import { review } from './components/review'
import { schedule } from './components/schedule'
import business from './business'
import { timeValue } from './types/time-value'
import { scheduleHours } from './components/schedule-hours'

export const schemaTypes = [
  blockContent,
  business,
  businessCategory,
  city,
  timeValue,
  schedule,
  scheduleHours,
  review
]
