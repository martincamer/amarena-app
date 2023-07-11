import { Box, Container, Text } from '@chakra-ui/react';
import PRODUCTOS from '../contents/Productos';
import Image from 'next/image';
import Link from 'next/link';

const Packs = () => {
	return (
		<Container
			maxW={1440}
			className="mx-auto py-20 max-xl:px-10 flex flex-col items-center space-y-16 max-md:space-y-12"
		>
			<Box>
				<Text
					className="text-2xl max-md:text-xl max-md:text-center uppercase font-medium text-five"
					as={'h2'}
				>
					Mirá todos estos packs!
				</Text>
			</Box>
			<Box className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-10 max-md:gap-4">
				{PRODUCTOS.package.map(pack => (
					<Link
						href={`/producto/${pack.url}`}
						className="cursor-pointer"
					>
						<Image
							className="rounded-lg hover:scale-105 max-md:hover:scale-100 max-md:hover:translate-x-1 hover:translate-x-4 transiton-all duration-300 hover:shadow-md hover:shadow-black/20"
							src={pack.imagen}
						/>
					</Link>
				))}
			</Box>
		</Container>
	);
};

export default Packs;
