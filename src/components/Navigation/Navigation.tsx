import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './Navigation.module.scss';

const Navigation = () => {
	return (
		<>
			<Navbar
				className={`top ${styles.colorNav}`}
				expand='md'
				bg='dark'
				variant='dark'
				fixed='top'>
				<Container>
					<Navbar.Brand href='/' className={styles.font}>
						<div className={styles.logo1}>
							Coffee<span className={styles.logo2}>MCO</span>
						</div>
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className='justify-content-end'>
						<Nav>
							<Nav.Link href='/' className={styles.font}>
								Home
							</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href='/menu' className={styles.font}>
								Menu
							</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href='/about' className={styles.font}>
								About
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
