// KH-01/app.js
(function () {
  const i18n = {
    tr: {
      skip: "İçeriğe atla",
      headerTag: "Dijital Kartvizit",
      headerSub: "Profesyonel • Sade • Düzenli",

      navAbout: "Hakkımda",
      navExp: "Deneyim",
      navProj: "Projeler",
      navSkills: "Beceriler",
      navContact: "İletişim",

      heroKicker: "Merhaba, ben",
      heroRole: "Profesyonel profil • Kısa ve net anlatım",
      metaLocationLabel: "Konum",
      metaLocationValue: "Germany (örnek)",
      metaAudienceLabel: "Hedef",
      metaAudienceValue: "Herkes",
      metaFocusLabel: "Odak",
      metaFocusValue: "Dijital kartvizit + seçili işler",

      ctaPrimary: "İletişime Geç",
      ctaLinkedIn: "LinkedIn",
      ctaInstagram: "Instagram",
      heroNote: "CV ve fotoğraf paylaşılmadığı için sade, anonim bir görünüm kullanıldı.",
      visualCaption: "Dengeli tasarım • Akışkan okuma",

      aboutTitle: "Kısa Özet",
      aboutSub: "Bir bakışta kim olduğumu ve ne yaptığımı görün.",
      aboutP1:
        "Bu sayfa, dijital kartvizit gibi hızlıca gezinilebilecek şekilde tasarlandı. Net, sade ve profesyonel bir izlenim hedefler.",
      aboutP2:
        "Aşağıda deneyim, seçili projeler ve beceriler düzenli bloklar halinde yer alır. Amaç: karşı tarafa gereksiz kalabalık olmadan güven vermek.",

      expTitle: "Deneyim",
      expSub: "Zaman çizgisi gibi okunur, detay kaybolmaz.",
      exp1Role: "Pozisyon Başlığı (örnek)",
      exp1When: "2023 — 2026",
      exp1Company: "Şirket / Organizasyon (örnek)",
      exp1B1: "Kısa ve ölçülebilir bir sorumluluk cümlesi.",
      exp1B2: "Bir süreç iyileştirmesi veya katkı.",
      exp1B3: "Takım/iletişim yönünü gösteren bir madde.",
      exp2Role: "Önceki Pozisyon (örnek)",
      exp2When: "2020 — 2023",
      exp2Company: "Şirket / Organizasyon (örnek)",
      exp2B1: "Düzenli yürütülen bir sorumluluk alanı.",
      exp2B2: "Bir proje veya teslim çıktısı.",

      projTitle: "Projeler",
      projSub: "Liste halinde: hızlı tarama + net başlıklar.",
      projPill: "Seçilmiş",
      projHeader: "Öne Çıkan Çalışmalar",
      projHint: "Detayları görüşmede paylaşabilirim",
      proj1Name: "Proje Adı 1",
      proj1Desc: "Kısa açıklama: neydi, ne çözdü, neden önemliydi.",
      proj1Tag1: "Web",
      proj1Tag2: "Otomasyon",
      proj2Name: "Proje Adı 2",
      proj2Desc: "Kısa açıklama: sonuç, etki, kullanıcı değeri.",
      proj2Tag1: "Süreç",
      proj2Tag2: "Kalite",
      proj3Name: "Proje Adı 3",
      proj3Desc: "Kısa açıklama: teknik/iş tarafı dengesi.",
      proj3Tag1: "B2B",
      proj3Tag2: "İyileştirme",

      skillsTitle: "Beceriler",
      skillsSub: "Dengeli yoğunluk: hızlı taranır, abartı yok.",

      contactTitle: "İletişim",
      contactSub: "En hızlı kanal: WhatsApp. Diğerleri: LinkedIn ve e-posta.",
      contactFast: "Hızlı",
      contactNormal: "Normal",
      contactSlow: "Yavaş",
      contactEmail: "E-posta",
      contactSocial: "Sosyal",

      footerLine: "Sade & net kişisel sayfa",
      toTop: "Yukarı",
    },

    en: {
      skip: "Skip to content",
      headerTag: "Digital Business Card",
      headerSub: "Professional • Clean • Organized",

      navAbout: "About",
      navExp: "Experience",
      navProj: "Projects",
      navSkills: "Skills",
      navContact: "Contact",

      heroKicker: "Hi, I'm",
      heroRole: "Professional profile • Clear and structured",
      metaLocationLabel: "Location",
      metaLocationValue: "Germany (example)",
      metaAudienceLabel: "Audience",
      metaAudienceValue: "Everyone",
      metaFocusLabel: "Focus",
      metaFocusValue: "Business card + selected work",

      ctaPrimary: "Contact",
      ctaLinkedIn: "LinkedIn",
      ctaInstagram: "Instagram",
      heroNote: "No CV/photo provided, so this page uses a clean anonymous look.",
      visualCaption: "Balanced design • Smooth scroll",

      aboutTitle: "Quick Summary",
      aboutSub: "Understand who I am and what I do at a glance.",
      aboutP1:
        "This page is designed as a fast-scanning digital business card. The goal is a clean, professional impression without noise.",
      aboutP2:
        "Experience, selected projects, and skills are presented in structured blocks. The focus is clarity and trust.",

      expTitle: "Experience",
      expSub: "Reads like a timeline without losing detail.",
      exp1Role: "Role Title (example)",
      exp1When: "2023 — 2026",
      exp1Company: "Company / Organization (example)",
      exp1B1: "One measurable responsibility statement.",
      exp1B2: "A process improvement or contribution.",
      exp1B3: "A bullet that shows teamwork/communication.",
      exp2Role: "Previous Role (example)",
      exp2When: "2020 — 2023",
      exp2Company: "Company / Organization (example)",
      exp2B1: "A consistently owned responsibility area.",
      exp2B2: "A project or delivery outcome.",

      projTitle: "Projects",
      projSub: "List format: quick scan + clear headings.",
      projPill: "Selected",
      projHeader: "Highlighted Work",
      projHint: "Details available upon request",
      proj1Name: "Project Name 1",
      proj1Desc: "Short description: what it was, what it solved, why it mattered.",
      proj1Tag1: "Web",
      proj1Tag2: "Automation",
      proj2Name: "Project Name 2",
      proj2Desc: "Short description: outcome, impact, user value.",
      proj2Tag1: "Process",
      proj2Tag2: "Quality",
      proj3Name: "Project Name 3",
      proj3Desc: "Short description: balance of tech and business.",
      proj3Tag1: "B2B",
      proj3Tag2: "Improvement",

      skillsTitle: "Skills",
      skillsSub: "Balanced density: scannable and grounded.",

      contactTitle: "Contact",
      contactSub: "Fastest: WhatsApp. Alternatives: LinkedIn and email.",
      contactFast: "Fast",
      contactNormal: "Normal",
      contactSlow: "Slow",
      contactEmail: "Email",
      contactSocial: "Social",

      footerLine: "Clean, structured personal page",
      toTop: "Top",
    },
  };

  const qsa = (s, el = document) => Array.from(el.querySelectorAll(s));
  const qs = (s, el = document) => el.querySelector(s);

  function setLang(lang) {
    const dict = i18n[lang] || i18n.tr;
    qsa("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (dict[key] != null) node.textContent = dict[key];
    });

    qsa("[data-lang-btn]").forEach((btn) => {
      const on = btn.getAttribute("data-lang-btn") === lang;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });

    document.documentElement.lang = lang;
    try { localStorage.setItem("kh01_lang", lang); } catch (_) {}
  }

  // Language buttons
  qsa("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang-btn")));
  });

  // Top button
  const toTop = qs("[data-to-top]");
  if (toTop) {
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Init language
  let initial = "tr";
  try {
    const saved = localStorage.getItem("kh01_lang");
    if (saved === "en" || saved === "tr") initial = saved;
  } catch (_) {}
  setLang(initial);
})();
