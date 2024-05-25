import women from "../../assets/hero/women.png";
import sales from "../../assets/hero/sale.png";
import shopping from "../../assets/hero/shopping.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  const ImageList = [
    {
      id: 1,
      img: women,
      title: "Upto 50% off on all Men's Wear",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      img: shopping,
      title: "30% off on all Women's Wear",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 3,
      img: sales,
      title: "70% off on all Products Sale",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-black dark:text-white duration-200">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>

      <div className="pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((item) => (
            <div key={item.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {item.title}
                  </h1>
                  <p className="text-sm">{item.description}</p>
                  <div>
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 text-white py-2 px-4 rounded-full">
                      Order Now
                    </button>
                  </div>
                </div>

                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      src={women}
                      alt={item.title}
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
