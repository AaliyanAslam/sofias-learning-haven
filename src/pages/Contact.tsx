import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const locations = [
    {
      name: 'Nazimabad Branch',
      address: 'Block A, Nazimabad, Karachi',
      phone: '+92-XXX-XXXXXXX',
      status: 'Main Branch'
    },
    {
      name: 'North Nazimabad',
      address: 'Block L, North Nazimabad, Karachi',
      phone: '+92-XXX-XXXXXXX',
      status: 'Branch'
    },
    {
      name: 'Gulshan-e-Iqbal',
      address: 'Block 13-D, Gulshan-e-Iqbal, Karachi',
      phone: '+92-XXX-XXXXXXX',
      status: 'Branch'
    },
    {
      name: 'Gulistan-e-Johar',
      address: 'Block 16, Gulistan-e-Johar, Karachi',
      phone: '+92-XXX-XXXXXXX',
      status: 'Branch'
    },
    {
      name: 'Bahadurabad',
      address: 'Bahadurabad, Karachi',
      phone: '+92-XXX-XXXXXXX',
      status: 'Branch'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us to learn more about our programs or schedule a visit to our facilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Send className="h-6 w-6 text-primary mr-3" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="Tell us about your childcare needs, preferred location, or any questions you have..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Phone className="h-6 w-6 text-primary mr-3" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">info@drsofia-daycare.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+92-XXX-XXXXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Office Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 7:00 AM - 7:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 8:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground shadow-soft">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">Ready to Schedule a Visit?</h3>
                <p className="opacity-90 mb-4">
                  Come see our facilities and meet our caring staff in person
                </p>
                <Button variant="secondary" size="lg">
                  Book a Tour
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Locations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Locations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="shadow-soft hover:shadow-warm transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {location.name}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        location.status === 'Main Branch' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary text-secondary-foreground'
                      }`}>
                        {location.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {location.address}
                    </p>
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      {location.phone}
                    </p>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Find Us on the Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive map would be embedded here showing all our locations
                </p>
                <Button variant="outline" className="mt-4">
                  View on Google Maps
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;