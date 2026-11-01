/**
 * Data Sejarah Indonesia - Nusantara
 * Informasi komprehensif era, pahlawan nasional, kuis, dan simbol kebangsaan.
 */

const HISTORY_DATA = {
  eras: [
    { id: "all", label: "Semua Era" },
    { id: "hindu-buddha", label: "Hindu - Buddha" },
    { id: "islam", label: "Kesultanan Islam" },
    { id: "kolonial", label: "Perlawanan Kolonial" },
    { id: "kebangkitan", label: "Kebangkitan Nasional" },
    { id: "kemerdekaan", label: "Detik Kemerdekaan 1945" },
    { id: "revolusi", label: "Revolusi Fisik (1945-1949)" },
    { id: "modern", label: "Era Modern & Diplomasi" }
  ],

  timeline: [
    {
      id: "kutai-taruma",
      era: "hindu-buddha",
      period: "Abad ke-4 – ke-7 M",
      title: "Fajar Peradaban: Kerajaan Kutai & Tarumanegara",
      badge: "Awal Aksara Nusantara",
      image: "assets/images/borobudur.jpg",
      summary: "Prasasti Yupa di Muara Kaman, Kutai menandai babak awal sejarah tertulis di Indonesia. Disusul oleh Tarumanegara di Jawa Barat dengan Raja Purnawarman.",
      details: `Penemuan prasasti Yupa bertarikh sekitar abad ke-4 Masehi di Muara Kaman, Kalimantan Timur menjadi bukti tertulis tertua peradaban Nusantara. Raja Mulawarman dicatat mempersembahkan 20.000 ekor sapi kepada kaum Brahmana sebagai wujud kemakmuran.
      
      Di Pulau Jawa, Kerajaan Tarumanegara berkembang megah di bawah pimpinan Raja Purnawarman, yang terkenal dengan pembangunan saluran irigasi Sungai Gomati sepanjang 11 km untuk mencegah banjir dan menyuburkan pertanian rakyat.`,
      keyFigures: ["Raja Mulawarman", "Raja Purnawarman"],
      legacy: "Batu tulis Yupa berhuruf Pallawa dan Bahasa Sanskerta, sistem irigasi kuno.",
      location: "Kalimantan Timur & Jawa Barat"
    },
    {
      id: "sriwijaya",
      era: "hindu-buddha",
      period: "Abad ke-7 – ke-11 M",
      title: "Sriwijaya: Kemaharajaan Bahari Terbesar Asia Tenggara",
      badge: "Kekuatan Maritim Dunia",
      image: "assets/images/borobudur.jpg",
      summary: "Pusat perdagangan jalur sutra laut dunia dan mercusuar pembelajaran agama Buddha internasional yang dikunjungi peziarah Tiongkok I-Tsing.",
      details: `Berpusat di tepian Sungai Musi, Palembang, Kedatuan Sriwijaya menguasai Selat Malaka dan Selat Sunda. Sriwijaya menjadi simpul pelayaran dunia yang menghubungkan Tiongkok, India, dan Timur Tengah.
      
      Pendeta I-Tsing dari Tiongkok mencatat ada lebih dari 1.000 biksu yang belajar di Sriwijaya sebelum melanjutkan ke Nalanda, India. Armada bahari Sriwijaya menjamin keamanan samudera, menjadikannya imperium maritim legendaris.`,
      keyFigures: ["Dapunta Hyang Sri Jayanasa", "Balaputradewa"],
      legacy: "Kedaulatan maritim, Prasasti Kedukan Bukit (682 M), diplomasi lintas benua.",
      location: "Sumatera Selatan, Riau, Melayu"
    },
    {
      id: "mataram-kuno",
      era: "hindu-buddha",
      period: "Abad ke-8 – ke-10 M",
      title: "Wangsa Syailendra & Sanjaya: Mahakarya Borobudur & Prambanan",
      badge: "Puncak Arsitektur Kuno",
      image: "assets/images/borobudur.jpg",
      summary: "Masa keemasan peradaban Jawa Kuno yang melahirkan mahakarya dunia: Candi Borobudur (Buddha) dan Candi Prambanan (Hindu), simbol harmoni spiritualitas.",
      details: `Kerajaan Mataram Kuno di Jawa Tengah menjadi teladan kerukunan antara Dinasti Syailendra (Buddha Mahayana) dan Dinasti Sanjaya (Hindu Siwa).
      
      Raja Samaratungga memprakarsai pembangunan Candi Borobudur—candi Buddha terbesar di dunia dengan 2.672 panel relief dan 504 arca Buddha. Tak jauh darinya, Rakai Pikatan membangun Candi Prambanan (Siwagrha) dengan relief Ramayana yang anggun dan menembus langit Jawa.`,
      keyFigures: ["Samaratungga", "Pramodhawardhani", "Rakai Pikatan"],
      legacy: "Candi Borobudur & Candi Prambanan (Situs Warisan Dunia UNESCO).",
      location: "Magelang & Sleman, Jawa Tengah - Yogyakarta"
    },
    {
      id: "majapahit",
      era: "hindu-buddha",
      period: "1293 – 1527 M",
      title: "Kemaharajaan Majapahit & Sumpah Palapa Pemersatu Nusantara",
      badge: "Wilayah Kejayaan Terluas",
      image: "assets/images/diponegoro.jpg",
      summary: "Didirikan oleh Raden Wijaya, mencapai puncak kejayaan di bawah Raja Hayam Wuruk dan Mahapatih Gajah Mada dengan ikrar suci menyatukan pulau-pulau Nusantara.",
      details: `Setelah menghalau serbuan balatentara Mongol Dinasti Yuan pada tahun 1293, Raden Wijaya mendirikan Kerajaan Majapahit di Trowulan, Jawa Timur.
      
      Pada upacara penobatannya tahun 1336, Mahapatih Gajah Mada mengucapkan Sumpah Palapa yang legendaris: tidak akan menikmati kesenangan duniawi sebelum seluruh penjuru kepulauan Nusantara (dari Semenanjung Melayu hingga Papua bagian barat) bersatu. Di bawah kepemimpinan Prabu Hayam Wuruk, hukum, seni, sastra Negarakretagama, dan perdagangan antarpulau berkembang pesat.`,
      keyFigures: ["Raden Wijaya", "Hayam Wuruk", "Mahapatih Gajah Mada", "Tribhuwana Tunggadewi"],
      legacy: "Sumpah Palapa, semboyan 'Bhinneka Tunggal Ika' dari Kitab Sutasoma karya Mpu Tantular.",
      location: "Trowulan, Jawa Timur (meluas se-Asia Tenggara)"
    },
    {
      id: "samudera-pasai-demak",
      era: "islam",
      period: "Abad ke-13 – ke-16 M",
      title: "Fajar Islam di Nusantara: Samudera Pasai & Kesultanan Demak",
      badge: "Pintu Masuk Islam & Wali Songo",
      image: "assets/images/borobudur.jpg",
      summary: "Samudera Pasai berdiri sebagai kesultanan Islam pertama di Nusantara, disusul Kesultanan Demak yang dipimpin Raden Patah dengan peran besar Wali Songo.",
      details: `Samudera Pasai di Aceh utara menjadi pusat penyebaran Islam pertama di Asia Tenggara, dibuktikan dengan nisan Sultan Malik al-Saleh (1297 M). Pelaut penjelajah kenamaan Ibnu Battuta kagum akan kemakmuran dan keramahan Pasai.
      
      Di Jawa, Kesultanan Demak Bintoro didirikan oleh Raden Patah dengan dukungan dewan sembilan wali (Wali Songo). Masjid Agung Demak dengan saka guru tatal menjadi lambang perpaduan arsitektur lokal dan nilai dakwah damai. Adipati Unus (Pangeran Sabrang Lor) bahkan memimpin armada gabungan menyerang Portugis di Malaka pada 1513.`,
      keyFigures: ["Sultan Malik al-Saleh", "Raden Patah", "Pati Unus", "Sunan Kalijaga"],
      legacy: "Masjid Agung Demak, mata uang dirham emas Pasai, akulturasi budaya wayang dan gamelan dengan nilai tauhid.",
      location: "Aceh & Demak, Jawa Tengah"
    },
    {
      id: "mataram-islam-aceh-ternate",
      era: "islam",
      period: "Abad ke-16 – ke-17 M",
      title: "Masa Emas Kesultanan: Sultan Agung, Iskandar Muda, & Babullah",
      badge: "Kedaulatan & Perlawanan Awal",
      image: "assets/images/borobudur.jpg",
      summary: "Era kejayaan Mataram Islam di bawah Sultan Agung yang berani menggempur benteng VOC Batavia, kejayaan Kesultanan Aceh Darussalam, dan Kesultanan Ternate penguasa rempah.",
      details: `Sultan Agung Hanyokrokusumo memperluas pengaruh Mataram hingga mencakup hampir seluruh Jawa dan memimpin penyerbuan legendaris ke markas VOC di Batavia tahun 1628 dan 1629. Beliau juga memadukan kalender Saka dan Hijriah menjadi Kalender Jawa.
      
      Di barat, Kesultanan Aceh Darussalam di bawah Sultan Iskandar Muda menjadi benteng maritim terkuat dengan hukum Adat Meukuta Alam. Di timur, Sultan Babullah dari Ternate berhasil mengusir Portugis dan mengukuhkan dirinya sebagai 'Penguasa 72 Pulau'.`,
      keyFigures: ["Sultan Agung Hanyokrokusumo", "Sultan Iskandar Muda", "Sultan Babullah"],
      legacy: "Kalender Jawa, sistem pertanian irigasi sawah, hukum adat Meukuta Alam.",
      location: "Yogyakarta, Aceh, Kepulauan Maluku"
    },
    {
      id: "perang-diponegoro",
      era: "kolonial",
      period: "1825 – 1830 M",
      title: "Perang Jawa: Perjuangan Suci Pangeran Diponegoro",
      badge: "Perang Terbesar Abad ke-19",
      image: "assets/images/diponegoro.jpg",
      summary: "Perang berkobar selama 5 tahun yang mengguncang kekuasaan kolonial Hindia Belanda hingga membuat kas kolonial bangkrut dan mengubah taktik pertempuran darat.",
      details: `Pangeran Diponegoro mengangkat senjata setelah patok-patok jalan Belanda melintasi makam leluhurnya di Tegalrejo tanpa izin, serta kebobrokan campur tangan Belanda di keraton Yogyakarta.
      
      Didukung oleh Kyai Mojo sebagai penasihat spiritual dan Sentot Alibasya Prawirodirdjo sebagai komandan perang gerilya berkuda, Pangeran Diponegoro memimpin Perang Sabil. Belanda terpaksa mengerahkan sistem Benteng Stelsel untuk mempersempit ruang gerak. Setelah ditipu dalam perundingan damai di Magelang tahun 1830, beliau ditawan dan diasingkan ke Makassar. Peristiwa penangkapan ini diabadikan secara heroik oleh pelukis Raden Saleh.`,
      keyFigures: ["Pangeran Diponegoro", "Kyai Mojo", "Sentot Alibasya", "Jenderal De Kock"],
      legacy: "Karya sastra otobiografi Babad Diponegoro (Warisan Ingatan Dunia UNESCO).",
      location: "Jawa Tengah & D.I. Yogyakarta"
    },
    {
      id: "perang-aceh-cut-nyak",
      era: "kolonial",
      period: "1873 – 1904 M",
      title: "Perang Aceh & Keteguhan Srikandi Cut Nyak Dhien",
      badge: "Perang Kolonial Terpanjang",
      image: "assets/images/cut_nyak_dhien.jpg",
      summary: "Rakyat Aceh menggelorakan Perang Sabil melawan agresi Belanda. Sosok pejuang wanita Cut Nyak Dhien dan Teuku Umar memimpin gerilya di belantara hutan rimba.",
      details: `Belanda mendeklarasikan perang terhadap Aceh pada 1873, namun dikejutkan oleh tewasnya Jenderal J.H.R. Kohler di pelataran Masjid Raya Baiturrahman.
      
      Setelah suaminya Teuku Ibrahim Lamnga dan Teuku Umar gugur syahid, Cut Nyak Dhien mengambil alih komando pasukan perlawanan. Meskipun matanya telah rabun dan fisiknya didera usia senja, beliau menolak menyerah dan terus mengobarkan semangat pantang tunduk kepada penjajah hingga akhirnya tertangkap di pedalaman hutan Meulaboh.`,
      keyFigures: ["Cut Nyak Dhien", "Teuku Umar", "Panglima Polim", "Cut Meutia"],
      legacy: "Simbol keteguhan wanita Indonesia dan ketabahan spiritual pejuang bangsa.",
      location: "Aceh & Sumedang"
    },
    {
      id: "kebangkitan-nasional-1908",
      era: "kebangkitan",
      period: "20 Mei 1908 & 1928",
      title: "Kebangkitan Nasional & Ikrar Sakral Sumpah Pemuda",
      badge: "Lahirnya Kesadaran Bersatu",
      image: "assets/images/kartini.jpg",
      summary: "Pergeseran perjuangan dari kedaerahan bersenjata menuju pergerakan modern berbasis organisasi intelektual, dipelopori Budi Utomo dan berpuncak pada Sumpah Pemuda 1928.",
      details: `Gagasan dr. Wahidin Soedirohoesodo dan para mahasiswa STOVIA seperti dr. Soetomo melahirkan Boedi Oetomo pada 20 Mei 1908 (kini Hari Kebangkitan Nasional). Gerakan ini memicu lahirnya Sarekat Islam, Indische Partij, dan organisasi kepemudaan.
      
      Pada 28 Oktober 1928, dalam Kongres Pemuda II di Batavia, pemuda dari Jong Java, Jong Sumatranen Bond, Jong Ambon, Jong Batak, dan Jong Celebes mengikrarkan janji suci: Satu Nusa, Satu Bangsa, dan Satu Bahasa Indonesia, diiringi untuk pertama kalinya lagu 'Indonesia Raya' gubahan Wage Rudolf Supratman melalui gesekan biolanya.`,
      keyFigures: ["dr. Soetomo", "R.A. Kartini", "Ki Hajar Dewantara", "Soegondo Djojopoespito", "W.R. Supratman"],
      legacy: "Bahasa Indonesia sebagai bahasa persatuan, Lagu Indonesia Raya, Ikrar Sumpah Pemuda.",
      location: "Jakarta, Yogyakarta, Surabaya"
    },
    {
      id: "detik-proklamasi-1945",
      era: "kemerdekaan",
      period: "17 Agustus 1945",
      title: "Detik-Detik Proklamasi Kemerdekaan Republik Indonesia",
      badge: "Puncak Kedaulatan Bangsa",
      image: "assets/images/proklamasi.jpg",
      summary: "Pukul 10.00 WIB di Jl. Pegangsaan Timur 56 Jakarta, Ir. Soekarno didampingi Drs. Mohammad Hatta membacakan teks proklamasi yang mengumandangkan kemerdekaan Indonesia ke mata dunia.",
      details: `Pasca menyerahnya Jepang kepada Sekutu, para pemuda mendesak Soekarno dan Hatta segera memproklamasikan kemerdekaan tanpa campur tangan Jepang melalui Peristiwa Rengasdengklok pada 16 Agustus 1945.
      
      Malam harinya, di rumah Laksamana Tadashi Maeda di Menteng, konsep teks proklamasi dirumuskan secara cermat oleh Soekarno, Hatta, dan Achmad Soebardjo. Teks kemudian diketik oleh Sayuti Melik dengan beberapa koreksi bersejarah. Tepat Jumat pagi 17 Agustus 1945 pukul 10.00 WIB, dengan suara berwibawa, Soekarno membacakan teks tersebut, disusul pengibaran Bendera Pusaka Merah Putih yang dijahit tangan oleh Ibu Fatmawati.`,
      keyFigures: ["Ir. Soekarno", "Drs. Mohammad Hatta", "Fatmawati", "Sayuti Melik", "Achmad Soebardjo", "Sukarni", "Latief Hendraningrat"],
      legacy: "Naskah Otentik Proklamasi, Bendera Pusaka Sang Saka Merah Putih, Berdirinya Negara Kesatuan Republik Indonesia.",
      location: "Jl. Pegangsaan Timur No. 56, Jakarta"
    },
    {
      id: "pertempuran-surabaya-1945",
      era: "revolusi",
      period: "10 November 1945",
      title: "Pertempuran Surabaya: Gelora Takbir Bung Tomo",
      badge: "Hari Pahlawan Nasional",
      image: "assets/images/soedirman.jpg",
      summary: "Perlawanan arek-arek Suroboyo mempertahankan kemerdekaan dari serbuan bala tentara Sekutu Inggris, melahirkan Hari Pahlawan Nasional.",
      details: `Paska insiden perobekan warna biru bendera Belanda di Hotel Yamato dan tewasnya Brigadir Jenderal Mallaby, Sekutu mengeluarkan ultimatum agar rakyat Surabaya menyerahkan senjata tanpa syarat sebelum 10 November 1945.
      
      Arek-arek Suroboyo bersama para santri (Resolusi Jihad KH Hasyim Asy'ari) menolak bertekuk lutut. Melalui siaran radio yang menyala-nyala, Bung Tomo mengumandangkan pekik 'Merdeka atau Mati!'. Pertempuran sengit berkecamuk berpekan-pekan dan mencengangkan pimpinan militer dunia atas gigihnya rakyat bersenjata bambu runcing menghadapi persenjataan modern.`,
      keyFigures: ["Bung Tomo (Sutomo)", "KH Hasyim Asy'ari", "Gubernur Suryo", "Moestopo"],
      legacy: "Ditetapkannya 10 November sebagai Hari Pahlawan, Tugu Pahlawan Surabaya.",
      location: "Surabaya, Jawa Timur"
    },
    {
      id: "gerilya-jenderal-sudirman",
      era: "revolusi",
      period: "1948 – 1949 M",
      title: "Perang Gerilya Semesta Jenderal Besar Soedirman",
      badge: "Keteladanan Prajurit Sejati",
      image: "assets/images/soedirman.jpg",
      summary: "Meski didera sakit paru-paru parah dan harus ditandu menembus hutan rimba, Panglima Besar Sudirman memimpin taktik gerilya melawan Agresi Militer Belanda II.",
      details: `Ketika Yogyakarta jatuh dalam Agresi Militer Belanda II pada 19 Desember 1948 dan pimpinan sipil Republik ditawan, Jenderal Soedirman memilih bergerilya ke pedalaman Jawa.
      
      Sepanjang ribuan kilometer berjalan kaki dan ditandu oleh prajurit setianya, Pak Dirman mengoordinasikan perlawanan rakyat. Puncaknya pada 1 Maret 1949, Serangan Umum di Yogyakarta membuktikan kepada Perserikatan Bangsa-Bangsa (PBB) bahwa Republik Indonesia dan TNI masih tegak berdiri, membuka jalan perundingan Roem-Royen dan Konferensi Meja Bundar.`,
      keyFigures: ["Jenderal Besar Soedirman", "Letkol Soeharto", "Sri Sultan Hamengkubuwono IX"],
      legacy: "Doktrin Perang Gerilya & Pertahanan Keamanan Rakyat Semesta (Hankamrata).",
      location: "D.I. Yogyakarta, Jawa Tengah, Jawa Timur"
    },
    {
      id: "diplomasi-kmb-1949",
      era: "revolusi",
      period: "23 Agustus – 2 November 1949",
      title: "Konferensi Meja Bundar: Pengakuan Kedaulatan Indonesia",
      badge: "Kemenangan Meja Perundingan",
      image: "assets/images/proklamasi.jpg",
      summary: "Puncak perjuangan diplomasi dipimpin Bung Hatta di Den Haag, Belanda, yang memaksa Kerajaan Belanda mengakui kedaulatan penuh Republik Indonesia.",
      details: `Perjuangan kemerdekaan Indonesia merupakan dwi-tunggal: diplomasi politik dan revolusi bersenjata. Di Den Haag, delegasi Republik dipimpin oleh Drs. Mohammad Hatta bertarung argumen secara cermat di Konferensi Meja Bundar (KMB).
      
      Pada 27 Desember 1949, penyerahan kedaulatan ditandatangani serentak di Amsterdam oleh Ratu Juliana dan di Jakarta oleh Sri Sultan Hamengkubuwono IX, menandai berakhirnya masa penjajahan Belanda dan kedaulatan penuh Indonesia diakui dunia internasional.`,
      keyFigures: ["Drs. Mohammad Hatta", "Sri Sultan Hamengkubuwono IX", "Roem", "Sutan Sjahrir"],
      legacy: "Kedaulatan de jure dan de facto Republik Indonesia, pengakuan status anggota PBB.",
      location: "Den Haag, Belanda & Jakarta"
    },
    {
      id: "kaa-deklarasi-djuanda",
      era: "modern",
      period: "1955 & 1957 M",
      title: "Konferensi Asia Afrika & Deklarasi Djuanda Kesatuan Maritim",
      badge: "Diplomasi Mengguncang Dunia",
      image: "assets/images/borobudur.jpg",
      summary: "Indonesia memimpin KAA 1955 di Bandung melahirkan Dasasila Bandung, serta Deklarasi Djuanda 1957 yang menyatukan laut kepulauan Nusantara menjadi satu kesatuan wilayah utuh.",
      details: `Pada April 1955, Gedung Merdeka Bandung menjadi saksi berkumpulnya 29 pemimpin negara Asia dan Afrika yang menentang kolonialisme dan imperialisme, melahirkan Gerakan Non-Blok.
      
      Dua tahun kemudian, tepat 13 Desember 1957, Perdana Menteri Djuanda Kartawidjaja mengumumkan Deklarasi Djuanda. Deklarasi ini mengubah batas laut teritorial dari warisan kolonial 3 mil menjadi 12 mil dari garis pangkal kepulauan. Deklarasi ini berhasil diperjuangkan hingga diakui hukum internasional PBB (UNCLOS 1982), menjadikan laut penghubung antar-pulau, bukan pemisah.`,
      keyFigures: ["Ir. Soekarno", "Djuanda Kartawidjaja", "Ali Sastroamidjojo", "Prof. Mochtar Kusumaatmadja"],
      legacy: "Dasasila Bandung, Konvensi Hukum Laut PBB (UNCLOS 1982), Hari Nusantara (13 Desember).",
      location: "Bandung, Jawa Barat & Jakarta"
    }
  ],

  heroes: [
    {
      id: "soekarno",
      name: "Ir. Soekarno",
      title: "Bapak Proklamator & Presiden Pertama RI",
      period: "1901 – 1970",
      image: "assets/images/proklamasi.jpg",
      quote: "Beri aku 1.000 orang tua, niscaya akan kucabut Semeru dari akarnya. Beri aku 10 pemuda, niscaya akan kuguncangkan dunia!",
      role: "Proklamator Kemerdekaan, Penggali Pancasila, Pemimpin Karismatik Gerakan Non-Blok.",
      bio: "Lahir di Blitar (Surabaya), Bung Karno adalah orator ulung yang memadukan gagasan nasionalisme, persatuan, dan keadilan sosial. Beliau memproklamasikan kemerdekaan Indonesia pada 17 Agustus 1945 bersama Bung Hatta dan memimpin bangsa di masa transisi revolusi.",
      tags: ["Proklamator", "Pancasila", "KAA Bandung"]
    },
    {
      id: "hatta",
      name: "Drs. Mohammad Hatta",
      title: "Bapak Proklamator & Bapak Koperasi Indonesia",
      period: "1902 – 1980",
      image: "assets/images/proklamasi_klad.jpg",
      quote: "Kurang cerdas dapat diperbaiki dengan belajar, kurang cakap dapat dihilangkan dengan pengalaman. Namun tidak jujur itu sulit diperbaiki.",
      role: "Proklamator Kemerdekaan, Pemimpin Delegasi KMB, Tokoh Ekonomi Kerakyatan.",
      bio: "Lahir di Bukittinggi, Sumatera Barat, Bung Hatta adalah intelektual teladan berintegritas tinggi. Beliau mendirikan Perhimpunan Indonesia di Belanda, merumuskan Pasal 33 UUD 1945 tentang perekonomian berbasis kekeluargaan, dan memimpin delegasi Indonesia di Konferensi Meja Bundar.",
      tags: ["Proklamator", "Ekonomi Kerakyatan", "Diplomat Ulung"]
    },
    {
      id: "diponegoro",
      name: "Pangeran Diponegoro",
      title: "Pahlawan Nasional Pemimpin Perang Jawa",
      period: "1785 – 1855",
      image: "assets/images/diponegoro.jpg",
      quote: "Harta dan tahta bukanlah kemuliaan, kemuliaan sejati adalah keteguhan membela kebenaran dan harkat martabat sesama.",
      role: "Pemimpin Perang Diponegoro (1825–1830), Pengarang Babad Diponegoro.",
      bio: "Putra sulung Sultan Hamengkubuwono III ini menolak kemewahan keraton demi membela rakyat kecil dari penindasan pajak dan campur tangan kolonial. Beliau memimpin perang gerilya selama 5 tahun yang menjadi perlawanan terbesar di tanah Jawa.",
      tags: ["Perang Jawa", "Babad Diponegoro", "Perlawanan Kolonial"]
    },
    {
      id: "cut-nyak-dhien",
      name: "Cut Nyak Dhien",
      title: "Srikandi Perang Aceh Pantang Tunduk",
      period: "1848 – 1908",
      image: "assets/images/cut_nyak_dhien.jpg",
      quote: "Sebagai perempuan Aceh, kita tidak boleh meneteskan air mata pada mereka yang telah syahid di jalan kebenaran!",
      role: "Panglima Perang Gerilya Aceh, Lambang Keberanian Wanita Pejuang.",
      bio: "Dilahirkan dari keluarga bangsawan agamis di Lampadang, Aceh, Cut Nyak Dhien meneruskan perjuangan suaminya Teuku Umar. Beliau memimpin gerilya di belantara hutan rimba Aceh hingga usia senja dengan mata yang telah rabun, menolak berlutut pada penjajah.",
      tags: ["Perang Aceh", "Keteguhan Wanita", "Gerilya Rimba"]
    },
    {
      id: "kartini",
      name: "Raden Ajeng Kartini",
      title: "Pelopor Emansipasi & Pendidikan Perempuan",
      period: "1879 – 1904",
      image: "assets/images/kartini.jpg",
      quote: "Habis Gelap Terbitlah Terang. Jangan pernah menyerah jika kamu masih ingin mencoba.",
      role: "Tokoh Pemikiran Modern, Pelopor Hak Pendidikan Perempuan & Kesetaraan.",
      bio: "Lahir di Jepara, putri Bupati Raden Mas Adipati Ario Sosroningrat ini menuangkan pemikiran kritisnya lewat surat-surat kepada sahabat penanya di Belanda. Kumpulan suratnya diterbitkan menjadi buku monumental 'Door Duisternis tot Licht' (Habis Gelap Terbitlah Terang).",
      tags: ["Emansipasi", "Pendidikan", "Habis Gelap Terbitlah Terang"]
    },
    {
      id: "soedirman",
      name: "Jenderal Besar Soedirman",
      title: "Panglima Besar TNI & Pahlawan Gerilya Semesta",
      period: "1916 – 1950",
      image: "assets/images/soedirman.jpg",
      quote: "Robek-robeklah badanku, potong-potonglah jasad ini, tetapi jiwaku yang dilindungi benteng Merah Putih akan tetap hidup selamanya!",
      role: "Panglima Angkatan Perang Pertama RI, Bapak Tentara Nasional Indonesia.",
      bio: "Seorang guru kepanduan Hizbul Wathan yang terpilih secara demokratis oleh para komandan tentara menjadi Panglima Besar TKR pada usia 29 tahun. Beliau memimpin taktik gerilya menembus hutan rimba dalam keadaan sakit tuberkulosis dengan satu paru-paru.",
      tags: ["Panglima Besar", "Perang Gerilya", "TNI"]
    },
    {
      id: "gajah-mada",
      name: "Mahapatih Gajah Mada",
      title: "Arsitek Pemersatu Kepulauan Nusantara",
      period: "Abad ke-14 M",
      image: "assets/images/borobudur.jpg",
      quote: "Lamun huwus kalah Nusantara, isun amukti palapa...",
      role: "Mahapatih Amangkubumi Kerajaan Majapahit, Pengikrar Sumpah Palapa.",
      bio: "Gajah Mada mengawali kariernya sebagai pimpinan pasukan pengawal raja (Bhayangkara). Berkat kepiawaian strategi militer dan wawasan kebangsaan yang visioner, ia berhasil mengintegrasikan kepulauan Nusantara di bawah payung perdamaian dan kemakmuran Majapahit.",
      tags: ["Sumpah Palapa", "Majapahit", "Bhayangkara"]
    },
    {
      id: "bung-tomo",
      name: "Sutomo (Bung Tomo)",
      title: "Pengobar Semangat Arek-Arek Suroboyo",
      period: "1920 – 1981",
      image: "assets/images/teks_proklamasi.jpg",
      quote: "Selama banteng-banteng Indonesia masih mempunyai darah merah yang dapat membikin secarik kain putih menjadi merah dan putih, maka selama itu kita tidak akan mau menyerah!",
      role: "Pemimpin Barisan Pemberontak Rakyat Indonesia (BPRI), Orator Perang 10 November 1945.",
      bio: "Jurnalis dan orator muda berbakat yang melalui corong radio membakar tekad ratusan ribu pemuda dan santri di Surabaya untuk mempertahankan kedaulatan republik dari gempuran tentara Sekutu Inggris.",
      tags: ["Hari Pahlawan", "Surabaya 1945", "Orator Radio"]
    }
  ],

  proklamasi: {
    tanggal: "Djakarta, hari 17 boelan 8 tahoen '05 (17 Agustus 1945)",
    tempat: "Jl. Pegangsaan Timur No. 56, Jakarta Pusat",
    waktu: "Pukul 10.00 WIB",
    naskahOtentik: `PROKLAMASI

Kami bangsa Indonesia dengan ini menjatakan kemerdekaan Indonesia.

Hal-hal jang mengenai pemindahan kekoeasaan d.l.l., diselenggarakan dengan tjara seksama dan dalam tempo jang sesingkat-singkatnja.

Djakarta, hari 17 boelan 8 tahoen 05.
Atas nama bangsa Indonesia.
Soekarno/Hatta.`,
    tokohHadir: [
      { nama: "Ir. Soekarno", peran: "Pembaca Teks Proklamasi & Konseptor" },
      { nama: "Drs. Mohammad Hatta", peran: "Pendamping Pembacaan & Konseptor" },
      { nama: "Sayuti Melik", peran: "Pengetik Naskah Otentik Proklamasi" },
      { nama: "Ibu Fatmawati", peran: "Penjahit Sang Saka Merah Putih" },
      { nama: "Latief Hendraningrat & Suhud", peran: "Pengibar Bendera Pertama" },
      { nama: "Achmad Soebardjo", peran: "Penjamin Keselamatan & Konseptor" },
      { nama: "BM Diah & Frans Mendur", peran: "Penyebar Warta & Fotografer Bersejarah" }
    ],
    kronologi: [
      { jam: "03.00 WIB", aksi: "Perumusan teks proklamasi di ruang makan Laksamana Maeda selesai dirumuskan." },
      { jam: "04.00 WIB", aksi: "Sayuti Melik mengetik naskah proklamasi dengan mesin tik milik Mayor Hermann Kandeler." },
      { jam: "09.30 WIB", aksi: "Massa dan barisan pemuda berkumpul dengan tertib di halaman Pegangsaan Timur 56." },
      { jam: "10.00 WIB", aksi: "Pidato pembukaan Bung Karno dan pembacaan teks proklamasi bersejarah." },
      { jam: "10.15 WIB", aksi: "Pengibaran Sang Saka Merah Putih diiringi kumandang lagu Indonesia Raya secara spontan." }
    ]
  },

  pancasila: {
    semboyan: "Bhinneka Tunggal Ika (Berbeda-beda tetapi tetap satu jua)",
    filosofiBulu: [
      { bagian: "Sayap Kanan & Kiri", jumlah: "17 Helai", makna: "Tanggal kemerdekaan (17)" },
      { bagian: "Ekor", jumlah: "8 Helai", makna: "Bulan kemerdekaan Agustus (8)" },
      { bagian: "Pangkal Ekor / Bawah Perisai", jumlah: "19 Helai", makna: "Dua angka pertama tahun kemerdekaan (19)" },
      { bagian: "Leher", jumlah: "45 Helai", makna: "Dua angka terakhir tahun kemerdekaan (45)" }
    ],
    sila: [
      { no: 1, simbol: "Bintang Emas", bunyi: "Ketuhanan yang Maha Esa", arti: "Cahaya rohani dari Tuhan Yang Maha Esa kepada setiap insan manusia." },
      { no: 2, simbol: "Rantai Emas", bunyi: "Kemanusiaan yang Adil dan Beradab", arti: "Gelang lingkaran (wanita) dan gelang persegi (pria) yang saling bertaut kuat tanpa membedakan derajat." },
      { no: 3, simbol: "Pohon Beringin", bunyi: "Persatuan Indonesia", arti: "Tempat berteduh dan berlindung yang kokoh dengan akar tunjang menancap dalam mencerminkan persatuan bangsa." },
      { no: 4, simbol: "Kepala Banteng", bunyi: "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan", arti: "Hewan sosial yang suka berkumpul, mencerminkan musyawarah untuk mufakat dalam mengambil keputusan." },
      { no: 5, simbol: "Padi dan Kapas", bunyi: "Keadilan Sosial bagi Seluruh Rakyat Indonesia", arti: "Pangan (padi) dan sandang (kapas) sebagai kebutuhan pokok seluruh rakyat secara adil dan merata." }
    ]
  },

  quiz: [
    {
      q: "Siapakah tokoh yang mengetik naskah otentik Proklamasi Kemerdekaan Indonesia pada subuh 17 Agustus 1945?",
      options: ["Achmad Soebardjo", "Sayuti Melik", "Sukarni", "BM Diah"],
      answer: 1,
      explanation: "Naskah tulisan tangan (klad) Bung Karno disempurnakan dan diketik rapi oleh Sayuti Melik dengan mesin tik buatan Jerman."
    },
    {
      q: "Mahapatih Gajah Mada mengikrarkan sumpah sakral untuk menyatukan kepulauan Nusantara yang dikenal dengan nama...",
      options: ["Sumpah Pemuda", "Sumpah Satya Kencana", "Sumpah Palapa", "Prasasti Ciaruteun"],
      answer: 2,
      explanation: "Sumpah Palapa diucapkan oleh Mahapatih Gajah Mada pada upacara pengangkatannya menjadi Patih Amangkubumi Majapahit tahun 1336 M."
    },
    {
      q: "Jumlah bulu pada leher Burung Garuda Pancasila melambangkan...",
      options: ["Tanggal kemerdekaan (17)", "Tahun kemerdekaan (45)", "Bulan kemerdekaan (8)", "Jumlah provinsi awal kemerdekaan"],
      answer: 1,
      explanation: "Bulu pada leher Garuda berjumlah 45 helai, melambangkan tahun kemerdekaan Republik Indonesia yaitu 1945."
    },
    {
      q: "Lukisan penangkapan bersejarah tokoh pahlawan berikut diabadikan dalam mahakarya pelukis Raden Saleh...",
      options: ["Pangeran Diponegoro", "Tuanku Imam Bonjol", "Sultan Hasanuddin", "Pattimura"],
      answer: 0,
      explanation: "Lukisan 'Penangkapan Pangeran Diponegoro' (1857) karya Raden Saleh merupakan respon berani terhadap lukisan pelukis Belanda Nicolaas Pieneman."
    },
    {
      q: "Deklarasi Djuanda yang dicetuskan pada 13 Desember 1957 memiliki arti penting bagi kedaulatan Indonesia karena...",
      options: [
        "Membubarkan Republik Indonesia Serikat",
        "Menyatakan laut di antara pulau Indonesia sebagai wilayah kedaulatan utuh pemersatu bangsa",
        "Menasionalisasi perusahaan dagang Belanda KPM",
        "Menetapkan mata uang resmi Rupiah pertama kali"
      ],
      answer: 1,
      explanation: "Deklarasi Djuanda menyatakan laut kepulauan Nusantara sebagai pemersatu, bukan pemisah, yang kelak diakui dunia melalui konvensi UNCLOS PBB 1982."
    },
    {
      q: "Siapakah sosok yang menjahit bendera Sang Saka Merah Putih yang pertama kali dikibarkan pada 17 Agustus 1945?",
      options: ["Cut Nyak Dhien", "Ibu Fatmawati", "R.A. Kartini", "Dewi Sartika"],
      answer: 1,
      explanation: "Ibu Fatmawati (istri Bung Karno) menjahit bendera pusaka Merah Putih dari dua helai kain katun Jepang dengan air mata haru menyongsong kemerdekaan."
    }
  ]
};
