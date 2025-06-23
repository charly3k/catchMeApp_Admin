import { GraduationCap, Heart, BookOpen } from "lucide-react";

const StudentsDating = () => {
  return (
    <div className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#ff0a54]/5 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#ff0a54] rounded-3xl">
              <GraduationCap className="w-12 h-12 text-white" />
            </div>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
            Life as a student could be stressful but{" "}
            <span className="text-[#ff0a54]">dating</span> as a student should
            not be stressful
          </h3>
          <div className="w-24 h-1 bg-[#ff0a54] mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
          <p className="text-gray-600 text-lg leading-relaxed">
            Dating as a student should be exciting and fulfilling, not another
            source of stress. With academic deadlines, exams, and social
            commitments, student life can already feel overwhelming, but finding
            meaningful connections should not add to that pressure. CatchMeApp
            is designed to make dating easy, enjoyable, and stress-free by
            connecting students in a way that fits seamlessly into their busy
            lives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff0a54] to-[#e00948] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-black mb-2">
              Smart Matching
            </h4>
            <p className="text-gray-600">
              Find people who share your interests and values
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff0a54] to-[#e00948] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-black mb-2">Study Balance</h4>
            <p className="text-gray-600">
              Connect without compromising your academic goals
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff0a54] to-[#e00948] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-black mb-2">
              Student Community
            </h4>
            <p className="text-gray-600">
              Join a supportive community of like-minded students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsDating;
