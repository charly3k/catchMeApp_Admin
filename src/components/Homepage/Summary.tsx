import { Search, MessageCircle, Users } from "lucide-react";

const Summary = () => {
  const features = [
    {
      icon: Search,
      title: "Student Community Discovery Search",
      description:
        "Browse through list of schools, levels, and course of study to connect with one or more university students in the United Kingdom",
    },
    {
      icon: MessageCircle,
      title: "Cool Chat Interface",
      description:
        "Engage in meaningful conversation with other students through our intuitive messaging system.",
    },
    {
      icon: Users,
      title: "Recommended Student Users",
      description:
        "The app recommends other students who are registered on the app according to your selected preferences.",
    },
  ];

  return (
    <div className="py-20 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What will you find on{" "}
            <span className="text-[#ff0a54]">TheCatchMeApp</span>?
          </h3>
          <div className="w-24 h-1 bg-[#ff0a54] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ff0a54] to-[#e00948] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-black mb-4 group-hover:text-[#ff0a54] transition-colors duration-300">
                  {feature.title}
                </h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;
