import { FC, MouseEventHandler, useEffect, useState } from 'react'
import { FileImageOutlined } from '@ant-design/icons'
import { Button, Form, FormProps, Image, Input, InputProps, Select, SelectProps } from 'antd'
import { selectEditableSpeech, selectIsSpeechesPending } from '@store/speeches/selectors'
import { useAppDispatch } from '@hooks/useAppDispatch'
import { useAppSelector } from '@hooks/useAppSelector'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { generateRandomAvatarForEntity } from '@helpers/utils/avatars'
import { setSpeechOptionsAsync } from '@store/speeches/thunks'
import { selectConferences } from '@store/conferences/selectors'
import { selectSpeakers } from '@store/speakers/selectors'

export const SpeechForm: FC = () => {
  const dispatch = useAppDispatch()
  const conferences = useAppSelector(selectConferences)
  const speakers = useAppSelector(selectSpeakers)
  const editableSpeech = useAppSelector(selectEditableSpeech)
  const isSpeechesPending = useAppSelector(selectIsSpeechesPending)
  const [editedSpeech, setEditedSpeechOptions] = useState(editableSpeech)

  const handleConferenceSelect: SelectProps['onChange'] = (value) => {
    setEditedSpeechOptions((prev) => ({
      ...prev,
      conferenceId: value,
    }))
  }

  const handleSpeakerSelect: SelectProps['onChange'] = (value) => {
    setEditedSpeechOptions((prev) => ({
      ...prev,
      speakerId: value,
    }))
  }

  useEffect(() => {
    console.log({editableSpeech});
    
    setEditedSpeechOptions(editableSpeech)
  }, [editableSpeech])

  useEffect(() => {
    console.log({editedSpeech});
  }, [editedSpeech])

  const onTextChange: InputProps['onChange'] = (e) => {
    setEditedSpeechOptions((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleGenerateRandomImageClick: MouseEventHandler<HTMLElement> = () => {
    setEditedSpeechOptions((prev) => ({
      ...prev,
      image: generateRandomAvatarForEntity(STATE_SLICE_NAMES.speeches),
    }))
  }

  const submitSpeech: FormProps['onFinish'] = () => {
    dispatch(setSpeechOptionsAsync(editedSpeech))
  }

  return (
    <Form layout="vertical" style={{ width: '100%', maxWidth: 400 }} disabled={isSpeechesPending} onFinish={submitSpeech}>
      <Form.Item label="Name">
        <Input required placeholder="Topic" value={editedSpeech.topic} onChange={onTextChange} name="topic" />
      </Form.Item>
      <Form.Item label="Location">
        <Input
          placeholder="Duration"
          value={editedSpeech.duration}
          onChange={onTextChange}
          name="duration"
        />
      </Form.Item>
      <Form.Item label="Image">
        {editedSpeech.image && (
          <Image
            src={editedSpeech.image}
            alt={`Speech with topic "${editedSpeech.topic} || 'Speech Image'"`}
            style={{ marginBottom: 12 }}
          />
        )}
        <Button
          type="dashed"
          icon={<FileImageOutlined />}
          style={{ display: 'block' }}
          onClick={handleGenerateRandomImageClick}
        >
          Generate an image
        </Button>
      </Form.Item>
      <Form.Item label="Conference">
        <Select
          placeholder="Select the conference"
          value={editedSpeech.conferenceId}
          onChange={handleConferenceSelect}
          options={conferences.allIds.map((id) => ({
            value: id,
            label: conferences.byId[id].name,
          }))}
        />
      </Form.Item>
      <Form.Item label="Speaker">
        <Select
          placeholder="Select the speaker"
          value={editedSpeech.speakerId}
          onChange={handleSpeakerSelect}
          options={speakers.allIds.map((id) => ({
            value: id,
            label: speakers.byId[id].fullName,
          }))}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  )
}
