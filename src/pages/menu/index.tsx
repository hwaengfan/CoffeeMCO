import Navigation from '@/components/Navigation/Navigation';
import Head from 'next/head';
import menu from '@/utils/Items';
import styles from './menu.module.scss';
import { Image } from 'react-bootstrap';

const Menu = () => {
	return (
		<>
			<Head>
				<title>Menu</title>
			</Head>
			<Navigation />

			<div className={styles.gridContainer}>
				{menu.map((item) => {
					return (
						<div key={item.name}>
							<Image src={item.image} alt={item.name} />
							<p>{item.name}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Menu;
