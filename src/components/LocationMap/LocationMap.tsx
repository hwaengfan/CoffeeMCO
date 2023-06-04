import React from 'react';
import GoogleMapReact from 'google-map-react';

const Marker: React.FC<{
	lat: number;
	lng: number;
}> = () => <div className='marker'></div>;

export default function SimpleMap() {
	const defaultProps = {
		center: {
			lat: 34.05231109485414,
			lng: -118.28740688325576,
		},
		zoom: 11,
	};

	return (
		// Important! Always set the container height explicitly
		<div style={{ height: '45vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
				}}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}>
				<Marker lat={59.955413} lng={30.337844} />
			</GoogleMapReact>
		</div>
	);
}
