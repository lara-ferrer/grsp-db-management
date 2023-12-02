import blockContent from './block-content'
import businessCategory from './business-category'
import city from './city'
import { schedule } from './components/schedule'
import restaurant from './restaurant'
import restaurantCategory from './restaurant-category'
import { timeValue } from './types/time-value'

export const schemaTypes = [
  blockContent,
  restaurant,
  restaurantCategory,
  businessCategory,
  city,
  timeValue,
  schedule
]
