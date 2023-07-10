import { Box, Container, Text } from '@chakra-ui/react';
import Layout from './layout/Layout';
import { PRODUCTOS } from './contents/productos';
import Link from 'next/link';
import Image from 'next/image';

function Productos() {
	return (
		<Layout pagina={'Tienda Productos'}>
			<Container
				maxW={1220}
				as={'section'}
				className="mx-auto py-[100px] max-md:py-[60px] space-y-12 max-md:px-2"
			>
				<Box className="flex items-center justify-center">
					<h1 className="uppercase font-medium text-3xl text-center text-five max-md:text-xl">
						{'Productos de la tienda'}
					</h1>
				</Box>
				<Box className="grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-2 gap-6 max-md:gap-4">
					{PRODUCTOS.package.map(item => (
						<Link
							className="
					rounded-lg hover:scale-102 max-md:hover:scale-100 max-md:hover:translate-x-1 hover:translate-x-1 transiton-all duration-300
					 space-y-3"
							href={`/producto/${item.url}`}
						>
							<Box>
								<Image
									src={item.imagen}
									className="rounded-lg"
									alt={`${item.nombre} imagen`}
								/>
							</Box>

							<Box className="flex flex-col text-center gap-1">
								<Text
									className="uppercase text-fourty font-medium max-md:text-sm"
									as="h4"
								>
									{item.nombre}
								</Text>
								<Text
									className="max-md:text-sm text-five font-medium"
									as="p"
								>
									$ {item.precio}
								</Text>
							</Box>
						</Link>
					))}
					{PRODUCTOS.productos.map(item => (
						<Link
							className="
					rounded-lg hover:scale-102 max-md:hover:scale-100 max-md:hover:translate-x-1 hover:translate-x-1 transiton-all duration-300
					 space-y-3"
							href={`/producto/${item.url}`}
						>
							<Box>
								<Image
									src={item.imagen}
									className="rounded-lg"
									alt={`${item.nombre} imagen`}
								/>
							</Box>

							<Box className="flex flex-col text-center gap-1">
								<Text
									className="uppercase text-fourty font-medium max-md:text-sm"
									as="h4"
								>
									{item.nombre}
								</Text>
								<Text
									className="max-md:text-sm text-five font-medium"
									as="p"
								>
									$ {item.precio}
								</Text>
							</Box>
						</Link>
					))}
				</Box>
			</Container>
		</Layout>
	);
}

export default Productos;
