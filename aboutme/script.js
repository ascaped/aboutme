let currentBackground = 1;
const totalBackgrounds = 10;
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close-btn');

const randomDescriptions = [
  "17 years old, Turkish, fluent in 2 languages, loves gaming and developing stuff. (GMT +3)",
  "Professional bug creator, also a bug fixer. And pretty good at gaming... sometimes. (GMT +3)",
  "I write code until it works, then never touch it again because I'm scared it'll break. (GMT +3)", 
  "Currently in a committed relationship with VS Code, energy drinks and anime. God help me. (GMT +3)",
  "I'm a passionate developer, gamer, and creator of cool things. Constantly learning new things. (GMT +3)",
  "When I'm not gaming, I'm coding. When I'm not coding, I'm gaming. When I'm doing neither, I'm probably asleep. (GMT+3)"
];

function updateRandomDescription() {
  const currentLang = localStorage.getItem('selectedLang') || 'en';
  const randomNum = Math.floor(Math.random() * 6) + 1;
  const descriptionKey = `description${randomNum}`;
  
  document.querySelector('.profile-description').textContent = translations[currentLang][descriptionKey];
}

// Call this on page load and language change
window.addEventListener('load', updateRandomDescription);

const projectDetails = {
  'ZZO': {
      images: ['projects/zzo1.png', 'projects/zzo2.png', 'projects/zzo3.png'],
      descriptionKey: 'zzoDescription'
  },
  'empty project placeholder 1': {
      images: ['projects/project1.png'],
      descriptionKey: 'emptyProject1Description'
  },
  'empty project placeholder 2': {
      images: ['projects/project2.png'],
      descriptionKey: 'emptyProject2Description'
  }
};

projectCards.forEach(card => {
  card.addEventListener('click', () => {
      const projectTitle = card.querySelector('h3').textContent;
      const project = projectDetails[projectTitle];
      const currentLang = localStorage.getItem('selectedLang') || 'en';
      
      const modalImages = document.querySelector('.modal-images');
      modalImages.innerHTML = '';
      
      project.images.forEach(imgSrc => {
          const img = document.createElement('img');
          img.src = imgSrc;
          img.alt = projectTitle;
          modalImages.appendChild(img);
      });
      
      document.getElementById('modalText').textContent = translations[currentLang][project.descriptionKey];
      modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
      modal.style.display = 'none';
  }
});

function changeBackground() {
    currentBackground = currentBackground % totalBackgrounds + 1;
    document.querySelector('.background').style.backgroundImage = `url('wallpaper/background${currentBackground}.png')`;
}

setInterval(changeBackground, 5000);

const translations = {
  en: {
      themeDefault: "Default",
      themeModernBlue: "Modern Blue", 
      themeBrightRed: "Bright Red",
      themeLuxuryPurple: "Luxury Purple",
      themeRgbMode: "RGB Mode",
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      notes: "Notes",
      description1: "17 years old, Turkish, fluent in 2 languages, loves gaming and developing stuff. (GMT +3)",
      description2: "Professional bug creator, also a bug fixer. And pretty good at gaming... sometimes. (GMT +3)",
      description3: "I write code until it works, then never touch it again because I'm scared it'll break. (GMT +3)",
      description4: "Currently in a committed relationship with VS Code, energy drinks and anime. God help me. (GMT +3)",
      description5: "I'm a passionate developer, gamer, and creator of cool things. Constantly learning new things. (GMT +3)",
      description6: "When I'm not gaming, I'm coding. When I'm not coding, I'm gaming. When I'm doing neither, I'm probably asleep. (GMT+3)",
      zzoDescription: "excuse me for not having a project description for this one im too lazy but trust me this game is going to be amazing",
      emptyProject1Description: "there is nothing to see here",
      emptyProject2Description: "there is nothing to see here",
      skillsExpertise: "Skills & Expertise",
      programmingLanguages: "Programming Languages",
      toolsTechnologies: "Tools & Technologies",
      developmentTools: "Development Tools",
      personalSkills: "Personal Skills",
      softSkills: "Soft Skills",
      problemSolving: "Problem Solving",
      teamwork: "Teamwork",
      communication: "Communication / Friendship",
      firstNote: "hey guys i like playing video games and listening to rap/hip-hop",
      finalNote: "i hate my fucking life",
      emptyProject: "there is nothing to see here",
      notDoneYet: "sorry not done yet"
  },
  tr: {
      themeDefault: "Varsayılan",
      themeModernBlue: "Modern Mavi",
      themeBrightRed: "Parlak Kırmızı", 
      themeLuxuryPurple: "Lüks Mor",
      themeRgbMode: "RGB Modu",
      home: "Ana Sayfa",
      projects: "Projeler",
      skills: "Yetenekler",
      notes: "Notlar",
      description1: "17 yaşında, Türk, 2 dilde akıcı, oyun oynamayı ve geliştirmeyi seven birisi. (GMT +3)",
      description2: "Profesyonel bug üreticisi, ayrıca bug düzelticisi. Oyunlarda da iyiyim... bazen. (GMT +3)",
      description3: "Kod çalışana kadar yazıyorum, sonra bozulur diye bir daha dokunmuyorum. (GMT +3)",
      description4: "VS Code'la, enerji içecekleriyle ve animeyle ciddi bir ilişki yaşıyorum. Tanrım bana yardım et. (GMT +3)",
      description5: "Tutkulu geliştirici, oyuncu ve havalı şeyler yaratıcısı. Sürekli yeni şeyler öğreniyorum. (GMT +3)",
      description6: "Oyun oynamıyorsam kod yazıyorum. Kod yazmıyorsam oyun oynuyorum. İkisini de yapmıyorsam muhtemelen uyuyorumdur. (GMT +3)",
      zzoDescription: "bu proje için açıklama yazmaya üşendim ama inanın bu oyun harika olacak",
      emptyProject1Description: "burada görülecek bir şey yok",
      emptyProject2Description: "burada görülecek bir şey yok",
      skillsExpertise: "Yetenekler & Uzmanlıklar",
      programmingLanguages: "Programlama Dilleri",
      toolsTechnologies: "Araçlar & Teknolojiler",
      developmentTools: "Geliştirme Araçları",
      personalSkills: "Kişisel Yetenekler",
      softSkills: "Sosyal Beceriler",
      problemSolving: "Problem Çözme",
      teamwork: "Takım Çalışması",
      communication: "İletişim / Arkadaşlık",
      firstNote: "selam beyler oyun oynamayı ve rap/hip-hop dinlemeyi seviyorum",
      finalNote: "hayatımdan nefret ediyorum",
      emptyProject: "burada görülecek bir şey yok",
      notDoneYet: "henüz bitmedi üzgünüm"
  },
  ja: {
      themeDefault: "デフォルト",
      themeModernBlue: "モダンブルー",
      themeBrightRed: "ブライトレッド",
      themeLuxuryPurple: "ラグジュアリーパープル",
      themeRgbMode: "RGBモード",
      home: "ホーム",
      projects: "プロジェクト", 
      skills: "スキル",
      notes: "ノート",
      description1: "17歳のトルコ人、2カ国語を話せる、ゲームと開発が大好き。(GMT +3)",
      description2: "バグを作る専門家、時々修正も。ゲームも得意...たまには。(GMT +3)",
      description3: "動くまでコードを書いて、壊れるのが怖くて二度と触らない。(GMT +3)",
      description4: "VS Code、エナジードリンク、アニメに夢中。神様助けて。(GMT +3)",
      description5: "情熱的な開発者、ゲーマー、クールなものを作る人。常に新しいことを学んでいます。(GMT +3)",
      description6: "ゲームしてないときはコード書いてる。コード書いてないときはゲームしてる。どっちもしてないときは寝てる。(GMT +3)",
      zzoDescription: "申し訳ありませんが、このプロジェクトの説明を書くのが面倒でした。でも信じてください、このゲームは素晴らしいものになります",
      emptyProject1Description: "ここには何もありません",
      emptyProject2Description: "ここには何もありません",
      skillsExpertise: "スキルと専門知識",
      programmingLanguages: "プログラミング言語",
      toolsTechnologies: "ツールとテクノロジー",
      developmentTools: "開発ツール",
      personalSkills: "個人的なスキル",
      softSkills: "ソフトスキル",
      problemSolving: "問題解決",
      teamwork: "チームワーク",
      communication: "コミュニケーション/友情",
      firstNote: "ゲームをプレイしてラップやヒップホップを聴くのが好きです",
      finalNote: "人生が嫌いだ",
      emptyProject: "ここには何もありません",
      notDoneYet: "まだ完成していません"
  },
  es: {
      themeDefault: "Predeterminado",
      themeModernBlue: "Azul Moderno",
      themeBrightRed: "Rojo Brillante",
      themeLuxuryPurple: "Púrpura Lujo",
      themeRgbMode: "Modo RGB",
      home: "Inicio",
      projects: "Proyectos",
      skills: "Habilidades", 
      notes: "Notas",
      description1: "17 años, turco, bilingüe, amante de los juegos y el desarrollo. (GMT +3)",
      description2: "Creador profesional de bugs, también arreglador. Y bueno en juegos... a veces. (GMT +3)",
      description3: "Escribo código hasta que funciona, luego no lo toco más por miedo a romperlo. (GMT +3)",
      description4: "En una relación seria con VS Code, bebidas energéticas y anime. Dios me ayude. (GMT +3)",
      description5: "Desarrollador apasionado, gamer y creador de cosas cool. Siempre aprendiendo. (GMT +3)",
      description6: "Si no estoy jugando, estoy programando. Si no estoy programando, estoy jugando. Si no hago ninguno, probablemente esté dormido. (GMT +3)",
      zzoDescription: "perdón por no tener una descripción para este proyecto, soy muy perezoso pero confía en mí, este juego será increíble",
      emptyProject1Description: "no hay nada que ver aquí",
      emptyProject2Description: "no hay nada que ver aquí",
      skillsExpertise: "Habilidades y Experiencia",
      programmingLanguages: "Lenguajes de Programación",
      toolsTechnologies: "Herramientas y Tecnologías",
      developmentTools: "Herramientas de Desarrollo",
      personalSkills: "Habilidades Personales",
      softSkills: "Habilidades Blandas",
      problemSolving: "Resolución de Problemas",
      teamwork: "Trabajo en Equipo",
      communication: "Comunicación / Amistad",
      firstNote: "hola chicos me gusta jugar videojuegos y escuchar rap/hip-hop",
      finalNote: "odio mi puta vida",
      emptyProject: "no hay nada que ver aquí",
      notDoneYet: "lo siento aún no está listo"
  },
  de: {
      themeDefault: "Standard",
      themeModernBlue: "Modernes Blau",
      themeBrightRed: "Helles Rot",
      themeLuxuryPurple: "Luxuriöses Lila",
      themeRgbMode: "RGB-Modus",
      home: "Startseite",
      projects: "Projekte",
      skills: "Fähigkeiten",
      notes: "Notizen",
      description1: "17 Jahre alt, Türke, zweisprachig, liebt Gaming und Entwicklung. (GMT +3)",
      description2: "Professioneller Bug-Ersteller, auch Bug-Fixer. Und gut in Games... manchmal. (GMT +3)", 
      description3: "Ich schreibe Code bis er funktioniert, dann nie wieder anfassen aus Angst ihn zu zerstören. (GMT +3)",
      description4: "In einer festen Beziehung mit VS Code, Energy Drinks und Anime. Gott hilf mir. (GMT +3)",
      description5: "Leidenschaftlicher Entwickler, Gamer und Erschaffer cooler Dinge. Lerne ständig Neues. (GMT +3)",
      description6: "Wenn ich nicht game, programmiere ich. Wenn ich nicht programmiere, game ich. Wenn ich keins von beidem mache, schlafe ich wahrscheinlich. (GMT +3)",
      skillsExpertise: "Fähigkeiten & Expertise",
      programmingLanguages: "Programmiersprachen", 
      toolsTechnologies: "Tools & Technologien",
      developmentTools: "Entwicklungstools",
      personalSkills: "Persönliche Fähigkeiten",
      softSkills: "Soft Skills",
      problemSolving: "Problemlösung",
      teamwork: "Teamarbeit",
      communication: "Kommunikation / Freundschaft",
      firstNote: "hey leute ich spiele gerne videospiele und höre rap/hip-hop",
      finalNote: "ich hasse mein verdammtes leben",
      emptyProject: "hier gibt es nichts zu sehen",
      notDoneYet: "tut mir leid noch nicht fertig"
  }
};

// Page loader
window.addEventListener('load', () => {
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
      document.body.style.overflow = 'auto';
  }, 3000);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Sound play
function playSound() {
  const totalTracks = 10;
  const randomTrack = Math.floor(Math.random() * totalTracks) + 1;
  const audio = document.getElementById("pageSound");
  audio.src = `audio/music${randomTrack}.mp3`;
  audio.play().catch(error => console.error('Audio could not play:', error));
}

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
      }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.project-card').forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s, transform 0.5s';
  observer.observe(card);
});

function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: 'smooth'
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    smoothScroll(this.getAttribute('href'));
  });
});

function changeLang(lang) {
  document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
          element.textContent = translations[lang][key];
      }
  });
  
  // Update the random description when language changes
  const randomNum = Math.floor(Math.random() * 6) + 1;
  const descriptionKey = `description${randomNum}`;
  document.querySelector('.profile-description').textContent = translations[lang][descriptionKey];
  
  localStorage.setItem('selectedLang', lang);
  document.documentElement.lang = lang;
}


// Language change event listeners
document.querySelectorAll('.language-dropdown a').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = e.target.getAttribute('data-lang');
      changeLang(lang);
  });
});

// Theme change function
function changeTheme(theme) {
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('theme-rgb-mode');
    
    switch(theme) {
        case 'modern-blue':
            root.style.setProperty('--primary-color', '#00a8ff');
            root.style.setProperty('--glow-color', 'rgba(0, 168, 255, 0.3)');
            break;
        case 'bright-red':
            root.style.setProperty('--primary-color', '#ff3838');
            root.style.setProperty('--glow-color', 'rgba(255, 56, 56, 0.3)');
            break;
        case 'luxury-purple':
            root.style.setProperty('--primary-color', '#9c27b0');
            root.style.setProperty('--glow-color', 'rgba(156, 39, 176, 0.3)');
            break;
        case 'rgb-mode':
            root.classList.add('theme-rgb-mode');
            break;
        default: // cyan-green
            root.style.setProperty('--primary-color', '#00ff88');
            root.style.setProperty('--glow-color', 'rgba(0, 255, 136, 0.3)');
    }
    
    localStorage.setItem('selectedTheme', theme);
}

// Theme change event listeners
document.querySelectorAll('.theme-dropdown a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const theme = e.target.getAttribute('data-theme');
        changeTheme(theme);
    });
});

// Set language and theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    const savedTheme = localStorage.getItem('selectedTheme') || 'cyan-green';
    changeLang(savedLang);
    changeTheme(savedTheme);
});