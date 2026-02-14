import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Data (In a real app, this would be a DB)
const properties = [
    {
        id: 1,
        title: "Modern Luxury Villa",
        location: "Beverly Hills, CA",
        address: "123 Palm Ave, Beverly Hills, CA 90210",
        price: 4500000,
        beds: 5,
        baths: 4,
        sqft: 4200,
        type: "Sale",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        description: "Experience the epitome of luxury living in this stunning modern villa.",
        features: ["Smart Home System", "Swimming Pool", "Home Theater"]
    },
    {
        id: 2,
        title: "Downtown Penthouse",
        location: "New York, NY",
        address: "555 Broadway, New York, NY 10012",
        price: 2800000,
        beds: 3,
        baths: 2,
        sqft: 2100,
        type: "Sale",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        description: "Stunning penthouse in the heart of SoHo.",
        features: ["City Views", "Private Terrace", "Doorman"]
    },
    {
        id: 3,
        title: "Cozy Beachfront Cottage",
        location: "Miami, FL",
        address: "789 Ocean Dr, Miami Beach, FL 33139",
        price: 1200000,
        beds: 4,
        baths: 3,
        sqft: 2800,
        type: "Sale",
        image: "https://images.unsplash.com/photo-1600596542815-2a4d9f0152ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        description: "Direct beach access and stunning ocean views.",
        features: ["Beach Access", "Ocean View", "Wraparound Porch"]
    }
];

// Routes
app.get('/api/properties', (req, res) => {
    res.json(properties);
});

app.get('/api/properties/:id', (req, res) => {
    const property = properties.find(p => p.id === parseInt(req.params.id));
    if (!property) return res.status(404).json({ message: 'Property not found' });
    res.json(property);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
