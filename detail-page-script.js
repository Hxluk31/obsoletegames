// game-detail.html sayfasında kullanılacak script
document.addEventListener('DOMContentLoaded', () => {
    // Örnek oyun verileri (Normalde bu veriler bir veritabanından çekilir)
    const gamesData = [
        {
            id: 101,
            title: "GTA San Andreas",
            category: "Aksiyon, Açık Dünya",
            releaseDate: "26 Ekim 2004",
            mainImage: "images/gta-sa-detail.jpg",
            description: "Grand Theft Auto: San Andreas, 90'lı yılların başlarında, Grove Street Families çetesinin eski üyesi Carl 'CJ' Johnson'ın Los Santos'a dönüşüyle başlıyor. CJ, ailesinin dağıldığını, arkadaşlarının belaya bulaştığını ve şehrin yozlaşmış polisler tarafından ele geçirildiğini öğrenir. Beş yıl aradan sonra evine dönen CJ, ailesini kurtarmak ve sokakları geri almak için destansı bir maceraya atılır.",
            features: [
                "Geniş ve Canlı Açık Dünya",
                "Derinlemesine Karakter Gelişimi ve Özelleştirme",
                "Çeşitli Görevler ve Yan Aktiviteler",
                "Araç Sürme ve Silahlı Çatışma Mekanikleri",
                "Unutulmaz Karakterler ve Hikaye"
            ],
            screenshots: [
                "images/gta-sa-ss1.jpg",
                "images/gta-sa-ss2.jpg",
                "images/gta-sa-ss3.jpg",
                "images/gta-sa-ss4.jpg"
            ],
            videoUrl: "https://www.youtube.com/embed/videoseries?list=PLB01B73AE7FFC94A4", // Örnek GTA SA oynatma listesi
            downloadLink: "https://www.oyun-indir-linki.com/gta-san-andreas-full",
            minReq: {
                ram: "256 MB",
                cpu: "Intel Pentium III or AMD Athlon 1 GHz",
                storage: "3.6 GB",
                gpu: "64 MB DirectX 8.1 uyumlu"
            },
            recReq: {
                ram: "384 MB",
                cpu: "Intel Pentium 4 or AMD Athlon XP processor",
                storage: "4.7 GB",
                gpu: "128 MB DirectX 9.0c uyumlu"
            }
        },
        {
            id: 102,
            title: "GTA Vice City",
            category: "Aksiyon, Açık Dünya",
            releaseDate: "29 Ekim 2002",
            mainImage: "images/gta-vc-detail.jpg",
            description: "Grand Theft Auto: Vice City, 1980'lerin neon ışıklı ve disko ritimli dünyasında geçen, suç ve ihanetle dolu bir hikaye sunuyor. Tommy Vercetti olarak, hapisten yeni çıkmış bir mafya tetikçisi olarak Vice City'nin tehlikeli sokaklarına adım atacak ve yeraltı dünyasının basamaklarını tırmanacaksın. Şehirdeki en güçlü suç lordu olmak için rakiplerini alt et, işleri devral ve imparatorluğunu kur.",
            features: [
                "80'lerin Benzersiz Atmosferi",
                "Geniş ve Detaylı Şehir Haritası",
                "Çeşitli Araçlar ve Görevler",
                "Akılda Kalıcı Karakterler ve Hikaye Örgüsü",
                "Retro Müzikler ve Radyo İstasyonları"
            ],
            screenshots: [
                "images/gta-vc-ss1.jpg",
                "images/gta-vc-ss2.jpg",
                "images/gta-vc-ss3.jpg"
            ],
            videoUrl: "https://www.youtube.com/embed/videoseries?list=PLbJcI7Vv6Fz6x_V2f6F_2F6F_2F6F_2F6F", // Örnek video
            downloadLink: "https://www.oyun-indir-linki.com/gta-vice-city-full",
            minReq: {
                ram: "128 MB",
                cpu: "800 MHz Intel Pentium III or AMD Athlon",
                storage: "915 MB",
                gpu: "32 MB DirectX 9.0 uyumlu"
            },
            recReq: {
                ram: "256 MB",
                cpu: "Intel Pentium IV or AMD Athlon XP",
                storage: "1.5 GB",
                gpu: "64 MB DirectX 9.0 uyumlu"
            }
        },
        {
            id: 103,
            title: "GTA 3",
            category: "Aksiyon, Açık Dünya",
            releaseDate: "22 Ekim 2001",
            mainImage: "images/gta3-detail.jpg",
            description: "Grand Theft Auto III, modern açık dünya oyunlarının temellerini atan, devrim niteliğinde bir oyundur. Liberty City'nin karanlık ve tehlikeli sokaklarında isimsiz bir kahraman olarak başlıyor ve suç dünyasının basamaklarını tırmanmak için kirli işler yapıyorsun. Hainlik, intikam ve kaosla dolu bir şehirde hayatta kalmaya çalışırken kendi kurallarını koy.",
            features: [
                "Açık Dünya Oynanışının Öncesi",
                "Gerçekçi Şehir Ortamı",
                "Çeşitli Görevler ve Yan Etkinlikler",
                "Araç Hırsızlığı ve Kovalamacalar",
                "Karanlık ve Mizahi Hikaye"
            ],
            screenshots: [
                "images/gta3-ss1.jpg",
                "images/gta3-ss2.jpg",
                "images/gta3-ss3.jpg"
            ],
            videoUrl: "https://www.youtube.com/embed/videoseries?list=PLlU2Q4L8E8t9R4D5F4J4J4J4J4J4J", // Örnek video
            downloadLink: "https://www.oyun-indir-linki.com/gta3-full",
            minReq: {
                ram: "64 MB",
                cpu: "450 MHz Intel Pentium II or AMD K6-2 500 MHz",
                storage: "500 MB",
                gpu: "16 MB DirectX 8.1 uyumlu"
            },
            recReq: {
                ram: "128 MB",
                cpu: "700 MHz Intel Pentium III or AMD Athlon",
                storage: "700 MB",
                gpu: "32 MB DirectX 8.1 uyumlu"
            }
        },
        {
            id: 105,
            title: "Bully",
            category: "Aksiyon, Macera",
            releaseDate: "17 Ekim 2006",
            mainImage: "images/bully-detail.jpg",
            description: "Bully, Rockstar Games'in klasikleşmiş açık dünya macera oyunlarından biridir. Jimmy Hopkins adlı asi bir öğrenci olarak, Bullworth Akademisi'nin zorlu ortamında hayatta kalmaya ve kendi yerini edinmeye çalışırsın. Okulun grupları arasındaki rekabeti yönet, derslere gir, kabadayılarla savaş ve akademik hayatın karmaşası içinde kendi yolunu bul.",
            features: [
                "Benzersiz Okul Ortamı ve Hikayesi",
                "Çeşitli Dersler ve Mini Oyunlar",
                "Okul Çeteleri ve İlişkiler Sistemi",
                "Açık Dünya Keşfi ve Yan Görevler",
                "Rockstar'a Yakışan Mizah ve Anlatım"
            ],
            screenshots: [
                "images/bully-ss1.jpg",
                "images/bully-ss2.jpg",
                "images/bully-ss3.jpg"
            ],
            videoUrl: "https://www.youtube.com/embed/videoseries?list=PLo2V0CgHwLg5R8C4Y4T4R4T4R4T4R4T", // Örnek video
            downloadLink: "https://www.oyun-indir-linki.com/bully-full",
            minReq: {
                ram: "256 MB",
                cpu: "Intel Pentium 4 (1.8GHz) or AMD Athlon (1.8GHz)",
                storage: "4.7 GB",
                gpu: "NVIDIA GeForce 6200 / ATI Radeon X300"
            },
            recReq: {
                ram: "512 MB",
                cpu: "Intel Pentium 4 (3GHz) or AMD Athlon (3GHz)",
                storage: "5.5 GB",
                gpu: "NVIDIA GeForce 7800 / ATI Radeon X1800"
            }
        },
        {
            id: 106,
            title: "Taxi Driver",
            category: "Simülasyon, Şehir",
            releaseDate: "15 Mayıs 2007", // Örnek tarih, oyunun net bir yayım tarihi olmayabilir
            mainImage: "images/taxi-driver-detail.jpg",
            description: "Taxi Driver, şehir hayatının kalbinde bir taksi şoförünün günlük yaşamını deneyimleyebileceğiniz gerçekçi bir simülasyon oyunudur. Yolcuları al, onları gidecekleri yere zamanında ve güvenli bir şekilde ulaştır, trafik kurallarına uy ve kendi taksi imparatorluğunu kurmak için para kazan. Şehrin dinamik sokaklarında gezinirken gizli yan görevleri ve olayları keşfet.",
            features: [
                "Gerçekçi Şehir ve Trafik Simülasyonu",
                "Çeşitli Taksi Modelleri ve Özelleştirme",
                "Dinamik Hava Koşulları ve Gündüz/Gece Döngüsü",
                "Ekonomi ve İtibar Yönetimi",
                "Yan Görevler ve Gizli Sırlar"
            ],
            screenshots: [
                "images/taxi-driver-ss1.jpg",
                "images/taxi-driver-ss2.jpg",
                "images/taxi-driver-ss3.jpg"
            ],
            videoUrl: "https://www.youtube.com/embed/videoseries?list=PLgN6H6N6H6N6H6N6H6N", // Örnek video
            downloadLink: "https://www.oyun-indir-linki.com/taxi-driver-full",
            minReq: {
                ram: "1 GB",
                cpu: "Intel Pentium 4 2.0 GHz",
                storage: "2 GB",
                gpu: "NVIDIA GeForce 6600 / ATI Radeon X1300"
            },
            recReq: {
                ram: "2 GB",
                cpu: "Intel Core 2 Duo 2.4 GHz",
                storage: "3 GB",
                gpu: "NVIDIA GeForce 8600 / ATI Radeon HD 2600"
            }
        },
        {
            id: 107,
            title: "Five Nights at Freddy's 1",
            category: "Korku, Hayatta Kalma",
            releaseDate: "8 Ağustos 2014",
            mainImage: "images/fnaf1-detail.jpg",
            description: "Five Nights at Freddy's, Mike Schmidt adlı gece güvenlik görevlisinin Freddy Fazbear's Pizza adlı bir çocuk eğlence mekanında beş gece boyunca hayatta kalmaya çalıştığı korku dolu bir hayatta kalma oyunudur. Geceleri aktif hale gelen animatronik karakterlerin sizi yakalamasını engellemek için güvenlik kameralarını izle, kapıları ve ışıkları yönet, ancak kısıtlı elektriğine dikkat et!",
            features: [
                "Eşsiz Jumpscare Mekanikleri",
                "Gerilim Dolu Atmosfer",
                "Kısıtlı Kaynak Yönetimi",
                "Gizemli Hikaye ve Lore",
                "Basit ama Bağımlılık Yapan Oynanış"
            ],
            screenshots: [
                "images/fnaf1-ss1.jpg",
                "images/fnaf1-ss2.jpg",
                "images/fnaf1-ss3.jpg"
            ],
            videoUrl: "https://www.youtube.com/embed/videoseries?list=PLxUANQ4A4X4U4A4U4A4U4A4U", // Örnek video
            downloadLink: "https://www.oyun-indir-linki.com/fnaf1-full",
            minReq: {
                ram: "1 GB",
                cpu: "2 GHz Intel Pentium 4 or equivalent",
                storage: "250 MB",
                gpu: "DirectX 9.0c compatible graphics card"
            },
            recReq: {
                ram: "2 GB",
                cpu: "2.5 GHz Intel Core 2 Duo or equivalent",
                storage: "500 MB",
                gpu: "DirectX 9.0c compatible graphics card"
            }
        },
        {
            id: 108,
            title: "Five Nights at Freddy's 2",
            category: "Korku, Hayatta Kalma",
            releaseDate: "10 Kasım 2014",
            mainImage: "images/fnaf2-detail.jpg",
            description: "Freddy Fazbear's Pizza'nın yeni ve geliştirilmiş versiyonunda, eski animatroniklerle birlikte yepyeni tehditlerle yüzleşeceksin. Bu kez ofisin kapıları yok! Bunun yerine bir maske, ışık ve müzik kutusu gibi yeni araçlarla korkunç animatroniklerden korunmaya çalış. Her geçen gece daha da zorlaşıyor, Freddy ve çetesi seni bekliyor!",
            features: [
                "Yeni Animatronik Karakterler",
                "Kapısız Ofis ve Yeni Savunma Mekanikleri",
                "Daha Fazla Kamera ve İzleme Alanı",
                "Artan Zorluk ve Gerilim",
                "Hikayeyi Genişleten Gizemler"
            ],
            screenshots: [
                "images/fnaf2-ss1.jpg",
                "images/fnaf2-ss2.jpg",
                "images/fnaf2-ss3.jpg"
            ],
            videoUrl: "https://www.youtube.com/embed/videoseries?list=PLy5G5G5G5G5G5G5G5G5G5G5G5G", // Örnek video
            downloadLink: "https://www.oyun-indir-linki.com/fnaf2-full",
            minReq: {
                ram: "1 GB",
                cpu: "2 GHz Intel Pentium 4 or equivalent",
                storage: "250 MB",
                gpu: "DirectX 9.0c compatible graphics card"
            },
            recReq: {
                ram: "2 GB",
                cpu: "2.5 GHz Intel Core 2 Duo or equivalent",
                storage: "500 MB",
                gpu: "DirectX 9.0c compatible graphics card"
            }
        },
        {
            id: 109,
            title: "Five Nights at Freddy's 3",
            category: "Korku, Hayatta Kalma",
            releaseDate: "2 Mart 2015",
            mainImage: "images/fnaf3-detail.jpg",
            description: "Aradan otuz yıl geçtikten sonra, Freddy Fazbear's Pizza'nın korkunç olayları artık sadece bir şehir efsanesi. Ancak, Fazbear's Fright: The Horror Attraction adında yeni bir korku turistik mekanı açılıyor ve geçmişin kalıntıları geri dönüyor. Bu kez tek bir animatronik, Springtrap, sana musallat olacak. Ancak, sistem arızaları ve hayaletler de işini zorlaştıracak. Hayatta kalmak için havalandırma sistemlerini ve ses tuzaklarını kullan.",
            features: [
                "Tek ve Korkunç Yeni Düşman: Springtrap",
                "Yeni Savunma Mekanikleri (Audio, Vent Management)",
                "Sistem Arızaları ve Hayaletler",
                "Serinin Hikayesini Derinleştiren Olaylar",
                "Daha Karmaşık Oyun Mekanikleri"
            ],
            screenshots: [
                "images/fnaf3-ss1.jpg",
                "images/fnaf3-ss2.jpg",
                "images/fnaf3-ss3.jpg"
            ],
            videoUrl: "https://www.youtube.com/embed/videoseries?list=PLzW34C24F3F3T3T3T3T3T3T3T3T", // Örnek video
            downloadLink: "https://www.oyun-indir-linki.com/fnaf3-full",
            minReq: {
                ram: "1 GB",
                cpu: "2 GHz Intel Pentium 4 or equivalent",
                storage: "250 MB",
                gpu: "DirectX 9.0c compatible graphics card"
            },
            recReq: {
                ram: "2 GB",
                cpu: "2.5 GHz Intel Core 2 Duo or equivalent",
                storage: "500 MB",
                gpu: "DirectX 9.0c compatible graphics card"
            }
        }
        // Daha fazla oyun verisi buraya eklenebilir
    ];

    // URL'den oyun ID'sini al
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = parseInt(urlParams.get('id'));

    // ID'ye göre oyunu bul
    const game = gamesData.find(g => g.id === gameId);

    if (game) {
        // Sayfa elementlerini oyun verileriyle doldur
        document.title = `${game.title} Detayları - GameHub`;
        document.getElementById('game-title').textContent = game.title;
        document.getElementById('game-category').textContent = game.category;
        document.getElementById('game-release-date').textContent = `Yayın Tarihi: ${game.releaseDate}`;
        document.getElementById('main-game-image').src = game.mainImage;
        document.getElementById('main-game-image').alt = game.title;
        document.getElementById('game-description').textContent = game.description;

        // Özellikleri doldur
        const featuresList = document.getElementById('game-features-list');
        featuresList.innerHTML = ''; // Mevcut listeyi temizle
        game.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check-circle"></i> ${feature}`;
            featuresList.appendChild(li);
        });

        // Ekran görüntülerini doldur
        const screenshotGallery = document.getElementById('screenshot-gallery');
        screenshotGallery.innerHTML = '';
        game.screenshots.forEach(screenshot => {
            const img = document.createElement('img');
            img.src = screenshot;
            img.alt = `${game.title} Ekran Görüntüsü`;
            screenshotGallery.appendChild(img);
        });

        // Video embed kodunu ekle
        const gameVideoContainer = document.getElementById('game-video');
        if (game.videoUrl) {
            gameVideoContainer.innerHTML = `<iframe width="853" height="480" src="${game.videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        } else {
            gameVideoContainer.style.display = 'none'; // Video yoksa gizle
        }

        // Sistem Gereksinimlerini doldur
        document.querySelector('.system-requirements .req-item:first-child ul').innerHTML = `
            <li><i class="fas fa-memory"></i> RAM: ${game.minReq.ram}</li>
            <li><i class="fas fa-microchip"></i> İşlemci: ${game.minReq.cpu}</li>
            <li><i class="fas fa-hdd"></i> Depolama: ${game.minReq.storage}</li>
            <li><i class="fas fa-video"></i> Ekran Kartı: ${game.minReq.gpu}</li>
        `;
        document.querySelector('.system-requirements .req-item:last-child ul').innerHTML = `
            <li><i class="fas fa-memory"></i> RAM: ${game.recReq.ram}</li>
            <li><i class="fas fa-microchip"></i> İşlemci: ${game.recReq.cpu}</li>
            <li><i class="fas fa-hdd"></i> Depolama: ${game.recReq.storage}</li>
            <li><i class="fas fa-video"></i> Ekran Kartı: ${game.recReq.gpu}</li>
        `;

        // İndirme butonunu güncelle
        document.querySelector('.download-cta .download-button-large').href = game.downloadLink;

    } else {
        // Oyun bulunamazsa hata mesajı
        document.getElementById('game-details').innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <h2>Üzgünüz, bu oyun bulunamadı!</h2>
                <p>Aradığınız oyunun detaylarına şu an ulaşılamıyor olabilir. Lütfen ana sayfaya geri dönün.</p>
                <a href="index.html" class="btn btn-primary" style="margin-top: 20px;">Ana Sayfaya Dön</a>
            </div>
        `;
    }
});