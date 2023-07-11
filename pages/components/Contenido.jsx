import { Box, Container, Text } from '@chakra-ui/react';
import Enlace from './ui/Button';

const Contenido = ({ contenido, enlace }) => {
	return (
		<Container className="bg-primary p-16 max-md:p-10">
			<Box
				className="flex flex-col items-center mx-auto space-y-5"
				maxW={1220}
			>
				<Box>
					<Text
						className="font-normal uppercase text-xl max-md:text-sm text-center text-fourty"
						as="p"
					>
						{contenido}
					</Text>
				</Box>
				<Box>
					<Enlace
						clase={
							'bg-five p-3 text-primary hover:shadow-md shadow-black/90 transition-all duration-300 max-md:text-sm'
						}
					>
						{enlace}
					</Enlace>
				</Box>
			</Box>
		</Container>
	);
};

export default Contenido;
