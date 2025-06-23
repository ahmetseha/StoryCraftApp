# 📚 StoryCraft - AI Hikaye Oluşturucu

Modern web teknolojileri ile geliştirilmiş, yapay zeka destekli Türkçe hikaye oluşturucu uygulaması.

![StoryCraft](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple?style=for-the-badge&logo=vite)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)

## ✨ Özellikler

- 🤖 **Google Gemini AI** entegrasyonu ile akıllı hikaye oluşturma
- 🎨 **Modern UI/UX** - Glassmorphism efektleri ve gradient tasarım
- 📱 **Responsive** tasarım - Mobil ve desktop uyumlu
- ⚡ **Hızlı** - Vite ile optimize edilmiş build süreci
- 🔄 **Real-time** hikaye oluşturma
- 🌙 **Koyu tema** - Göz dostu arayüz
- 🎭 **Türkçe** hikaye desteği

## 🚀 Hızlı Başlangıç

### Gereksinimler

- Node.js (v18 veya üzeri)
- npm veya yarn
- Google Gemini AI API anahtarı

### Kurulum

1. **Projeyi klonlayın**
```bash
git clone https://github.com/kullaniciadi/StoryCraft.git
cd StoryCraft
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Environment değişkenlerini ayarlayın**
```bash
# .env dosyası oluşturun
echo "GEMINI_API_KEY=your_gemini_api_key_here" > .env
```

4. **Uygulamayı başlatın**

Terminal 1 - Backend:
```bash
npm run server
```

Terminal 2 - Frontend:
```bash
npm run dev
```

5. **Tarayıcıda açın**
```
http://localhost:5173
```

## 🛠️ Teknoloji Stack'i

### Frontend
- **React 19** - Modern UI framework
- **TypeScript** - Tip güvenliği
- **Vite** - Hızlı build tool
- **CSS Modules** - Stil yönetimi
- **Tailwind CSS** - Utility-first CSS

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Google Gemini AI** - AI model
- **CORS** - Cross-origin resource sharing

## 📖 Kullanım

1. Ana sayfada hikaye fikrinizi girin
2. "Hikaye Oluştur" butonuna tıklayın
3. AI'nin oluşturduğu hikayeyi okuyun

### Örnek Prompt'lar
- "Uzayda kaybolan bir astronot"
- "Sihirli bir ormanda yaşayan çocuk"
- "Zaman makinesi icat eden bilim insanı"

## 🔧 Geliştirme

### Script'ler

```bash
npm run dev          # Frontend development server
npm run server       # Backend server
npm run build        # Production build
npm run preview      # Build preview
npm run lint         # ESLint kontrolü
```

### Proje Yapısı

```
StoryCraft/
├── src/
│   ├── App.tsx          # Ana uygulama bileşeni
│   ├── App.module.css   # Stil dosyası
│   └── main.tsx         # Giriş noktası
├── server.js            # Backend API
├── package.json         # Bağımlılıklar
└── README.md           # Bu dosya
```

## 🌟 Özellikler Detayı

### AI Hikaye Oluşturma
- Google Gemini 2.5 Flash modeli kullanır
- 200-400 kelime arası hikayeler
- Türkçe dil desteği
- Yaratıcı ve akıcı içerik

### Kullanıcı Arayüzü
- Gradient arka plan (uzay teması)
- Glassmorphism efektleri
- Smooth animasyonlar
- Loading spinner'ları
- Responsive tasarım

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙏 Teşekkürler

- [Google Gemini AI](https://ai.google.dev/) - AI modeli için
- [React](https://react.dev/) - UI framework için
- [Vite](https://vitejs.dev/) - Build tool için

## 📞 İletişim

Proje Linki: [https://github.com/ahmetseha/story-craft](https://github.com/ahmetseha/story-craft)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
