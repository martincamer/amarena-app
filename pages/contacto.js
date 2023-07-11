import React, { useState, useRef } from 'react';
import { Box, Container, Text } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import Layout from '../layout/Layout';

const Contacto = () => {
	const [nombre, setNombre] = useState('');
	const [apellido, setApellido] = useState('');
	const [telefono, setTelefono] = useState('');
	const [correo, setCorreo] = useState('');
	const [ciudad, setCiudad] = useState('');
	const [pais, setPais] = useState('');
	const [servicio, setServicio] = useState('');
	const [mensaje, setMensaje] = useState('');
	const [error, setError] = useState(false);
	const form = useRef();

	const handleSubmit = e => {
		e.preventDefault();

		if (
			[
				nombre,
				apellido,
				telefono,
				correo,
				ciudad,
				pais,
				servicio,
				mensaje,
			].includes('')
		) {
			setError(true);
		} else {
			setError(false);

			emailjs
				.sendForm(
					'gmailMessage',
					'template_6phnoc1',
					form.current,
					'nNctAPcyYJvqDUxkT'
				)
				.then(
					result => {
						console.log(result.text);
					},
					error => {
						console.log(error.text);
					}
				);
		}

		setNombre('');
		setApellido('');
		setTelefono('');
		setCorreo('');
		setCiudad('');
		setPais('');
		setServicio('');
		setMensaje('');
	};

	const Error = ({ children }) => {
		return <Box className="pb-2 text-xs text-red-600">{children}</Box>;
	};

	return (
		<Layout pagina={'Contacto'}>
			<Container
				maxW={1440}
				className="mx-auto py-[100px] max-md:py-[80px] max-md:px-5 border-b-[1px] border-gray-300"
				as="section"
			>
				<Box className="space-y-12">
					<Box>
						<Text className="uppercase text-3xl font-medium text-five text-center max-md:text-lg">
							¡Mandanos tu mensaje y nos pondremos en contacto!
						</Text>
					</Box>
					<form
						ref={form}
						onSubmit={handleSubmit}
						className="w-1/2 max-md:w-full mx-auto bg-gray-100/30 p-10 rounded-lg shadow-lg shadow-black/30"
					>
						<div className="flex flex-wrap -mx-3 mb-2">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-first-name"
								>
									Nombre
								</label>
								<input
									name="nombre"
									className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-first-name"
									type="text"
									placeholder="Nombre"
									value={nombre}
									onChange={e => setNombre(e.target.value)}
								/>
								{error && <Error>{'El nombre no debe ir vacio'}</Error>}
							</div>
							<div className="w-full md:w-1/2 px-3 mb-6">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-last-name"
								>
									Apellido
								</label>
								<input
									name="apellido"
									className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-last-name"
									type="text"
									placeholder="Apellido"
									value={apellido}
									onChange={e => setApellido(e.target.value)}
								/>
								{error && <Error>{'El apellido no debe ir vacio'}</Error>}
							</div>
							<div className="w-full md:w-1/2 px-3 mb-6">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-last-name"
								>
									Correo Electronico
								</label>
								<input
									name="correo"
									className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-last-name"
									type="text"
									placeholder="correo@correo.com"
									value={correo}
									onChange={e => setCorreo(e.target.value)}
								/>
								{error && <Error>{'El correo no debe ir vacio'}</Error>}
							</div>
							<div className="w-full md:w-1/2 px-3">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-last-name"
								>
									Telefono
								</label>
								<input
									name="telefono"
									className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-last-name"
									type="number"
									placeholder="054-3462-23235"
									value={telefono}
									onChange={e => setTelefono(e.target.value)}
								/>
								{error && <Error>{'El telefono no debe ir vacio'}</Error>}
							</div>
						</div>

						<div className="flex flex-wrap -mx-3 mb-2">
							<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-city"
								>
									Ciudad
								</label>
								<input
									name="ciudad"
									value={ciudad}
									onChange={e => setCiudad(e.target.value)}
									className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-city"
									type="text"
									placeholder="Ciudad"
								/>
								{error && <Error>{'No debe ir vacio'}</Error>}
							</div>

							<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-city"
								>
									País
								</label>
								<input
									name="pais"
									value={pais}
									onChange={e => setPais(e.target.value)}
									className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-city"
									type="text"
									placeholder="Pais"
								/>
								{error && <Error>{'No debe ir vacio'}</Error>}
							</div>

							<div className="w-full md:w-1/3 px-3 mb-6 ">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-state"
								>
									Servicio
								</label>
								<div className="relative">
									<select
										name="servicio"
										className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										id="grid-state"
										value={servicio}
										onChange={e => setServicio(e.target.value)}
									>
										<option>Paquetes</option>
										<option>Pagina Web - Ecommerce</option>
										<option>Redes Sociales</option>
									</select>
									<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
										<svg
											className="fill-current h-4 w-4"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
										</svg>
									</div>
								</div>
								{error && <Error>{'No debe ir vacio'}</Error>}
							</div>

							<div className="w-full md:w-1/2 px-3">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-last-name"
								>
									Mensaje
								</label>
								<textarea
									name="mensaje"
									className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-last-name"
									type="number"
									placeholder="Escribe tu mensaje"
									value={mensaje}
									onChange={e => setMensaje(e.target.value)}
								/>
							</div>
						</div>
						<div>
							<input
								className="bg-gray-300 text-gray-600 px-6 py-2 rounded-lg uppercase text-sm font-bold cursor-pointer"
								type="submit"
								value={'ENVIAR'}
							/>
						</div>
					</form>
				</Box>
			</Container>
		</Layout>
	);
};

export default Contacto;
