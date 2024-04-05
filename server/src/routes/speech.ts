import { Router } from 'express'
import { ConferenceModel } from '../models/Conference'
import { SpeechModel } from '../models/Speech'

const router = Router()

router.post('/speech', async (req, res) => {
  const speech = new SpeechModel(req.body)
  const createdSpeech = await speech.save()
  res.json(createdSpeech)
})

export { router as speechRouter }