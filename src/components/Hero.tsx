
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-rose-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Welcome to{" "}
              <span className="text-rose-600">Royal Pets</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Where pets are family. Discover premium pet care, grooming services, 
              and everything your furry friends need to live their best lives.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg rounded-full"
              >
                <Link to="/services">Book Grooming</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg rounded-full"
              >
                <Link to="/products">Shop Now</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Happy pets at Royal Pets"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-600 font-bold">5★</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Trusted Care</p>
                  <p className="text-sm text-gray-600">500+ Happy Pets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
