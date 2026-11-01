/**
 * Nusantara - Logika Interaktif & Audio Web Sejarah Indonesia
 * Berjalan tanpa dependensi eksternal untuk kinerja optimal di GitHub Pages
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi State
  const state = {
    currentEra: 'all',
    searchQuery: '',
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: false,
    soundEnabled: true,
    audioPlaying: false,
    theme: localStorage.getItem('nusantara_theme') || 'light'
  };

  // Helper untuk update ikon tema
  function updateThemeIcon() {
    const btn = document.getElementById('btn-theme-toggle');
    if (!btn) return;
    btn.innerHTML = state.theme === 'dark' ? '☀️' : '🌙';
    btn.title = state.theme === 'dark' ? 'Ganti ke Tema Terang' : 'Ganti ke Tema Gelap (Dark Velvet)';
  }

  // Terapkan Tema Tersimpan
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();

  // 2. Audio Synthesizer (Web Audio API)
  // Menghasilkan efek suara interaktif tanpa perlu file MP3 eksternal!
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playTone(freq, type = 'sine', duration = 0.25, gainVal = 0.15) {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio note error:', e);
    }
  }

  // Efek Suara
  function soundClick() {
    playTone(523.25, 'triangle', 0.12, 0.08); // C5
  }

  function soundSuccess() {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Major arpeggio)
      notes.forEach((freq, i) => {
        setTimeout(() => {
          playTone(freq, 'sine', 0.2, 0.12);
        }, i * 80);
      });
    } catch (e) {}
  }

  function soundWrong() {
    if (!state.soundEnabled) return;
    try {
      playTone(220, 'sawtooth', 0.25, 0.1);
      setTimeout(() => playTone(196, 'sawtooth', 0.3, 0.1), 120);
    } catch (e) {}
  }

  // Ambient Gamelan / Hymn Synth Drone
  let ambientOsc1 = null, ambientOsc2 = null, ambientGain = null;
  function toggleAmbientSound() {
    const ctx = getAudioContext();
    const soundBtn = document.getElementById('btn-sound-toggle');

    if (state.audioPlaying) {
      // Matikan suara ambient
      if (ambientGain) {
        ambientGain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
        setTimeout(() => {
          if (ambientOsc1) ambientOsc1.stop();
          if (ambientOsc2) ambientOsc2.stop();
          ambientOsc1 = null;
          ambientOsc2 = null;
        }, 500);
      }
      state.audioPlaying = false;
      if (soundBtn) {
        soundBtn.innerHTML = '🔇';
        soundBtn.title = 'Nyalakan Suara Latar (Ambient)';
      }
    } else {
      // Hidupkan alunan drone gamelan pentatonik lembut
      try {
        ambientGain = ctx.createGain();
        ambientGain.gain.setValueAtTime(0.0001, ctx.currentTime);
        ambientGain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 2); // sangat lembut
        ambientGain.connect(ctx.destination);

        ambientOsc1 = ctx.createOscillator();
        ambientOsc1.type = 'sine';
        ambientOsc1.frequency.setValueAtTime(261.63, ctx.currentTime); // C4

        ambientOsc2 = ctx.createOscillator();
        ambientOsc2.type = 'triangle';
        ambientOsc2.frequency.setValueAtTime(392.00, ctx.currentTime); // G4

        ambientOsc1.connect(ambientGain);
        ambientOsc2.connect(ambientGain);

        ambientOsc1.start();
        ambientOsc2.start();
        state.audioPlaying = true;
        if (soundBtn) {
          soundBtn.innerHTML = '🎵';
          soundBtn.title = 'Matikan Suara Latar (Ambient)';
        }
      } catch (e) {
        console.warn('Ambient error:', e);
      }
    }
  }

  // 3. Render Era Tabs
  const eraTabsContainer = document.getElementById('era-tabs');
  if (eraTabsContainer && HISTORY_DATA.eras) {
    eraTabsContainer.innerHTML = HISTORY_DATA.eras.map(era => `
      <button class="era-tab-btn ${era.id === state.currentEra ? 'active' : ''}" data-era="${era.id}">
        ${era.label}
      </button>
    `).join('');

    eraTabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.era-tab-btn');
      if (!btn) return;
      soundClick();
      document.querySelectorAll('.era-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentEra = btn.dataset.era;
      renderTimeline();
    });
  }

  // 4. Render Linimasa (Timeline)
  const timelineContainer = document.getElementById('timeline-track');
  function renderTimeline() {
    if (!timelineContainer) return;

    let items = HISTORY_DATA.timeline;
    if (state.currentEra !== 'all') {
      items = items.filter(item => item.era === state.currentEra);
    }
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      items = items.filter(item => 
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q) ||
        (item.keyFigures && item.keyFigures.some(f => f.toLowerCase().includes(q)))
      );
    }

    if (items.length === 0) {
      timelineContainer.innerHTML = `
        <div style="text-align:center; padding:3rem 1rem; color:var(--abu-sedang);">
          <p style="font-size:1.2rem; font-weight:700;">Tidak ditemukan peristiwa pada era atau kata kunci ini.</p>
          <button class="btn btn-secondary" style="margin-top:1rem;" onclick="resetTimelineFilter()">Tampilkan Semua Era</button>
        </div>
      `;
      return;
    }

    timelineContainer.innerHTML = items.map((item, index) => `
      <div class="timeline-item reveal-on-scroll">
        <div class="timeline-node"></div>
        <div class="timeline-card">
          <div class="timeline-card-header">
            <span class="timeline-period">${item.period}</span>
            <span class="timeline-tag">${item.badge}</span>
          </div>
          <div class="timeline-img-wrap">
            <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='assets/images/borobudur.jpg'">
          </div>
          <h3 class="timeline-item-title">${item.title}</h3>
          <p class="timeline-item-desc">${item.summary}</p>
          <button class="btn-card-read" data-id="${item.id}">
            Baca Kisah Lengkap <span>&rarr;</span>
          </button>
        </div>
      </div>
    `).join('');

    // Hubungkan tombol baca selengkapnya
    timelineContainer.querySelectorAll('.btn-card-read').forEach(btn => {
      btn.addEventListener('click', () => {
        soundClick();
        openTimelineModal(btn.dataset.id);
      });
    });

    initScrollReveal();
  }

  window.resetTimelineFilter = function() {
    state.currentEra = 'all';
    state.searchQuery = '';
    const allBtn = document.querySelector('.era-tab-btn[data-era="all"]');
    if (allBtn) {
      document.querySelectorAll('.era-tab-btn').forEach(b => b.classList.remove('active'));
      allBtn.classList.add('active');
    }
    const searchInput = document.getElementById('search-history');
    if (searchInput) searchInput.value = '';
    renderTimeline();
  };

  // 5. Render Tokoh Pahlawan (Heroes)
  const heroesContainer = document.getElementById('heroes-grid');
  function renderHeroes() {
    if (!heroesContainer || !HISTORY_DATA.heroes) return;

    heroesContainer.innerHTML = HISTORY_DATA.heroes.map(hero => `
      <div class="hero-card reveal-on-scroll" data-hero-id="${hero.id}">
        <div class="hero-card-img-wrap">
          <img src="${hero.image}" alt="${hero.name}" loading="lazy" onerror="this.src='assets/images/proklamasi.jpg'">
          <span class="hero-card-period">${hero.period}</span>
        </div>
        <div class="hero-card-body">
          <h3 class="hero-card-name">${hero.name}</h3>
          <div class="hero-card-title">${hero.title}</div>
          <p class="hero-card-quote">"${hero.quote}"</p>
          <div class="hero-card-tags">
            ${hero.tags.map(t => `<span class="hero-tag">${t}</span>`).join('')}
          </div>
          <button class="btn btn-secondary btn-hero-detail" data-id="${hero.id}" style="margin-top:auto; width:100%; font-size:0.85rem; padding:0.6rem 1rem;">
            Telusuri Perjuangan &rarr;
          </button>
        </div>
      </div>
    `).join('');

    heroesContainer.querySelectorAll('.btn-hero-detail').forEach(btn => {
      btn.addEventListener('click', () => {
        soundClick();
        openHeroModal(btn.dataset.id);
      });
    });

    initScrollReveal();
  }

  // 6. Modal Dialog System
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalContainer = document.getElementById('modal-container');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openModal(htmlContent) {
    if (!modalBackdrop || !modalContainer) return;
    modalContainer.innerHTML = `
      <button class="modal-close-btn" id="modal-close-btn" aria-label="Tutup">&times;</button>
      ${htmlContent}
    `;
    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  function openTimelineModal(itemId) {
    const item = HISTORY_DATA.timeline.find(t => t.id === itemId);
    if (!item) return;

    const content = `
      <div style="margin-bottom:1.5rem;">
        <span class="badge-tag" style="margin-bottom:0.75rem;">${item.period} &bull; ${item.badge}</span>
        <h2 style="font-size:1.6rem; font-weight:800; line-height:1.2; margin-bottom:1rem; color:var(--gelap-teks);">${item.title}</h2>
        <div style="width:100%; height:260px; border-radius:var(--radius-md); overflow:hidden; margin-bottom:1.5rem;">
          <img src="${item.image}" alt="${item.title}" style="width:100%; height:100%; object-fit:cover;">
        </div>
      </div>
      <div style="font-size:1rem; line-height:1.7; color:var(--abu-gelap); margin-bottom:1.5rem;">
        ${item.details.split('\n\n').map(p => `<p style="margin-bottom:1rem;">${p.trim()}</p>`).join('')}
      </div>
      <div style="background:var(--putih-krem); border:1px solid var(--card-border); border-radius:var(--radius-md); padding:1.25rem;">
        <p style="margin-bottom:0.5rem; font-size:0.9rem;"><strong>Tokoh Kunci:</strong> ${item.keyFigures ? item.keyFigures.join(', ') : '-'}</p>
        <p style="margin-bottom:0.5rem; font-size:0.9rem;"><strong>Lokasi Utama:</strong> ${item.location || '-'}</p>
        <p style="font-size:0.9rem;"><strong>Warisan Sejarah:</strong> ${item.legacy || '-'}</p>
      </div>
    `;
    openModal(content);
  }

  function openHeroModal(heroId) {
    const hero = HISTORY_DATA.heroes.find(h => h.id === heroId);
    if (!hero) return;

    const content = `
      <div style="display:flex; gap:1.5rem; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap;">
        <div style="width:110px; height:110px; border-radius:50%; overflow:hidden; border:3px solid var(--merah-utama); flex-shrink:0;">
          <img src="${hero.image}" alt="${hero.name}" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div>
          <span class="badge-tag" style="margin-bottom:0.25rem;">${hero.period}</span>
          <h2 style="font-size:1.6rem; font-weight:800; color:var(--gelap-teks); margin-bottom:0.25rem;">${hero.name}</h2>
          <p style="color:var(--merah-utama); font-weight:700; font-size:0.95rem;">${hero.title}</p>
        </div>
      </div>
      <blockquote style="font-size:1.05rem; font-style:italic; border-left:4px solid var(--merah-utama); padding-left:1rem; margin-bottom:1.5rem; color:var(--gelap-teks); line-height:1.5;">
        "${hero.quote}"
      </blockquote>
      <div style="font-size:1rem; line-height:1.7; color:var(--abu-gelap); margin-bottom:1.5rem;">
        <p style="margin-bottom:1rem;"><strong>Peran Utama:</strong> ${hero.role}</p>
        <p>${hero.bio}</p>
      </div>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
        ${hero.tags.map(t => `<span class="hero-tag" style="padding:0.4rem 0.8rem; font-size:0.8rem;"># ${t}</span>`).join('')}
      </div>
    `;
    openModal(content);
  }

  // 7. Proklamasi Tabs & Speech Reader
  const tabOtentik = document.getElementById('tab-otentik');
  const tabKlad = document.getElementById('tab-klad');
  const proklamasiImg = document.getElementById('proklamasi-img-view');
  const proklamasiText = document.getElementById('proklamasi-text-display');

  if (tabOtentik && tabKlad) {
    tabOtentik.addEventListener('click', () => {
      soundClick();
      tabOtentik.classList.add('active');
      tabKlad.classList.remove('active');
      if (proklamasiImg) proklamasiImg.src = 'assets/images/teks_proklamasi.jpg';
      if (proklamasiText) {
        proklamasiText.innerText = HISTORY_DATA.proklamasi.naskahOtentik;
      }
    });

    tabKlad.addEventListener('click', () => {
      soundClick();
      tabKlad.classList.add('active');
      tabOtentik.classList.remove('active');
      if (proklamasiImg) proklamasiImg.src = 'assets/images/proklamasi_klad.jpg';
      if (proklamasiText) {
        proklamasiText.innerText = `P R O K L A M A S I

Kami bangsa Indonesia dengan ini menjatakan kemerdekaan Indonesia.
Hal2 jang mengenai pemindahan kekoeasaan d.l.l., diselenggarakan dengan tjara seksama dan dalam tempo jang sesingkat-singkatnja.

Djakarta, 17 - 8 - '05
Wakil2 bangsa Indonesia.`;
      }
    });
  }

  // Pembacaan Teks Proklamasi Suara (Web Speech API)
  const btnReadProklamasi = document.getElementById('btn-read-proklamasi');
  if (btnReadProklamasi) {
    btnReadProklamasi.addEventListener('click', () => {
      soundClick();
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const textToRead = "Proklamasi. Kami bangsa Indonesia dengan ini menyatakan kemerdekaan Indonesia. Hal-hal yang mengenai pemindahan kekuasaan dan lain-lain, diselenggarakan dengan cara seksama dan dalam tempo yang sesingkat-singkatnya. Djakarta, hari 17 bulan 8 tahun 05. Atas nama bangsa Indonesia, Soekarno, Hatta.";
        const utter = new SpeechSynthesisUtterance(textToRead);
        utter.lang = 'id-ID';
        utter.rate = 0.85; // Kecepatan khidmat
        utter.pitch = 0.9; // Nada berwibawa

        utter.onstart = () => {
          btnReadProklamasi.innerHTML = '🔊 Sedang Mengumandangkan...';
          btnReadProklamasi.style.background = 'var(--emas-terang)';
        };

        utter.onend = () => {
          btnReadProklamasi.innerHTML = '▶ Dengarkan Kumandang Proklamasi';
          btnReadProklamasi.style.background = 'var(--merah-utama)';
        };

        window.speechSynthesis.speak(utter);
      } else {
        alert('Fitur pembaca suara tidak didukung pada peramban ini.');
      }
    });
  }

  // 8. Kuis Interaktif (Trivia Sejarah)
  const quizBox = document.getElementById('quiz-box');
  const quizResultView = document.getElementById('quiz-result-view');

  function renderQuizQuestion() {
    if (!quizBox || !HISTORY_DATA.quiz) return;
    const item = HISTORY_DATA.quiz[state.quizIndex];
    if (!item) {
      showQuizResult();
      return;
    }

    state.quizAnswered = false;

    // Update Progress
    const progressText = document.getElementById('quiz-progress-text');
    const scoreBadge = document.getElementById('quiz-score-badge');
    const progressFill = document.getElementById('quiz-progress-fill');

    if (progressText) progressText.innerText = `Pertanyaan ${state.quizIndex + 1} dari ${HISTORY_DATA.quiz.length}`;
    if (scoreBadge) scoreBadge.innerText = `Skor: ${state.quizScore}`;
    if (progressFill) progressFill.style.width = `${((state.quizIndex) / HISTORY_DATA.quiz.length) * 100}%`;

    const questionText = document.getElementById('quiz-question-text');
    const optionsContainer = document.getElementById('quiz-options-container');
    const explanationBox = document.getElementById('quiz-explanation');
    const nextBtn = document.getElementById('quiz-next-btn');

    if (questionText) questionText.innerText = item.q;
    if (explanationBox) {
      explanationBox.style.display = 'none';
      explanationBox.innerHTML = '';
    }
    if (nextBtn) {
      nextBtn.style.display = 'none';
      nextBtn.innerText = state.quizIndex === HISTORY_DATA.quiz.length - 1 ? 'Lihat Hasil Akhir 🌟' : 'Pertanyaan Selanjutnya &rarr;';
    }

    const letters = ['A', 'B', 'C', 'D'];
    if (optionsContainer) {
      optionsContainer.innerHTML = item.options.map((opt, i) => `
        <button class="quiz-option-btn" data-index="${i}">
          <span class="quiz-option-letter">${letters[i]}</span>
          <span>${opt}</span>
        </button>
      `).join('');

      optionsContainer.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          handleQuizAnswer(parseInt(btn.dataset.index, 10));
        });
      });
    }
  }

  function handleQuizAnswer(selectedIndex) {
    if (state.quizAnswered) return;
    state.quizAnswered = true;

    const item = HISTORY_DATA.quiz[state.quizIndex];
    const optionBtns = document.querySelectorAll('.quiz-option-btn');
    const explanationBox = document.getElementById('quiz-explanation');
    const nextBtn = document.getElementById('quiz-next-btn');

    optionBtns.forEach(btn => {
      btn.disabled = true;
      const idx = parseInt(btn.dataset.index, 10);
      if (idx === item.answer) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex) {
        btn.classList.add('incorrect');
      }
    });

    if (selectedIndex === item.answer) {
      state.quizScore += 20;
      soundSuccess();
      const scoreBadge = document.getElementById('quiz-score-badge');
      if (scoreBadge) scoreBadge.innerText = `Skor: ${state.quizScore}`;
    } else {
      soundWrong();
    }

    if (explanationBox) {
      explanationBox.style.display = 'block';
      explanationBox.innerHTML = `
        <strong>${selectedIndex === item.answer ? '🎉 Benar Sekali!' : '💡 Penjelasan Sejarah:'}</strong>
        <p style="margin-top:0.35rem;">${item.explanation}</p>
      `;
    }

    if (nextBtn) nextBtn.style.display = 'inline-flex';
  }

  const nextBtn = document.getElementById('quiz-next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      soundClick();
      state.quizIndex++;
      if (state.quizIndex < HISTORY_DATA.quiz.length) {
        renderQuizQuestion();
      } else {
        showQuizResult();
      }
    });
  }

  function showQuizResult() {
    if (!quizBox || !quizResultView) return;
    quizBox.style.display = 'none';
    quizResultView.style.display = 'block';

    const maxScore = HISTORY_DATA.quiz.length * 20;
    const finalScore = state.quizScore;
    const percentage = Math.round((finalScore / maxScore) * 100);

    let badgeText = '🌟 Sejarawan Sejati / Patriot Utama Nusantara';
    let feedback = 'Luar biasa! Pengetahuan Anda tentang sejarah bangsa sangat mendalam dan membanggakan.';

    if (percentage < 50) {
      badgeText = '🔍 Pejuang yang Terus Belajar';
      feedback = 'Awal yang baik! Terus telusuri linimasa sejarah nusantara untuk memperdalam wawasan kebangsaan.';
    } else if (percentage < 80) {
      badgeText = '📖 Pelajar Sejarah Bersemangat';
      feedback = 'Hebat! Anda memahami tonggak-tonggak penting kemerdekaan Indonesia dengan sangat baik.';
    } else if (percentage < 100) {
      badgeText = '🎖️ Penjelajah Sejarah Nusantara';
      feedback = 'Sangat mengagumkan! Tinggal sedikit lagi untuk mencapai nilai sempurna sejarawan sejati.';
    }

    const scoreDisplay = document.getElementById('quiz-final-score');
    const badgeDisplay = document.getElementById('quiz-final-badge');
    const feedbackDisplay = document.getElementById('quiz-final-feedback');

    if (scoreDisplay) scoreDisplay.innerText = `${finalScore} / ${maxScore} Poin`;
    if (badgeDisplay) badgeDisplay.innerText = badgeText;
    if (feedbackDisplay) feedbackDisplay.innerText = feedback;

    soundSuccess();
  }

  const retryBtn = document.getElementById('btn-quiz-retry');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      soundClick();
      state.quizIndex = 0;
      state.quizScore = 0;
      if (quizBox) quizBox.style.display = 'block';
      if (quizResultView) quizResultView.style.display = 'none';
      renderQuizQuestion();
    });
  }

  // 9. Garuda Pancasila Interaktif
  const silaItems = document.querySelectorAll('.sila-item');
  silaItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      soundClick();
    });
  });

  // 10. Navigasi & Header Sticky
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      soundClick();
      navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Theme Toggle (Dark / Light)
  const themeToggle = document.getElementById('btn-theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      soundClick();
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('nusantara_theme', state.theme);
      updateThemeIcon();
    });
  }

  // Sound Toggle Button
  const soundToggleBtn = document.getElementById('btn-sound-toggle');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      toggleAmbientSound();
    });
  }

  // Back to Top Button
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      soundClick();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Search History Input
  const searchInput = document.getElementById('search-history');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderTimeline();
    });
  }

  // 11. Intersection Observer for Scroll Animations
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal-on-scroll:not(.visible)');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05, rootMargin: '60px 0px' });

      reveals.forEach(el => observer.observe(el));
    } else {
      reveals.forEach(el => el.classList.add('visible'));
    }

    // Segera tampilkan elemen yang sudah berada di viewport
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100) {
        el.classList.add('visible');
      }
    });
  }

  // Inisialisasi awal
  renderTimeline();
  renderHeroes();
  renderQuizQuestion();
  initScrollReveal();
});
