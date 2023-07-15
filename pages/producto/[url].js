import Layout from '../../layout/Layout';
import { PRODUCTOS } from '../../contents/productos';
import { Container, Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Enlace from '../../components/ui/Button';
import ReactWhatsapp from 'react-whatsapp';
import Image from 'next/image';

function Producto() {
	const params = useRouter();

	function capitalize(str) {
		if (typeof str === 'string') {
			const lower = str.toLowerCase();
			return str.charAt(0).toUpperCase() + lower.slice(1);
		}
	}

	return (
		<Layout pagina={capitalize(params.query.url)}>
			<Container
				maxW={1220}
				className="mx-auto py-[100px] max-md:px-10 max-md:py-[80px] border-b-[1px] border-gray-400"
			>
				{PRODUCTOS.productos.map(producto => (
					<>
						{params.query.url == producto.url && (
							<Box
								key={producto.id}
								className="flex items-start max-md:items-center gap-28 max-md:flex-col-reverse max-md:gap-10"
							>
								<Box className="flex-1 space-y-6">
									<Image
										className="w-full h-full"
										src={producto.imagen}
										alt="imagen"
									/>

									<Box>
										<Text className="text-[300] text-base text-five">
											{producto.descripcion_lista.item}
										</Text>
									</Box>

									<Box className="space-y-2">
										{producto.lista_item.map(list => (
											<li
												key={list}
												className="capitalize text-[15px] text-fourty"
											>
												{list.item}.
											</li>
										))}
									</Box>
								</Box>
								<Box className="flex-1 space-y-12 max-md:space-y-8 max-md:text-center">
									<Text className="text-5xl uppercase text-five max-md:text-2xl">
										{producto.nombre}
									</Text>
									<Text className="text-3xl text-terciary font-bold max-md:text-lg">
										PRECIO: $ {producto.precio}
									</Text>
									<Box>
										<Enlace
											clase={
												'bg-five py-4 px-5 text-xl text-primary max-md:text-sm'
											}
										>
											<ReactWhatsapp
												number="3462550457"
												message={`¡Hola! Estuve en la pagina y deseo consultar por el servicio de ${producto.nombre.toLocaleUpperCase()} ($${
													producto.precio
												}) 
											Gracias.`}
											>
												CONSULTAR AHORA
											</ReactWhatsapp>
										</Enlace>
									</Box>
								</Box>
							</Box>
						)}
					</>
				))}
				{PRODUCTOS.package.map(producto => (
					<>
						{params.query.url == producto.url && (
							<Box
								key={producto.id}
								className="flex items-start max-md:items-center gap-28 max-md:flex-col-reverse max-md:gap-10"
							>
								<Box className="flex-1 space-y-10">
									<Image
										className="w-full h-full"
										src={producto.imagen}
										alt="imagen"
									/>
									<Box>
										<Box className="space-y-4">
											{producto.descripcion.map(desc => (
												<Box key={desc}>
													<Text className="text-[300] text-base text-five">
														{desc.comentario}
													</Text>
												</Box>
											))}

											<Box className="space-y-2">
												{producto.lista.map(list => (
													<li
														key={list}
														className="capitalize text-[15px] text-fourty"
													>
														{list.titulo}.
													</li>
												))}
											</Box>
											<Box>
												<Text className="text-[300] text-base text-five">
													{producto.comentario_dos}
												</Text>
											</Box>
										</Box>
									</Box>
								</Box>
								<Box className="flex-1 space-y-12 max-md:space-y-8 max-md:text-center">
									<Text className="text-5xl uppercase text-five max-md:text-2xl">
										{producto.nombre}
									</Text>
									<Text className="text-3xl text-terciary font-bold max-md:text-lg">
										PRECIO: $ {producto.precio}
									</Text>
									<Box>
										<Enlace
											clase={
												'bg-five py-4 px-5 text-xl text-primary max-md:text-sm'
											}
										>
											<ReactWhatsapp
												number="3462550457"
												message={`¡Hola! Estuve en la pagina y deseo consultar por el servicio de ${producto.nombre.toLocaleUpperCase()} ($${
													producto.precio
												}) 
									Gracias.`}
											>
												CONSULTAR AHORA
											</ReactWhatsapp>
										</Enlace>
									</Box>
								</Box>
							</Box>
						)}
					</>
				))}
			</Container>
		</Layout>
	);
}

export default Producto;
