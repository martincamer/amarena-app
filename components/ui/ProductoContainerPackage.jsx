import { Box, Text } from '@chakra-ui/react';
import Enlace from './Button';
import ReactWhatsapp from 'react-whatsapp';
import Image from 'next/image';

function ProductoContainerPackage({ producto }) {
	const { imagen, descripcion, precio, nombre, lista, comentario_dos } =
		producto;

	return (
		<Box className="flex items-center gap-28 max-md:flex-col-reverse max-md:gap-10">
			<Box className="flex-1 space-y-10">
				<Image
					className="w-full h-full"
					src={imagen}
				/>
				<Box>
					<Box className="space-y-4">
						{descripcion.map(desc => (
							<Box>
								<Text className="text-[300] text-base text-five">
									{desc.comentario}
								</Text>
							</Box>
						))}

						<Box className="space-y-2">
							{lista.map(list => (
								<li className="capitalize text-[15px] text-fourty">
									{list.titulo}.
								</li>
							))}
						</Box>
						<Box>
							<Text className="text-[300] text-base text-five">
								{comentario_dos}
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box className="flex-1 space-y-12 max-md:space-y-8 max-md:text-center">
				<Text className="text-5xl uppercase text-five max-md:text-2xl">
					{nombre}
				</Text>
				<Text className="text-3xl text-terciary font-bold max-md:text-lg">
					PRECIO: $ {precio}
				</Text>
				<Box>
					<Enlace
						clase={'bg-five py-4 px-5 text-xl text-primary max-md:text-sm'}
					>
						<ReactWhatsapp
							number="3462550457"
							message={`¡Hola! Estuve en la pagina y deseo consultar por el servicio de ${nombre.toLocaleUpperCase()} ($${precio}) 
                              Gracias.`}
						>
							CONSULTAR AHORA
						</ReactWhatsapp>
					</Enlace>
				</Box>
			</Box>
		</Box>
	);
}

export default ProductoContainerPackage;
