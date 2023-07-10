import { Box, Button, Container, Text } from '@chakra-ui/react';
import Image from 'next/image';
import uno from '../../public/img/visa.png';
import dos from '../../public/img/rapipago.png';
import tres from '../../public/img/pagofacil.png';
import cuatro from '../../public/img/nativa.png';
import cinco from '../../public/img/naranja.png';
import seis from '../../public/img/mercadopago.png';
import siete from '../../public/img/mastercard.png';
import ocho from '../../public/img/maestro.png';
import nueve from '../../public/img/diners-club.png';
import diez from '../../public/img/deposito.png';
import once from '../../public/img/cabal.png';
import doce from '../../public/img/argencard.png';
import trece from '../../public/img/american-express.png';
import catorce from '../../public/img/acordar.png';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill, BsArrowRightShort } from 'react-icons/bs';

function Footer() {
	return (
		<Container
			as={'footer'}
			className="bg-white"
		>
			<Box
				as="div"
				maxW={1440}
				className="py-20 px-10 mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-40 max-md:gap-10"
			>
				<Box className="space-y-10">
					<Box className="space-y-4">
						<Text
							className="font-medium text-five"
							as="p"
						>
							MEDIOS DE PAGO
						</Text>
						<Box className="flex flex-wrap gap-3">
							{imagenes.map(img => (
								<Image
									key={img}
									src={img.imagen}
									alt="tarjetas"
									className="w-[60px] rounded-lg shadow-sm shadow-black/30"
								/>
							))}
						</Box>
					</Box>

					<Box className="space-y-4">
						<Text
							className="font-medium text-five"
							as="p"
						>
							MEDIOS DE ENVÍO
						</Text>
						<Box>
							<Image
								src={catorce}
								alt="tarjetas"
								className="w-[60px] rounded-lg shadow-sm shadow-black/30"
							/>
						</Box>
					</Box>
				</Box>
				<Box className="space-y-10">
					<Box className="space-y-4">
						<Text
							className="font-medium text-five"
							as={'p'}
						>
							NUESTRAS REDES SOCIALES
						</Text>
						<Box className="flex gap-2">
							{/* redes sociales  */}
							<FaInstagram className="text-[40px] text-primary bg-five p-2 rounded-[50%] cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all ease-in-out duration-300" />
							<FaWhatsapp className="text-[40px] text-primary bg-five p-2 rounded-[50%] cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all ease-in-out duration-300" />
						</Box>
					</Box>
					<Box className="space-y-4">
						<Text
							className="font-medium text-five"
							as={'p'}
						>
							CONTACTO
						</Text>
						<Box className="space-y-2">
							<Box>
								<Text
									className="flex gap-2 items-center text-five font-semibold"
									as={'p'}
								>
									<AiOutlineMail className="text-2xl text-terciary" />{' '}
									morenalnrs@gmail.com
								</Text>
							</Box>
							<Box>
								<Text
									className="flex gap-2 items-center text-five font-semibold"
									as={'p'}
								>
									<BsFillTelephoneFill className="text-2xl text-terciary" /> +54
									3462
								</Text>
							</Box>
							<Box>
								<Button
									className="flex gap-2 items-center text-five font-semibold cursor-pointer"
									as={'p'}
								>
									<BsArrowRightShort className="text-2xl text-terciary" />{' '}
									Mensaje
								</Button>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box className="border-t-[1px] border-gray-400 py-5 px-10 text-center text-five font-semibold text-sm">
				Desarollada por @Martín Camer - Software Developer 2023{' '}
			</Box>
		</Container>
	);
}

export const imagenes = [
	{ imagen: uno },
	{ imagen: dos },
	{ imagen: tres },
	{ imagen: cuatro },
	{ imagen: cinco },
	{ imagen: seis },
	{ imagen: siete },
	{ imagen: ocho },
	{ imagen: nueve },
	{ imagen: diez },
	{ imagen: once },
	{ imagen: doce },
	{ imagen: trece },
	{ imagen: catorce },
];

export default Footer;
