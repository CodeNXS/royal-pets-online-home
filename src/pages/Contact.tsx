
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petType: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting Royal Pets. We'll get back to you soon!",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      petType: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our services or want to schedule an appointment? 
            We'd love to hear from you and help with all your pet care needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Send us a Message</CardTitle>
              <CardDescription className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 border-gray-300 focus:border-rose-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 border-gray-300 focus:border-rose-500"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 border-gray-300 focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="petType" className="text-gray-700 font-medium">Pet Type</Label>
                    <Input
                      id="petType"
                      name="petType"
                      placeholder="Dog, Cat, Bird, etc."
                      value={formData.petType}
                      onChange={handleChange}
                      className="mt-2 border-gray-300 focus:border-rose-500"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 border-gray-300 focus:border-rose-500 min-h-[120px]"
                    placeholder="Tell us about your pet's needs or any questions you have..."
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white py-6 text-lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Store Info */}
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Visit Our Store</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                  <p className="text-gray-600">123 Pet Paradise Lane<br />Loveland, CO 80537</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                  <p className="text-gray-600">(555) 123-PETS</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                  <p className="text-gray-600">hello@royalpets.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Store Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-800 font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-800 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-800 font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                  <p className="text-gray-500">Interactive Map Coming Soon</p>
                </div>
                <Button className="w-full mt-4 bg-rose-600 hover:bg-rose-700 text-white">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
