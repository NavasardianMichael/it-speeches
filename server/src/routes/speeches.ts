import { Router } from 'express'
import { SpeakerModel } from '../models/Speaker'

const router = Router()

router.post('/speeches', async (req, res) => {
  const speech = new SpeakerModel(req.body)
  const createdSpeech = await speech.save()
  res.json(createdSpeech)
})

export { router as speechesRouter }