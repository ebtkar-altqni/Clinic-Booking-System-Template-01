# MediCare Clinic Booking System

A comprehensive clinic appointment booking system built with Next.js 15, React 19, and MongoDB.

## Features

- **Patient Portal**: Easy appointment booking with doctor selection and time slots
- **Doctor Dashboard**: Manage appointments, view patient information, and schedule
- **Admin Panel**: Complete clinic management with reports and analytics
- **Authentication**: Secure login/signup with hashed passwords and JWT sessions
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Real-time Updates**: Live appointment status updates
- **Payment Integration**: Checkout flow (UI ready for payment processor integration)

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4, ShadCN UI components
- **Backend**: Node.js, Next.js API routes
- **Database**: MongoDB with Prisma ORM
- **Authentication**: Custom JWT-based auth
- **Animations**: Framer Motion
- **Deployment**: Docker with docker-compose

## Quick Start

### Prerequisites

- Node.js 18+ 
- Docker and Docker Compose
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd clinic-booking-system
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Update the following variables:
   \`\`\`env
   DATABASE_URL=mongodb://admin:password123@localhost:27017/clinic_db?authSource=admin&replicaSet=rs0
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-nextauth-secret-change-in-production
   \`\`\`

4. **Start with Docker (Recommended)**
   \`\`\`bash
   docker-compose up -d
   \`\`\`
   
   This will start:
   - MongoDB with replica set (port 27017)
   - Next.js application (port 3000)
   - Mongo Express for database management (port 8081)

5. **Or start development server locally**
   \`\`\`bash
   # Start MongoDB first with Docker
   docker-compose up mongodb -d
   
   # Then start the Next.js dev server
   npm run dev
   \`\`\`

6. **Access the application**
   - Main app: http://localhost:3000
   - Database admin: http://localhost:8081 (admin/admin123)

## Project Structure

\`\`\`
clinic-booking-system/
├── app/                          # Next.js 15 App Router
│   ├── (auth)/                   # Authentication pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── dashboard/                # Protected dashboard routes
│   │   ├── appointments/
│   │   ├── patients/
│   │   └── settings/
│   ├── book-appointment/         # Public booking page
│   ├── checkout/                 # Payment flow
│   ├── api/                      # API routes
│   │   ├── auth/
│   │   ├── appointments/
│   │   └── health/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/                   # Reusable components
│   ├── ui/                       # ShadCN UI components
│   ├── auth/                     # Authentication components
│   ├── dashboard/                # Dashboard-specific components
│   ├── booking/                  # Booking flow components
│   └── checkout/                 # Payment components
├── lib/                          # Utilities and configurations
│   ├── actions.ts                # Server actions
│   ├── auth.ts                   # Authentication utilities
│   ├── db.ts                     # Database connection
│   └── utils.ts                  # Helper functions
├── database/                     # Database schemas and migrations
│   ├── schema.prisma
│   └── seed.ts
├── scripts/                      # Setup and utility scripts
│   └── init-replica.js
├── docker-compose.yml
├── Dockerfile
└── README.md
\`\`\`

## Key Features Explained

### Authentication System
- Custom JWT-based authentication without external dependencies
- Secure password hashing with bcrypt
- Role-based access control (Patient, Doctor, Admin)
- Session management with HTTP-only cookies

### Booking Flow
1. **Patient Information**: Collect patient details
2. **Doctor Selection**: Choose from available doctors
3. **Date & Time**: Interactive calendar with available slots
4. **Reason for Visit**: Categorized appointment types
5. **Payment**: Secure checkout process (ready for payment integration)

### Dashboard Features
- **Overview**: Key metrics and today's schedule
- **Appointments**: Full appointment management with filtering
- **Patients**: Patient records and history
- **Schedule**: Doctor availability management
- **Reports**: Analytics and insights

### Database Design
- **Users**: Patients, doctors, and admin accounts
- **Appointments**: Booking records with status tracking
- **Availability**: Doctor schedule management
- **Payments**: Transaction records (ready for implementation)

## Development

### Running Tests
\`\`\`bash
npm run test
\`\`\`

### Building for Production
\`\`\`bash
npm run build
npm start
\`\`\`

### Database Management
\`\`\`bash
# Reset database
npm run db:reset

# Run migrations
npm run db:migrate

# Seed sample data
npm run db:seed
\`\`\`

## Deployment

### Docker Production Build
\`\`\`bash
# Build production image
docker build -t clinic-booking-system .

# Run with docker-compose
docker-compose -f docker-compose.prod.yml up -d
\`\`\`

### Environment Variables for Production
\`\`\`env
NODE_ENV=production
DATABASE_URL=mongodb://username:password@your-mongodb-host:27017/clinic_db
JWT_SECRET=your-production-jwt-secret
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-production-nextauth-secret
\`\`\`

## Security Considerations

- All passwords are hashed using bcrypt
- JWT tokens are stored in HTTP-only cookies
- Input validation using Zod schemas
- CSRF protection enabled
- Rate limiting on authentication endpoints
- Secure headers configured

## Performance Optimizations

- Server Components for reduced JavaScript bundle
- Image optimization with Next.js Image component
- Database indexing for common queries
- Caching strategies for static content
- Code splitting and lazy loading

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:
- Create an issue in the GitHub repository
- Email: support@medicare-clinic.com
- Documentation: [Link to detailed docs]

## Roadmap

- [ ] SMS notifications for appointments
- [ ] Video consultation integration
- [ ] Mobile app (React Native)
- [ ] Advanced reporting and analytics
- [ ] Multi-language support
- [ ] Insurance verification system
- [ ] Prescription management
- [ ] Lab results integration
# Clinic-Booking-System-Template-01
