import { getSpeakers, postSpeakerOptions } from '@api/speakers/api'
import { TEMP_IDS } from '@helpers/constants/defaults'
import { createAppAsyncThunk } from '@helpers/utils/store'
import { addSpeaker, setSpeakerOptions, setSpeakers } from './slice'
import { Speaker } from './types'

// import { setSpeechOptionsAsync } from '@store/speeches/thunks'

export const getSpeakersAsync = createAppAsyncThunk(
  'speakers/getSpeakersAsync',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const data = await getSpeakers()
      dispatch(setSpeakers(data))

      return data
    } catch (e) {
      const error = e as Error
      rejectWithValue(error)
    }
  }
)

export const setSpeakerOptionsAsync = createAppAsyncThunk<
  unknown,
  { speaker: Speaker; oldSpeechIds: Speaker['speechIds'] }
>('speakers/setSpeakerOptionsAsync', async (args, { dispatch, rejectWithValue }) => {
  const { speaker } = args
  try {
    const isNewSpeaker = speaker.id === TEMP_IDS.speakers
    const data = await postSpeakerOptions(speaker, isNewSpeaker)
    dispatch(isNewSpeaker ? addSpeaker(data) : setSpeakerOptions(data))

    // Synchronizing speeches and speakers relations
    // const { speeches } = getState()
    // oldSpeechIds.forEach(speechId => {
    //   const speech = speeches.byId[speechId]
    //   console.log({speech, data});

    //   if(speech.speakerId === data.id) return;
    //   dispatch(setSpeechOptionsAsync({
    //     ...speech,
    //     speakerId: data.id
    //   }))
    // })

    // speaker.speechIds.forEach(speechId => {
    //   const speech = speeches.byId[speechId]
    //   console.log({speech, data});

    //   if(speech.speakerId === data.id) return;
    //   dispatch(setSpeechOptionsAsync({
    //     ...speech,
    //     speakerId: data.id
    //   }))
    // })
  } catch (e) {
    console.log({ e })

    const error = e as Error
    rejectWithValue(error)
  }
})
