import { Quote } from "lucide-react";

const Review = () => {
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

        <div className="grid md:grid-cols-2 gap-8  ">
          <div className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <h4 className="text-xl font-bold text-black mb-4">EOTESSENCE</h4>
            <p className="text-gray-600">
              i was able to connect with people in my uni and also students from
              other universities. I&apos;d highly recommend for international
              students 👍
            </p>
          </div>
          <div className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <h4 className="text-xl font-bold text-black mb-4">Mariam_a_o</h4>
            <p className="text-gray-600">
              Omg ! I love this app so much.. it has helped me connect with
              different people from different cities 🤭... My lonely days are
              finally overrrrr!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
