import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Layout({ children, pagina }) {
	return (
		<>
			<Head>
				<title>Amarena - {pagina}</title>
			</Head>
			<Navbar />
			<Box as="main">{children}</Box>
			<Footer />
		</>
	);
}

export default Layout;
