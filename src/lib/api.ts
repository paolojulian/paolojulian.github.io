import { NextApiResponse } from 'next'

export function methodNotAllowed(res: NextApiResponse) {
  return res.status(405).json({ message: 'Method not allowed ' })
}

