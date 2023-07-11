import { Box, Container, Text } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
import { AiFillBank, AiOutlineMail } from 'react-icons/ai';

function Metodos() {
	return (
		<Container
			maxW={'100%'}
			minH={'100%'}
			className="bg-primary py-20 px-10"
		>
			<Box
				maxW={1220}
				className="mx-auto flex justify-around max-md:flex-col max-md:space-y-16"
			>
				<Box className="space-y-3 flex flex-col items-center  border-five">
					<FaWhatsapp className="text-4xl text-five" />
					<Text
						className="text-xl font-[500] text-gray-700 max-md:text-lg"
						as={'p'}
					>
						Charlamos?
					</Text>
					<Text
						className="text-base font-[300] text-gray-700 max-md:text-center max-md:text-sm"
						as={'p'}
					>
						Mandame tus ideas por whatsapp ♥
					</Text>
				</Box>
				<Box className="space-y-3 flex flex-col items-center border-five border-x-2 px-12 max-md:border-none">
					<AiFillBank className="text-4xl text-five" />
					<Text
						className="text-xl font-[500] text-gray-700 max-md:text-lg"
						as={'p'}
					>
						Pagos
					</Text>
					<Text
						className="text-base font-[300] text-gray-700 max-md:text-center max-md:text-sm"
						as={'p'}
					>
						Transferencia bancaria o Mercado Pago
					</Text>
				</Box>
				<Box className="space-y-3 flex flex-col items-center  border-five ">
					<AiOutlineMail className="text-4xl text-five" />
					<Text
						className="text-xl font-[500] text-gray-700 max-md:text-lg"
						as={'p'}
					>
						Envíos de archivos
					</Text>
					<Text
						className="text-base font-[300] text-gray-700 max-md:text-center max-md:text-sm"
						as={'p'}
					>
						Cualquier pedido es enviado por Mail en alta calidad!
					</Text>
				</Box>
			</Box>
		</Container>
	);
}

export default Metodos;
