import { useState, useEffect } from 'react';
import axios from 'axios';

const HoursStatus: React.FC = () => {
	const [statusComponent, setStatusComponent] = useState<JSX.Element | null>(
		null
	);

	useEffect(() => {
		getStatus().then((status) => {
			if (status === 'open') {
				setStatusComponent(
					<p style={{ color: 'rgb(172, 243, 174)' }}>We are currently open!</p>
				);
			} else {
				setStatusComponent(
					<p style={{ color: 'rgb(250, 107, 132)' }}>
						We are currently closed!
					</p>
				);
			}
		});
	}, []);

	return <>{statusComponent}</>;
};

const getStatus = async () => {
	try {
		const URI = '/api/yelp-proxy';
		const response = await axios.get(URI);
		const isOpen = response.data.hours[0].is_open_now;
		return isOpen === true ? 'open' : 'closed';
	} catch (error) {
		return 'error';
	}
};

export async function getStaticProps() {
	const status = await getStatus();
	return {
		props: { status },
	};
}

export default HoursStatus;
