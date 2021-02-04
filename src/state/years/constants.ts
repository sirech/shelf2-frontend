import { NormalizedYears } from 'types'
export const namespace = 'years'

export const RECEIVE_YEARS = 'years:receive'

export interface ReceiveYearsAction {
  type: typeof RECEIVE_YEARS
  payload: NormalizedYears
}
