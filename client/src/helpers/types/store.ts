import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { Conference } from '@store/conferences/types'
import { Speaker } from '@store/speakers/types'
import { Speech } from '@store/speeches/types'

export type StateSliceName = (typeof STATE_SLICE_NAMES)[keyof typeof STATE_SLICE_NAMES]

export type SliceCommonProps = {
  isPending: boolean
  editableId: Conference['id'] | Speech['id'] | Speaker['id']
  errorMessage: Error['message']
}
