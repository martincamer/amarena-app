import { Button } from '@chakra-ui/react';
import Link from 'next/link';

const Enlace = ({ children, clase }) => {
	return (
		<Button className={`${clase} uppercase font-bold`}>
			<Link
				target="_blank"
				href={'https://www.instagram.com/amarena.agency/'}
			>
				{children}
			</Link>
		</Button>
	);
};

export default Enlace;
