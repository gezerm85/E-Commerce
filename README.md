<div align="center">

# 🛒 Modern E-Commerce Web Application

**React, Redux ve Material-UI ile Geliştirilmiş Tam Özellikli E-Ticaret Platformu**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-2.2.5-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.15.18-0081CB?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)

[🚀 Demo](#-demo) • [📋 Özellikler](#-özellikler) • [🛠️ Teknolojiler](#️-teknolojiler) • [🚀 Kurulum](#-kurulum) • 

</div>

---

## 📖 Hakkında

Bu proje, modern web teknolojileri kullanılarak geliştirilmiş tam özellikli bir e-ticaret web uygulamasıdır. React, Redux Toolkit ve Material-UI gibi güncel teknolojilerle oluşturulmuş olup, kullanıcı dostu arayüzü ve güçlü state yönetimi ile profesyonel bir alışveriş deneyimi sunmaktadır.

### 🎯 Projenin Amacı

- 🛍️ **E-Ticaret Platformu** - Tam özellikli online alışveriş deneyimi
- 🎨 **Modern UI/UX** - Material-UI ile profesyonel tasarım
- ⚡ **Hızlı Performans** - Vite ile optimize edilmiş build süreci
- 🔄 **State Management** - Redux Toolkit ile merkezi durum yönetimi
- 📱 **Responsive Tasarım** - Tüm cihazlarda uyumlu arayüz
- 🛒 **Sepet Sistemi** - Gelişmiş alışveriş sepeti yönetimi

---

## 🚀 Demo

**🔗 [Canlı Demo](https://your-demo-url.com)**

Uygulama şu anda geliştirme aşamasındadır. Demo linki yakında eklenecektir.

---

## 🚀 Kurulum

### Gereksinimler

- **Node.js** (v16 veya üzeri)
- **npm** veya **yarn**
- **Modern web tarayıcısı**

### Adım Adım Kurulum

1. **Depoyu klonlayın**
   ```bash
   git clone https://github.com/your-username/E-Commerce.git
   cd E-Commerce
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   # veya
   yarn install
   ```

3. **Geliştirme sunucusunu başlatın**
   ```bash
   npm run dev
   ```

4. **Tarayıcıda açın**
   ```
   http://localhost:5173
   ```

### Build Komutları

```bash
# Production build
npm run build

# Build'i önizle
npm run preview

# Code linting
npm run lint
```

---

## 📋 Geliştirdiğim Özellikler

### 🏠 Ana Sayfa (Home.jsx)
- [x] **Ürün Listesi** - Fakestore API'den dinamik ürün çekme
- [x] **Ürün Kartları** - Responsive ürün kartları tasarımı
- [x] **Loading States** - Kullanıcı deneyimi için loading bileşenleri
- [x] **Navigation** - React Router ile sayfa geçişleri

### 🛒 Sepet Sistemi (Basket.jsx)
- [x] **Sepet Drawer** - Material-UI Drawer ile yan panel
- [x] **Ürün Ekleme/Çıkarma** - Sepete ürün ekleme ve silme
- [x] **Miktar Yönetimi** - Ürün miktarı artırma/azaltma
- [x] **Toplam Hesaplama** - Otomatik fiyat hesaplama
- [x] **LocalStorage** - Sepet verilerini yerel depolama

### 🛍️ Ürün Yönetimi
- [x] **Ürün Detay Sayfası** - Detaylı ürün görüntüleme
- [x] **Ürün Kategorileri** - Kategori bazlı filtreleme
- [x] **Ürün Arama** - Ürün arama fonksiyonalitesi
- [x] **Fiyat Gösterimi** - Dinamik fiyat hesaplama

### 🎨 UI/UX Geliştirmeleri
- [x] **Material-UI Tasarım** - Modern ve profesyonel arayüz
- [x] **Responsive Layout** - Mobil ve desktop uyumlu tasarım
- [x] **Loading Animasyonları** - Smooth loading efektleri
- [x] **Hover Efektleri** - İnteraktif kullanıcı deneyimi
- [x] **Error Handling** - Hata durumları için kullanıcı dostu mesajlar

### 🔧 Teknik Geliştirmeler
- [x] **Redux State Management** - Merkezi durum yönetimi
- [x] **API Integration** - Fakestore API entegrasyonu
- [x] **LocalStorage** - Veri kalıcılığı
- [x] **Component Architecture** - Modüler bileşen yapısı
- [x] **Performance Optimization** - Vite ile hızlı build

---

## 🛠️ Teknolojiler

### Frontend Framework
- **React** `18.2.0` - Modern UI kütüphanesi
- **Vite** `5.2.0` - Hızlı build tool ve dev server
- **React Router DOM** `6.23.1` - Client-side routing

### State Management
- **Redux Toolkit** `2.2.5` - Predictable state container
- **React Redux** `9.1.2` - React bindings for Redux

### UI & Styling
- **Material-UI** `5.15.18` - React component library
- **Emotion** `11.11.4` - CSS-in-JS styling
- **React Icons** `5.2.1` - Icon library

### HTTP & API
- **Axios** `1.7.2` - HTTP client for API calls
- **Fakestore API** - E-ticaret test API'si

### Development Tools
- **ESLint** `8.57.0` - Code linting
- **Vite Plugin React** `4.2.1` - React support for Vite

---

## 📁 Proje Yapısı

```
E-Commerce/
├── public/                 # Statik dosyalar
│   └── vite.svg           # Vite logosu
├── src/
│   ├── components/        # Yeniden kullanılabilir bileşenler
│   │   ├── Basket/        # Sepet bileşenleri
│   │   │   ├── Basket.jsx # Sepet ana bileşeni
│   │   │   └── Basket.css # Sepet stilleri
│   │   ├── Container/     # Layout bileşenleri
│   │   │   └── PageContainer.jsx
│   │   ├── Footer/        # Footer bileşenleri
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.jsx
│   │   ├── Header/        # Header bileşenleri
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Loading/       # Loading bileşenleri
│   │   │   └── Loading.jsx
│   │   ├── ProductCard/   # Ürün kartı bileşenleri
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductCard.css
│   │   ├── ProductDetailCard/ # Ürün detay bileşenleri
│   │   │   ├── ProductDetailCard.jsx
│   │   │   └── ProductDetailCard.css
│   │   └── ProductList/   # Ürün listesi bileşenleri
│   │       ├── ProductList.jsx
│   │       └── ProductList.css
│   ├── pages/             # Sayfa bileşenleri
│   │   ├── Home.jsx       # Ana sayfa
│   │   └── ProductDetail.jsx # Ürün detay sayfası
│   ├── redux/             # Redux store ve slice'lar
│   │   ├── store.jsx      # Store yapılandırması
│   │   ├── basketSlice.jsx # Sepet yönetimi
│   │   ├── productsSlice.jsx # Ürün yönetimi
│   │   └── userSlice.jsx  # Kullanıcı yönetimi
│   ├── config/            # Yapılandırma dosyaları
│   │   └── RouterConfig.jsx # Router yapılandırması
│   ├── assets/            # Statik varlıklar
│   │   └── images/        # Resim dosyaları
│   │       └── Logo.jpg   # Uygulama logosu
│   ├── App.jsx            # Ana uygulama bileşeni
│   ├── App.css            # Global stiller
│   ├── index.css          # Tailwind CSS
│   └── main.jsx           # Uygulama giriş noktası
├── vite.config.js         # Vite yapılandırması
├── .eslintrc.cjs          # ESLint yapılandırması
└── package.json           # Proje bağımlılıkları
```




---

## 🔧 Geliştirme

### Geliştirme Komutları

```bash
# Geliştirme sunucusunu başlat
npm run dev

# Production build oluştur
npm run build

# Build'i önizle
npm run preview

# Code linting
npm run lint
```

### API Entegrasyonu

Uygulama [Fakestore API](https://fakestoreapi.com/) kullanmaktadır:

```javascript
// API Base URL
const BASE_URL = "https://fakestoreapi.com";

// Tüm ürünleri getir
GET /products

// Kategoriye göre ürünleri getir
GET /products/category/{category}

// Tek ürün detayı
GET /products/{id}
```

### Redux Store Yapısı

```javascript
{
  user: {
    // Kullanıcı bilgileri
  },
  product: {
    product: [],           // Ürün listesi
    selectedProduct: {},   // Seçili ürün
    loading: false        // Loading durumu
  },
  basket: {
    products: [],         // Sepetteki ürünler
    drawer: false,        // Sepet drawer durumu
    totalAmount: 0        // Toplam tutar
  }
}
```

---

## 🚀 Deployment

### Vercel Deployment
```bash
# Vercel CLI kurulumu
npm install -g vercel

# Deploy
vercel --prod
```

### Netlify Deployment
```bash
# Build oluştur
npm run build

# Netlify'e upload et
# dist/ klasörünü Netlify'e sürükle
```

### GitHub Pages
```bash
# Build oluştur
npm run build

# GitHub Pages'e deploy et
# dist/ klasörünü gh-pages branch'ine push et
```

---

## 🤝 Katkıda Bulunma

1. Bu depoyu fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

### Geliştirme Kuralları
- ESLint kurallarına uyun
- Responsive tasarım prensiplerini takip edin
- Component'leri modüler tutun
- Redux state'ini immutable tutun

---

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

---

## 👨‍💻 Geliştirici

**Bu projeyi geliştiren: [Senin Adın]**

Bu e-ticaret uygulaması, modern web teknolojileri kullanılarak geliştirilmiştir. React, Redux Toolkit ve Material-UI gibi güncel teknolojilerle oluşturulmuş olup, kullanıcı dostu arayüzü ve güçlü state yönetimi ile profesyonel bir alışveriş deneyimi sunmaktadır.

### 🎯 Proje Detayları
- **Geliştirme Süresi:** [X] hafta/gün
- **Kullanılan Teknolojiler:** React, Redux Toolkit, Material-UI, Vite
- **Özellikler:** Sepet sistemi, Ürün yönetimi, API entegrasyonu, Responsive tasarım
- **API:** Fakestore API

---

## 🙏 Teşekkürler

- [React](https://reactjs.org/) ekibine
- [Vite](https://vitejs.dev/) ekibine
- [Redux](https://redux.js.org/) ekibine
- [Material-UI](https://mui.com/) ekibine
- [Fakestore API](https://fakestoreapi.com/) ekibine
- Tüm açık kaynak katkıda bulunanlara

---

## 📞 İletişim

**Proje Hakkında Sorularınız İçin:**

- 📧 **E-posta:** [senin-email@example.com]
- 💼 **LinkedIn:** [LinkedIn Profilin]
- 🐙 **GitHub:** [GitHub Profilin]
- 🌐 **Portfolio:** [Portfolio Website]

---

<div align="center">

**⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

Made with ❤️ by [Mehmet Çelebi Gezer]

*Modern web teknolojileri ile geliştirilmiş profesyonel e-ticaret uygulaması*

</div>