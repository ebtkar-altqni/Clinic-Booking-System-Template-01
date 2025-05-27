# MediCare Clinic Booking System

A comprehensive clinic appointment booking system built with **Next.js 15**, **React 19**, and **MongoDB**.

---

## 🚀 Features

- **Patient Portal**: Book appointments easily by selecting a doctor and time slot.
- **Doctor Dashboard**: Manage appointments, view patient data, and control availability.
- **Admin Panel**: Centralized clinic management with reports and analytics.
- **Authentication**: Secure login and signup using hashed passwords and JWT sessions.
- **Responsive Design**: Fully responsive mobile-first UI with Tailwind CSS.
- **Real-time Updates**: Live appointment status changes.
- **Payment Integration**: UI ready for integration with payment processors.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4, ShadCN UI
- **Backend**: Node.js, Next.js API Routes
- **Database**: MongoDB + Prisma ORM
- **Authentication**: Custom JWT-based auth
- **Animations**: Framer Motion
- **Deployment**: Docker + docker-compose

---

## ⚡ Quick Start

### 📋 Prerequisites

- Node.js 18+
- Docker & Docker Compose
- Git

### 📦 Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd clinic-booking-system

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
```

Edit `.env.local` with your settings:

```env
DATABASE_URL=mongodb://admin:password123@localhost:27017/clinic_db?authSource=admin&replicaSet=rs0
JWT_SECRET=your-super-secret-jwt-key
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
```

### 🐳 Run with Docker (Recommended)

```bash
docker-compose up -d
```

Services:

- MongoDB (port 27017)
- Next.js App (port 3000)
- Mongo Express (port 8081)

### 🧪 Development Mode (Manual)

```bash
# Start MongoDB
docker-compose up mongodb -d

# Run dev server
npm run dev
```

### 🔗 Access

- App: http://localhost:3000
- DB Admin: http://localhost:8081 (admin/admin123)

---

## 🧭 Project Structure

```bash
clinic-booking-system/
├── app/
│   ├── (auth)/          # Sign-in & Sign-up
│   ├── dashboard/       # Protected routes for users
│   ├── book-appointment/
│   ├── checkout/
│   ├── api/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/              # ShadCN components
│   ├── auth/
│   ├── dashboard/
│   ├── booking/
│   └── checkout/
├── lib/
│   ├── actions.ts
│   ├── auth.ts
│   ├── db.ts
│   └── utils.ts
├── database/
│   ├── schema.prisma
│   └── seed.ts
├── scripts/
│   └── init-replica.js
├── docker-compose.yml
├── Dockerfile
└── README.md
```

---

## 🔐 Authentication

- JWT-based auth (no external providers)
- Password hashing with `bcrypt`
- Role-based access (Patient, Doctor, Admin)
- Secure sessions with HTTP-only cookies

---

## 🗓 Booking Workflow

1. Enter patient info
2. Select doctor
3. Choose date & time
4. Describe reason for visit
5. Proceed to payment

---

## 📊 Dashboard Features

- **Overview**: Daily stats and KPIs
- **Appointments**: Filtered views and status updates
- **Patients**: Full medical history
- **Schedule**: Manage doctor availability
- **Reports**: Insights & analytics

---

## 🧱 Database Models

- **Users**: Role-based accounts
- **Appointments**: Scheduling data
- **Availability**: Doctor working hours
- **Payments**: (Ready for implementation)

---

## 🧪 Development

### Run Tests

```bash
npm run test
```

### Build for Production

```bash
npm run build
npm start
```

### Database Tasks

```bash
npm run db:reset      # Reset DB
npm run db:migrate    # Apply migrations
npm run db:seed       # Seed sample data
```

---

## 🚀 Deployment

### Docker Production

```bash
docker build -t clinic-booking-system .
docker-compose -f docker-compose.prod.yml up -d
```

### Env Variables (Production)

```env
NODE_ENV=production
DATABASE_URL=mongodb://username:password@host:27017/clinic_db
JWT_SECRET=your-production-secret
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-production-nextauth-secret
```

---

## 🛡 Security Best Practices

- Hashed passwords (bcrypt)
- JWT in HTTP-only cookies
- Zod for input validation
- CSRF protection
- Rate limiting
- Secure headers

---

## 🚀 Performance Enhancements

- Server Components for faster loads
- Next.js image optimization
- Indexed DB queries
- Caching for static data
- Code splitting & lazy loading

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/awesome`
3. Commit changes: `git commit -m "Add awesome feature"`
4. Push to GitHub: `git push origin feature/awesome`
5. Open a Pull Request

---

## 📄 License

Licensed under the [MIT License](LICENSE)

---

## 💬 Support

- GitHub Issues
- Email: support@medicare-clinic.com
- Docs: [Link to documentation]

---

## 🛣 Roadmap

- [ ] SMS appointment notifications
- [ ] Video consultations
- [ ] React Native mobile app
- [ ] Enhanced reporting
- [ ] Multi-language support
- [ ] Insurance verification
- [ ] Prescription handling
- [ ] Lab result uploads
