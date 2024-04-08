import { Router } from 'express'
import { ConferenceModel } from '../models/Conference'

const router = Router()

router.get('/conferences', async (req, res) => {
  const conferences = await ConferenceModel.find({})
  res.status(200).json(conferences)
})

router.post('/conferences', async (req, res) => {
    const conference = ConferenceModel.create(req.body)
    res.status(200).json(conference)
})

export { router as conferenceRouter }