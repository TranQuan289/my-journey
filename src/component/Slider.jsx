import "./slider.css"; // Import file CSS

function ImageSliderRight({ src, alt }) {
  return (
    <div
      className="h-auto relative rounded-2xl overflow-hidden before:-skew-x-12 before:absolute before:inset-0 before:-translate-x-full group-hover:before:animate-[shimmer_1s_forwards] before:bg-gradient-to-r before:from-transparent  before:via-white/10 before:to-transparent transition-all ease-in-out duration-300 group-hover:rotate-[-1deg] group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl rotate-2"
    >
      <img
        loading="eager"
        src={src}
        alt={alt}
        className="aspect-[4/3] h-full w-full flex object-cover rounded-2xl bg-gray-10 dark:bg-gray-80"
      ></img>
    </div>
  );
}

function ImageSliderLeft({ src, alt }) {
  return (
    <div
      className="h-auto relative rounded-2xl overflow-hidden before:-skew-x-12 before:absolute before:inset-0 before:-translate-x-full group-hover:before:animate-[shimmer_1s_forwards] before:bg-gradient-to-r before:from-transparent  before:via-white/10 before:to-transparent transition-all ease-in-out duration-300 group-hover:rotate-[-1deg] group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl -rotate-2"
    >
      <img
        loading="eager"
        src={src}
        alt={alt}
        className="aspect-[4/3] h-full w-full flex object-cover rounded-2xl bg-gray-10 dark:bg-gray-80"
      ></img>
    </div>
  );
}

function Slider() {
  const images = [
    {
      src: "https://rikkei.vn/storage/cache/storage/ckfinder/images/z5479973355572_01e5c9818281c7c281034102e4e9c444-r-400-217.jpg",
      alt: "meo",
    },
    {
      src: "https://rikkei.vn/storage/cache/storage/ckfinder/images/z5479973355572_01e5c9818281c7c281034102e4e9c444-r-400-217.jpg",
      alt: "meo",
    },
    {
      src: "https://rikkei.vn/storage/cache/storage/ckfinder/images/z5479973355572_01e5c9818281c7c281034102e4e9c444-r-400-217.jpg",
      alt: "meo",
    },
    {
      src: "https://rikkei.vn/storage/cache/storage/ckfinder/images/z5479973355572_01e5c9818281c7c281034102e4e9c444-r-400-217.jpg",
      alt: "meo",
    },
    {
      src: "https://rikkei.vn/storage/cache/storage/ckfinder/images/z5479973355572_01e5c9818281c7c281034102e4e9c444-r-400-217.jpg",
      alt: "meo",
    },
    {
      src: "https://rikkei.vn/storage/cache/storage/ckfinder/images/z5479973355572_01e5c9818281c7c281034102e4e9c444-r-400-217.jpg",
      alt: "meo",
    },
  ];

  return (
    <div className="relative flex overflow-x-hidden overflow-y-visible w-auto">
      <div
        className="w-full py-12 lg:py-20 whitespace-nowrap flex flex-row animate-marquee lg:animate-large-marquee"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="slider-item group flex justify-center px-5 min-w-[50%] lg:min-w-[25%] rounded-2xl relative"
          >
            {index % 2 === 0 ? (
              <ImageSliderRight src={image.src} alt={image.alt} />
            ) : (
              <ImageSliderLeft src={image.src} alt={image.alt} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export { Slider }