import { STATE_SLICE_NAMES } from '@helpers/constants/store'

export type StateSliceName = (typeof STATE_SLICE_NAMES)[keyof typeof STATE_SLICE_NAMES]

export type SliceCommonProps = {
  isPending: boolean
  errorMessage: Error['message']
}
