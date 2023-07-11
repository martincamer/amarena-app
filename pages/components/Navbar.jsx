'use client';
import { useContext } from 'react';
import { NAVEGACION } from '../../contents/contenido';
import { Box, Container, Link, Text } from '@chakra-ui/react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CartContext from '../context/CartContext';
import Image from 'next/image';
import logo from '../../public/img/logo.jpeg';

function Navbar() {
	const { handleClick, click } = useContext(CartContext);

	return (
		<Container>
			<Box className="bg-primary p-3 text-center font-semibold text-gray-700 text-sm">
				<Text>Community Manager para todo el mundo! ♥</Text>
			</Box>
			<Box className="shadow-lg">
				<Box
					className="flex items-center justify-between px-[20px]"
					maxW={1220}
					margin={'0 auto'}
				>
					<Link href="/">
						{/* logo  */}
						<Image
							className="w-[150px] h-[150px]"
							src={logo}
							alt="logo"
						/>
					</Link>
					<Box className="flex gap-16 max-md:hidden">
						{NAVEGACION.map(link => (
							<Link
								className="uppercase text-gray-500 font-bold hover:text-gray-900 transition-all ease-out"
								key={link.titulo}
								href={`${link.url}`}
							>
								{link.titulo}
							</Link>
						))}
					</Box>
					<Box className="flex gap-2 max-md:hidden">
						{/* redes sociales  */}
						<FaInstagram className="text-[40px] text-primary bg-gray-700/60 p-2 rounded-[50%] cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all ease-in-out duration-300" />
						<FaWhatsapp className="text-[40px] text-primary bg-gray-700/60 p-2 rounded-[50%] cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all ease-in-out duration-300" />
					</Box>

					<div className="hidden max-md:block">
						<button
							onClick={handleClick}
							className="relative group"
						>
							<div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-primary ring-0 ring-gray-200 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
								<div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
									<div className="bg-gray-700 h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
									<div className="bg-gray-700 h-[1px] rounded"></div>
									<div className="bg-gray-700 h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
								</div>
							</div>
						</button>
					</div>
				</Box>

				{click && (
					<Box
						as={motion.div}
						initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
						animate={{ scale: 1, opacity: 1 }}
						className={`min-w-[84.5vw] min-h-[90.6vw]  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-five/90 z-10 p-10 transition-all duration-500 ease-out backdrop-blur-md  rounded-lg space-y-10 shadow-lg shadow-black/40`}
					>
						<Box className="flex flex-col space-y-10">
							{navegacion.map(link => (
								<Link
									className="uppercase text-gray-900 font-bold hover:text-gray-900 transition-all ease-out text-2xl"
									key={link.titulo}
									href={`${link.url}`}
								>
									{link.titulo}
								</Link>
							))}
						</Box>

						<Box className="flex gap-2">
							{/* redes sociales  */}
							<FaInstagram className="text-[50px] text-five bg-primary p-2 rounded-[50%] cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all ease-in-out duration-300" />
							<FaWhatsapp className="text-[50px] text-five bg-primary p-2 rounded-[50%] cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all ease-in-out duration-300" />
						</Box>
					</Box>
				)}
			</Box>
		</Container>
	);
}

export default Navbar;
