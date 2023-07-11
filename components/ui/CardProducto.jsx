import { Box, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';

function CardProducto({ producto }) {
	const { url, precio, nombre, imagen, id } = producto;
	console.log(producto);
	return (
		<Link
			key={id}
			className="
		rounded-lg hover:scale-105 max-md:hover:scale-100 max-md:hover:translate-x-1 hover:translate-x-2 transiton-all duration-300
		 space-y-3"
			href={`/producto/${url}`}
		>
			<Box>
				<Image
					src={imagen}
					className="rounded-lg"
					alt={`${nombre} imagen`}
				/>
			</Box>

			<Box className="flex max-md:flex-col justify-between gap-1">
				<Text
					className="uppercase text-fourty font-medium max-md:text-sm"
					as="h4"
				>
					{nombre}
				</Text>
				<Text
					className="max-md:text-sm text-five font-medium"
					as="p"
				>
					$ {precio}
				</Text>
			</Box>
		</Link>
	);
}

export default CardProducto;
