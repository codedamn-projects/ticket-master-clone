// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/db/database'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const data = await db.selectFrom('User').selectAll().execute();

  res.status(200).json({ name: 'John Doe', data })
}
