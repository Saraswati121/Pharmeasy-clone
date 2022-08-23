import React from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
} from '@chakra-ui/react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import Slider from 'react-slick';
import CarausalCard from './CarausalCard';

// Settings for the slider
const settings = {
    dots: false,
    fade: false,
    infinite: true,
    slidesToShow: 1.66,
    slidesToScroll: 1,
}

export default function Carausal() {

    const [slider, setSlider] = React.useState()

    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });



    const cardsData = [
        {
            image:
                'https://cms-contents.pharmeasy.in/banner/8d156b2392b-BachatDayOldUser-CB-23Aug.jpg?dim=700x0&dpr=1&q=100',
        },
        {
            image:
                'https://cms-contents.pharmeasy.in/banner/b5d3e38e1cd-DDPP.jpg',
        },
        {
            image:
                'https://cms-contents.pharmeasy.in/banner/79e317481a8-OneTouchCa.png',
        },
        {
            image:
                'https://cms-contents.pharmeasy.in/banner/2d125964b2b-Cetaphil-CB-Aug22.jpg',
        }
        , {
            image:
                'https://cms-contents.pharmeasy.in/banner/15104e5fb78-Lupizyme-CB.jpg',
        }
        ,
        {
            image:
                'https://cms-contents.pharmeasy.in/banner/4f8276ae321-Easlylax-L.jpg',
        },
        {
            image:
                'https://cms-contents.pharmeasy.in/banner/1df217d9e62-WB-Aug.jpg',
        },
        {
            image:
                'https://cms-contents.pharmeasy.in/banner/cd880fad001-Harpic-CB.jpg',
        },
        {
            image:
                'https://cms-contents.pharmeasy.in/banner/6da24865314-TheMomsCo-CB.jpg',
        },
        {
            image:
                'https://cms-contents.pharmeasy.in/banner/37b03fe8189-BEONE-Aug.jpg',
        },
        {
            image:
                'https://cms-contents.pharmeasy.in/banner/01193579004-Klareye-CB.jpg',
        }
    ];

    return (
        <Box
            position={'relative'}
            height={'320px'}
            width={'full'}
            overflow={'hidden'}
            borderRadius="0"
            zIndex="0">
            {/* CSS files for react-slick from docs*/}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                bg="white"
                _hover={{ bg: "white", transform: "scale(1.1) translateY(-15px)" }}
                _active={{ bg: "white" }}
                size="sm"
                onClick={() => slider?.slickPrev()}>
                <MdKeyboardArrowLeft color="#0f847e" size={20} />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                size="sm"
                _hover={{ bg: "white", transform: "scale(1.1) translateY(-15px)" }}
                _active={{ bg: "white" }}
                bg="white"
                onClick={() => slider?.slickNext()}>
                <MdKeyboardArrowRight color="#0f847e" size={20} />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)} >
                {cardsData.map((elem, index) => (
                    <CarausalCard elem={elem} />
                ))}
            </Slider>
        </Box>
    );
}