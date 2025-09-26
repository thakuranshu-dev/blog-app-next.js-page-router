import { NextApiRequest, NextApiResponse } from 'next';

export default async function getInfo(req: NextApiRequest, res: NextApiResponse){
  res.status(200).json({
    name: 'Mini Blog App',
    author: 'Anshu K. Thakur | Intern',
  });
}