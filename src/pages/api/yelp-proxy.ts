import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const URI = process.env.NEXT_PUBLIC_YELP_API_URI as string;
		const API_KEY = process.env.NEXT_PUBLIC_YELP_API_KEY as string;

		const response = await axios.get(URI, {
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				'Access-Control-Allow-Origin': '*',
			},
		});

		res.status(response.status).json(response.data);
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong' });
	}
}
