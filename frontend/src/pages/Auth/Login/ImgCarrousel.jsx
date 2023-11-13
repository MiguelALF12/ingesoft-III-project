import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import img1 from '../../../assets/imgs/img1.jpg';
import img2 from '../../../assets/imgs/img2.jpg';
import img3 from '../../../assets/imgs/img3.jpg';
import img4 from '../../../assets/imgs/img4.jpg';
export default function ImgCarrousel() {
    return (
        <Carousel controls={false} indicators={false} slide={false}>
            <Carousel.Item interval={5000}>
                {/* <ExampleCarouselImage text="First slide" /> */}
                <Image src={img1} alt="Black skin women holding a baby with her hands" fluid />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <Image src={img2} alt="White skin man with a child sitting on his shoulder" fluid />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <Image src={img3} alt="A car crashed a motorbike, there is peopel around while the bike driver is lying on the floor" fluid />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <Image src={img4} alt="A women with the flu, holding a termostat in her mouth, and with a cold bag above his head" fluid />
            </Carousel.Item>
        </Carousel>
    );
}
