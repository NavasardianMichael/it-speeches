import { Router } from 'express'
import { SpeechModel } from '../models/Speech'

const router = Router()

router.post('/speakers', async (req, res) => {
  const speech = new SpeechModel(req.body)
  const createdSpeech = await speech.save()
  res.json(createdSpeech)
})

export { router as speakersRouter }