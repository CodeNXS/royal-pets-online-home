
const About = () => {
  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded with love and passion for pets, Royal Pets has been serving our community 
            for over a decade with dedication, care, and expertise.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Where It All Began
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Royal Pets started as a small family business with a simple mission: to provide 
              the best possible care for pets in our community. What began as a passion project 
              has grown into a trusted destination for pet parents who want nothing but the best 
              for their furry family members.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We believe that every pet deserves royal treatment, which is why we've built our 
              reputation on personalized care, premium products, and services that go above and beyond.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we're proud to be a cornerstone of the local pet community, helping pets 
              live healthier, happier lives alongside their human companions.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Royal Pets team with pets"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Care</h3>
              <p className="text-gray-600">
                Every pet receives individualized attention and care tailored to their unique needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Trust</h3>
              <p className="text-gray-600">
                We build lasting relationships based on transparency, reliability, and expertise.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Passion</h3>
              <p className="text-gray-600">
                Our love for animals drives everything we do, from services to product selection.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & Head Groomer", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
              { name: "Micheal Chen", role: "Pet Care Specialist", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
              { name: "Emily Rodriguez", role: "Grooming Assistant", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
