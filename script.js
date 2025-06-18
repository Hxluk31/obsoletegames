// script.js

// --- Oyun Verileri ---
// Bu dizi, tüm oyun verilerini içerir.
// Detay sayfaları ve filtreleme için buradaki ID'ler, kategoriler, yıllar ve linkler kullanılacaktır.
const allGamesData = [
    {
        id: 'deus-ex-2000',
        name: 'Deus Ex',
        category: 'rpg, aksiyon, bilim-kurgu',
        year: '2000',
        image: 'images/deus-ex-thumbnail.jpg',
        description: 'Siberpunk temalı, seçimlerin hikayeyi ve oynanışı etkilediği, derin bir RPG ve aksiyon oyunu klasiği.',
        downloadLink: 'https://ay.live/XSkCV'
    },
    {
        id: 'gta-3-2001',
        name: 'GTA 3',
        category: 'aksiyon, açık-dünya',
        year: '2001',
        image: 'images/gta3-thumbnail.jpg',
        description: 'Grand Theft Auto serisinin 3 boyutlu dünyaya adım attığı, devrim niteliğindeki oyun. Liberty City\'nin suç dolu sokaklarında yükselin.',
        downloadLink: 'https://ay.live/A4QQA'
    },
    {
        id: 'gta-vice-city-2002',
        name: 'GTA Vice City',
        category: 'aksiyon, açık-dünya',
        year: '2002',
        image: 'images/gta-vc-thumbnail.jpg',
        description: '80\'lerin parlak ve neon ışıklı Vice City\'sinde geçen, ikonik müzikleri ve atmosferiyle bilinen bir GTA klasiği.',
        downloadLink: 'https://ay.live/fbkSTj'
    },
    {
        id: 'mafia-2002',
        name: 'Mafia',
        category: 'aksiyon, gizlilik',
        year: '2002',
        image: 'images/mafia-thumbnail.jpg',
        description: '1930\'ların Amerika\'sında bir gangsterin yükselişini anlatan, sinematik ve sürükleyici bir suç destanı.',
        downloadLink: 'https://ay.live/NH76n'
    },
    {
        id: 'splinter-cell-2002',
        name: 'Tom Clancy\'s Splinter Cell',
        category: 'aksiyon, gizlilik',
        year: '2002',
        image: 'images/splinter-cell-thumbnail.jpg',
        description: 'Sam Fisher olarak gizli operasyonlara katıldığınız, ışık ve gölgeyi ustaca kullanarak düşmanlardan saklandığınız bir gizlilik oyunu.',
        downloadLink: 'https://ay.live/NnQv'
    },
    {
        id: 'serious-sam-2002',
        name: 'Serious Sam: The First Encounter',
        category: 'fps, aksiyon',
        year: '2002',
        image: 'images/serious-sam-thumbnail.jpg', // Varsayılan resim
        description: 'Binlerce düşmanla aynı anda savaştığınız, hızlı tempolu ve bol aksiyonlu, eğlenceli bir birinci şahıs nişancı deneyimi.',
        downloadLink: '#' // Lütfen buraya gerçek linki girin
    },
    {
        id: 'prince-of-persia-sands-of-time-2003',
        name: 'Prince of Persia: The Sands of Time',
        category: 'aksiyon, macera, platform',
        year: '2003',
        image: 'images/prince-of-persia-thumbnail.jpg',
        description: 'Zamanı geri sarma mekanikleriyle yenilikçi bir platform ve macera oyunu. Pers prensinin destansı yolculuğu.',
        downloadLink: 'https://ay.live/Hvkn4'
    },
    {
        id: 'command-conquer-renegade-2003',
        name: 'Command & Conquer: Renegade',
        category: 'fps, aksiyon',
        year: '2003',
        image: 'images/cnc-renegade-thumbnail.jpg', // Varsayılan resim
        description: 'Command & Conquer evreninde geçen, birinci şahıs nişancı türündeki benzersiz bir oyun. GDI veya Nod saflarında savaşın.',
        downloadLink: '#' // Lütfen buraya gerçek linki girin
    },
    {
        id: 'gta-san-andreas-2004',
        name: 'GTA San Andreas',
        category: 'aksiyon, açık-dünya',
        year: '2004',
        image: 'images/gta-sa-thumbnail.jpg',
        description: 'GTA serisinin en büyük ve en ikonik oyunlarından biri. CJ ile San Andreas eyaletinde suç ve macera dolu bir yolculuk.',
        downloadLink: 'https://ay.live/oavMRd'
    },
    {
        id: 'half-life-2-2004',
        name: 'Half-Life 2',
        category: 'fps, aksiyon, bilim-kurgu',
        year: '2004',
        image: 'images/half-life2-thumbnail.jpg',
        description: 'Gordon Freeman\'ın Common Bileşimi\'ne karşı savaştığı, fizik tabanlı bulmacaları ve sürükleyici hikayesiyle ödüllü bir FPS şaheseri.',
        downloadLink: 'https://ay.live/oavMRd'
    },
    {
        id: 'fear-2005',
        name: 'F.E.A.R.',
        category: 'fps, korku',
        year: '2005',
        image: 'images/fear-thumbnail.jpg',
        description: 'Yoğun aksiyonu ve psikolojik korku unsurlarıyla harmanlanmış, gerilim dolu bir birinci şahıs nişancı oyunu.',
        downloadLink: 'https://ay.live/ERBH'
    }
    // NOT: 2006 ve sonrası oyunlar (Bully, Taxi Driver, FNAF serisi, Oblivion, Company of Heroes, BioShock, Crysis, GTA IV, Fallout 3, Assassin's Creed II, Modern Warfare 2) filtreleme kuralına göre bu listeye dahil edilmemiştir.
];

// --- Fonksiyonlar ---

/**
 * Ana sayfa oyun kartlarını dinamik olarak oluşturur.
 * @param {Array<Object>} gamesToDisplay - Gösterilecek oyunların dizisi.
 */
function renderGames(gamesToDisplay) {
    const gameGrid = document.getElementById('allGamesGrid');
    if (!gameGrid) return; // allGamesGrid yoksa, yani detay sayfasındaysak, fonksiyonu durdur.

    gameGrid.innerHTML = ''; // Mevcut oyunları temizle

    // "Öne Çıkanlar" bölümünü de güncellemek için
    const featuredGrid = document.querySelector('#featured .game-grid');
    if (featuredGrid) {
        featuredGrid.innerHTML = ''; // Öne çıkanları da temizle
    }

    const featuredGamesAdded = new Set(); // Öne çıkanlara eklenen oyunların ID'lerini tutmak için

    gamesToDisplay.forEach(game => {
        const gameYear = parseInt(game.year);

        // Yalnızca 2005 ve öncesi oyunları göster
        if (gameYear <= 2005) {
            const gameCard = document.createElement('div');
            gameCard.classList.add('game-card');
            gameCard.setAttribute('data-category', game.category);
            gameCard.setAttribute('data-name', game.name.toLowerCase());
            gameCard.setAttribute('data-year', game.year);

            gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.name}">
                <h3>${game.name}</h3>
                <p class="category">${game.category.split(', ').map(cat => cat.charAt(0).toUpperCase() + cat.slice(1)).join(', ')}</p>
                <a href="game-detail.html?id=${game.id}" class="btn btn-secondary">Detaylar</a>
            `;
            gameGrid.appendChild(gameCard);

            // Rastgele birkaç oyunu "Öne Çıkanlar" bölümüne de ekleyebiliriz
            // Veya belirgin oyunları elle seçebiliriz. Şimdilik belirli oyunları ekleyelim.
            const featuredGameIds = ['gta-san-andreas-2004', 'half-life-2-2004']; // Öne çıkacak oyunlar
            if (featuredGrid && featuredGameIds.includes(game.id) && !featuredGamesAdded.has(game.id)) {
                const featuredCard = gameCard.cloneNode(true); // Kartı kopyala
                featuredGrid.appendChild(featuredCard);
                featuredGamesAdded.add(game.id);
            }
        }
    });
}

/**
 * Arama, kategori ve yıl filtrelemesini uygular.
 */
function filterGames() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const yearFilter = document.getElementById('yearFilter');

    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    const selectedYear = yearFilter ? yearFilter.value : 'all';

    const filteredGames = allGamesData.filter(game => {
        const gameName = game.name.toLowerCase();
        const gameCategory = game.category.toLowerCase();
        const gameYear = parseInt(game.year);

        // 2006 ve sonrası oyunları her zaman filtrele (gösterme)
        if (gameYear > 2005) {
            return false;
        }

        const matchesSearch = gameName.includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || gameCategory.includes(selectedCategory);
        const matchesYear = selectedYear === 'all' || gameYear.toString() === selectedYear; // Yıl tam eşleşmeli

        return matchesSearch && matchesCategory && matchesYear;
    });

    renderGames(filteredGames);
}

/**
 * Kategori etiketlerine tıklama olay dinleyicileri ekler.
 */
function addCategoryFilterListeners() {
    const categoryTags = document.querySelectorAll('.category-tag');
    categoryTags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            const filterValue = tag.dataset.filter;
            // Kategori filtresi seçeneğini güncelle ve filtrelemeyi tetikle
            const categorySelect = document.getElementById('categoryFilter');
            if (categorySelect) {
                categorySelect.value = filterValue;
                filterGames();
            }
        });
    });
}

/**
 * Oyun detay sayfasını URL'deki ID'ye göre yükler.
 */
function loadGameDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');

    const game = allGamesData.find(g => g.id === gameId);

    if (game) {
        document.getElementById('gameDetailPageTitle').textContent = `${game.name} Detayları - GameHub`;
        document.getElementById('gameDetailName').textContent = game.name;
        document.getElementById('gameDetailImage').src = game.image;
        document.getElementById('gameDetailImage').alt = game.name;
        document.getElementById('gameDetailCategory').textContent = game.category.split(', ').map(cat => cat.charAt(0).toUpperCase() + cat.slice(1)).join(', ');
        document.getElementById('gameDetailYear').textContent = game.year;
        document.getElementById('gameDetailDescription').textContent = game.description;
        document.getElementById('gameDetailDownloadLink').href = game.downloadLink;
    } else {
        // Oyun bulunamazsa veya ID geçersizse hata mesajı göster
        document.getElementById('gameDetailName').textContent = 'Oyun Bulunamadı';
        document.getElementById('gameDetailImage').src = 'images/placeholder.jpg'; // Varsayılan bir resim kullanabilirsin
        document.getElementById('gameDetailImage').alt = 'Oyun Bulunamadı';
        document.getElementById('gameDetailCategory').textContent = 'N/A';
        document.getElementById('gameDetailYear').textContent = 'N/A';
        document.getElementById('gameDetailDescription').textContent = 'Aradığınız oyun bulunamadı veya mevcut değil. Lütfen ana sayfaya geri dönün.';
        document.getElementById('gameDetailDownloadLink').style.display = 'none'; // İndir butonunu gizle
    }
}

// --- Sayfa Yüklendiğinde Çalıştırılacak Kod ---
document.addEventListener('DOMContentLoaded', () => {
    // Eğer URL 'game-detail.html' içeriyorsa detay sayfasını yükle
    if (window.location.pathname.includes('game-detail.html')) {
        loadGameDetail();
    } else {
        // Ana sayfadaysak, oyunları render et ve filtreleme olay dinleyicilerini ekle
        renderGames(allGamesData); // Başlangıçta tüm oyunları (filtreleme kurallarına göre) göster
        document.getElementById('searchInput').addEventListener('keyup', filterGames);
        document.getElementById('categoryFilter').addEventListener('change', filterGames);
        document.getElementById('yearFilter').addEventListener('change', filterGames);
        addCategoryFilterListeners(); // Kategori etiketleri için olay dinleyicilerini ekle
    }
});