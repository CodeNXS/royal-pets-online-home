
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Full Service Grooming",
      description: "Complete grooming package including bath, brush, nail trim, and styling.",
      price: "From $45",
      features: ["Professional bath & dry", "Brush & de-shed", "Nail trimming", "Ear cleaning", "Sanitary trim"],
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Bath & Brush",
      description: "Essential cleaning and brushing service for regular maintenance.",
      price: "From $25",
      features: ["Gentle shampooing", "Thorough brushing", "Basic drying", "Light trim if needed"],
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Nail & Paw Care",
      description: "Professional nail trimming and paw maintenance service.",
      price: "From $15",
      features: ["Nail trimming", "Paw pad care", "Cuticle maintenance", "Nail filing"],
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Specialty Treatments",
      description: "Premium treatments for skin conditions and special care needs.",
      price: "From $35",
      features: ["Medicated baths", "Skin treatments", "Flea & tick removal", "De-shedding therapy"],
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Pet Daycare",
      description: "Safe, supervised daycare for active and social pets.",
      price: "From $30/day",
      features: ["Supervised playtime", "Exercise & activities", "Socialization", "Feeding assistance"],
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Pet Training",
      description: "Professional training programs for dogs of all ages and skill levels.",
      price: "From $60/session",
      features: ["Basic obedience", "House training", "Behavioral correction", "Socialization training"],
      image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From grooming to training, we offer comprehensive pet care services designed 
            to keep your furry friends healthy, happy, and looking their best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-gray-800">{service.title}</CardTitle>
                  <span className="text-rose-600 font-bold text-lg">{service.price}</span>
                </div>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-rose-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild 
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white"
                >
                  <Link to="/contact">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-100 to-rose-100 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Book Your Pet's Service?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule an appointment or learn more about our services. 
            We can't wait to meet your furry friend!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg rounded-full"
            >
              <Link to="/contact">Schedule Appointment</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg rounded-full"
            >
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
