
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  const features = [
    {
      title: "Professional Grooming",
      description: "Expert grooming services to keep your pets looking and feeling their best.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/services"
    },
    {
      title: "Premium Pet Supplies",
      description: "Quality food, toys, and accessories for every type of pet.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/products"
    },
    {
      title: "Expert Care Advice",
      description: "Get personalized advice from our experienced pet care specialists.",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      link: "/contact"
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Everything Your Pet Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From grooming to supplies, we provide comprehensive care for your beloved companions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-gray-800">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-rose-600 text-rose-600 hover:bg-rose-50"
                  >
                    <Link to={feature.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-rose-600 to-amber-500 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Give Your Pet the Royal Treatment?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied pet parents who trust Royal Pets with their furry family members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
            >
              <Link to="/contact">Visit Us Today</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-6 text-lg rounded-full"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
