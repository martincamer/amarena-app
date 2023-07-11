import { Box, Container, Text } from '@chakra-ui/react';
import { PRODUCTOS } from '../../contents/productos';
import CardProducto from './ui/CardProducto';
import Enlace from './ui/Button';

function Productos() {
	return (
		<Container
			maxW={1440}
			className="mx-auto max-xl:px-10 space-y-10 pb-20 max-md:pb-10"
		>
			<Box>
				<Text
					className="text-2xl max-md:text-xl max-md:text-center uppercase font-medium text-five"
					as={'h2'}
				>
					productos
				</Text>
			</Box>

			<Box className="grid grid-cols-4 gap-8 max-md:gap-4 max-md:gap-y-8 max-lg:grid-cols-3 max-md:grid-cols-2">
				{PRODUCTOS.productos.map(producto => (
					<CardProducto
						key={producto.id}
						producto={producto}
					/>
				))}
			</Box>
			<Box className="text-center">
				<Enlace clase="bg-five py-4 px-20 text-primary max-md:text-sm max-md:py-2 max-md:px-6">
					Ver Mas
				</Enlace>
			</Box>
		</Container>
	);
}

export default Productos;
