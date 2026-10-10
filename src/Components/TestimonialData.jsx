import { useEffect, useState } from "react";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { assets } from "../assets/assets";

const testimonials = [
  {
    id: 1,
    name: "Thomas Lio",
    role: "Founder & CEO",
    image: assets.testimonial_profile_1,
    rating: 5,
    review:
      "Artivox took our vague idea and turned it into a product we're genuinely proud of. The design quality was outstanding and the process was smooth from day one.",
  },
  {
    id: 2,
    name: "Emma Watson",
    role: "Marketing Director",
    image: assets.testimonial_profile_2 ,
    rating: 5,
    review:
      "They didn't just deliver a website, - they delivered a brand. Every detail was considered and the final result was beyond what we expected.",
  },
  {
    id: 3,
    name: "David Johnson",
    role: "Startup Founder",
    image: assets.testimonial_profile_3,
    rating: 5,
    review:
      "Fast, communicative, and incredibly talented. Our Webflow site went from concept to launch in 3 weeks and our conversion rate jumped immediately.",
  },
];

const TestimonialData = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section className="pt-20 px-5 lg:px-8">
      <div
        className="relative mx-auto overflow-hidden rounded-[32px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${assets.Testimonial_bg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 " />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6 py-16 md:px-14 lg:px-24 lg:py-24">

          {/* Quote */}
          <Quote
            // strokeWidth={1.5}
            className="mb-8 h-16 w-16 text-white lg:h-24 lg:w-24"
          />
       

          {/* Review */}
          <p className="max-w-5xl text-center text-lg font-medium leading-relaxed text-white/70 md:text-2xl lg:text-[32px] lg:leading-[46px]">
            {testimonial.review}
          </p>

          {/* Stars */}
          <div className="mt-10 flex gap-2">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                size={24}
                fill="#FFD029"
                className="text-[#FFD029]"
              />
            ))}
          </div>

          {/* Client */}
          <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              loading="lazy"
              className="h-20 w-20 rounded-2xl object-cover lg:h-24 lg:w-24"
            />

            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white">
                {testimonial.name}
              </h3>

              <p className="text-lg text-white/70">
                {testimonial.role}
              </p>
            </div>
          </div>

        
        </div>

        {/* Previous */}
        <button
          onClick={prevSlide}
          aria-label="Previous testimonial"
          className="absolute left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/20 backdrop-blur transition hover:bg-white/10 lg:flex"
        >
          <ChevronLeft className="text-white" />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          aria-label="Next testimonial"
          className="absolute right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/20 backdrop-blur transition hover:bg-white/10 lg:flex"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
        {/* Dots */}
          <div className="mt-12 flex items-center justify-center gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-4 w-4 rounded-full transition-all duration-300 ${
                  current === index
                    ? "scale-110 bg-[#3030F2]"
                    : "bg-[#AAAAFF]/60 hover:bg-[#AAAAFF]"
                }`}
              />
            ))}
          </div>
    </section>
  );
}

export default TestimonialData




