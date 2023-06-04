import Navigation from '@/components/Navigation/Navigation';
import styles from './index.module.scss';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';

const typingSequence = [
	'Brewed with passion, stronger than caffeine',
	1000,
	'Roasted to perfection, loved by all',
	1000,
	'Bold and passionate, just like our coffee',
	1000,
];

const Home = () => {
	return (
		<>
			<Head>
				<title>CoffeeMCO</title>
			</Head>
			<Navigation />

			<div className={styles.home}>
				<Container fluid>
					<Row
						className={`justify-content-center align-items-center h-100 ${styles.overlay} ${styles.dark}`}
						style={{ minHeight: '100vh' }}>
						<Col md={9} lg={9} className='text-center'>
							<h1 className={styles.welcomeText} style={{ fontSize: '4rem' }}>
								Welcome to CoffeeMCO
							</h1>
							<TypeAnimation
								sequence={typingSequence}
								speed={50}
								repeat={Infinity}
								style={{ fontSize: '2.5rem' }}
								className={styles.sloganText}
							/>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Home;
