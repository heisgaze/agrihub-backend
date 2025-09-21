# Dokumentasi: API Authentication

**Stack**: NestJS, Passport, JWT, Prisma, PostgreSQL, cookie-parser, helmet, class-validator, bcrypt

Dokumentasi untuk initialisasi project

---

## 1. Persiapan project

1. Inisialisasi project NestJS (kalau belum):

```bash
npm i -g @nestjs/cli
nest new agrihub-backend
cd agrihub-backend
```

2. Install dependency utama:

```bash
npm install @nestjs/passport passport passport-local passport-jwt
npm install prisma @prisma/client
npm install bcryptjs jsonwebtoken cookie-parser helmet
npm install class-validator class-transformer
```

Dev dependencies untuk Prisma & types:

```bash
npm install -D prisma ts-node-dev @types/passport-jwt @types/passport-local @types/cookie-parser
```

3. Inisialisasi Prisma dan konfigurasi PostgreSQL

```bash
npx prisma init
```

Edit `prisma/schema.prisma`, dan atur `DATABASE_URL` di `.env`:

```
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
JWT_SECRET="secretkey123"
CLIENT_URL = http://localhost:3000
PORT=3001
```

Jalankan migrate setelah membuat schema:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

---