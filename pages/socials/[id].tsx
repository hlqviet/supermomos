import { useRouter } from 'next/router'
import { format, parseISO } from 'date-fns/fp'
import {
  faCalendar,
  faClock,
  faDollarSign,
  faLocationPin,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons'

import useSocial from 'hooks/useSocial'
import Layout from 'components/common/layout'
import Row from 'components/common/row'
import Column from 'components/common/column'
import { Paragraph, Text, Title } from 'components/common/typography'
import Banner from 'components/pages/social-details/banner'

const SocialDetails = () => {
  const router = useRouter()
  const {
    query: { id }
  } = router
  const { loading, data, error } = useSocial({ id: id as string })

  if (loading) return 'Loading...'

  if (error) {
    alert(error)

    return null
  }

  if (!data) return 'Invalid social'

  const { title, banner, startAt, venue, capacity, price, description } = data

  return (
    <Layout>
      <Row>
        <Column>
          <Title>{title}</Title>
        </Column>
        <Column>
          <Banner url={banner} />
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column>
              <Text size="large" startIcon={faCalendar}>
                {format('PPP')(parseISO(startAt))}
              </Text>
            </Column>
            <Column>
              <Text size="large" startIcon={faClock}>
                {format('p')(parseISO(startAt))}
              </Text>
            </Column>
          </Row>
          <Row>
            <Text startIcon={faLocationPin}>{venue}</Text>
          </Row>
          <Row>
            <Text startIcon={faUserGroup} style={{ marginRight: '2rem' }}>
              {capacity} people
            </Text>
            <Text startIcon={faDollarSign}>&#36;{price}</Text>
          </Row>
          <Row style={{ display: 'block' }}>
            {(description as string).split(/\n+/).map((paragraph, index) => (
              <Paragraph key={index}>{paragraph}</Paragraph>
            ))}
          </Row>
        </Column>
      </Row>
    </Layout>
  )
}

export default SocialDetails
