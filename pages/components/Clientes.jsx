import Image from 'next/image';
import { Container } from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

//imagenes
import uno from '../../public/img/slider_clientes/uno.png';
import dos from '../../public/img/slider_clientes/dos.png';
import tres from '../../public/img/slider_clientes/tres.png';
import cuatro from '../../public/img/slider_clientes/cuatro.png';

function Clientes() {
	return (
		<Container
			maxH={'100%'}
			maxW={1220}
			className="py-20 max-md:px-3 mx-auto "
		>
			<Swiper
				id="swiper"
				spaceBetween={10}
				slidesPerView={2}
				pagination={{ clickable: true }}
				breakpoints={{
					511: {
						width: 511,
						slidesPerView: 2,
					},
					768: {
						width: 768,
						slidesPerView: 2,
					},
					1200: {
						width: 1200,
						slidesPerView: 3,
					},
				}}
				navigation={true}
				autoplay={{
					delay: 1000,
					reverseDirection: true,
					disableOnInteraction: true,
				}}
				modules={[Pagination, Navigation, Autoplay]}
			>
				{slider.map(card => (
					<SwiperSlide>
						<Image
							className="max-md:w-[200px] w-full h-full z-0"
							src={card.imagen}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
}

const slider = [
	{ imagen: uno },
	{ imagen: dos },
	{ imagen: tres },
	{ imagen: cuatro },
];

export default Clientes;
