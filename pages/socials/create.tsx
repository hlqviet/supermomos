import { FormEventHandler } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import {
  faCalendar,
  faClock,
  faDollarSign,
  faLocationPin,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons'

import Layout from 'components/common/layout'
import Row from 'components/common/row'
import Column from 'components/common/column'
import TitleInput from 'components/pages/create-social/title-input'
import Input from 'components/common/input'
import ImageUploader from 'components/pages/create-social/image-uploader'
import TextArea from 'components/common/textarea'
import Label from 'components/common/label'
import Button from 'components/common/button'
import { Subtitle } from 'components/common/typography'
import Card from 'components/common/card'
import Checkbox from 'components/common/checkbox'
import Radio from 'components/common/radio'
import TagSelector from 'components/pages/create-social/tag-selector'

const CreateSocial = () => {
  const router = useRouter()

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = {}

    for (const [key, value] of formData) {
      data[key] = value
    }

    const postData = {
      title: formData.get('title'),
      startAt: `${formData.get('date')}T${formData.get('time')}+00:00`,
      venue: formData.get('venue'),
      capacity: parseInt(formData.get('capacity').toString(), 10),
      price: parseInt(formData.get('price').toString(), 10),
      description: formData.get('description'),
      banner: formData.get('banner'),
      tags: formData.get('tags').toString().split(','),
      isManualApprove:
        formData.get('isManualApprove')?.toString() === 'on' ? true : false,
      privacy: formData.get('privacy')
    }

    void (async () => {
      try {
        const response = await fetch('/api/socials', {
          method: 'POST',
          body: JSON.stringify(postData)
        })
        const data = await response.json()

        router.push(`/socials/${data.id}`)
      } catch (err) {
        alert('Failed to create social')
        console.error(err)
      }
    })()
  }

  return (
    <>
      <Head>
        <title>Create Social - Supermomos</title>
      </Head>
      <Layout>
        <form onSubmit={handleSubmit}>
          <Row>
            <Column>
              <Row>
                <TitleInput name="title" id="title" required />
                <Label hidden htmlFor="title">
                  Title
                </Label>
              </Row>
              <Row>
                <Input
                  placeholder="Date"
                  startIcon={faCalendar}
                  style={{ marginRight: '1rem' }}
                  type="date"
                  name="date"
                  required
                />
                <Input
                  placeholder="Time"
                  startIcon={faClock}
                  type="time"
                  name="time"
                  required
                />
              </Row>
              <Row>
                <Input
                  placeholder="Venue"
                  variant="small"
                  startIcon={faLocationPin}
                  style={{ width: '100%' }}
                  name="venue"
                  required
                />
              </Row>
              <Row>
                <Input
                  placeholder="Max capacity"
                  variant="small"
                  startIcon={faUserGroup}
                  min={1}
                  style={{ marginRight: '1rem' }}
                  type="number"
                  name="capacity"
                  required
                />
                <Input
                  placeholder="Cost per person"
                  variant="small"
                  startIcon={faDollarSign}
                  min={0}
                  type="number"
                  name="price"
                />
              </Row>
            </Column>
            <Column>
              <ImageUploader name="banner" required />
            </Column>
          </Row>
          <Row>
            <Column>
              <Row>
                <Label htmlFor="description">Description</Label>
              </Row>
              <Row>
                <TextArea
                  placeholder="Description of your event"
                  style={{ width: '100%' }}
                  name="description"
                  id="description"
                  required
                />
              </Row>
              <Row>
                <Card style={{ width: '100%' }}>
                  <Row>
                    <Subtitle style={{ display: 'inline-block' }}>
                      Settings
                    </Subtitle>
                  </Row>
                  <Row>
                    <Label htmlFor="isManualApprove">
                      <Checkbox name="isManualApprove" id="isManualApprove" />I
                      want to approve attendees
                    </Label>
                  </Row>
                  <Row style={{ display: 'block' }}>
                    <Row>
                      <Label htmlFor="privacy">Privacy</Label>
                    </Row>
                    <Row>
                      <Radio.Group id="privacy">
                        <Label>
                          <Radio name="privacy" value="Public" />
                          Public
                        </Label>
                        <Label>
                          <Radio name="privacy" value="Curated Audience" />
                          Curated Audience
                        </Label>
                        <Label>
                          <Radio name="privacy" value="Community Only" />
                          Community Only
                        </Label>
                      </Radio.Group>
                    </Row>
                  </Row>
                  <Row style={{ display: 'block' }}>
                    <Row>
                      <Label>Tag your social</Label>
                    </Row>
                    <Row>
                      <span style={{ color: '#475467' }}>
                        Pick tags for our curation engine to work its magin
                      </span>
                    </Row>
                    <Row>
                      <TagSelector
                        name="tags"
                        required
                        tags={['Engineering', 'Product', 'Marketing', 'Design']}
                      />
                    </Row>
                  </Row>
                </Card>
              </Row>
              <Row>
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ textTransform: 'uppercase', width: '100%' }}>
                  Create Social
                </Button>
              </Row>
            </Column>
          </Row>
        </form>
      </Layout>
    </>
  )
}

export default CreateSocial
