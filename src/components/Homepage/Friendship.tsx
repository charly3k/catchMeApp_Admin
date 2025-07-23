import { Users, Coffee, MessageCircle } from "lucide-react";

const Friendship = () => {
  return (
    <div className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#ff0a54] rounded-3xl">
              <Users className="w-12 h-12 text-white" />
            </div>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
            Make <span className="text-[#ff0a54]">friends</span> and build
            meaningful connections
          </h3>
          <div className="w-24 h-1 bg-[#ff0a54] mx-auto rounded-full"></div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
          <p className="text-gray-600 text-lg leading-relaxed">
            Making friends and building meaningful connections as a student is
            an essential part of both personal growth and an enjoyable
            university experience. TheCatchMeApp goes beyond dating, providing a
            platform where students can meet like-minded individuals, form
            lasting friendships, and engage in meaningful conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff0a54] to-[#e00948] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-black mb-4">Study Buddies</h4>
            <p className="text-gray-600">
              Find the perfect study partner for your courses
            </p>
          </div>
          <div className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff0a54] to-[#e00948] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-black mb-4">
              Great Conversations
            </h4>
            <p className="text-gray-600">
              Engage in meaningful discussions with peers
            </p>
          </div>
          <div className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff0a54] to-[#e00948] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-black mb-4">Lasting Bonds</h4>
            <p className="text-gray-600">
              Build friendships that extend beyond university
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friendship;
