import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Users, BookOpen, Play, Award, Heart } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: Camera },
    { id: 'learning', name: 'Learning Activities', icon: BookOpen },
    { id: 'play', name: 'Play Time', icon: Play },
    { id: 'events', name: 'Special Events', icon: Award },
    { id: 'facilities', name: 'Our Facilities', icon: Users }
  ];

  // Placeholder gallery items with generated descriptions
  const galleryItems = [
    {
      id: 1,
      category: 'learning',
      title: 'Reading Circle Time',
      description: 'Children enjoying story time with our educators',
      placeholder: 'Children sitting in a circle listening to a teacher read a colorful picture book'
    },
    {
      id: 2,
      category: 'play',
      title: 'Outdoor Playground Fun',
      description: 'Safe outdoor play activities',
      placeholder: 'Children playing on colorful playground equipment in a safe, fenced area'
    },
    {
      id: 3,
      category: 'learning',
      title: 'Art & Creativity Class',
      description: 'Developing creativity through arts and crafts',
      placeholder: 'Children working on colorful art projects at small tables with art supplies'
    },
    {
      id: 4,
      category: 'facilities',
      title: 'Bright Learning Classroom',
      description: 'Our spacious and well-equipped classrooms',
      placeholder: 'Bright, colorful classroom with educational posters, small furniture, and learning materials'
    },
    {
      id: 5,
      category: 'events',
      title: 'Graduation Ceremony',
      description: 'Celebrating our little graduates',
      placeholder: 'Children in graduation caps and gowns with proud parents and teachers'
    },
    {
      id: 6,
      category: 'play',
      title: 'Indoor Play Area',
      description: 'Safe indoor play for all weather',
      placeholder: 'Colorful indoor play area with soft play equipment and educational toys'
    },
    {
      id: 7,
      category: 'learning',
      title: 'Science Discovery',
      description: 'Hands-on learning activities',
      placeholder: 'Children conducting simple science experiments with supervision'
    },
    {
      id: 8,
      category: 'facilities',
      title: 'Cozy Nap Room',
      description: 'Peaceful rest area for our youngest children',
      placeholder: 'Quiet room with small cots and soft lighting for children to rest'
    },
    {
      id: 9,
      category: 'events',
      title: 'Cultural Day Celebration',
      description: 'Celebrating diversity and culture',
      placeholder: 'Children in traditional clothing from different cultures, smiling and celebrating'
    },
    {
      id: 10,
      category: 'learning',
      title: 'Music & Movement',
      description: 'Developing rhythm and coordination',
      placeholder: 'Children dancing and playing musical instruments in a bright room'
    },
    {
      id: 11,
      category: 'facilities',
      title: 'Cafeteria & Meal Time',
      description: 'Nutritious meals in a clean environment',
      placeholder: 'Clean cafeteria area with children eating healthy meals together'
    },
    {
      id: 12,
      category: 'play',
      title: 'Garden Activities',
      description: 'Learning about nature through gardening',
      placeholder: 'Children planting seeds and watering plants in a small garden area'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a glimpse into our daily activities, learning experiences, and the joyful moments we share with our children
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="flex items-center space-x-2"
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                {/* Placeholder for actual photos */}
                <div className="aspect-video bg-gradient-to-br from-primary-light via-secondary to-accent flex items-center justify-center">
                  <div className="text-center p-6">
                    <Camera className="h-12 w-12 text-white/80 mx-auto mb-3" />
                    <p className="text-white/90 text-sm font-medium">
                      {item.placeholder}
                    </p>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Heart className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">View Photo</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center shadow-soft">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">500+</h3>
              <p className="text-muted-foreground">Happy Moments Captured</p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-soft">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">15+</h3>
              <p className="text-muted-foreground">Years of Memories</p>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-soft">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">1000+</h3>
              <p className="text-muted-foreground">Children We've Cared For</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground shadow-soft">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Want to See More?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Schedule a visit to our facilities and see firsthand the caring environment we provide for your children
            </p>
            <div className="space-x-4">
              <Button variant="secondary" size="lg">
                Schedule a Tour
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Gallery;