'use client';

import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Review = () => {
  const reviews = [
    {
      name: 'EOTESSENCE',
      text: "i was able to connect with people in my uni and also students from other universities. I'd highly recommend for international students 👍",
    },
    {
      name: 'Mariam_a_o',
      text: 'Omg ! I love this app so much.. it has helped me connect with different people from different cities 🤭... My lonely days are finally overrrrr!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#ff0a54] rounded-3xl">
              <Quote className="w-12 h-12 text-white" />
            </div>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
            What our <span className="text-[#ff0a54]">users</span> say
          </h3>
          <div className="w-24 h-1 bg-[#ff0a54] mx-auto rounded-full"></div>
        </div>

        <div className="relative flex items-center justify-center gap-4">
          {/* Previous button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 p-2 rounded-full bg-[#ff0a54] text-white hover:bg-[#ff0a54]/90 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Carousel content */}
          <div className="w-full md:w-3/4 lg:w-2/3">
            <div
              key={currentIndex}
              className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-in fade-in duration-300"
            >
              <h4 className="text-xl font-bold text-black mb-4">
                {reviews[currentIndex].name}
              </h4>
              <p className="text-gray-600">{reviews[currentIndex].text}</p>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-2 rounded-full bg-[#ff0a54] text-white hover:bg-[#ff0a54]/90 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#ff0a54] w-8' : 'bg-gray-300 w-2'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
