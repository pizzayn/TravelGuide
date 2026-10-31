/**
 * AETHERIA Global Travel Database
 * Zengin Görsel Galeriler, Kültürel & Gastronomik Veriler, Fiyat Seviyeleri
 * Türkiye'den Seyahat için Güncel Vize & Pasaport Gereksinimleri
 */

(function (root, factory) {
  const data = factory();
  if (typeof root !== 'undefined') {
    root.AETHERIA_DATA = data;
  }
  if (typeof window !== 'undefined') {
    window.AETHERIA_DATA = data;
  }
  if (typeof module === 'object' && module.exports) {
    module.exports = data;
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const DESTINATIONS = [
    {
      id: "it-italy",
      name: "İtalya (Amalfi & Roma)",
      country: "İtalya",
      continent: "Avrupa",
      flag: "🇮🇹",
      tagline: "Güneşin Parladığı Pastel Uçurumlar, Antik Tarih & La Dolce Vita",
      description: "Turkuaz Akdeniz'e dik inen Positano yamaçlarında limon kokulu sokakları keşfedin, ardından Roma'da Kolezyum ve Barok meydanlarda tarihin kalbine yolculuk yapın.",
      heroImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.95,
      reviews: 3420,
      climate: "Akdeniz İklimi",
      bestSeason: "Mayıs - Haziran & Eylül - Ekim",
      currency: { code: "EUR", symbol: "€", rateToTRY: 37.5, rateToUSD: 0.92 },
      language: "İtalyanca",
      averageDailyBudget: { backpacker: 65, explorer: 155, luxury: 420 },
      tags: ["Kültür", "Gastronomi", "Deniz & Sahil", "Romantizm"],
      visaInfo: {
        badgeText: "Schengen Vizesi",
        badgeClass: "visa-schengen",
        bordoStatus: "Schengen Vizesi Gerekli",
        bordoDetail: "Bordo (Umuma Mahsus) pasaport hamili Türk vatandaşlarının seyahat öncesinde İtalya yetkili vize başvuru merkezi (iDATA) üzerinden Schengen C tipi turistik vize alması zorunludur.",
        yesilStatus: "Vizesiz (90 Gün)",
        yesilDetail: "Yeşil (Hususi) ve Gri (Hizmet) pasaport sahipleri 180 gün içinde 90 günü aşmamak kaydıyla vizeden muaftır.",
        passportValidity: "Planlanan dönüş tarihinden itibaren en az 90 gün (3 ay) geçerli pasaport ve en az 2 boş vize sayfası.",
        mandatoryDocs: [
          "Minimum 30.000 € teminatlı Seyahat Sağlık Sigortası (tüm Schengen bölgesini kapsayan)",
          "Gidiş-dönüş uçak ve onaylı otel/konaklama rezervasyonları",
          "Son 3 aya ait kaşeli/imzalı şahsi banka hesap dökümü ve düzenli gelir belgesi",
          "Çalışanlar için iş yeri izin yazısı, SGK hizmet dökümü ve maaş bordrosu"
        ],
        tips: "İtalya vize randevuları yoğun olabileceğinden seyahat tarihinden en az 4-6 hafta önce başvuru yapılması önerilir."
      },
      highlights: [
        "Positano'nun Masalsı Yamaç Evleri",
        "Tanrılar Yolu (Sentiero degli Dei) Yürüyüşü",
        "Roma Kolezyumu & Roma Forumu",
        "Capri Adası Mavi Mağara Turu"
      ],
      attractions: [
        {
          name: "Positano Sahili & Fiyort",
          type: "Manzara & Sahil",
          description: "Akdeniz'in masmavi sularına dik inen rengarenk pastel villalar ve dar taş merdivenler.",
          icon: "🏖️",
          image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Roma Kolezyumu & Panteon",
          type: "Antik Mimari",
          description: "İmparatorluk döneminin en görkemli amfitiyatrosu ve kusursuz kubbesiyle 2000 yıllık Panteon.",
          icon: "🏛️",
          image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Sentiero degli Dei (Tanrılar Yolu)",
          type: "Doğa Yürüyüşü",
          description: "Uçurumların sırtında, gökyüzü ile deniz arasında nefes kesici bir trekking rotası.",
          icon: "🥾",
          image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=500&q=80"
        }
      ],
      cuisine: [
        { dish: "Spaghetti alle Vongole", nativeName: "Taze Kum Midyeli Makarna", description: "Beyaz şarap, taze sarımsak, sızma zeytinyağı ve taze kum midyesi ile hazırlanan güney lezzeti.", icon: "🍝" },
        { dish: "Pizza Napoletana", nativeName: "Otantik Taş Fırın Napoliten Pizza", description: "San Marzano domatesleri, manda mozzarellası ve fesleğenli kabarık çıtır kenarlar.", icon: "🍕" },
        { dish: "Sorrento Limoncello & Gelato", nativeName: "Limon Likörü & İtalyan Dondurması", description: "Sorrento'nun dev limon kabuklarından damıtılan ferahlatıcı likör ve taze el yapımı gelato.", icon: "🍋" }
      ],
      cultureTips: [
        "Kahvaltı dışında (özellikle akşam yemeğinden sonra) Cappuccino sipariş edilmez; Espresso tercih edilir.",
        "Kiliseleri ve bazilikaları ziyaret ederken omuzların ve dizlerin kapalı olması şarttır.",
        "Hesapta yer alan 'Coperto' kuver bedelidir ve İtalya'da tamamen yasaldır."
      ],
      phrasebook: [
        { phrase: "Günaydın / Merhaba", native: "Buongiorno", phonetic: "Bwon-cor-no", translation: "Günaydın", audioLang: "it-IT" },
        { phrase: "Hesap lütfen", native: "Il conto, per favore", phonetic: "İl kon-to, per fa-vo-re", translation: "Hesabı alabilir miyim?", audioLang: "it-IT" },
        { phrase: "Çok lezzetli!", native: "È delizioso!", phonetic: "E de-lit-tsyo-zo", translation: "Harika lezzetli!", audioLang: "it-IT" },
        { phrase: "Teşekkür ederim", native: "Grazie mille", phonetic: "Gra-tsye mil-le", translation: "Çok teşekkürler", audioLang: "it-IT" }
      ],
      packingEssentials: ["Hafif keten gömlekler ve elbiseler", "Kaymayan rahat yürüyüş ayakkabıları", "Yüksek faktörlü güneş kremi & şapka", "Kiliseler için hafif şal", "Polarize güneş gözlüğü"]
    },
    {
      id: "ch-switzerland",
      name: "İsviçre (Zermatt & Alpler)",
      country: "İsviçre",
      continent: "Avrupa",
      flag: "🇨🇭",
      tagline: "Matterhorn Zirvesi, Buzul Trenleri & Masalsı Dağ Gölleri",
      description: "Araç trafiğine kapalı Zermatt köyünde temiz dağ havasını soluyun, panoramik dişli trenlerle 3.100 metreye tırmanın ve ayna gibi parlayan buzul göllerini izleyin.",
      heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.98,
      reviews: 2150,
      climate: "Alp İklimi",
      bestSeason: "Aralık - Nisan (Kayak) & Temmuz - Eylül (Trekking)",
      currency: { code: "CHF", symbol: "CHF", rateToTRY: 39.8, rateToUSD: 0.89 },
      language: "Almanca, Fransızca",
      averageDailyBudget: { backpacker: 95, explorer: 240, luxury: 580 },
      tags: ["Doğa", "Macera", "Kış Sporları", "Lüks"],
      visaInfo: {
        badgeText: "Schengen Vizesi",
        badgeClass: "visa-schengen",
        bordoStatus: "Schengen Vizesi Gerekli",
        bordoDetail: "İsviçre AB üyesi olmasa da Schengen Bölgesi üyesidir. Bordo pasaport hamilleri İsviçre vize başvuru merkezi (TLScontact) üzerinden vize almalıdır.",
        yesilStatus: "Vizesiz (90 Gün)",
        yesilDetail: "Yeşil (Hususi) pasaport hamili Türk vatandaşları 180 gün içinde 90 güne kadar vizesiz seyahat edebilir.",
        passportValidity: "Dönüş tarihinden itibaren en az 3 ay geçerli pasaport.",
        mandatoryDocs: [
          "Minimum 30.000 € teminatlı Schengen Seyahat Sağlık Sigortası",
          "Otel konaklama belgeleri veya davetiye mektubu",
          "İsviçre'de kalınacak her gün için en az 100 CHF karşılığı bakiye kanıtı",
          "Gidiş-dönüş uçak rezervasyonu"
        ],
        tips: "İsviçre sınır kontrollerinde günlük harcama bütçesi ve dönüş bileti sorulabilmektedir."
      },
      highlights: [
        "Gornergrat Dişli Dağ Treni (3.089m)",
        "Riffelsee Gölü'nde Matterhorn Yansıması",
        "Matterhorn Buzul Cenneti & Buz Sarayı",
        "Geleneksel İsviçre Peynir Fondüsü"
      ],
      attractions: [
        {
          name: "Matterhorn Zirvesi",
          type: "İkonik Alp Zirvesi",
          description: "Piramit şeklindeki kusursuz formuyla dünyanın en çok fotoğraflanan görkemli dağ zirvesi.",
          icon: "🏔️",
          image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Gornergrat Dağ Treni",
          type: "Panoramik Demiryolu",
          description: "Avrupa'nın en yüksek açık hava elektrikli dişli treniyle 29 dev zirveye bakan manzara.",
          icon: "🚂",
          image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Riffelsee Dağ Gölü",
          type: "Doğal Ayna Göl",
          description: "Sabahın ilk ışıklarında Matterhorn'un suya yansıyan büyüleyici kristal görüntüsü.",
          icon: "💎",
          image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=500&q=80"
        }
      ],
      cuisine: [
        { dish: "İsviçre Peynir Fondüsü", nativeName: "Käsefondue", description: "Eritilmiş Gruyère ve Emmental peynirleri içine daldırılan taze çıtır köy ekmeği.", icon: "🫕" },
        { dish: "Valaisanne Raclette", nativeName: "Geleneksel Raklet", description: "Tekerlek peynirin ızgarada eritilip patates, kornişon ve arpacık soğan üzerine kazınması.", icon: "🧀" },
        { dish: "Rösti & Sahanda Köy Yumurtası", nativeName: "Walliser Rösti", description: "Altın sarısı tereyağında kızartılmış rendelenmiş patates tabağı.", icon: "🍳" }
      ],
      cultureTips: [
        "Zermatt kasabası tamamen otomobilsizdir; yalnızca küçük elektrikli taksiler ve faytonlar çalışır.",
        "İsviçre'de saat 22:00'den sonra sessizlik saatine (Nachtruhe) kesinlikle uyulur.",
        "Dağ patikalarında karşılaştığınız diğer yürüyüşçülere 'Grüezi' demek adettendir."
      ],
      phrasebook: [
        { phrase: "Merhaba (İsviçre Almancası)", native: "Grüezi", phonetic: "Grü-et-zi", translation: "Merhaba", audioLang: "de-CH" },
        { phrase: "Çok teşekkürler", native: "Merci vilmal", phonetic: "Mer-si fil-mal", translation: "Çok teşekkür ederim", audioLang: "de-CH" },
        { phrase: "Şerefe!", native: "Proscht!", phonetic: "Proşt!", translation: "Şerefe!", audioLang: "de-CH" },
        { phrase: "Göl yolu nerede?", native: "Wo isch de Wanderwäg zum See?", phonetic: "Vo iş de van-der-veg zum ze?", translation: "Göle giden patika nerede?", audioLang: "de-CH" }
      ],
      packingEssentials: ["Nefes alabilir su/rüzgar geçirmez dağ montu", "Trekking batonları & sağlam yürüyüş botu", "Termal içlik & bere", "Swiss Travel Pass tren kartı"]
    },
    {
      id: "jp-japan",
      name: "Japonya (Kyoto & Tokyo)",
      country: "Japonya",
      continent: "Asya",
      flag: "🇯🇵",
      tagline: "Bin Yıllık Tapınaklar ile Neon Işıklı Fütüristik Metropoller",
      description: "Kyoto'nun sessiz bambu koruları ve Fushimi Inari'nin kızıl torii kapılarından, Tokyo'nun Shinjuku neon caddelerine uzanan büyüleyici bir kontrast.",
      heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.97,
      reviews: 2980,
      climate: "Ilıman İklim",
      bestSeason: "Mart - Mayıs (Kiraz Çiçekleri) & Ekim - Kasım (Sonbahar)",
      currency: { code: "JPY", symbol: "¥", rateToTRY: 0.22, rateToUSD: 155 },
      language: "Japonca",
      averageDailyBudget: { backpacker: 50, explorer: 135, luxury: 390 },
      tags: ["Kültür", "Teknoloji", "Gastronomi", "Tarih"],
      visaInfo: {
        badgeText: "VİZESİZ (90 Gün)",
        badgeClass: "visa-free",
        bordoStatus: "Vizesiz (90 Gün Muafiyet)",
        bordoDetail: "Türkiye Cumhuriyeti Bordo (Umuma Mahsus) pasaport sahipleri 90 güne kadar olan turistik seyahatlerinde vizeden muaftır. Herhangi bir ön vize başvurusu gerekmez.",
        yesilStatus: "Vizesiz (90 Gün)",
        yesilDetail: "Yeşil (Hususi) pasaport sahipleri de 90 güne kadar vizeden muaftır.",
        passportValidity: "Seyahat bitiş tarihinden itibaren en az 6 ay geçerli pasaport.",
        mandatoryDocs: [
          "Gidiş ve kesin dönüş uçak bileti",
          "Otel rezervasyonları veya konaklama adresi bilgisi",
          "Japonya'ya varışta online doldurulan 'Visit Japan Web' QR kodu (hızlı geçiş için tavsiye edilir)"
        ],
        tips: "Japonya gümrüğünde dönüş biletiniz ve konaklama bilgileriniz kontrol edilir; çıktılarını yanınızda bulundurun."
      },
      highlights: [
        "Fushimi Inari Taisha Kızıl Kapıları",
        "Arashiyama Büyüleyici Bambu Ormanı",
        "Shibuya Yaya Geçidi & Akihabara",
        "TeamLab Planets Dijital Sanat Müzesi"
      ],
      attractions: [
        {
          name: "Fushimi Inari Taisha",
          type: "Kutsal Tapınak",
          description: "Dağın zirvesine doğru uzanan 10.000'den fazla parlak kızıl torii kapısı.",
          icon: "⛩️",
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Tokyo Kulesi & Shibuya",
          type: "Fütüristik Metropol",
          description: "Dünyanın en kalabalık yaya geçidi, gökdelenler ve gece parıldayan neon ışık denizi.",
          icon: "🏙️",
          image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Arashiyama Bambu Ormanı",
          type: "Doğa & Dinginlik",
          description: "Rüzgarın bambu dalları arasında çıkardığı masalsı uğultuyla Japonya'nın en huzurlu köşesi.",
          icon: "🎋",
          image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=500&q=80"
        }
      ],
      cuisine: [
        { dish: "Otantik Tonkotsu Ramen", nativeName: "豚骨ラーメン", description: "18 saat kısık ateşte kaynatılan kemik suyu, taze erişte ve marine edilmiş yumurta.", icon: "🍜" },
        { dish: "Edomae Suşi", nativeName: "江戸前寿司", description: "Sabah Tsukiji pazarından gelen taze mevsim balıklarıyla usta ellerde yapılan nigiri.", icon: "🍣" },
        { dish: "Matcha Kaiseki Deneyimi", nativeName: "懐石料理", description: "Japon çay seremonisi eşliğinde sunulan mevsimsel çok aşamalı asil saray ziyafeti.", icon: "🍵" }
      ],
      cultureTips: [
        "Selamlaşırken tokalaşmak yerine hafifçe öne eğilmek (eğilme) saygı göstergesidir.",
        "Yemek çubuklarını asla pirinç kasesine dik saplamayın (cenaze ritüelidir).",
        "Evlere, geleneksel ryokan otellerine ve tapınaklara girerken ayakkabılar çıkarılır."
      ],
      phrasebook: [
        { phrase: "Merhaba / İyi günler", native: "こんにちは", phonetic: "Konnichiwa", translation: "Merhaba", audioLang: "ja-JP" },
        { phrase: "Çok teşekkür ederim", native: "ありがとうございます", phonetic: "Arigatou gozaimasu", translation: "Teşekkür ederim", audioLang: "ja-JP" },
        { phrase: "Bu ne kadar?", native: "これはいくらですか？", phonetic: "Kore wa ikura desu ka?", translation: "Fiyatı nedir?", audioLang: "ja-JP" },
        { phrase: "Çok lezzetli!", native: "美味しい！", phonetic: "Oishii!", translation: "Nefis!", audioLang: "ja-JP" }
      ],
      packingEssentials: ["Kolay çıkarılıp giyilen rahat spor ayakkabı", "Tip A/B elektrik adaptörü", "Japonya için e-SIM / Cep Wi-Fi", "Bozuk para cüzdanı (nakit kullanımı yaygındır)"]
    },
    {
      id: "fr-france",
      name: "Fransa (Paris & Provence)",
      country: "Fransa",
      continent: "Avrupa",
      flag: "🇫🇷",
      tagline: "Işıklar Şehri, Lavanta Tarlaları, Sanat & Yüksek Gastronomi",
      description: "Eyfel Kulesi ve Louvre Müzesi'nin büyüleyici zarafetinden, güneydeki masalsı lavanta kokulu Provence köylerine uzanan Fransız rüyası.",
      heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.91,
      reviews: 3890,
      climate: "Ilıman Okyanusal",
      bestSeason: "Nisan - Haziran & Eylül - Ekim",
      currency: { code: "EUR", symbol: "€", rateToTRY: 37.5, rateToUSD: 0.92 },
      language: "Fransızca",
      averageDailyBudget: { backpacker: 70, explorer: 165, luxury: 460 },
      tags: ["Kültür", "Sanat", "Gastronomi", "Romantizm"],
      visaInfo: {
        badgeText: "Schengen Vizesi",
        badgeClass: "visa-schengen",
        bordoStatus: "Schengen Vizesi Gerekli",
        bordoDetail: "Bordo pasaport hamilleri VFS Global aracılığıyla Fransa Konsolosluğu'na Schengen vizesi başvurusu yapmalıdır.",
        yesilStatus: "Vizesiz (90 Gün)",
        yesilDetail: "Yeşil (Hususi) pasaport hamili vatandaşlarımız 180 gün içinde 90 güne kadar vizesiz giriş yapabilir.",
        passportValidity: "Dönüş tarihinden itibaren en az 90 gün geçerlilik.",
        mandatoryDocs: [
          "Minimum 30.000 € teminatlı Seyahat Sağlık Sigortası",
          "Uçak bileti ve otel rezervasyonları",
          "Son 3 aylık maaş bordroları ve banka hesap dökümü"
        ],
        tips: "Fransa vize başvurularını seyahatten en geç 1 ay önce tamamlamanız tavsiye edilir."
      },
      highlights: [
        "Eyfel Kulesi & Sen Nehri Gece Tekne Turu",
        "Louvre Müzesi & Montmartre Ressamlar Tepesi",
        "Valensole Mor Lavanta Vadileri",
        "Versailles Sarayı Aynalı Salon"
      ],
      attractions: [
        {
          name: "Eyfel Kulesi & Champ de Mars",
          type: "İkonik Anıt",
          description: "Her akşam saat başı 20.000 parıltılı ampulle ışıldayan demir leydi.",
          icon: "🗼",
          image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Louvre Müzesi & Piramit",
          type: "Sanat Müzesi",
          description: "Mona Lisa ve Milo Venüsü dahil dünyanın en geniş paha biçilmez sanat koleksiyonu.",
          icon: "🎨",
          image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Provence Lavanta Tarlaları",
          type: "Doğal Peyzaj",
          description: "Yaz aylarında ufka kadar mor renge boyanan eşsiz kokulu vadiler.",
          icon: "🪻",
          image: "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=500&q=80"
        }
      ],
      cuisine: [
        { dish: "Taze Kruvasan & Cafe au Lait", nativeName: "Croissant au Beurre", description: "Saf Fransız tereyağıyla kat kat açılmış çıtır sıcak kruvasan ve sütlü kahve.", icon: "🥐" },
        { dish: "Ratatouille & Confit de Canard", nativeName: "Geleneksel Sebze Güveci & Ördek", description: "Zeytinyağlı Provence sebzeleri ve fırınlanmış çıtır ördek butu.", icon: "🍲" },
        { dish: "Fransız Peynir Tabağı & Baget", nativeName: "Plateau de Fromages", description: "Brie, Camembert, Roquefort peynirleri ve taze çıtır baget ekmeği.", icon: "🧀" }
      ],
      cultureTips: [
        "Bir dükkana veya restorana girerken mutlaka 'Bonjour' (İyi günler) demek nezaket kuralıdır.",
        "Garsonu çağırmak için el sallamak kabalık sayılır; göz teması kurulması beklenir.",
        "Metroda yüksek sesle telefonla konuşmamak saygı gereğidir."
      ],
      phrasebook: [
        { phrase: "Merhaba / İyi günler", native: "Bonjour", phonetic: "Bon-jur", translation: "Merhaba", audioLang: "fr-FR" },
        { phrase: "Lütfen", native: "S'il vous plaît", phonetic: "Sil vu ple", translation: "Lütfen", audioLang: "fr-FR" },
        { phrase: "Teşekkür ederim", native: "Merci beaucoup", phonetic: "Mer-si bo-ku", translation: "Çok teşekkürler", audioLang: "fr-FR" },
        { phrase: "İngilizce biliyor musunuz?", native: "Parlez-vous anglais ?", phonetic: "Par-le vu an-gle?", translation: "İngilizce konuşur musunuz?", audioLang: "fr-FR" }
      ],
      packingEssentials: ["Şık ve rahat şehir yürüyüş ayakkabıları", "Hafif trençkot veya rüzgarlık", "Müzeler için online rezervasyon biletleri", "Kompakt şemsiye"]
    },
    {
      id: "gr-greece",
      name: "Yunanistan (Santorini & Girit)",
      country: "Yunanistan",
      continent: "Avrupa",
      flag: "🇬🇷",
      tagline: "Beyaz Badanalı Kalderalar, Mavi Kümbetler & Ege Rüzgarları",
      description: "Batık antik volkan kalderasının üzerinde yer alan Oia köyünde dünyanın en romantik gün batımını izleyin, turkuaz koylarda yüzün ve taze Ege zeytinyağını tadın.",
      heroImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.89,
      reviews: 3120,
      climate: "Akdeniz İklimi",
      bestSeason: "Mayıs - Haziran & Eylül - Ekim",
      currency: { code: "EUR", symbol: "€", rateToTRY: 37.5, rateToUSD: 0.92 },
      language: "Yunanca",
      averageDailyBudget: { backpacker: 60, explorer: 145, luxury: 410 },
      tags: ["Deniz & Sahil", "Romantizm", "Gastronomi", "Tarih"],
      visaInfo: {
        badgeText: "Schengen / Kapıda Vize",
        badgeClass: "visa-schengen",
        bordoStatus: "Schengen Vizesi veya Adalarda Kapıda Vize",
        bordoDetail: "Bordo pasaport sahipleri standart Schengen vizesi almalıdır. Ayrıca yaz sezonunda belirli 10 Yunan adası için (Rodos, Kos, Sisam vb.) 7 günlük hızlı 'Kapıda Vize' uygulaması mevcuttur.",
        yesilStatus: "Vizesiz (90 Gün)",
        yesilDetail: "Yeşil pasaport sahipleri hem anakaraya hem tüm adalara 90 güne kadar tamamen vizesiz seyahat edebilir.",
        passportValidity: "Dönüş tarihinden itibaren en az 90 gün geçerlilik.",
        mandatoryDocs: [
          "Schengen Seyahat Sigortası",
          "Feribot veya uçak bileti rezervasyonu",
          "Konaklama onay belgesi"
        ],
        tips: "Santorini ve Girit uçak seyahatlerinde standart Schengen vizesi gerekmektedir; kapıda vize yalnızca belirli feribot limanlarında geçerlidir."
      },
      highlights: [
        "Oia Köyü Gün Batımı Seyir Noktası",
        "Akrotiri Tunç Çağı Antik Kenti",
        "Kızıl Plaj (Red Beach) & Volkanik Kumlar",
        "Girit Samaria Kanyonu Doğa Yürüyüşü"
      ],
      attractions: [
        {
          name: "Oia Mavi Kümbetli Kiliseleri",
          type: "Kiklad Mimarisi",
          description: "Bembeyaz kireç binalar ve Ege Denizi'ne bakan parlak kobalt mavisi kubbeler.",
          icon: "🏛️",
          image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Kızıl Plaj (Red Beach)",
          type: "Volkanik Sahil",
          description: "Koyu kırmızı lav kayalıklarıyla çevrili eşsiz bir doğal koy.",
          icon: "🏖️",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Knossos Sarayı (Girit)",
          type: "Minoan Medeniyeti",
          description: "Minotor efsanesine ev sahipliği yapmış 4.000 yıllık labirent saray kalıntıları.",
          icon: "🏺",
          image: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=500&q=80"
        }
      ],
      cuisine: [
        { dish: "Santorini Favası", nativeName: "Φάβα Σαντορίνης", description: "Volkanik toprakta yetişen sarı bezelye püresi, karamelize soğan, kapari ve sızma zeytinyağı.", icon: "🥣" },
        { dish: "Tomatokeftedes", nativeName: "Domates Köftesi", description: "Ada kiraz domatesleri, taze nane ve kekikle hazırlanan çıtır kızartma.", icon: "🍅" },
        { dish: "Geleneksel Musakka", nativeName: "Μουσακάς", description: "Kızarmış patlıcan, patates, baharatlı kıyma ve altın sarısı beşamel fırın lezzeti.", icon: "🥘" }
      ],
      cultureTips: [
        "Santorini'de çeşme suyu içilmez (tuzdan arındırılmıştır); içme suyu olarak şişe su tüketin.",
        "Fotoğraf çekilmek için özel evlerin veya kiliselerin beyaz çatılarına çıkmak saygısızlıktır.",
        "Yunanistan'da akşam yemekleri geç başlar; restoranlar saat 21:00'den sonra canlanır."
      ],
      phrasebook: [
        { phrase: "Günaydın / Merhaba", native: "Kalimera / Yassas", phonetic: "Ka-li-me-ra / Ya-sas", translation: "Günaydın / Merhaba", audioLang: "el-GR" },
        { phrase: "Teşekkür ederim", native: "Efcharisto", phonetic: "Ef-ha-ris-to", translation: "Teşekkürler", audioLang: "el-GR" },
        { phrase: "Şerefe / Sağlığımıza!", native: "Stin ygeia mas!", phonetic: "Stin yi-ya mas!", translation: "Sağlığımıza!", audioLang: "el-GR" },
        { phrase: "Çok lezzetli", native: "Nostimo", phonetic: "Nos-ti-mo", translation: "Lezzetli", audioLang: "el-GR" }
      ],
      packingEssentials: ["Kaymayan tabanlı rahat sandalet (mermer merdivenler kaygandır)", "Geniş güneş şapkası & rüzgar bağı", "Güneş gözlüğü & deniz kıyafetleri", "Hafif akşam şalı"]
    },
    {
      id: "no-norway",
      name: "Norveç (Tromsø & Fiyortlar)",
      country: "Norveç",
      continent: "Avrupa",
      flag: "🇳🇴",
      tagline: "Kutup Işıkları Dansı, Kırmızı Balıkçı Kulübeleri & Buzul Fiyortları",
      description: "Kuzey Kutup Çizgisi'nin ötesinde, gökyüzünü yeşile boyayan kuzey ışıklarını izleyin, orkalarla fiyort safarilerine katılın ve karla kaplı dağların sessizliğini dinleyin.",
      heroImage: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.96,
      reviews: 1840,
      climate: "Subarktik İklim",
      bestSeason: "Kasım - Mart (Kutup Işıkları) & Haziran - Ağustos (Gece Yarısı Güneşi)",
      currency: { code: "NOK", symbol: "kr", rateToTRY: 3.1, rateToUSD: 11.2 },
      language: "Norveççe",
      averageDailyBudget: { backpacker: 90, explorer: 220, luxury: 540 },
      tags: ["Doğa", "Macera", "Fotoğrafçılık", "Kutup"],
      visaInfo: {
        badgeText: "Schengen Vizesi",
        badgeClass: "visa-schengen",
        bordoStatus: "Schengen Vizesi Gerekli",
        bordoDetail: "Norveç Schengen Bölgesi üyesidir. Bordo pasaport hamilleri VFS Global aracılığıyla Norveç Schengen vizesi almalıdır.",
        yesilStatus: "Vizesiz (90 Gün)",
        yesilDetail: "Yeşil pasaport sahipleri 180 gün içinde 90 güne kadar vizesiz seyahat edebilir.",
        passportValidity: "Planlanan ayrılış tarihinden itibaren en az 3 ay geçerli pasaport.",
        mandatoryDocs: [
          "Kutup şartlarına uygun Seyahat Sağlık Sigortası (30.000 €)",
          "Konaklama ve gidiş-dönüş uçak rezervasyonları",
          "Maddi yeterlilik belgesi (Günde en az 500 NOK karşılığı bakiye)"
        ],
        tips: "Norveç vize başvurularında kış aktivitelerinin (balina safarisi, kuzey ışıkları turları) planını sunmak vize sürecini olumlu etkiler."
      },
      highlights: [
        "Gökyüzünde Dans Eden Aurora Borealis",
        "Lofoten Kırmızı Ahşap Rorbuer Kulübeleri",
        "Fjellheisen Teleferiği Panoraması (421m)",
        "Sessiz Elektrikli Katamaranla Balina Safarisi"
      ],
      attractions: [
        {
          name: "Lofoten Rorbuer Kulübeleri",
          type: "Kutup Sahili",
          description: "Granit dağ duvarlarının eteğinde, denizin üzerinde direklerle yükselen tarihi kırmızı balıkçı evleri.",
          icon: "🏡",
          image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Kutup Işıkları (Aurora Borealis)",
          type: "Gök Olayı",
          description: "Manyetik kutup gecelerinde gökyüzünde dalgalanan neon yeşili ve mor ışık perdeleri.",
          icon: "🌌",
          image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Geiranger & Nærøyfjord Fiyortları",
          type: "UNESCO Doğa Mirası",
          description: "Buzulların oyduğu yüzlerce metre yükseklikteki dik kayalıklar ve çağlayan şelaleler.",
          icon: "🌊",
          image: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=500&q=80"
        }
      ],
      cuisine: [
        { dish: "Klippfisk & Taze Fiyort Somonu", nativeName: "Tuzlanmış Morina & Somon", description: "Kutup sularından yakalanan taze somon ve aromatik sebzelerle fırınlanmış morina.", icon: "🐟" },
        { dish: "Brunost (Karamelize Kahverengi Peynir)", nativeName: "Brunost & Waffle", description: "Keçi sütünün karamelize edilmesiyle elde edilen tatlımsı meşhur İskandinav peyniri.", icon: "🧀" },
        { dish: "Kral Yengeç Bacakları", nativeName: "Kongekrabbe", description: "Barents Denizi'nin dev tatlı kral yengeci, eritilmiş tereyağı ve limon eşliğinde.", icon: "🦀" }
      ],
      cultureTips: [
        "'Allemannsretten' (Doğada Serbest Dolaşım Hakkı): Saygılı olmak kaydıyla kamu arazilerinde çadır kurabilirsiniz.",
        "Norveç neredeyse tamamen nakitsiz bir toplumdur; her yerde banka/kredi kartı geçerlidir.",
        "Norveçliler dakikliğe ve doğanın sessizliğine olağanüstü saygı duyar."
      ],
      phrasebook: [
        { phrase: "Merhaba", native: "Hei / Hallo", phonetic: "Hey / Hal-lo", translation: "Merhaba", audioLang: "no-NO" },
        { phrase: "Binlerce teşekkür!", native: "Tusen takk", phonetic: "Tu-sen tak", translation: "Çok teşekkür ederim", audioLang: "no-NO" },
        { phrase: "İyi yolculuklar!", native: "God tur!", phonetic: "Gud tur!", translation: "İyi seyahatler!", audioLang: "no-NO" },
        { phrase: "Balinaları nerede görebiliriz?", native: "Hvor kan vi se hvaler?", phonetic: "Vur kan vi se va-ler?", translation: "Balinalar nerede görülür?", audioLang: "no-NO" }
      ],
      packingEssentials: ["Ağır kaz tüyü termal parka", "Merinos yünü termal içlikler", "Buzda kaymayı önleyen krampon (Yaktrax)", "Fotoğraf makinesi için sağlam tripod (Aurora için)", "Yalıtımlı termos"]
    },
    {
      id: "is-iceland",
      name: "İzlanda (Reykjavik & Altın Çember)",
      country: "İzlanda",
      continent: "Avrupa",
      flag: "🇮🇸",
      tagline: "Buzul Şelaleleri, Jeotermal Gayzerler & Simsiyah Volkanik Kumsallar",
      description: "Ateş ve buzun diyarında mineral zengini turkuaz Mavi Lagün'de dinlenin, yüzlerce metre havaya fışkıran sıcak su gayzerlerini ve gök gürültüsü gibi akan şelaleleri seyredin.",
      heroImage: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.93,
      reviews: 2410,
      climate: "Kutup & Subarktik",
      bestSeason: "Eylül - Mart (Kuzey Işıkları) & Haziran - Ağustos (Gece Yarısı Güneşi)",
      currency: { code: "ISK", symbol: "kr", rateToTRY: 0.25, rateToUSD: 138 },
      language: "İzlandaca",
      averageDailyBudget: { backpacker: 85, explorer: 215, luxury: 510 },
      tags: ["Macera", "Doğa", "Sağlık & Termal", "Fotoğraf"],
      visaInfo: {
        badgeText: "Schengen Vizesi",
        badgeClass: "visa-schengen",
        bordoStatus: "Schengen Vizesi Gerekli",
        bordoDetail: "İzlanda Schengen üyesidir. Türkiye'de doğrudan İzlanda konsolosluğu vize birimi bulunmadığından başvurular Danimarka Başkonsolosluğu (VFS Global) üzerinden yürütülür.",
        yesilStatus: "Vizesiz (90 Gün)",
        yesilDetail: "Yeşil pasaport sahipleri 180 gün içinde 90 güne kadar vizesiz seyahat edebilir.",
        passportValidity: "Dönüş tarihinden itibaren en az 3 ay geçerli pasaport.",
        mandatoryDocs: [
          "Minimum 30.000 € teminatlı Schengen Seyahat Sigortası",
          "Uçak bileti ve otel/araç kiralama rezervasyonları",
          "Günlük masrafları karşılayacak banka hesap dökümü"
        ],
        tips: "İzlanda başvuruları Danimarka üzerinden işlendiğinden vize randevunuzu en az 6-8 hafta önce almanız önerilir."
      },
      highlights: [
        "Blue Lagoon Açık Hava Termal Spa",
        "Gullfoss İki Kademeli Kanyon Şelalesi",
        "Strokkur Jeotermal Gayzer Patlamaları",
        "Reynisfjara Simsiyah Volkanik Sahili"
      ],
      attractions: [
        {
          name: "Blue Lagoon (Mavi Lagün)",
          type: "Jeotermal Termal Havuz",
          description: "Kara lav kayalıklarının ortasında silika ve mineral yüklü süt mavisi 38°C sıcak sular.",
          icon: "♨️",
          image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Gullfoss Şelalesi",
          type: "Doğa Harikası",
          description: "Buzul nehrinin derin bir kanyona döküldüğü devasa ve görkemli şelale.",
          icon: "🌊",
          image: "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Reynisfjara Siyah Kumsal",
          type: "Bazalt Sahil",
          description: "Dev bazalt sütunları ve Atlas Okyanusu'nun köpüklü dalgalarıyla çevrili siyah kumsal.",
          icon: "🌋",
          image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=500&q=80"
        }
      ],
      cuisine: [
        { dish: "İzlanda Kuzu Çorbası", nativeName: "Íslensk Kjötsúpa", description: "Yerel kuzu eti, kök sebzeler ve aromatik otlarla ağır ateşte pişirilen şifalı çorba.", icon: "🍲" },
        { dish: "Plokkfiskur", nativeName: "Fırında Balık Yahnisi", description: "Morina balığı, patates ve beşamel sosun eritilmiş peynirle fırınlanmış hali.", icon: "🐟" },
        { dish: "Rúgbrauð (Volkanik Çavdar Ekmeği)", nativeName: "Hverabrauð", description: "Toprağın altına gömülerek jeotermal buharla 24 saatte pişen tatlımsı çavdar ekmeği.", icon: "🍞" }
      ],
      cultureTips: [
        "Termal lagünlere girmeden önce mayosuz duş almak zorunlu bir hijyen kuralıdır.",
        "İşaretli yolların dışına asla araçla çıkmayın; narin volkanik yosunların yenilenmesi on yıllar alır.",
        "Ülkede nakit para kullanımı yoktur, temassız kart her yerde kabul edilir."
      ],
      phrasebook: [
        { phrase: "Merhaba", native: "Halló / Góðan daginn", phonetic: "Hal-lo / Go-than day-in", translation: "Merhaba", audioLang: "is-IS" },
        { phrase: "Teşekkür ederim", native: "Takk fyrir", phonetic: "Tak fir-ir", translation: "Teşekkürler", audioLang: "is-IS" },
        { phrase: "Şerefe!", native: "Skál!", phonetic: "Skowl!", translation: "Şerefe!", audioLang: "is-IS" },
        { phrase: "Kuzey ışıkları nerede?", native: "Hvar eru norðurljósin?", phonetic: "Kvar e-ru nor-dur-lyo-sin?", translation: "Kuzey ışıkları nerede?", audioLang: "is-IS" }
      ],
      packingEssentials: ["Su ve rüzgar geçirmez gore-tex mont", "Yün termal alt ve üst giysiler", "Sağlam su geçirmez yürüyüş botu", "Mayo & mikrofiber çabuk kuruyan havlu", "Tripod & yedek kamera bataryaları"]
    },
    {
      id: "th-thailand",
      name: "Tayland (Chiang Mai & Adalar)",
      country: "Tayland",
      continent: "Asya",
      flag: "🇹🇭",
      tagline: "Altın Budist Tapınakları, Gece Pazarları & Zümrüt Lagünler",
      description: "Kuzeyde sisli dağlardaki fil koruma alanları ve fenerlerle aydınlanan antik tapınaklardan, güneyde kireçtaşı adaları ve turkuaz sulara uzanan egzotik bir rüya.",
      heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.92,
      reviews: 3650,
      climate: "Tropikal Muson",
      bestSeason: "Kasım - Şubat (Serin ve Kuru Dönem)",
      currency: { code: "THB", symbol: "฿", rateToTRY: 0.94, rateToUSD: 36.5 },
      language: "Tayca",
      averageDailyBudget: { backpacker: 25, explorer: 65, luxury: 220 },
      tags: ["Kültür", "Gastronomi", "Deniz & Sahil", "Doğa"],
      visaInfo: {
        badgeText: "VİZESİZ (60 Gün)",
        badgeClass: "visa-free",
        bordoStatus: "Vizesiz (60 Gün Muafiyet)",
        bordoDetail: "Bordo pasaport sahibi Türk vatandaşları, Tayland Hükümeti'nin yeni kararıyla 60 güne kadar turistik amaçlı seyahatlerde vizeden muaftır.",
        yesilStatus: "Vizesiz (60 Gün)",
        yesilDetail: "Yeşil (Hususi) pasaport sahipleri de 60 güne kadar vizeden muaftır.",
        passportValidity: "Tayland'a giriş tarihinden itibaren en az 6 ay geçerli pasaport.",
        mandatoryDocs: [
          "Gidiş ve dönüş uçak bileti rezervasyonu",
          "Konaklama adresi / otel rezervasyonu",
          "Kişi başı en az 10.000 THB veya aile başı 20.000 THB nakit veya kart bakiye kanıtı"
        ],
        tips: "Pasaport kontrolünde dönüş biletinizi göstermeniz istenebilir. 60 günden fazla kalmak isterseniz yerel göçmenlik ofisinden 30 gün uzatılabilir."
      },
      highlights: [
        "Wat Phra That Doi Suthep Dağ Tapınağı",
        "Phi Phi Adaları & Maya Koyu",
        "Chiang Mai Pazar Yürüyüş Caddesi",
        "Etik Fil Doğa Koruma Kampı"
      ],
      attractions: [
        {
          name: "Doi Suthep Altın Tapınağı",
          type: "Budist Tapınağı",
          description: "Chiang Mai şehrini kuşbakışı gören 306 basamaklı ejderha merdiveni ve altın pagoda.",
          icon: "🛕",
          image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Phi Phi Adaları & Maya Bay",
          type: "Tropikal Lagün",
          description: "Yükselen kireçtaşı kayalıklarıyla çevrili berrak zümrüt rengi sığ deniz.",
          icon: "🛶",
          image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Gece Sokak Pazarları",
          type: "Kültür & Alışveriş",
          description: "Akustik müzikler eşliğinde el emeği hediyelikler ve yüzlerce çeşit sokak lezzeti.",
          icon: "🏮",
          image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=500&q=80"
        }
      ],
      cuisine: [
        { dish: "Khao Soi Köri Eriştesi", nativeName: "ข้าวซอย", description: "Hindistan cevizi sütlü sarı köri çorbası içinde taze yumurtalı erişte ve çıtır kıtır garnitür.", icon: "🍜" },
        { dish: "Pad Thai Karidesli", nativeName: "ผัดไทยโบราณ", description: "Wok tavada tamarind sosu, tofu, taze karides ve kavrulmuş yer fıstığıyla çevrilen pirinç eriştesi.", icon: "🍤" },
        { dish: "Mango Sticky Rice", nativeName: "ข้าวเหนียวมะม่วง", description: "Tatlı olgun sarı mango dilimleri ve sıcak hindistancevizi sütlü yapışkan pirinç tatlısı.", icon: "🥭" }
      ],
      cultureTips: [
        "Selamlaşırken avuçları göğüs hizasında birleştirip başı hafifçe öne eğmek ('Wai') derin saygıdır.",
        "Ayak tabanınızı asla Buda heykellerine, rahiplere veya insanlara doğru uzatmayın.",
        "Tapınakları gezerken omuzların ve dizlerin kapalı olması zorunludur."
      ],
      phrasebook: [
        { phrase: "Merhaba (Erkek / Kadın)", native: "Sawatdee khrup / ka", phonetic: "Sa-vat-di krap / ka", translation: "Merhaba", audioLang: "th-TH" },
        { phrase: "Teşekkür ederim", native: "Khop khun khrup / ka", phonetic: "Kop kun krap / ka", translation: "Teşekkür ederim", audioLang: "th-TH" },
        { phrase: "Çok acı olmasın lütfen", native: "Mai phet mak", phonetic: "May pet mak", translation: "Az acılı olsun", audioLang: "th-TH" },
        { phrase: "Bu ne kadar?", native: "Tao rai?", phonetic: "Tao ray?", translation: "Fiyatı ne kadar?", audioLang: "th-TH" }
      ],
      packingEssentials: ["Hafif keten veya pamuklu giysiler", "Sivrisinek koruyucu sprey", "Tapınaklar için kolay giyilen terlik/sandalet", "Tekne turları için su geçirmez çanta"]
    },
    {
      id: "pe-peru",
      name: "Peru (Cusco & Machu Picchu)",
      country: "Peru",
      continent: "Amerika",
      flag: "🇵🇪",
      tagline: "Bulutların İçindeki Kayıp İnka Şehri & Kutsal And Vadileri",
      description: "And Dağları'nın sisli zirvelerinde 15. yüzyıldan kalan Machu Picchu mabedini keşfedin, rengarenk gökkuşağı dağlarına tırmanın ve dünyanın en zengin And mutfağını tadın.",
      heroImage: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.97,
      reviews: 2950,
      climate: "And Dağ İklimi",
      bestSeason: "Mayıs - Ekim (Kuru And Sezonu)",
      currency: { code: "PEN", symbol: "S/.", rateToTRY: 9.2, rateToUSD: 3.75 },
      language: "İspanyolca, Keçuva",
      averageDailyBudget: { backpacker: 35, explorer: 90, luxury: 290 },
      tags: ["Tarih", "Macera", "Kültür", "Gastronomi"],
      visaInfo: {
        badgeText: "VİZESİZ (90 Gün)",
        badgeClass: "visa-free",
        bordoStatus: "Vizesiz (90 Gün Muafiyet)",
        bordoDetail: "Bordo (Umuma Mahsus) pasaport hamili Türk vatandaşları 180 gün içinde 90 güne kadar turistik seyahatlerinde vizeden muaftır.",
        yesilStatus: "Vizesiz (90 Gün)",
        yesilDetail: "Yeşil (Hususi) pasaport sahipleri 90 güne kadar vizesiz giriş yapabilir.",
        passportValidity: "Seyahat tarihinden itibaren en az 6 ay geçerli pasaport.",
        mandatoryDocs: [
          "Gidiş-dönüş uçak bileti",
          "Otel rezervasyonları veya Machu Picchu tren/giriş biletleri",
          "Sarıhumma aşı kartı (Amazon havzasına geçilecekse zorunludur)"
        ],
        tips: "Machu Picchu giriş biletleri aylar öncesinden tükenebilmektedir; seyahatinizden önce resmi siteden biletinizi ayırtın."
      },
      highlights: [
        "Machu Picchu İnka Kalesi",
        "Vinicunca Gökkuşağı Dağı (5.200m)",
        "Kutsal And Vadisi & Ollantaytambo",
        "Cusco Tarihi Kolonyal Taş Sokakları"
      ],
      attractions: [
        {
          name: "Machu Picchu",
          type: "Dünya Harikası",
          description: "And Dağları sırtlarında harçsız dev taş bloklarla inşa edilmiş gizemli İnka şehri.",
          icon: "⛰️",
          image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Vinicunca Gökkuşağı Dağı",
          type: "Jeolojik Harika",
          description: "Farklı mineral katmanlarının oluşturduğu rengarenk şeritlerle 5.200 metredeki görsel şölen.",
          icon: "🌈",
          image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Ollantaytambo Kalesi",
          type: "İnka Harabeleri",
          description: "Kutsal Vadi'yi koruyan devasa teraslar ve antik astronomik gözlemevi kalıntıları.",
          icon: "🗿",
          image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=500&q=80"
        }
      ],
      cuisine: [
        { dish: "Ceviche Peruano", nativeName: "Taze Ceviche", description: "Misket limonu suyuyla marine edilmiş taze levrek, kırmızı soğan, dev İnka mısırı ve tatlı patates.", icon: "🥗" },
        { dish: "Lomo Saltado", nativeName: "And Usulü Bonfile Kavurma", description: "Wok tavada domates, soğan ve patatesle sotelenmiş marine dana bonfile parçaları.", icon: "🥩" },
        { dish: "Causa Limeña", nativeName: "Sarı Patates Keki", description: "Aji amarillo biberli sarı patates ezmesi katmanları arasında tiftik tavuk ve avokado.", icon: "🥔" }
      ],
      cultureTips: [
        "Cusco'ya varışta yüksek irtifa hastalığına (soroche) karşı ilk 24-48 saat dinlenin ve koka çayı için.",
        "Yerel halkın ve lamaların fotoğrafını çekerken izin istemek ve küçük bir bahşiş bırakmak nezakettir.",
        "Halk pazarlarında güler yüzle pazarlık yapmak alışılmış bir gelenektir."
      ],
      phrasebook: [
        { phrase: "Günaydın", native: "Buenos días", phonetic: "Bwe-nos di-as", translation: "Günaydın", audioLang: "es-ES" },
        { phrase: "Bu ne kadar?", native: "¿Cuánto cuesta?", phonetic: "Kuan-to kwes-ta?", translation: "Fiyatı ne kadar?", audioLang: "es-ES" },
        { phrase: "Gazsız su lütfen", native: "Agua sin gas, por favor", phonetic: "Ag-va sin gas, por fa-vor", translation: "Durgun su lütfen", audioLang: "es-ES" },
        { phrase: "Nasılsın? (Keçuva Dili)", native: "Allillanchu", phonetic: "Al-yil-yan-çu", translation: "Nasılsın? (İnka dili)", audioLang: "es-ES" }
      ],
      packingEssentials: ["Yükseklik hastalığı hapları & koka şekeri", "Kat kat giyilebilecek termal ve hafif kıyafetler", "UV korumalı güneş gözlüğü & şapka", "Kauçuk uçlu yürüyüş batonları"]
    },
    {
      id: "ma-morocco",
      name: "Fas (Marakeş & Sahra)",
      country: "Fas",
      continent: "Afrika",
      flag: "🇲🇦",
      tagline: "Kızıl Medine Labirentleri, Baharat Kokuları & Sahra Çölü",
      description: "Jemaa el-Fnaa meydanının masalsı kargaşasından huzurlu çinili riadlara, ardından altın rengi kum tepelerinde yıldızlar altında çöl kampına unutulmaz bir sefer.",
      heroImage: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.88,
      reviews: 2140,
      climate: "Çöl & Akdeniz",
      bestSeason: "Mart - Mayıs & Eylül - Kasım",
      currency: { code: "MAD", symbol: "DH", rateToTRY: 3.4, rateToUSD: 10.1 },
      language: "Arapça, Berberi, Fransızca",
      averageDailyBudget: { backpacker: 30, explorer: 80, luxury: 270 },
      tags: ["Kültür", "Tarih", "Macera", "Gastronomi"],
      visaInfo: {
        badgeText: "VİZESİZ (90 Gün)",
        badgeClass: "visa-free",
        bordoStatus: "Vizesiz (90 Gün Muafiyet)",
        bordoDetail: "Bordo ve Yeşil pasaport sahibi Türk vatandaşları Fas'a turistik amaçlı seyahatlerinde 90 güne kadar vizeden muaftır.",
        yesilStatus: "Vizesiz (90 Gün)",
        yesilDetail: "Yeşil pasaport sahipleri de 90 güne kadar vizesiz giriş yapabilir.",
        passportValidity: "Fas'a giriş tarihinden itibaren en az 6 ay geçerli pasaport.",
        mandatoryDocs: [
          "Gidiş ve kesin dönüş uçak bileti",
          "Otel veya Riad konaklama rezervasyon belgesi",
          "Uçakta veya pasaport kontrolünde doldurulan beyaz giriş kartı formu"
        ],
        tips: "Pasaport polisleri girişte kalacağınız otelin adını ve dönüş tarihinizi sorar; belgeleri el bagajınızda taşıyın."
      },
      highlights: [
        "Jemaa el-Fnaa Tarihi UNESCO Meydanı",
        "Jardin Majorelle & Yves Saint Laurent Müzesi",
        "Erg Chebbi Sahra Çölü Deve Kervanı & Kampı",
        "Bahia Sarayı İnce Oyma Ahşap Mimarisi"
      ],
      attractions: [
        {
          name: "Jemaa el-Fnaa Meydanı",
          type: "Tarihi Meydan & Çarşı",
          description: "Yılan oynatıcıları, hikaye anlatıcıları, baharatçılar ve yüzlerce dumanı tüten yemek tezgahı.",
          icon: "🎪",
          image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Jardin Majorelle",
          type: "Botanik Bahçe",
          description: "Kobalt mavisi tarihi villa, devasa kaktüs koleksiyonu ve huzurlu nilüfer havuzları.",
          icon: "🌵",
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Erg Chebbi Kum Tepeleri",
          type: "Sahra Çölü",
          description: "150 metre yüksekliğe ulaşan altın kum tepelerinde gün batımı ve Berberi müzikli kamp ateşi.",
          icon: "🐫",
          image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=500&q=80"
        }
      ],
      cuisine: [
        { dish: "Kuzu Etli & Kuru Erikli Tajin", nativeName: "طاجين باللحم", description: "Toprak kapta safran, badem ve balda karamelize kuru eriklerle saatlerce pişen kuzu eti.", icon: "🍲" },
        { dish: "Tavuklu ve Bademli Pastilla", nativeName: "بسطيلة", description: "Baharatlı et, kavrulmuş badem ve tarçınlı pudra şekeriyle sarılmış çıtır yufka böreği.", icon: "🥧" },
        { dish: "Geleneksel Taze Naneli Çay", nativeName: "شاي بالنعناع", description: "Yüksekten dökülerek köpürtülen taze nane yapraklı yeşil barut çayı.", icon: "🫖" }
      ],
      cultureTips: [
        "Geleneksel ortak yemeklerde ve eşya uzatırken daima sağ el kullanılır.",
        "İkram edilen taze nane çayını geri çevirmek kabalık kabul edilir; misafirperverliğin sembolüdür.",
        "Çarşılarda sabır, tebessüm ve samimiyetle pazarlık yapmak kültürün bir parçasıdır."
      ],
      phrasebook: [
        { phrase: "Selamün Aleyküm / Merhaba", native: "السلام عليكم", phonetic: "Es-selamu aleykum", translation: "Merhaba", audioLang: "ar-SA" },
        { phrase: "Teşekkür ederim", native: "شكراً", phonetic: "Şükran", translation: "Teşekkürler", audioLang: "ar-SA" },
        { phrase: "Bu ne kadar?", native: "بشحال هذا؟", phonetic: "Bişhal hada?", translation: "Fiyatı nedir?", audioLang: "ar-SA" },
        { phrase: "Hayır, teşekkürler", native: "لا، شكراً", phonetic: "La, şükran", translation: "İstemiyorum, teşekkürler", audioLang: "ar-SA" }
      ],
      packingEssentials: ["Güneşten ve kumdan koruyan pamuklu şal (Şeş)", "Hafif, dökümlü ve rahat kıyafetler", "Kolay giyilip çıkarılan sandaletler", "Elektrolit tozları & el dezenfektanı"]
    },
    {
      id: "nz-newzealand",
      name: "Yeni Zelanda (Queenstown)",
      country: "Yeni Zelanda",
      continent: "Okyanusya",
      flag: "🇳🇿",
      tagline: "Dünyanın Macera Başkenti, Fiyortlar & Buzul Gölleri",
      description: "Dev kanyonlarda jet bot turları, bungee jumping heyecanı ve dünyanın sekizinci harikası sayılan el değmemiş Milford Sound fiyortlarında huzurlu bir seyir.",
      heroImage: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.95,
      reviews: 1720,
      climate: "Ilıman Okyanusal",
      bestSeason: "Aralık - Şubat (Yaz & Doğa) & Haziran - Ağustos (Kar & Kayak)",
      currency: { code: "NZD", symbol: "NZ$", rateToTRY: 20.8, rateToUSD: 1.68 },
      language: "İngilizce, Maori",
      averageDailyBudget: { backpacker: 70, explorer: 175, luxury: 420 },
      tags: ["Macera", "Doğa", "Yolculuk", "Vahşi Yaşam"],
      visaInfo: {
        badgeText: "Online Vize (Visitor Visa)",
        badgeClass: "visa-online",
        bordoStatus: "Vize Gerekli (Online Visitor Visa)",
        bordoDetail: "Bordo ve Yeşil pasaport sahibi Türk vatandaşları Yeni Zelanda Göçmenlik Bürosu resmi internet sitesinden online 'Visitor Visa' başvurusu yapmalıdır.",
        yesilStatus: "Vize Gerekli (Online Visitor Visa)",
        yesilDetail: "Yeşil pasaport sahipleri de vizeye tabidir; işlemler tamamen online yürütülür, pasaport göndermeye gerek yoktur.",
        passportValidity: "Yeni Zelanda'dan ayrılış tarihinden itibaren en az 3 ay geçerli pasaport.",
        mandatoryDocs: [
          "Online doldurulan başvuru formu ve biyometrik fotoğraf",
          "Maddi yeterlilik kanıtı (Aylık kişi başı en az 1.000 NZD bakiye)",
          "Dönüş uçak bileti rezervasyonu veya seyahat planı"
        ],
        tips: "Online vize başvurusu ortalama 3-5 hafta sürebilmektedir; Avustralya üzerinden aktarma yapacaksanız Avustralya transit vizesi de gerekebilir."
      },
      highlights: [
        "Milford Sound Fiyort Gemi Gezisi",
        "Shotover Kanyonu Sürat Jet Botu",
        "Remarkables Sıradağları Manzarası",
        "Wakatipu Gölü Kıyısı & Skyline Gondol"
      ],
      attractions: [
        {
          name: "Milford Sound (Piopiotahi)",
          type: "Fiyort Harikası",
          description: "Karanlık suların içinden dimdik yükselen 1200 metrelik dev granit dağlar ve şelaleler.",
          icon: "🐬",
          image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Shotover River Kanyonları",
          type: "Adrenalin",
          description: "Dar kaya yarıklarının arasında 85 km hızla 360 derece dönen ikonik jet bot deneyimi.",
          icon: "🚤",
          image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Skyline Gondola & Luge",
          type: "Panoramik Eğlence",
          description: "Bob's Peak tepesinden Queenstown ve Remarkables dağlarına bakan yerçekimli kızak pisti.",
          icon: "🚡",
          image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=80"
        }
      ],
      cuisine: [
        { dish: "Fergburger", nativeName: "Ferg Deluxe Gurme Burger", description: "Birinci sınıf Yeni Zelanda dana etiyle yapılan dünyaca ünlü efsanevi gurme burger.", icon: "🍔" },
        { dish: "Yeşil Dudaklı Midye", nativeName: "Kūtai (Green-Lipped)", description: "Marlborough beyaz şarabı ve sarımsakla buharda pişirilen dev yerel kıyı midyeleri.", icon: "🦪" },
        { dish: "Taze Kivili Pavlova", nativeName: "Pavlova Tatlısı", description: "Dışı çıtır beze, içi yumuşacık krema ve taze kivi dilimleriyle hafif ulusal tatlı.", icon: "🍰" }
      ],
      cultureTips: [
        "'Kaitiakitanga' (Doğanın Koruyuculuğu): Doğaya saygı en temel değerdir; asla çöp bırakmayın.",
        "Trafik soldan akar; virajlı dağ yollarında hız sınırlarına titizlikle uyulur.",
        "Yeni Zelanda'da bahşiş zorunlu değildir ancak olağanüstü servis için takdir edilir."
      ],
      phrasebook: [
        { phrase: "Merhaba / Sağlıkla kal (Maori)", native: "Kia ora", phonetic: "Ki-a or-a", translation: "Merhaba", audioLang: "en-NZ" },
        { phrase: "Teşekkür ederim (Maori)", native: "Ngā mihi", phonetic: "Nga mi-hi", translation: "Teşekkürler", audioLang: "en-NZ" },
        { phrase: "Aferin dostum / Harika", native: "Good on ya, mate", phonetic: "Gud on ya, meyt", translation: "Harika dostum", audioLang: "en-NZ" },
        { phrase: "Hoş geldiniz", native: "Haere mai", phonetic: "Hay-re may", translation: "Hoş geldiniz", audioLang: "en-NZ" }
      ],
      packingEssentials: ["Su ve rüzgar geçirmez nefes alan mont", "Fiyort sinekleri için böcek kovucu sprey", "UV 400 filtreli güneş gözlüğü", "Geniş açılı manzara lensi"]
    },
    {
      id: "eg-egypt",
      name: "Mısır (Kahire & Giza Piramitleri)",
      country: "Mısır",
      continent: "Afrika",
      flag: "🇪🇬",
      tagline: "Beş Bin Yıllık Firavunlar, Piramitler & Nil Nehri Esintisi",
      description: "Dünyanın antik harikası Giza Piramitleri ve Sfenks'in heybeti önünde durun, Büyük Mısır Müzesi'nde Tutankamon'un altın hazinelerini keşfedin ve Nil'de yelken açın.",
      heroImage: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=600&q=80"
      ],
      rating: 4.87,
      reviews: 2630,
      climate: "Kurak Çöl İklimi",
      bestSeason: "Ekim - Nisan (Ilıman ve Keyifli Dönem)",
      currency: { code: "EGP", symbol: "E£", rateToTRY: 0.72, rateToUSD: 48.5 },
      language: "Arapça",
      averageDailyBudget: { backpacker: 25, explorer: 70, luxury: 240 },
      tags: ["Tarih", "Kültür", "Macera", "Gastronomi"],
      visaInfo: {
        badgeText: "Kapıda Vize / Kolay Vize",
        badgeClass: "visa-arrival",
        bordoStatus: "Kapıda Vize (25 USD) veya E-Vize",
        bordoDetail: "Türkiye Cumhuriyeti Bordo pasaport sahipleri, son yasal düzenlemeyle Mısır havalimanlarında (Kahire, Şarm El-Şeyh, Hurgada) 25 USD karşılığında 30 günlük Kapıda Vize veya seyahat öncesi resmi E-Vize alabilmektedir.",
        yesilStatus: "Vizesiz (90 Gün)",
        yesilDetail: "Yeşil (Hususi) pasaport hamili vatandaşlarımız 90 güne kadar tamamen vizesiz giriş hakkına sahiptir.",
        passportValidity: "Giriş tarihinden itibaren en az 6 ay geçerli pasaport.",
        mandatoryDocs: [
          "Gidiş-dönüş uçak bileti",
          "Otel rezervasyon belgesi",
          "Kapıda vize harcı için 25 ABD Doları nakit (bozukluk hazır bulundurulmalıdır)"
        ],
        tips: "Kapıda vize kuyruğuna girmeden önce banka gişesinden 25$ vize pulunu satın alıp pasaportunuza yapıştırmanız gerekmektedir."
      },
      highlights: [
        "Giza Piramitleri & Büyük Sfenks",
        "Büyük Mısır Müzesi (GEM) ve Altın Maske",
        "Han el-Halili Tarihi Çarşısı",
        "Nil Nehri'nde Geleneksel Feluka Gün Batımı"
      ],
      attractions: [
        {
          name: "Giza Piramitleri & Sfenks",
          type: "Antik Dünya Harikası",
          description: "4.500 yıldır ayakta duran Keops, Kefren ve Mikerinos piramitlerinin dev taş blokları.",
          icon: "📐",
          image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Büyük Mısır Müzesi",
          type: "Dünya Çapında Müze",
          description: "Kral Tutankamon'un mezar hazinelerini eksiksiz sergileyen gezegenin en büyük arkeoloji müzesi.",
          icon: "🏛️",
          image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "Han el-Halili Çarşısı",
          type: "Ortaçağ Pazarı",
          description: "Pirinç lambalar, gümüş takılar, baharatlar ve kakuleli taze Arap kahvesi kokulu sokaklar.",
          icon: "🏺",
          image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=500&q=80"
        }
      ],
      cuisine: [
        { dish: "Koshary", nativeName: "كشري", description: "Mısır'ın milli lezzeti: mercimek, pirinç, makarna, baharatlı domates sosu ve çıtır kızarmış soğan.", icon: "🍲" },
        { dish: "Ta'ameya (Mısır Falafeli)", nativeName: "طعمية", description: "İç bakla, taze kişniş ve susamla hazırlanan zümrüt yeşili çıtır sıcak köfteler.", icon: "🧆" },
        { dish: "Om Ali Tatlısı", nativeName: "أم علي", description: "Milföy hamuru, sıcak süt, fıstık, kuru üzüm ve hindistanceviziyle fırınlanmış sıcak tatlı.", icon: "🥣" }
      ],
      cultureTips: [
        "Mısır kültüründe küçük hizmetler için bahşiş ('Bahşiş') vermek köklü ve beklenen bir adettir.",
        "Tarihi camileri ve kamu alanlarını gezerken omuzları ve bacakları örten kıyafetler tercih edin.",
        "Daima mühürlü şişe su için ve taksilerde önceden fiyat netleştirin veya Uber tercih edin."
      ],
      phrasebook: [
        { phrase: "Selamün Aleyküm / Merhaba", native: "السلام عليكم", phonetic: "Es-selamu aleykum", translation: "Merhaba", audioLang: "ar-EG" },
        { phrase: "Çok teşekkür ederim", native: "شكراً جزيلاً", phonetic: "Şükran cezilen", translation: "Çok teşekkürler", audioLang: "ar-EG" },
        { phrase: "Hoş geldiniz!", native: "أهلاً وسهلاً", phonetic: "Ahlen ve sehlen", translation: "Hoş geldiniz", audioLang: "ar-EG" },
        { phrase: "Sorun yok / Her şey yolunda", native: "مفيش مشكلة", phonetic: "Mafi-ş muşkila", translation: "Problem değil", audioLang: "ar-EG" }
      ],
      packingEssentials: ["Geniş siperlikli safari şapkası", "Hafif ve nefes alan pamuklu/keten kıyafetler", "Kumda rahat yürümek için kapalı spor ayakkabı", "Islak mendil & el dezenfektanı"]
    }
  ];

  const CONTINENTS = ["Tümü", "Avrupa", "Asya", "Amerika", "Afrika", "Okyanusya"];

  const THEME_PALETTES = {
    light: {
      name: "Gündüz Aydınlığı (Açık)",
      icon: "☀️"
    },
    dark: {
      name: "Gece Alacakaranlığı (Koyu)",
      icon: "🌙"
    },
    aurora: {
      name: "Nordic Aurora (Zümrüt)",
      icon: "🌌"
    }
  };

  return {
    DESTINATIONS: DESTINATIONS,
    CONTINENTS: CONTINENTS,
    THEME_PALETTES: THEME_PALETTES
  };
});
