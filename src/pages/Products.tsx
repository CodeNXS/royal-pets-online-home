
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = [
    {
      title: "Premium Pet Food",
      description: "Nutritious, high-quality food for dogs, cats, and specialty pets.",
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      items: ["Dry & Wet Food", "Treats & Snacks", "Special Diet Options", "Supplements"]
    },
    {
      title: "Toys & Entertainment",
      description: "Fun and engaging toys to keep your pets active and entertained.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      items: ["Interactive Toys", "Chew Toys", "Balls & Fetch Toys", "Puzzle Games"]
    },
    {
      title: "Grooming Supplies",
      description: "Professional-grade grooming tools and products for home care.",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      items: ["Brushes & Combs", "Shampoos & Conditioners", "Nail Clippers", "Dental Care"]
    },
    {
      title: "Accessories",
      description: "Stylish and functional accessories for everyday pet needs.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      items: ["Collars & Leashes", "Beds & Blankets", "Carriers & Crates", "Feeding Bowls"]
    },
    {
      title: "Health & Wellness",
      description: "Products to maintain your pet's health and wellbeing.",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      items: ["Vitamins & Supplements", "First Aid Supplies", "Flea & Tick Prevention", "Dental Health"]
    },
    {
      title: "Small Pet Supplies",
      description: "Specialized products for birds, hamsters, rabbits, and exotic pets.",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      items: ["Cages & Habitats", "Specialized Food", "Bedding & Nesting", "Exercise Equipment"]
    }
  ];

  const featuredProducts = [
    {
      name: "Royal Feast Premium Dog Food",
      price: "$45.99",
      rating: "4.9/5",
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Comfort Cloud Pet Bed",
      price: "$29.99",
      rating: "4.8/5",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Interactive Puzzle Toy",
      price: "$19.99",
      rating: "4.9/5",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Pet Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium pet products. 
            From nutrition to entertainment, we have everything your pet needs.
          </p>
        </div>

        {/* Featured Products */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Featured Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-800">{product.name}</CardTitle>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-rose-600">{product.price}</span>
                    <span className="text-sm text-amber-600 font-medium">{product.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Shop by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-gray-800">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-rose-600 text-rose-600 hover:bg-rose-50"
                  >
                    Browse Category
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon / Visit Store CTA */}
        <div className="bg-gradient-to-r from-rose-600 to-amber-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Online Shopping Coming Soon!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We're working hard to bring you online shopping convenience. 
            In the meantime, visit our store to browse our full selection of premium pet products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
            >
              <Link to="/contact">Visit Our Store</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-6 text-lg rounded-full"
            >
              <Link to="/services">Book Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
