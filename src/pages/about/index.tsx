import LocationMap from '@/components/LocationMap/LocationMap';
import Navigation from '@/components/Navigation/Navigation';
import Head from 'next/head';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './about.module.scss';
import HoursStatus from '@/components/HoursStatus/HoursStatus';

const About = () => {
	return (
		<>
			<Head>
				<title>CoffeeMCO</title>
			</Head>
			<Navigation />

			<section className={`${styles.about} ${styles.overlay} ${styles.dark}`}>
				<Container>
					<Row>
						<Col md={12} className={styles.mapContainer}>
							<LocationMap />
						</Col>
						<Col md={12} className={`text-center ${styles.aboutContent}`}>
							<div className={styles.aboutText}>
								This is an unofficial website for Coffee MCO created by Minh
								Hoang Phan. Coffee MCO is a cafe and espresso bar located on the
								border of Downtown Los Angeles and Koreatown. Come for the
								drinks, food, vibes, events, ample seating, good music, and free
								parking.
								<HoursStatus />
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<footer className={styles.footer}>
				<span>
					Created by{' '}
					<Link
						href='https://github.com/hwaengfan'
						target='_blank'
						rel='noreferrer'>
						Minh Hoang Phan
					</Link>{' '}
					<span className='far fa-copyright'></span> © 2023 All rights reserved
				</span>
			</footer>
		</>
	);
};

export default About;
