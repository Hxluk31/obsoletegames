// script.js

// --- Oyun Verileri ---
const allGamesData = [
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
        id: 'command-conquer-renegade-2003',
        name: 'Command & Conquer: Renegade',
        category: 'fps, aksiyon',
        year: '2003',
        image: 'images/cnc-renegade-thumbnail.jpg',
        description: 'Command & Conquer evreninde geçen, birinci şahıs nişancı türündeki benzersiz bir oyun. GDI veya Nod saflarında savaşın.',
        downloadLink: '#'
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
        id: 'fear-2005',
        name: 'F.E.A.R.',
        category: 'fps, korku',
        year: '2005',
        image: 'images/fear-thumbnail.jpg',
        description: 'Yoğun aksiyonu ve psikolojik korku unsurlarıyla harmanlanmış, gerilim dolu bir birinci şahıs nişancı oyunu.',
        downloadLink: 'https://ay.live/ERBH'
    },
    {
        id: 'fnaf-1-2014',
        name: 'Five Nights at Freddy\'s',
        category: 'korku, gizem, hayatta-kalma',
        year: '2014',
        image: 'images/fnaf1.jpeg',
        description: 'Bir güvenlik görevlisi olarak Freddy Fazbear\'s Pizza\'da gece vardiyasına kalın ve animatronik karakterlerden beş gece boyunca hayatta kalın.',
        downloadLink: 'https://ay.live/qpvR'
    },
    {
        id: 'fnaf-2-2014',
        name: 'Five Nights at Freddy\'s 2',
        category: 'korku, gizem, hayatta-kalma',
        year: '2014',
        image: 'images/fnaf2.jpeg',
        description: 'Freddy Fazbear\'s Pizza\'nın yeni ve geliştirilmiş versiyonunda bir kez daha gece bekçiliği yapın. Yeni animatronikler ve daha fazla korku sizi bekliyor.',
        downloadLink: 'https://ay.live/BaCdsk'
    },
    {
        id: 'fnaf-3-2015',
        name: 'Five Nights at Freddy\'s 3',
        category: 'korku, gizem, hayatta-kalma',
        year: '2015',
        image: 'images/fnaf3.png',
        description: '30 yıl sonra bir kez daha terörün derinliklerine inin. Fazbear\'s Fright: The Horror Attraction\'da tek bir hayatta kalan animatronik sizi bekliyor.',
        downloadLink: 'https://ay.live/G63Xz0'
    },
    {
        id: 'ultrakill-2020',
        name: 'ULTRAKILL',
        category: 'fps, aksiyon, hızlı-tempolu',
        year: '2020',
        image: 'images/ultrakill.png',
        description: 'Klasik FPS oyunlarından ilham alan, kan, hız ve puan üzerine kurulu hızlı tempolu, retro tarzı bir nişancı oyunu. Şeytanları şık bir şekilde katledin!',
        downloadLink: 'https://ay.live/aYKrf'
    }
];

// --- Fonksiyonlar ---

/**
 * Ana sayfa oyun kartlarını dinamik olarak oluşturur.
 * @param {Array<Object>} gamesToDisplay - Gösterilecek oyunların dizisi.
 */
function renderGames(gamesToDisplay) {
    const allGamesGrid = document.getElementById('allGamesGrid');
    if (!allGamesGrid) return; // allGamesGrid yoksa, yani detay sayfasındaysak, fonksiyonu durdur.

    allGamesGrid.innerHTML = ''; // Mevcut oyunları temizle

    const featuredGrid = document.querySelector('#featured .game-grid');
    if (featuredGrid) {
        featuredGrid.innerHTML = ''; // Öne çıkanları da temizle
    }

    const featuredGamesAdded = new Set(); // Öne çıkanlara eklenen oyunların ID'lerini tutmak için

    gamesToDisplay.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.setAttribute('data-category', game.category); // Kategori verisi hala kartta kalabilir
        gameCard.setAttribute('data-name', game.name.toLowerCase());
        gameCard.setAttribute('data-year', game.year);

        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <h3>${game.name}</h3>
            <p class="category">${game.category.split(', ').map(cat => cat.charAt(0).toUpperCase() + cat.slice(1)).join(', ')}</p>
            <a href="game-detail.html?id=${game.id}" class="btn btn-secondary">Detaylar</a>
        `;
        allGamesGrid.appendChild(gameCard);

        // Öne çıkanlar bölümü için belirli oyunları ekleyin
        const featuredGameIds = ['gta-san-andreas-2004', 'fnaf-1-2014', 'ultrakill-2020']; // Öne çıkacak oyunların ID'leri
        if (featuredGrid && featuredGameIds.includes(game.id) && !featuredGamesAdded.has(game.id)) {
            const featuredCard = gameCard.cloneNode(true);
            featuredGrid.appendChild(featuredCard);
            featuredGamesAdded.add(game.id);
        }
    });
}

/**
 * Arama ve yıl filtrelemesini uygular. Kategori filtresi artık yok.
 */
function filterGames() {
    const searchInput = document.getElementById('searchInput');
    const yearFilter = document.getElementById('yearFilter');

    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const selectedYear = yearFilter ? yearFilter.value : 'all';

    const filteredGames = allGamesData.filter(game => {
        const gameName = game.name.toLowerCase();
        const gameYear = game.year;

        const matchesSearch = searchTerm === '' || gameName.includes(searchTerm);
        const matchesYear = selectedYear === 'all' || gameYear === selectedYear;

        return matchesSearch && matchesYear;
    });

    renderGames(filteredGames);
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
        // Kategori bilgisi hala gösterilebilir, filtreleme dışı bırakıldı sadece.
        document.getElementById('gameDetailCategory').textContent = game.category.split(', ').map(cat => cat.charAt(0).toUpperCase() + cat.slice(1)).join(', ');
        document.getElementById('gameDetailYear').textContent = game.year;
        document.getElementById('gameDetailDescription').textContent = game.description;
        document.getElementById('gameDetailDownloadLink').href = game.downloadLink;
    } else {
        document.getElementById('gameDetailName').textContent = 'Oyun Bulunamadı';
        document.getElementById('gameDetailImage').src = 'images/placeholder.jpg';
        document.getElementById('gameDetailImage').alt = 'Oyun Bulunamadı';
        document.getElementById('gameDetailCategory').textContent = 'N/A';
        document.getElementById('gameDetailYear').textContent = 'N/A';
        document.getElementById('gameDetailDescription').textContent = 'Aradığınız oyun bulunamadı veya mevcut değil. Lütfen ana sayfaya geri dönün.';
        document.getElementById('gameDetailDownloadLink').style.display = 'none';
    }
}

/**
 * Mevcut oyunlardaki tüm benzersiz yılları toplar ve yıl filtreleme selectbox'ını doldurur.
 * Kategori filtreleme fonksiyonu kaldırıldı.
 */
function populateYearFilter() {
    const yearFilter = document.getElementById('yearFilter');
    if (!yearFilter) return;

    yearFilter.innerHTML = '<option value="all">Tüm Yıllar</option>';

    const uniqueYears = new Set();
    allGamesData.forEach(game => {
        uniqueYears.add(game.year);
    });

    const sortedYears = Array.from(uniqueYears).sort((a, b) => parseInt(b) - parseInt(a));

    sortedYears.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
}


// --- Sayfa Yüklendiğinde Çalıştırılacak Kod ---
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('game-detail.html')) {
        loadGameDetail();
    } else {
        // Ana sayfadaysak, oyunları render et ve filtreleme olay dinleyicilerini ekle
        // populateCategoryFilter() ve populateCategoryTags() çağrıları kaldırıldı
        populateYearFilter();     // Yıl filtresini dinamik olarak doldur

        renderGames(allGamesData); // Başlangıçta tüm oyunları göster
        document.getElementById('searchInput').addEventListener('keyup', filterGames);
        // document.getElementById('categoryFilter').addEventListener('change', filterGames); çağrısı kaldırıldı
        document.getElementById('yearFilter').addEventListener('change', filterGames);
        // addCategoryFilterListeners() çağrısı kaldırıldı
    }
});
