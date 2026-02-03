<div align="center">
  <img src="assets/logo.png" alt="Iradah Logo" width="180"/>

  # 🛡️ Iradah
  **"İradenizi İnşa Edin" | "Build Your Will"**

  <p align="center">
    <b>Oyunlaştırılmış Hayat Yönetim Sistemi & Kişisel Gelişim Asistanı</b>
    <br />
    <i>Planla • Odaklan • Başar • Yüksel</i>
  </p>
  
  <p align="center">
    <a href="https://iradah-f44c8.web.app/">
      <img src="https://img.shields.io/badge/🚀_UYGULAMAYI_BAŞLAT-CANLI_DEMO-2563eb?style=for-the-badge&logo=pwa&logoColor=white" alt="Uygulamayı Başlat" height="40" />
    </a>
  </p>
</div>

---

## 🚀 Proje Hakkında

**Iradah**, modern insanın en büyük mücadelesi olan "süreklilik" ve "disiplin" sorununa çözüm olarak geliştirilmiş kapsamlı bir üretkenlik platformudur. 

Sıradan bir yapılacaklar listesi olmanın ötesinde, her eyleminizi bir RPG oyunu gibi ödüllendirir. Tamamladığınız her görev, sürdürdüğünüz her alışkanlık ve odaklandığınız her dakika size **XP (Deneyim Puanı)** olarak geri döner ve seviye atlamanızı sağlar.

> *"Başarı bir eylem değil, bir alışkanlıktır."*

---

## ✨ Temel Özellikler

### 🍅 Pomodoro Odak Zamanlayıcısı
Derinlemesine çalışma seansları (Deep Work) için entegre zamanlayıcı.
- **Özelleştirilebilir:** Çalışma ve mola sürelerini kendi ritminize göre ayarlayın.
- **XP Kazanımı:** Odaklandığınız her dakika için puan kazanın.
- **Görsel & İşitsel:** Minimalist sayaç ve motivasyon artırıcı ses efektleri.

### 🛡️ Alışkanlık Takibi (Habit Tracker)
İyi alışkanlıklar edinin, kötüleri bırakın.
- **Esnek Periyotlar:** Günlük, Haftalık veya Aylık hedefler belirleyin.
- **Seri Takibi (Streak):** Zinciri kırmadan ilerleyin, serileriniz uzadıkça motivasyonunuz artsın.
- **Detaylı İstatistikler:** Her alışkanlık için başarı oranınızı ve geçmişinizi görüntüleyin.

### 📋 Kanban Panosu
Görevlerinizi görselleştirin ve yönetin.
- **Sürükle & Bırak:** İşleri "Yapılacaklar", "Devam Edenler" ve "Tamamlananlar" arasında kolayca taşıyın.
- **Etiket & Puanlama:** Görevlere özel XP değerleri ve kategoriler atayın.
- **Akıllı Sıralama:** Tarihi yaklaşan görevler otomatik olarak öne çıkar.

### 🔗 Zinciri Kırma (Don't Break the Chain)
Büyük resme odaklanın.
- **Yıllık Görünüm:** Tüm yılın kuş bakışı görünümüyle istikrarınızı takip edin.
- **Günlük Hedef:** Her gün için tek bir ana hedef belirleyin ve onu tamamlayın.

### 📊 Detaylı Analitikler
- **Haftalık Kazanım:** Hangi gün ne kadar XP kazandığınızı grafiklerle görün.
- **Kategori Dağılımı:** Hayatınızın hangi alanına (İş, Sağlık, Eğitim vb.) daha çok zaman ayırdığınızı analiz edin.
- **Seviye Sistemi:** Topladığınız puanlarla seviye atlayın ve yeni ünvanlar kazanın.

### 🌍 Kişiselleştirme & Teknoloji
- **Çoklu Dil Desteği:** Türkçe (TR), İngilizce (EN), Arapça (AR).
- **Tema Seçeneği:** Göz yormayan Karanlık Mod (Dark Mode) ve ferah Aydınlık Mod.
- **Bulut Senkronizasyonu:** Tüm verileriniz ve ayarlarınız Google Firebase altyapısıyla güvenli bir şekilde saklanır ve tüm cihazlarınızda eşzamanlanır.

---

## 🛠️ Teknolojik Altyapı

Bu proje, performans ve kullanıcı deneyimi odağında modern web teknolojileri ile geliştirilmiştir.

- **Frontend:** React.js, Tailwind CSS
- **Backend / Veritabanı:** Google Firebase (Firestore, Auth)
- **Tasarım:** Responsive & PWA (Mobil Uyumlu)
- **State Yönetimi:** React Hooks & Context

---

## ⚙️ Kurulum (Development)

### 1. Firebase Yapılandırması

Bu proje Firebase kullanmaktadır. Kendi Firebase projenizi oluşturup yapılandırmanız gerekmektedir:

1. [Firebase Console](https://console.firebase.google.com/)'a gidin
2. Yeni bir proje oluşturun veya mevcut projenizi seçin
3. Authentication'ı etkinleştirin (Google Sign-In)
4. Firestore Database oluşturun
5. Project Settings > Your Apps > Web App ekleyin
6. Firebase config değerlerini kopyalayın

### 2. Config Dosyası Oluşturma

```bash
# config.example.js dosyasını config.js olarak kopyalayın
cp config.example.js config.js
```

Ardından `config.js` dosyasını açın ve Firebase bilgilerinizi girin:

```javascript
window.FIREBASE_CONFIG = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.firebasestorage.app",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

> ⚠️ **Önemli:** `config.js` dosyası `.gitignore` ile git'ten hariç tutulmuştur. API anahtarlarınız GitHub'a yüklenmeyecektir.

### 3. Yerel Sunucu

Herhangi bir yerel sunucu ile çalıştırabilirsiniz:

```bash
# Python ile
python -m http.server 8000

# Node.js ile (npx)
npx serve

# VS Code Live Server eklentisi ile
# Sağ tık > Open with Live Server
```

---

## 🤝 İletişim & Erişim

Bu proje **Abdullah Buzkan** tarafından geliştirilmektedir. Beta sürecine katılmak veya geri bildirimde bulunmak için:

📧 **E-posta:** [abdullahbuzkan2023@gmail.com]  
🌐 **Web:** [https://abdullahbzkn.github.io/Iradah/]

<div align="center">
<br/>
<sub>© 2026 Iradah App. Tüm Hakları Saklıdır.</sub>
</div>
