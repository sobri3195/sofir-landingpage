# 🚀 Panduan Deploy ke Netlify (Bahasa Indonesia)

Panduan lengkap deploy SOFIR Landing Page ke Netlify dalam Bahasa Indonesia.

## 📋 Persyaratan

- Node.js 18 atau lebih baru
- npm atau yarn
- Akun Netlify (gratis)
- Git repository (GitHub/GitLab/Bitbucket)

## ⚡ Cara Deploy (3 Metode)

### Metode 1: Hubungkan Git Repository (Paling Direkomendasikan) ⭐

**Langkah 1: Push kode ke Git**
```bash
git add .
git commit -m "Siap deploy ke Netlify"
git push origin main
```

**Langkah 2: Hubungkan ke Netlify**
1. Buka [https://app.netlify.com](https://app.netlify.com)
2. Login atau daftar akun (gratis)
3. Klik "Add new site"
4. Klik "Import an existing project"
5. Pilih Git provider (GitHub/GitLab/Bitbucket)
6. Authorize Netlify untuk akses repository
7. Pilih repository SOFIR

**Langkah 3: Konfigurasi Build**
Settings akan otomatis terdeteksi dari file `netlify.toml`:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18

Tidak perlu ubah apa-apa, klik "Deploy site"!

**Langkah 4: Tunggu Deploy Selesai**
- Proses build 1-2 menit
- Site akan live di `https://random-name.netlify.app`
- Setiap push ke Git akan otomatis deploy ulang! 🎉

### Metode 2: Netlify CLI

**Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

**Login:**
```bash
netlify login
```

**Deploy:**
```bash
# Build project dulu
npm run build

# Deploy ke production
netlify deploy --prod

# Atau deploy untuk preview
netlify deploy
```

### Metode 3: Drag & Drop

**Langkah 1: Build project**
```bash
npm install
npm run build
```

**Langkah 2: Upload**
1. Buka [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag & drop folder `dist/` ke browser
3. Done!

> ⚠️ Catatan: Dengan metode ini, tidak ada auto-deploy. Harus upload manual setiap kali ada perubahan.

## 🌐 Custom Domain

### Menambahkan Domain Sendiri

**Langkah 1: Di Netlify Dashboard**
1. Pilih site Anda
2. Site settings → Domain management
3. Klik "Add custom domain"
4. Masukkan domain (contoh: `sofir.id`)
5. Klik "Verify"

**Langkah 2: Konfigurasi DNS**

Pilih salah satu:

#### A. Netlify DNS (Paling Mudah - Direkomendasikan)
1. Transfer nameserver domain ke Netlify
2. Netlify akan atur semua DNS otomatis
3. HTTPS otomatis aktif

Nameservers Netlify (contoh):
```
dns1.p03.nsone.net
dns2.p03.nsone.net
dns3.p03.nsone.net
dns4.p03.nsone.net
```

#### B. External DNS (Jika pakai provider lain)
Tambahkan record ini di DNS provider Anda:

**Untuk root domain (sofir.id):**
- Type: `A`
- Name: `@`
- Value: `75.2.60.5`

**Untuk www (www.sofir.id):**
- Type: `CNAME`
- Name: `www`
- Value: `your-site.netlify.app`

**Langkah 3: Aktifkan HTTPS**
- HTTPS akan otomatis aktif dalam beberapa menit
- Menggunakan Let's Encrypt (gratis)
- Auto-renewal

## 🔧 Environment Variables

Jika aplikasi Anda butuh environment variables:

**Langkah 1: Di Netlify Dashboard**
1. Site settings → Build & deploy → Environment
2. Klik "Add variable"
3. Masukkan key dan value

**Contoh:**
- Key: `VITE_API_URL`
- Value: `https://api.sofir.id`

> ⚠️ **Penting**: Variable harus dimulai dengan `VITE_` untuk bisa diakses di kode!

**Mengakses di Kode:**
```jsx
const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl); // https://api.sofir.id
```

## 🚀 Auto Deploy

Setelah terhubung dengan Git:

✅ **Push ke branch `main`** → Otomatis deploy ke production  
✅ **Buat Pull Request** → Otomatis buat deploy preview  
✅ **Push ke branch lain** → Otomatis buat branch deploy

### Melihat Status Deploy

1. Buka Netlify dashboard
2. Pilih site Anda
3. Tab "Deploys" → Lihat semua deploy dan log

## 📊 Paket Netlify

### Paket Gratis (Free Tier)
- ✅ 100GB bandwidth per bulan
- ✅ 300 menit build per bulan
- ✅ Unlimited sites
- ✅ HTTPS gratis
- ✅ Custom domain
- ✅ Deploy previews
- ✅ Form handling (100 submissions/bulan)

**Cukup untuk kebanyakan landing page!**

### Paket Pro ($19/bulan)
- ✅ 1TB bandwidth
- ✅ Build lebih cepat
- ✅ Lebih banyak menit build
- ✅ Role-based access control
- ✅ Password protection
- ✅ Analytics

## 🐛 Troubleshooting

### Build Gagal?

**Cek 1: Test build di lokal dulu**
```bash
npm install
npm run build
```

Jika error di lokal, perbaiki dulu sebelum deploy.

**Cek 2: Lihat build log di Netlify**
- Dashboard → Deploys → Klik deploy yang failed
- Baca error message
- Biasanya masalah di dependencies atau Node version

**Cek 3: Node version**
- Pastikan file `.nvmrc` ada dan isinya `18`
- Atau set di Netlify: Site settings → Environment variables
  - Key: `NODE_VERSION`
  - Value: `18`

### 404 Error saat Refresh Page?

**Solusi**: Pastikan ada file `netlify.toml` dengan redirects:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Atau file `public/_redirects`:
```
/*    /index.html   200
```

### Environment Variables Tidak Bekerja?

**Cek:**
1. Variable harus dimulai dengan `VITE_`
2. Variable sudah ditambahkan di Netlify dashboard
3. Site sudah di-redeploy setelah menambahkan variable

## 📱 Monitoring

### Performance

Test performa site:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### Analytics

**Option 1: Netlify Analytics** ($9/bulan)
- Server-side tracking
- Tidak perlu JavaScript
- Tidak ada cookie

**Option 2: Google Analytics** (Gratis)
- Tambahkan GA script di `src/components/SEOHead.jsx`

**Option 3: Plausible** (€9/bulan)
- Privacy-friendly
- Lightweight

## ✅ Checklist Sebelum Deploy

- [ ] ✅ Test build lokal: `npm run build`
- [ ] ✅ Test preview: `npm run preview`
- [ ] ✅ File `netlify.toml` ada
- [ ] ✅ File `.nvmrc` ada (isi: 18)
- [ ] ✅ File `public/_redirects` ada
- [ ] ✅ `.gitignore` include `dist/` dan `node_modules/`
- [ ] ✅ Code sudah di-push ke Git
- [ ] ✅ Environment variables sudah diset (jika perlu)

## 📚 Dokumentasi Lainnya

- [README.md](README.md) - Overview project
- [NETLIFY-DEPLOYMENT.md](NETLIFY-DEPLOYMENT.md) - Panduan lengkap (English)
- [DEPLOY.md](DEPLOY.md) - Quick reference
- [QUICK-START-REACT.md](QUICK-START-REACT.md) - Quick start React

## 💡 Tips & Tricks

### 1. Preview Deploy URL
Setiap PR otomatis dapat preview URL:
```
https://deploy-preview-[PR-NUMBER]--your-site.netlify.app
```

### 2. Deploy dari Branch Tertentu
Site settings → Build & deploy → Deploy contexts
- Production branch: `main`
- Deploy preview: All pull requests
- Branch deploys: Pilih branch mana saja

### 3. Build Hooks (Webhook)
Trigger build otomatis dari service lain:
1. Site settings → Build & deploy → Build hooks
2. Buat hook baru
3. Copy URL webhook
4. Gunakan di service lain (CMS, Zapier, dll)

### 4. Split Testing (A/B Testing)
Netlify Pro fitur - test 2 versi berbeda:
```toml
[[redirects]]
  from = "/*"
  to = "/branch-a/:splat"
  status = 200
  force = true
  conditions = {Cookie = ["split-test=a"]}
```

### 5. Custom Headers
Tambahkan security headers di `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
```

## 🎉 Selesai!

Site SOFIR sekarang sudah live di Netlify! 🚀

**Next Steps:**
1. ✅ Test semua fitur di site live
2. ✅ Setup custom domain (opsional)
3. ✅ Configure analytics
4. ✅ Share dengan dunia!

---

**Dibuat dengan ❤️ oleh Tim SOFIR**

**Butuh bantuan?**
- Email: support@sofir.id
- Dokumentasi: https://docs.sofir.id
- Community: https://community.sofir.id
