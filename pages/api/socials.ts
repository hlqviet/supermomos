import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method } = req

  switch (method) {
    case 'POST': {
      try {
        const response = await fetch(
          'https://api.supermomos-dev.com/interview/social',
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'POST',
            body
          }
        )
        const data = await response.json()

        res.status(response.status).json(data)
      } catch (err) {
        res.status(500).end()
      }

      break
    }
    default: {
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
    }
  }
}

export default handler
