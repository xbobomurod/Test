// Test ma'lumotlari
const tests = {
  "JavaScript Asoslari": {
    title: "JavaScript Asoslari",
    timeLimit: 30,
    questions: [
      {
        question: "JavaScript qaysi yil yaratilgan?",
        options: ["1995", "1996", "1997", "1998"],
        correctAnswer: 0,
      },
      {
        question: "JavaScript qaysi kompaniya tomonidan yaratilgan?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        correctAnswer: 1,
      },
      {
        question: "JavaScript fayl kengaytmasi nima?",
        options: [".java", ".js", ".javascript", ".script"],
        correctAnswer: 1,
      },
      {
        question: "JavaScript qaysi turdagi dasturlash tili?",
        options: [
          "Kompilyatsiya qilinadigan",
          "Interpretatsiya qilinadigan",
          "Assembly",
          "Machine code",
        ],
        correctAnswer: 1,
      },
      {
        question: "JavaScript qaysi brauzerda birinchi marta qo'llanilgan?",
        options: [
          "Chrome",
          "Firefox",
          "Netscape Navigator",
          "Internet Explorer",
        ],
        correctAnswer: 2,
      },
      {
        question: "JavaScriptda o'zgaruvchi qanday e'lon qilinadi?",
        options: [
          "var, let, const",
          "int, float, string",
          "define, set",
          "variable",
        ],
        correctAnswer: 0,
      },
      {
        question: "'typeof' operatori nima qaytaradi?",
        options: [
          "O'zgaruvchi qiymatini",
          "O'zgaruvchi turini",
          "O'zgaruvchi uzunligini",
          "O'zgaruvchi nomini",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "JavaScriptda massiv uzunligini aniqlash uchun qanday xususiyat ishlatiladi?",
        options: ["size", "length", "count", "total"],
        correctAnswer: 1,
      },
      {
        question: "Funksiya qanday e'lon qilinadi?",
        options: [
          "function myFunc() {}",
          "def myFunc():",
          "func myFunc {}",
          "myFunc => {}",
        ],
        correctAnswer: 0,
      },
      {
        question: "'null' va 'undefined' o'rtasidagi farq nima?",
        options: [
          "Ikkalasi bir xil",
          "null qiymat yo'qligini, undefined e'lon qilinmaganligini bildiradi",
          "undefined qiymat yo'qligini, null e'lon qilinmaganligini bildiradi",
          "Ikkalasi ob'ekt",
        ],
        correctAnswer: 1,
      },
      {
        question: "JavaScriptda '==' va '===' o'rtasidagi farq nima?",
        options: [
          "Ikkalasi bir xil",
          "== tur konversiyasini amalga oshiradi, === qilmaydi",
          "=== tur konversiyasini amalga oshiradi, == qilmaydi",
          "== ob'ektlarni solishtiradi, === qilmaydi",
        ],
        correctAnswer: 1,
      },
      {
        question: "'forEach' metodi nima uchun ishlatiladi?",
        options: [
          "Massivni filtrlash",
          "Massiv elementlari bo'yicha iteratsiya",
          "Massivni tartiblash",
          "Massivni qaytarish",
        ],
        correctAnswer: 1,
      },
      {
        question: "Arrow funksiyalar (strelka funksiyalari) qanday yoziladi?",
        options: ["function => {}", "() => {}", "=> function {}", "func => {}"],
        correctAnswer: 1,
      },
      {
        question: "'let' va 'const' o'rtasidagi asosiy farq nima?",
        options: [
          "let qayta tayinlanadi, const qayta tayinlanmaydi",
          "const qayta tayinlanadi, let qayta tayinlanmaydi",
          "Ikkalasi bir xil",
          "let global, const lokal",
        ],
        correctAnswer: 0,
      },
      {
        question: "JavaScriptda 'this' kalit so'zi nima uchun ishlatiladi?",
        options: [
          "Joriy ob'ektga ishora qilish",
          "Yangi ob'ekt yaratish",
          "Funksiyani chaqirish",
          "Massivni boshqarish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Promise nima?",
        options: [
          "Sinxron operatsiya",
          "Asinxron operatsiya natijasini boshqarish ob'ekti",
          "Massiv turi",
          "Funksiya turi",
        ],
        correctAnswer: 1,
      },
      {
        question: "Async/await nima uchun ishlatiladi?",
        options: [
          "Sinxron kod yozish",
          "Asinxron kodni osonlashtirish",
          "Massivlarni boshqarish",
          "Ob'ektlarni yaratish",
        ],
        correctAnswer: 1,
      },
      {
        question: "JavaScriptda 'map' metodi nima qaytaradi?",
        options: [
          "Yangi massiv",
          "O'zgartirilgan joriy massiv",
          "Ob'ekt",
          "String",
        ],
        correctAnswer: 0,
      },
      {
        question: "Closure (yopilish) nima?",
        options: [
          "Funksiya ichidagi funksiya o'z leksik muhitiga kirishi",
          "Massivni yopish",
          "Ob'ektni yopish",
          "Funksiyani sinxron qilish",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "JavaScriptda 'spread' operatori (...) nima uchun ishlatiladi?",
        options: [
          "Massiv yoki ob'ekt elementlarini yoyish",
          "Funksiyani sinxron qilish",
          "Massivni filtrlash",
          "Ob'ektni yopish",
        ],
        correctAnswer: 0,
      },
      {
        question: "JavaScriptda 'destructuring' nima?",
        options: [
          "Massiv yoki ob'ekt elementlarini ajratib olish",
          "Massivni tartiblash",
          "Ob'ektni yopish",
          "Funksiyani chaqirish",
        ],
        correctAnswer: 0,
      },
      {
        question: "JavaScriptda 'event loop' nima?",
        options: [
          "Asinxron operatsiyalarni boshqarish mexanizmi",
          "Massiv iteratsiyasi",
          "Ob'ekt yaratish",
          "Funksiya chaqiruvi",
        ],
        correctAnswer: 0,
      },
      {
        question: "JavaScriptda 'prototype' nima?",
        options: [
          "Ob'ektlar merosini ta'minlaydigan mexanizm",
          "Massiv turi",
          "Funksiya turi",
          "String metodi",
        ],
        correctAnswer: 0,
      },
      {
        question: "JavaScriptda 'async' funksiyasi har doim nima qaytaradi?",
        options: ["String", "Promise", "Number", "Object"],
        correctAnswer: 1,
      },
      {
        question: "JavaScriptda 'Symbol' ma'lumot turi nima uchun ishlatiladi?",
        options: [
          "Unikal identifikatorlar yaratish",
          "Massivlarni tartiblash",
          "Ob'ektlarni yopish",
          "Funksiyalarni sinxron qilish",
        ],
        correctAnswer: 0,
      },
    ],
  },
  "Python Dasturlash": {
    title: "Python Dasturlash",
    timeLimit: 45,
    questions: [
      {
        question: "Python qaysi yil yaratilgan?",
        options: ["1989", "1991", "1995", "2000"],
        correctAnswer: 1,
      },
      {
        question: "Python yaratuvchisi kim?",
        options: [
          "Bill Gates",
          "Guido van Rossum",
          "James Gosling",
          "Bjarne Stroustrup",
        ],
        correctAnswer: 1,
      },
      {
        question: "Python fayl kengaytmasi nima?",
        options: [".py", ".python", ".pt", ".pyt"],
        correctAnswer: 0,
      },
      {
        question: "Python qaysi turdagi dasturlash tili?",
        options: [
          "Kompilyatsiya qilinadigan",
          "Interpretatsiya qilinadigan",
          "Assembly",
          "Machine code",
        ],
        correctAnswer: 1,
      },
      {
        question: "Python qaysi sohada ko'p ishlatiladi?",
        options: [
          "Web dasturlash",
          "Ma'lumotlar tahlili",
          "Mobil dasturlash",
          "O'yin yaratish",
        ],
        correctAnswer: 1,
      },
      {
        question: "Python'da o'zgaruvchi qanday e'lon qilinadi?",
        options: ["var x = 5", "x = 5", "int x = 5", "let x = 5"],
        correctAnswer: 1,
      },
      {
        question: "Python'da ro'yxat (list) qanday yaratiladi?",
        options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
        correctAnswer: 0,
      },
      {
        question: "Python'da 'len()' funksiyasi nima qiladi?",
        options: [
          "Elementlar sonini qaytaradi",
          "Elementlarni tartiblaydi",
          "Elementlarni o'chiradi",
          "Elementlarni qo'shadi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Python'da shart operatori qaysi?",
        options: ["if", "for", "while", "switch"],
        correctAnswer: 0,
      },
      {
        question: "Python'da 'range(5)' nima qaytaradi?",
        options: [
          "0, 1, 2, 3, 4",
          "1, 2, 3, 4, 5",
          "0, 1, 2, 3, 4, 5",
          "1, 2, 3, 4",
        ],
        correctAnswer: 0,
      },
      {
        question: "Python'da funksiya qanday e'lon qilinadi?",
        options: [
          "function myFunc()",
          "def myFunc():",
          "func myFunc()",
          "myFunc => {}",
        ],
        correctAnswer: 1,
      },
      {
        question: "Python'da 'None' nima?",
        options: ["Bo'sh qiymat", "String turi", "Raqam turi", "Massiv turi"],
        correctAnswer: 0,
      },
      {
        question: "Python'da lug'at (dictionary) qanday yaratiladi?",
        options: ["{1, 2, 3}", "{'a': 1, 'b': 2}", "[1, 2, 3]", "(1, 2, 3)"],
        correctAnswer: 1,
      },
      {
        question: "Python'da 'append()' metodi nima qiladi?",
        options: [
          "Ro'yxatga element qo'shadi",
          "Ro'yxatni tartiblaydi",
          "Ro'yxatni o'chiradi",
          "Ro'yxatni bo'ladi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Python'da sinf (class) qanday e'lon qilinadi?",
        options: [
          "class MyClass:",
          "def MyClass:",
          "function MyClass()",
          "struct MyClass",
        ],
        correctAnswer: 0,
      },
      {
        question: "Python'da meros (inheritance) qanday amalga oshiriladi?",
        options: [
          "class Child(Parent):",
          "class Child extends Parent",
          "class Child < Parent",
          "class Child: Parent",
        ],
        correctAnswer: 0,
      },
      {
        question: "Python'da 'try-except' nima uchun ishlatiladi?",
        options: [
          "Xatolarni boshqarish",
          "Tsikllarni boshqarish",
          "Funksiyalarni chaqirish",
          "Massivlarni tartiblash",
        ],
        correctAnswer: 0,
      },
      {
        question: "Python'da lambda funksiyasi nima?",
        options: [
          "Anonim funksiya",
          "Sinf metodi",
          "Tsikl operatori",
          "Massiv metodi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Python'da 'map()' funksiyasi nima qiladi?",
        options: [
          "Funksiyani ro'yxat elementlariga qo'llaydi",
          "Ro'yxatni tartiblaydi",
          "Ro'yxatni bo'ladi",
          "Ro'yxatni o'chiradi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Python'da dekorator nima?",
        options: [
          "Funksiya funksionalligini o'zgartiruvchi funksiya",
          "Mass real time data for insights and trendsiv turi",
          "Sinf turi",
          "Tsikl operatori",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Python'da 'numpy' kutubxonasi asosan nima uchun ishlatiladi?",
        options: [
          "Raqamli hisoblash",
          "Web dasturlash",
          "O'yin yaratish",
          "Ma'lumotlar bazasi boshqaruvi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Python'da 'pandas' kutubxonasi nima uchun ishlatiladi?",
        options: [
          "Ma'lumotlarni tahlil qilish",
          "Grafik interfeys yaratish",
          "O'yin dasturlash",
          "Tarmoq dasturlash",
        ],
        correctAnswer: 0,
      },
      {
        question: "Python'da generator nima?",
        options: [
          "Ma'lumotlarni ketma-ket ishlab chiqaruvchi ob'ekt",
          "Massiv turi",
          "Sinf turi",
          "Funksiya turi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Python'da '__init__' metodi nima uchun ishlatiladi?",
        options: [
          "Sinfni boshlash (konstruktor)",
          "Sinfni o'chirish",
          "Sinfni tartiblash",
          "Sinfni bo'lish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Python'da '@property' dekoratori nima uchun ishlatiladi?",
        options: [
          "Metodni xususiyat sifatida ishlatish",
          "Metodni yopish",
          "Metodni tartiblash",
          "Metodni o'chirish",
        ],
        correctAnswer: 0,
      },
    ],
  },
  "Ma'lumotlar Strukturasi": {
    title: "Ma'lumotlar Strukturasi",
    timeLimit: 60,
    questions: [
      {
        question: "Massiv qanday ma'lumotlar strukturasi?",
        options: ["Chiziqli", "Chiziqli bo'lmagan", "Daraxt", "Graf"],
        correctAnswer: 0,
      },
      {
        question: "Stack (Stek) qanday ishlaydi?",
        options: ["FIFO", "LIFO", "Random", "Priority"],
        correctAnswer: 1,
      },
      {
        question: "Queue (Navbat) qanday ishlaydi?",
        options: ["FIFO", "LIFO", "Random", "Priority"],
        correctAnswer: 0,
      },
      {
        question:
          "Linked List (Bog'langan ro'yxat) qanday ma'lumotlar strukturasi?",
        options: ["Chiziqli", "Chiziqli bo'lmagan", "Daraxt", "Graf"],
        correctAnswer: 0,
      },
      {
        question:
          "Binary Tree (Ikkilik daraxt) qanday ma'lumotlar strukturasi?",
        options: ["Chiziqli", "Chiziqli bo'lmagan", "Daraxt", "Graf"],
        correctAnswer: 2,
      },
      {
        question: "Hash Table (Xesh jadval) qanday ishlaydi?",
        options: [
          "Kalit-qiymat juftliklarini saqlaydi",
          "Elementlarni tartiblaydi",
          "Elementlarni bo'ladi",
          "Elementlarni o'chiradi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Graph (Graf) qanday tuzilgan?",
        options: [
          "Tugunlar va qirralar",
          "Faqat tugunlar",
          "Faqat qirralar",
          "Massivlar",
        ],
        correctAnswer: 0,
      },
      {
        question: "Heap (Uyum) qanday ma'lumotlar strukturasi?",
        options: ["Chiziqli", "Daraxt", "Graf", "Massiv"],
        correctAnswer: 1,
      },
      {
        question: "Singly Linked List'da har bir tugun nima saqlaydi?",
        options: [
          "Ma'lumot va keyingi tugunga ishora",
          "Faqat ma'lumot",
          "Faqat ishora",
          "Ma'lumot va oldingi tugunga ishora",
        ],
        correctAnswer: 0,
      },
      {
        question: "Doubly Linked List nima?",
        options: [
          "Ikkala yo'nalishda bog'langan ro'yxat",
          "Bir yo'nalishda bog'langan ro'yxat",
          "Tsiklik ro'yxat",
          "Massiv",
        ],
        correctAnswer: 0,
      },
      {
        question: "Binary Search Tree (BST) qanday xususiyatga ega?",
        options: [
          "Chap pastki daraxt kichik, o'ng katta",
          "O'ng pastki daraxt kichik, chap katta",
          "Barcha tugunlar teng",
          "Tugunlar tasodifiy",
        ],
        correctAnswer: 0,
      },
      {
        question: "AVL Tree nima?",
        options: [
          "O'z-o'zini muvozanatlashtiruvchi ikkilik daraxt",
          "Oddiy ikkilik daraxt",
          "Massivga asoslangan daraxt",
          "Graf",
        ],
        correctAnswer: 0,
      },
      {
        question: "Trie (Prefiks daraxti) qanday maqsadda ishlatiladi?",
        options: [
          "So'zlarni qidirish",
          "Raqamlarni tartiblash",
          "Massivlarni bo'lish",
          "Grafikani tahlil qilish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Priority Queue (Ustunlik navbati) qanday ishlaydi?",
        options: [
          "Elementlar ustunlik bo'yicha chiqariladi",
          "FIFO tartibida",
          "LIFO tartibida",
          "Tasodifiy tartibda",
        ],
        correctAnswer: 0,
      },
      {
        question: "Hash Table'da kolliziya nima?",
        options: [
          "Bir xesh kalitga bir nechta qiymat",
          "Xesh kalitning yo'qligi",
          "Xesh jadvalning to'lishi",
          "Xesh kalitning o'chirilishi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Breadth-First Search (BFS) qanday ishlaydi?",
        options: [
          "Kenglik bo'yicha qidirish",
          "Chuqurlik bo'yicha qidirish",
          "Tasodifiy qidirish",
          "Ustunlik bo'yicha qidirish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Depth-First Search (DFS) qanday ishlaydi?",
        options: [
          "Chuqurlik bo'yicha qidirish",
          "Kenglik bo'yicha qidirish",
          "Tasodifiy qidirish",
          "Ustunlik bo'yicha qidirish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Quick Sort algoritmining vaqt murakkabligi nima?",
        options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        correctAnswer: 0,
      },
      {
        question: "Merge Sort algoritmining vaqt murakkabligi nima?",
        options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        correctAnswer: 0,
      },
      {
        question: "Binary Search algoritmi qanday tuzilmada ishlaydi?",
        options: [
          "Tartiblangan massiv",
          "Tartiblanmagan massiv",
          "Graf",
          "Stack",
        ],
        correctAnswer: 0,
      },
      {
        question: "Dijkstra algoritmi nima uchun ishlatiladi?",
        options: [
          "Eng qisqa yo'lni topish",
          "Elementlarni tartiblash",
          "Massivni bo'lish",
          "Daraxtni tahlil qilish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kruskal algoritmi nima uchun ishlatiladi?",
        options: [
          "Minimal yoyilgan daraxtni topish",
          "Eng qisqa yo'lni topish",
          "Elementlarni tartiblash",
          "Massivni bo'lish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Red-Black Tree qanday xususiyatga ega?",
        options: [
          "O'z-o'zini muvozanatlashtiruvchi",
          "Oddiy ikkilik daraxt",
          "Massivga asoslangan",
          "Graf",
        ],
        correctAnswer: 0,
      },
      {
        question: "B-Tree qanday maqsadda ishlatiladi?",
        options: [
          "Ma'lumotlar bazasida indekslash",
          "Elementlarni tartiblash",
          "Massivni bo'lish",
          "Grafikani tahlil qilish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Bloom Filter nima?",
        options: [
          "Element mavjudligini taxminiy tekshirish",
          "Elementlarni tartiblash",
          "Massivni bo'lish",
          "Daraxtni tahlil qilish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Topological Sort qanday tuzilmada ishlatiladi?",
        options: [
          "Yo'naltirilgan atsiklik graf",
          "Yo'naltirilmagan graf",
          "Massiv",
          "Stack",
        ],
        correctAnswer: 0,
      },
      {
        question: "Union-Find strukturasi nima uchun ishlatiladi?",
        options: [
          "Gruhlarni birlashtirish va topish",
          "Elementlarni tartiblash",
          "Massivni bo'lish",
          "Daraxtni tahlil qilish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Fenwick Tree qanday maqsadda ishlatiladi?",
        options: [
          "Prefiks summalarini hisoblash",
          "Elementlarni tartiblash",
          "Massivni bo'lish",
          "Grafikani tahlil qilish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Segment Tree nima uchun ishlatiladi?",
        options: [
          "Oraliq so'rovlarini tez bajarish",
          "Elementlarni tartiblash",
          "Massivni bo'lish",
          "Daraxtni tahlil qilish",
        ],
        correctAnswer: 0,
      },
      {
        question: "A* algoritmi qanday maqsadda ishlatiladi?",
        options: [
          "Eng qisqa yo'lni topish (evristik)",
          "Elementlarni tartiblash",
          "Massivni bo'lish",
          "Daraxtni tahlil qilish",
        ],
        correctAnswer: 0,
      },
    ],
  },
  Algebra: {
    title: "Algebra",
    timeLimit: 40,
    questions: [
      {
        question: "x + 5 = 10 tenglamaning yechimi nima?",
        options: ["x = 3", "x = 5", "x = 7", "x = 15"],
        correctAnswer: 1,
      },
      {
        question: "2x - 3 = 7 tenglamaning yechimi nima?",
        options: ["x = 3", "x = 5", "x = 7", "x = 10"],
        correctAnswer: 1,
      },
      {
        question: "x² + 5x + 6 = 0 tenglamaning yechimlari nima?",
        options: ["x = -2, -3", "x = 2, 3", "x = -1, -6", "x = 1, 6"],
        correctAnswer: 0,
      },
      {
        question:
          "3x + 2y = 12 va 2x - y = 1 tenglamalar sistemasining yechimi nima?",
        options: [
          "x = 2, y = 3",
          "x = 3, y = 2",
          "x = 4, y = 1",
          "x = 1, y = 4",
        ],
        correctAnswer: 0,
      },
      {
        question: "log₂(8) = ?",
        options: ["2", "3", "4", "8"],
        correctAnswer: 1,
      },
      {
        question: "5x - 10 = 0 tenglamaning yechimi nima?",
        options: ["x = 1", "x = 2", "x = 3", "x = 4"],
        correctAnswer: 1,
      },
      {
        question: "x² - 9 = 0 tenglamaning yechimlari nima?",
        options: ["x = 3, -3", "x = 9, -9", "x = 3, 3", "x = -3, -3"],
        correctAnswer: 0,
      },
      {
        question:
          "4x + 3y = 15 va x - y = 1 tenglamalar sistemasining yechimi nima?",
        options: [
          "x = 3, y = 1",
          "x = 2, y = 1",
          "x = 4, y = 2",
          "x = 1, y = 3",
        ],
        correctAnswer: 0,
      },
      {
        question: "ln(e³) = ?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
      },
      {
        question: "x³ - 8 = 0 tenglamaning haqiqiy yechimi nima?",
        options: ["x = 2", "x = 3", "x = 4", "x = 8"],
        correctAnswer: 0,
      },
      {
        question: "2ˣ = 16 tenglamaning yechimi nima?",
        options: ["x = 2", "x = 3", "x = 4", "x = 5"],
        correctAnswer: 2,
      },
      {
        question: "x² + 2x - 15 = 0 tenglamaning yechimlari nima?",
        options: ["x = 3, -5", "x = -3, 5", "x = 3, 5", "x = -3, -5"],
        correctAnswer: 0,
      },
      {
        question: "Matritsalar ko'paytmasi qachon aniqlanadi?",
        options: [
          "Birinchining ustunlari soni ikkinchisining satrlari soniga teng bo'lsa",
          "Ikkalasi kvadrat matritsa bo'lsa",
          "Ikkalasi bir xil o'lchamda bo'lsa",
          "Birinchining satrlari soni ikkinchisining ustunlari soniga teng bo'lsa",
        ],
        correctAnswer: 0,
      },
      {
        question: "3x² - 12x + 12 = 0 tenglamaning yechimlari nima?",
        options: ["x = 2", "x = -2", "x = 2, -2", "x = 3"],
        correctAnswer: 0,
      },
      {
        question: "log₃(27) = ?",
        options: ["2", "3", "4", "9"],
        correctAnswer: 1,
      },
      {
        question:
          "2x + 3y - z = 5, x - y + z = 0, x + y + z = 5 tenglamalar sistemasining yechimi nima?",
        options: [
          "x = 1, y = 2, z = 2",
          "x = 2, y = 1, z = 2",
          "x = 3, y = 1, z = 1",
          "x = 1, y = 1, z = 3",
        ],
        correctAnswer: 0,
      },
      {
        question: "x⁴ - 16 = 0 tenglamaning haqiqiy yechimlari nima?",
        options: ["x = 2, -2", "x = 4, -4", "x = 2, 4", "x = -2, -4"],
        correctAnswer: 0,
      },
      {
        question: "Kompleks sonlar nima?",
        options: [
          "a + bi shaklidagi sonlar",
          "Faqat haqiqiy sonlar",
          "Faqat xayoliy sonlar",
          "Matritsalar",
        ],
        correctAnswer: 0,
      },
      {
        question: "Determinant 2x2 matritsa uchun qanday hisoblanadi?",
        options: ["ad - bc", "ac - bd", "ab - cd", "ad + bc"],
        correctAnswer: 0,
      },
      {
        question: "x² + 4x + 4 = 0 tenglamaning yechimlari nima?",
        options: ["x = -2", "x = 2", "x = -2, 2", "x = 4"],
        correctAnswer: 0,
      },
      {
        question: "Polinomning darajasi nima?",
        options: [
          "Eng yuqori darajali had",
          "Eng past darajali had",
          "Hodlar soni",
          "Hodlar yig'indisi",
        ],
        correctAnswer: 0,
      },
      {
        question: "5ˣ = 25 tenglamaning yechimi nima?",
        options: ["x = 1", "x = 2", "x = 3", "x = 4"],
        correctAnswer: 1,
      },
      {
        question: "Matritsaning teskari matritsasi qachon mavjud?",
        options: [
          "Determinanti nolga teng bo'lmaganda",
          "Determinanti nolga teng bo'lganda",
          "Matritsa kvadrat bo'lmaganda",
          "Matritsa simmetrik bo'lganda",
        ],
        correctAnswer: 0,
      },
      {
        question: "x² - 2x + 1 = 0 tenglamaning yechimlari nima?",
        options: ["x = 1", "x = -1", "x = 1, -1", "x = 2"],
        correctAnswer: 0,
      },
      {
        question: "Vektorlarning skalyar ko'paytmasi nima qaytaradi?",
        options: ["Skalyar", "Vektor", "Matritsa", "Polinom"],
        correctAnswer: 0,
      },
    ],
  },
  Geometriya: {
    title: "Geometriya",
    timeLimit: 35,
    questions: [
      {
        question: "Uchburchakning ichki burchaklari yig'indisi necha gradus?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: 1,
      },
      {
        question:
          "To'g'ri burchakli uchburchakda gipotenuzani topish formulasi nima?",
        options: ["a + b", "a² + b²", "√(a² + b²)", "2(a + b)"],
        correctAnswer: 2,
      },
      {
        question: "Doira yuzini hisoblash formulasi nima?",
        options: ["2πr", "πr", "πr²", "2πr²"],
        correctAnswer: 2,
      },
      {
        question: "Kub hajmini hisoblash formulasi nima?",
        options: ["a²", "a³", "2a²", "3a"],
        correctAnswer: 1,
      },
      {
        question: "Parallelogramm yuzini hisoblash formulasi nima?",
        options: ["a + b", "a × b", "a × h", "2(a + b)"],
        correctAnswer: 2,
      },
      {
        question: "Doira uzunligini hisoblash formulasi nima?",
        options: ["πr", "2πr", "πr²", "2πr²"],
        correctAnswer: 1,
      },
      {
        question: "To'rtburchakning perimetri qanday hisoblanadi?",
        options: ["2(a + b)", "a + b", "a × b", "√(a² + b²)"],
        correctAnswer: 0,
      },
      {
        question: "Uchburchakning yuzini topish uchun Geron formulasi nima?",
        options: [
          "√[s(s-a)(s-b)(s-c)]",
          "a × b / 2",
          "a + b + c",
          "√(a² + b²)",
        ],
        correctAnswer: 0,
      },
      {
        question: "Silindrning hajmi qanday hisoblanadi?",
        options: ["πr²h", "2πrh", "πr²", "2πr²h"],
        correctAnswer: 0,
      },
      {
        question: "Kvadratning diagonali qanday hisoblanadi?",
        options: ["a√2", "a²", "2a", "a/√2"],
        correctAnswer: 0,
      },
      {
        question: "To'g'ri burchakli uchburchakda sin(α) nima?",
        options: [
          "qarama-qarshi katet / gipotenuza",
          "qo'shni katet / gipotenuza",
          "qarama-qarshi katet / qo'shni katet",
          "gipotenuza / qarama-qarshi katet",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kosinuslar teoremasi nima?",
        options: [
          "c² = a² + b² - 2ab cos(C)",
          "c² = a² + b²",
          "c² = a² + b² + 2ab cos(C)",
          "c² = a² - b²",
        ],
        correctAnswer: 0,
      },
      {
        question: "Shar hajmini hisoblash formulasi nima?",
        options: ["(4/3)πr³", "πr³", "(2/3)πr³", "4πr²"],
        correctAnswer: 0,
      },
      {
        question: "Teng yonli uchburchakning burchaklari qanday bo'ladi?",
        options: [
          "Ikkita teng burchak",
          "Uchta teng burchak",
          "Hech qaysi teng emas",
          "Faqat bitta to'g'ri burchak",
        ],
        correctAnswer: 0,
      },
      {
        question: "Vektorlarning skalyar ko'paytmasi qanday hisoblanadi?",
        options: ["|a||b|cos(θ)", "|a||b|sin(θ)", "|a| + |b|", "|a| × |b|"],
        correctAnswer: 0,
      },
      {
        question: "To'rtburchakning yuzasi qanday hisoblanadi?",
        options: ["a × b", "2(a + b)", "a + b", "√(a² + b²)"],
        correctAnswer: 0,
      },
      {
        question: "Uchburchakning og'irlik markazi qanday topiladi?",
        options: [
          "Mediana kesishishi",
          "Burchak yarmiga bo'linishi",
          "Yonlar yarmiga bo'linishi",
          "Balandliklar kesishishi",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Dekart koordinatalarida ikki nuqta orasidagi masofa qanday hisoblanadi?",
        options: [
          "√[(x₂-x₁)² + (y₂-y₁)²]",
          "(x₂-x₁) + (y₂-y₁)",
          "(x₂-x₁) × (y₂-y₁)",
          "√(x₂² + y₂²)",
        ],
        correctAnswer: 0,
      },
      {
        question: "Trapetsiya yuzasi qanday hisoblanadi?",
        options: ["(a + b) × h / 2", "a × b", "(a + b) × h", "2(a + b)"],
        correctAnswer: 0,
      },
      {
        question: "To'g'ri prizmanın yon sirt yuzasi qanday hisoblanadi?",
        options: [
          "Perimetr × balandlik",
          "Asos yuzasi × balandlik",
          "Asos yuzasi + balandlik",
          "Perimetr × asos yuzasi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Vektorlarning vektorial ko'paytmasi nima qaytaradi?",
        options: ["Vektor", "Skalyar", "Matritsa", "Polinom"],
        correctAnswer: 0,
      },
      {
        question: "Teng yonli uchburchakning balandligi qanday topiladi?",
        options: ["√(a² - (b/2)²)", "a/2", "b/2", "√(a² + b²)"],
        correctAnswer: 0,
      },
      {
        question: "Konusning yon sirt yuzasi qanday hisoblanadi?",
        options: ["πrl", "πr²", "πr²h", "(1/3)πr²h"],
        correctAnswer: 0,
      },
      {
        question:
          "Analitik geometriyada to'g'ri chiziq tenglamasi qanday shaklda bo'ladi?",
        options: ["y = mx + c", "x = my + c", "y = mx² + c", "y = m/x + c"],
        correctAnswer: 0,
      },
      {
        question: "Ellipsning tenglamasi qanday shaklda bo'ladi?",
        options: [
          "x²/a² + y²/b² = 1",
          "x²/a² - y²/b² = 1",
          "x² + y² = r²",
          "x²/a + y²/b = 1",
        ],
        correctAnswer: 0,
      },
    ],
  },
  "Mantiqiy Masalalar": {
    title: "Mantiqiy Masalalar",
    timeLimit: 45,
    questions: [
      {
        question:
          "Agar barcha odamlar o'limga mahkum bo'lsa va Sokrat odam bo'lsa, u holda Sokrat...",
        options: [
          "O'limga mahkum",
          "O'limga mahkum emas",
          "Ma'lum emas",
          "Boshqa javob",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Agar barcha qushlar uchsa va pingvin qush bo'lsa, u holda pingvin...",
        options: ["Uchadi", "Uchmaydi", "Ma'lum emas", "Boshqa javob"],
        correctAnswer: 1,
      },
      {
        question:
          "Agar barcha mevalar shirin bo'lsa va limon meva bo'lsa, u holda limon...",
        options: ["Shirin", "Nordon", "Ma'lum emas", "Boshqa javob"],
        correctAnswer: 1,
      },
      {
        question:
          "Agar barcha sutemizuvchilar sut bilan oziqlansa va yarasa sutemizuvchi bo'lsa, u holda yarasa...",
        options: [
          "Sut bilan oziqlanadi",
          "Sut bilan oziqlanmaydi",
          "Ma'lum emas",
          "Boshqa javob",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Agar barcha baliqlar suvda yashasa va delfin baliq bo'lsa, u holda delfin...",
        options: [
          "Suvda yashaydi",
          "Suvda yashamaydi",
          "Ma'lum emas",
          "Boshqa javob",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Agar A to'g'ri bo'lsa, B ham to'g'ri. B to'g'ri emas. A haqida nima deyish mumkin?",
        options: ["A to'g'ri emas", "A to'g'ri", "Ma'lum emas", "A va B teng"],
        correctAnswer: 0,
      },
      {
        question:
          "Agar barcha mushuklar miyovlasa va Tom mushuk bo'lsa, Tom nima qiladi?",
        options: [
          "Miyovlaydi",
          "Havlaydi",
          "Ma'lum emas",
          "Hech narsa qilmaydi",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Agar ba'zi odamlar yugursa va Ali odam bo'lsa, Ali haqida nima deyish mumkin?",
        options: [
          "Ali yuguradi",
          "Ali yugurmaydi",
          "Ma'lum emas",
          "Ali boshqa narsa qiladi",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "Agar A yoki B to'g'ri bo'lsa va A noto'g'ri bo'lsa, B haqida nima deyish mumkin?",
        options: ["B to'g'ri", "B noto'g'ri", "Ma'lum emas", "A va B teng"],
        correctAnswer: 0,
      },
      {
        question:
          "Agar barcha itlar sodiq bo'lsa va Rex it bo'lsa, Rex haqida nima deyish mumkin?",
        options: ["Sodiq", "Sodiq emas", "Ma'lum emas", "Boshqa javob"],
        correctAnswer: 0,
      },
      {
        question:
          "3 ta quti bor: bittasida 2 oltin tanga, bittasida 2 kumush tanga, bittasida 1 oltin va 1 kumush tanga. Tasodifiy qutidan tasodifiy tanga olindi va u oltin chiqdi. Bu tanga oltin tangali qutidan olingan ehtimolligi qancha?",
        options: ["1/3", "1/2", "2/3", "3/4"],
        correctAnswer: 2,
      },
      {
        question:
          "Agar A bo'lmasa, B bo'lmaydi. B bor. A haqida nima deyish mumkin?",
        options: ["A bor", "A yo'q", "Ma'lum emas", "A va B teng"],
        correctAnswer: 0,
      },
      {
        question:
          "Bir odam har doim yolg'on gapiradi. U 'Men yolg'onchiman' dedi. Bu haqida nima deyish mumkin?",
        options: ["Paradoks", "To'g'ri", "Noto'g'ri", "Ma'lum emas"],
        correctAnswer: 0,
      },
      {
        question:
          "Agar barcha olmalar qizil bo'lsa va bu olma bo'lsa, u holda bu olma...",
        options: ["Qizil", "Yashil", "Ma'lum emas", "Boshqa javob"],
        correctAnswer: 0,
      },
      {
        question:
          "Ikki kishi, biri har doim rost gapiradi, biri har doim yolg'on gapiradi. Biri dedi: 'Men rostgo'y' bo'lsam, u holda ikkalamiz rostgo'ymiz.' Bu gapni kim aytdi?",
        options: ["Yolg'onchi", "Rostgo'y", "Ma'lum emas", "Ikkalasi ham"],
        correctAnswer: 0,
      },
      {
        question:
          "Agar A va B to'g'ri bo'lsa, C to'g'ri. A to'g'ri, B noto'g'ri. C haqida nima deyish mumkin?",
        options: ["C to'g'ri", "C noto'g'ri", "Ma'lum emas", "C va A teng"],
        correctAnswer: 2,
      },
      {
        question:
          "Bir orolda 3 rang: ko'k, qizil, yashil. Ko'k har doim rost, qizil har doim yolg'on, yashil esa rost yoki yolg'on gapiradi. Bir kishi dedi: 'Men ko'kman.' U qanday rang?",
        options: ["Ko'k", "Qizil", "Yashil", "Ma'lum emas"],
        correctAnswer: 0,
      },
      {
        question:
          "5 ta uy, har birida 1 dan 5 gacha raqamlar. 1-uyda 1 raqami emas, 2-uyda 2 emas, va hokazo. 5-uyda qaysi raqam?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 0,
      },
      {
        question:
          "Agar barcha A'lar B bo'lsa va ba'zi B'lar C bo'lsa, A va C o'rtasida qanday bog'lanish bor?",
        options: [
          "Ba'zi A'lar C",
          "Barcha A'lar C",
          "Hech qanday bog'lanish yo'q",
          "A va C teng",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "3 ta do'st: Ali, Bob, Charli. Biri ritsar (rostgo'y), biri josus (rost yoki yolg'on), biri yolg'onchi. Ali dedi: 'Bob yolg'onchi.' Bob dedi: 'Charli yolg'onchi.' Charli dedi: 'Ali ritsar.' Ali kim?",
        options: ["Ritsar", "Josus", "Yolg'onchi", "Ma'lum emas"],
        correctAnswer: 0,
      },
      {
        question:
          "Bir shaharda har bir kishi yolg'onchi yoki rostgo'y. Rostgo'y dedi: 'Bu shaharda yolg'onchilar bor.' Bu gap to'g'ri bo'lishi mumkinmi?",
        options: [
          "Yo'q, paradoks",
          "Ha, to'g'ri",
          "Ma'lum emas",
          "Faqat yolg'onchilar bo'lsa",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Agar A bo'lmasa, B bo'lmaydi. A yo'q. B haqida nima deyish mumkin?",
        options: ["B yo'q", "B bor", "Ma'lum emas", "A va B teng"],
        correctAnswer: 0,
      },
      {
        question:
          "4 ta karta: 1, 2, 3, 4. Har bir karta bir raqam bilan belgilangan. Ikki karta tanlansa, ularning yig'indisi 5 bo'lishi mumkinmi?",
        options: ["Ha", "Yo'q", "Ma'lum emas", "Faqat 3 bo'lsa"],
        correctAnswer: 1,
      },
      {
        question:
          "Bir qutida 3 ta tanga: 1 oltin, 1 kumush, 1 bronza. Ikki tanga tasodifiy tanlansa, ikkalasi oltin bo'lish ehtimolligi qancha?",
        options: ["0", "1/3", "1/6", "1/2"],
        correctAnswer: 0,
      },
      {
        question:
          "Agar barcha A'lar B bo'lsa va hech qanday B C bo'lmasa, A va C o'rtasida qanday bog'lanish bor?",
        options: [
          "Hech qanday A C emas",
          "Barcha A'lar C",
          "Ba'zi A'lar C",
          "Ma'lum emas",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Bir odam dedi: 'Agar men rostgo'y bo'lsam, u holda men yolg'onchiman.' Bu odam kim?",
        options: [
          "Paradoks, bunday odam yo'q",
          "Rostgo'y",
          "Yolg'onchi",
          "Ma'lum emas",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Agar A va B bo'lsa, C bo'ladi. A bor, C yo'q. B haqida nima deyish mumkin?",
        options: ["B yo'q", "B bor", "Ma'lum emas", "A va B teng"],
        correctAnswer: 0,
      },
      {
        question:
          "Bir orolda 5 kishi, har biri rostgo'y yoki yolg'onchi. Har biri boshqasi haqida bir narsa aytdi. Natijada, faqat bittasi rost gapirdi. Kim rostgo'y?",
        options: [
          "Eng kam yolg'on haqida aytilgan",
          "Eng ko'p yolg'on haqida aytilgan",
          "Ma'lum emas",
          "Hech kim",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Agar A yoki B bo'lsa, C bo'ladi. C yo'q. A va B haqida nima deyish mumkin?",
        options: [
          "A va B yo'q",
          "A bor, B yo'q",
          "B bor, A yo'q",
          "Ma'lum emas",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Bir qutida 10 ta shar: 5 qizil, 3 yashil, 2 ko'k. Ikki shar tasodifiy tanlansa, ularning bir xil rangda bo'lish ehtimolligi qancha?",
        options: ["16/45", "1/3", "1/2", "2/3"],
        correctAnswer: 0,
      },
    ],
  },
  Kibernetika: {
    title: "Kibernetika",
    timeLimit: 35,
    questions: [
      {
        question: "Kibernetika fani nima bilan shug'ullanadi?",
        options: [
          "Boshqaruv va axborot uzatish tizimlari",
          "Fizika qonunlari",
          "Tibbiy tadqiqotlar",
          "Raqamli dizayn",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kibernetika atamasini kim kiritgan?",
        options: [
          "Norbert Wiener",
          "Alan Turing",
          "Isaac Newton",
          "Nikola Tesla",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kibernetikaning asosiy obyekti nima?",
        options: [
          "Tizimlar",
          "Sonlar",
          "Kimyoviy reaksiyalar",
          "Raqamli grafikalar",
        ],
        correctAnswer: 0,
      },
      {
        question: "Teskari aloqa (feedback) nima uchun kerak?",
        options: [
          "Tizimni barqaror ushlab turish uchun",
          "Axborotni shifrlash uchun",
          "Tizimni tezlashtirish uchun",
          "Tizimni to'xtatish uchun",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kibernetikada 'model' so'zi nimani bildiradi?",
        options: [
          "Tizimning soddalashtirilgan ifodasi",
          "Yangi mahsulot",
          "Shaxsiy kompyuter",
          "Programma kodi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kibernetik tizimga misol?",
        options: [
          "Avtomatik konditsioner",
          "Qo'lda boshqariladigan eshik",
          "Devor soat",
          "Qalam",
        ],
        correctAnswer: 0,
      },
      {
        question: "Aloqa kanali deganda nima tushuniladi?",
        options: [
          "Axborotni uzatish yo'li",
          "Elektr toki",
          "Qurilma",
          "Fayl nomi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kibernetik tizimlarning asosiy turi?",
        options: [
          "Deterministik va stoxastik",
          "Kimyoviy va fizik",
          "Analog va raqamli",
          "Oddiy va murakkab",
        ],
        correctAnswer: 0,
      },
      {
        question: "Signal bu nima?",
        options: [
          "Axborot tashuvchi hodisa",
          "Havoda to'lqin",
          "Programma kodi",
          "Fayl turi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Sensorlar qanday vazifani bajaradi?",
        options: [
          "Axborotni qabul qiladi",
          "Qaror chiqaradi",
          "Dastur yozadi",
          "Ekran ko'rsatadi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Tizimda kechikish nima sabab bo'ladi?",
        options: [
          "Javobni vaqtida chiqarmaslik",
          "Axborot yo'qolishi",
          "Xotira to'lishi",
          "Tarmoq uzilishi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kibernetikada boshqaruv degani nima?",
        options: [
          "Tizimga ta'sir ko'rsatish",
          "Kompyuterni o'chirish",
          "O'yin o'ynash",
          "Ma'lumot saqlash",
        ],
        correctAnswer: 0,
      },
      {
        question: "Norbert Wiener kibernetikani qanday tariflagan?",
        options: [
          "Boshqaruv va axborotni o'rganish fani",
          "Texnik vositalar yig'indisi",
          "Matematik algoritmlar",
          "Kompyuter arxitekturasi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kibernetik model qanday bo'ladi?",
        options: [
          "Matematik yoki sxematik",
          "Faqat grafik",
          "Audio shaklda",
          "Tasodifiy",
        ],
        correctAnswer: 0,
      },
      {
        question: "Boshqaruv tizimi turlari?",
        options: [
          "Ochiq va yopiq",
          "Qattiq va yumshoq",
          "Real va virtual",
          "Kodli va kodsiz",
        ],
        correctAnswer: 0,
      },
      {
        question: "Yopiq boshqaruv tizimida nima mavjud?",
        options: [
          "Teskari aloqa",
          "Faqat kirish",
          "Faqat chiqish",
          "Kechikish yo'q",
        ],
        correctAnswer: 0,
      },
      {
        question: "Informatsiya o'lchov birligi?",
        options: ["Bit", "Volt", "Bayt", "Megagerts"],
        correctAnswer: 0,
      },
      {
        question: "Kibernetika fanining amaliy qo'llanilishi?",
        options: ["Robototexnika", "Adabiyot", "Tarix", "San'at"],
        correctAnswer: 0,
      },
      {
        question: "Avtomatlashtirish degani nima?",
        options: [
          "Odam aralashuvisiz ishlash",
          "Ko'proq odam ishlatish",
          "Qo'lda hisoblash",
          "Yozuvni matnga aylantirish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Signalni kodlash maqsadi nima?",
        options: [
          "Axborotni ishonchli uzatish",
          "Xatolik kiritish",
          "Tasodifiylik kiritish",
          "Faylni tozalash",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kiber tizimda 'chiqish' nimani anglatadi?",
        options: ["Natijaviy axborot", "Elektr kuchi", "Signal kuchi", "Hajm"],
        correctAnswer: 0,
      },
      {
        question: "Tizim stabil bo'lishi uchun nima zarur?",
        options: [
          "Teskari aloqa",
          "Tez kompyuter",
          "Qimmat uskuna",
          "O'zgaruvchan dastur",
        ],
        correctAnswer: 0,
      },
      {
        question: "Sensorning misoli?",
        options: ["Harorat o'lchagich", "Monitor", "Printer", "CPU"],
        correctAnswer: 0,
      },
      {
        question: "Avtomatik boshqaruv tizimi misoli?",
        options: ["Smart uy", "Mikroskop", "Qalam", "Chiroq"],
        correctAnswer: 0,
      },
      {
        question: "Kibernetika fani qanday fanlar bilan bog'liq?",
        options: [
          "Matematika, informatika, fizika",
          "Tarix, san'at",
          "Kimyo, biologiya",
          "Adabiyot, musiqa",
        ],
        correctAnswer: 0,
      },
    ],
  },
  "HTML & CSS Asoslari": {
    title: "HTML & CSS Asoslari",
    timeLimit: 30,
    questions: [
      {
        question: "HTML nima uchun ishlatiladi?",
        options: [
          "Veb sahifalarni tuzish",
          "Rasmlar chizish",
          "Server yaratish",
          "Mobil ilova yozish",
        ],
        correctAnswer: 0,
      },
      {
        question: "<p> tegi nimani bildiradi?",
        options: ["Paragraf", "Rasm", "Bog‘lama", "Jadval"],
        correctAnswer: 0,
      },
      {
        question: "CSS nima vazifa bajaradi?",
        options: [
          "Veb sahifa ko‘rinishini boshqaradi",
          "Fayllarni yuklaydi",
          "Serverda ishlaydi",
          "Ma’lumotlar bazasi yaratadi",
        ],
        correctAnswer: 0,
      },
      {
        question: "HTML hujjatida <head> qismida nima yoziladi?",
        options: [
          "Metama’lumotlar",
          "Matn kontenti",
          "Rasm fayllari",
          "Jadval ma’lumotlari",
        ],
        correctAnswer: 0,
      },
      {
        question: "CSS faylni HTML faylga qanday ulaymiz?",
        options: [
          "<link> orqali",
          "<script> orqali",
          "<style> orqali",
          "<meta> orqali",
        ],
        correctAnswer: 0,
      },
      {
        question: "<a href='url'> tegi nima uchun kerak?",
        options: [
          "Bog‘lama yaratish",
          "Rasm yuklash",
          "Jadval chizish",
          "Skript ishlatish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Inline CSS qanday qo‘llaniladi?",
        options: [
          "Element ichida style atributi bilan",
          "link orqali",
          "external fayl orqali",
          "meta orqali",
        ],
        correctAnswer: 0,
      },
      {
        question: "class va id farqi nimada?",
        options: [
          "id unikal, class umumiy",
          "class unikal, id umumiy",
          "ikkalasi bir xil",
          "id faqat CSSda ishlatiladi",
        ],
        correctAnswer: 0,
      },
      {
        question: "qaysi teg HTML5 da yangi qo‘shilgan?",
        options: ["<article>", "<b>", "<u>", "<font>"],
        correctAnswer: 0,
      },
      {
        question: "CSS'da rang berish qanday amalga oshiriladi?",
        options: ["color: red;", "text: red;", "font: red;", "style: red;"],
        correctAnswer: 0,
      },
      {
        question: "HTML fayl qaysi teglardan boshlanishi kerak?",
        options: ["<!DOCTYPE html>", "<head>", "<body>", "<html>"],
        correctAnswer: 0,
      },
      {
        question: "<img> tegida qaysi atribut rasm manzilini ko‘rsatadi?",
        options: ["src", "href", "alt", "path"],
        correctAnswer: 0,
      },
      {
        question: "CSS selector .container {} nimani bildiradi?",
        options: [
          "class nomi container",
          "id container",
          "tag container",
          "element container",
        ],
        correctAnswer: 0,
      },
      {
        question: "Qaysi CSS qiymat orqali fon rangi belgilanadi?",
        options: ["background-color", "color", "font-color", "bg-color"],
        correctAnswer: 0,
      },
      {
        question: "HTMLda ro‘yxat qanday yaratiladi?",
        options: ["<ul> va <li>", "<table>", "<form>", "<div>"],
        correctAnswer: 0,
      },
      {
        question: "Qaysi teg forma yaratadi?",
        options: ["<form>", "<input>", "<button>", "<fieldset>"],
        correctAnswer: 0,
      },
      {
        question: "Qaysi input turi parol uchun ishlatiladi?",
        options: [
          "type='password'",
          "type='text'",
          "type='email'",
          "type='checkbox'",
        ],
        correctAnswer: 0,
      },
      {
        question: "CSS'da font o‘lchamini qanday sozlaymiz?",
        options: ["font-size", "text-size", "size", "font"],
        correctAnswer: 0,
      },
      {
        question: "HTML elementga border berish uchun CSS da nima ishlatiladi?",
        options: ["border", "frame", "line", "stroke"],
        correctAnswer: 0,
      },
      {
        question: "Qaysi CSS xossasi elementni markazga olib keladi?",
        options: [
          "margin: auto",
          "padding: center",
          "align: middle",
          "position: center",
        ],
        correctAnswer: 0,
      },
      {
        question: "Qaysi HTML tegda video ko‘rsatiladi?",
        options: ["<video>", "<media>", "<player>", "<object>"],
        correctAnswer: 0,
      },
      {
        question: "CSS'da hover nima uchun ishlatiladi?",
        options: [
          "Sichqoncha ustiga olib borilganda uslub berish",
          "Kliklanganda",
          "Sahifa yuklanganda",
          "Element bosilganda",
        ],
        correctAnswer: 0,
      },
      {
        question: "HTMLda <div> nima vazifani bajaradi?",
        options: [
          "Bo‘lim ajratadi",
          "Rasm ko‘rsatadi",
          "Matn yozadi",
          "Jadval yaratadi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Qaysi CSS qiymat matnni qalin qiladi?",
        options: [
          "font-weight: bold",
          "font-size: big",
          "text-bold",
          "weight: strong",
        ],
        correctAnswer: 0,
      },
      {
        question: "CSS'da element ichiga bo‘sh joy berish nima bilan qilinadi?",
        options: ["padding", "margin", "border", "spacing"],
        correctAnswer: 0,
      },
    ],
  },
  "Algoritmlar Asoslari": {
    title: "Algoritmlar Asoslari",
    timeLimit: 35,
    questions: [
      {
        question: "Algoritm nima?",
        options: [
          "Muammoni yechish uchun ketma-ket amallar",
          "Dasturlash tili",
          "Ma’lumotlar turi",
          "Operatorlar to‘plami",
        ],
        correctAnswer: 0,
      },
      {
        question: "Eng mashhur qidiruv algoritmlardan biri?",
        options: ["Binary Search", "Linear Tree", "Quick Add", "Heap Insert"],
        correctAnswer: 0,
      },
      {
        question: "Eng mashhur saralash algoritmi?",
        options: ["Bubble Sort", "Binary Tree", "Hash Sort", "Push-Pop"],
        correctAnswer: 0,
      },
      {
        question: "Rekursiya nima?",
        options: [
          "Funksiya o‘zini chaqirishi",
          "Dastur tugashi",
          "Dastur tugmay ishlashi",
          "Xatolik yuzaga chiqishi",
        ],
        correctAnswer: 0,
      },
      {
        question: "O(n) nimani bildiradi?",
        options: [
          "Vaqt murakkabligi",
          "Xotira turi",
          "O‘zgaruvchining qiymati",
          "Fayl o‘lchami",
        ],
        correctAnswer: 0,
      },
      {
        question: "Linear Search yomon holatda qancha vaqt oladi?",
        options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"],
        correctAnswer: 0,
      },
      {
        question: "Binary Search qanday shartda ishlaydi?",
        options: [
          "Saralangan ro'yxat",
          "Har qanday ro'yxat",
          "Matn fayllar",
          "Tasodifiy sonlar",
        ],
        correctAnswer: 0,
      },
      {
        question: "Greedy algoritmlar qanday ishlaydi?",
        options: [
          "Har safar eng yaxshi qarorni tanlaydi",
          "Barcha holatlarni tekshiradi",
          "Xotirada saqlaydi",
          "Tasodifiy qarorlar qabul qiladi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Divide and Conquer misoliga nima kiradi?",
        options: ["Merge Sort", "Linear Search", "Greedy", "Loop"],
        correctAnswer: 0,
      },
      {
        question: "DFS nima uchun ishlatiladi?",
        options: [
          "Grafni chuqurlikdan yurib chiqish",
          "Saralash",
          "Matnni tahlil qilish",
          "Random tanlash",
        ],
        correctAnswer: 0,
      },
      {
        question: "BFS qanday farq qiladi?",
        options: [
          "Kenglikdan yurib chiqadi",
          "Tezroq ishlaydi",
          "Xatoliklar kam",
          "DFSdan sekin",
        ],
        correctAnswer: 0,
      },
      {
        question: "Dynamic Programming xususiyati nima?",
        options: [
          "Oldingi natijalarni eslab qolish",
          "Hech narsa eslamaslik",
          "Greedy bilan bir xil",
          "Faqat rekursiyada ishlaydi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Fibonacci sonlari qanday topiladi?",
        options: [
          "F(n) = F(n-1) + F(n-2)",
          "n * 2",
          "n + 3",
          "F(n-1) - F(n-2)",
        ],
        correctAnswer: 0,
      },
      {
        question: "Algoritmda 'base case' nima uchun kerak?",
        options: [
          "Rekursiyani to‘xtatish",
          "Saralash uchun",
          "Chop etish uchun",
          "Loop yaratish uchun",
        ],
        correctAnswer: 0,
      },
      {
        question: "Memoization nima?",
        options: [
          "Natijani saqlab qolish",
          "Xotirani tozalash",
          "Random natija",
          "Chuqurlashgan rekursiya",
        ],
        correctAnswer: 0,
      },
      {
        question: "Greedy algoritm hamisha to‘g‘ri yechim beradimi?",
        options: ["Yo‘q", "Ha", "Har doim", "Hech qachon"],
        correctAnswer: 0,
      },
      {
        question: "Big O notatsiyasi nimani bildiradi?",
        options: [
          "Eng yomon holatdagi ishlash",
          "Eng yaxshi holat",
          "O‘rtacha holat",
          "Hech birini",
        ],
        correctAnswer: 0,
      },
      {
        question: "Merge Sort murakkabligi?",
        options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
        correctAnswer: 0,
      },
      {
        question: "Dijkstra algoritmi nima uchun ishlatiladi?",
        options: [
          "Eng qisqa yo‘lni topish",
          "Saralash",
          "Rekursiya",
          "Fayl ochish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Heap ma'lumot turi qayerda ishlatiladi?",
        options: ["Priority Queue", "Stack", "Array", "List"],
        correctAnswer: 0,
      },
      {
        question: "Tartiblangan massivda qidirish uchun mos algoritm?",
        options: ["Binary Search", "DFS", "Queue", "BFS"],
        correctAnswer: 0,
      },
      {
        question: "Sorting algoritmlaridan biri?",
        options: ["Insertion Sort", "Dijkstra", "Search Tree", "Graph Map"],
        correctAnswer: 0,
      },
      {
        question: "O(1) murakkablik degani nima?",
        options: [
          "Doimiy vaqt",
          "O‘zgarmas joy",
          "Rekursiv yechim",
          "Kengayuvchi algoritm",
        ],
        correctAnswer: 0,
      },
      {
        question: "Brute Force degani nima?",
        options: [
          "Barcha imkoniyatni tekshirish",
          "Faqat 1 tanlash",
          "Random tanlash",
          "Greedy ishlatish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Hash Table qanday maqsadda ishlatiladi?",
        options: ["Tez izlash", "Sorting", "Graflar", "Chuqurlikdan yurish"],
        correctAnswer: 0,
      },
    ],
  },
  "Kognitiv Mantiq": {
    title: "Kognitiv Mantiq",
    timeLimit: 35,
    questions: [
      {
        question: "Kognitiv mantiq nimani o‘rganadi?",
        options: [
          "Inson tafakkuri va axborotni qayta ishlash jarayonlarini",
          "Matematik formulalarni",
          "Tashqi muhit o‘zgarishlarini",
          "Tana harakatini",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kognitiv fanlar ichiga qaysilar kiradi?",
        options: [
          "Psixologiya, neyrofiziologiya, informatika",
          "Biologiya, fizika, kimyo",
          "Geometriya, algebra, fizika",
          "Musiqa, rasm, adabiyot",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kognitiv jarayonlar misoli?",
        options: [
          "E’tibor, xotira, tafakkur",
          "Oyoq harakati",
          "Ovoz chiqarish",
          "Qon aylanishi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kognitiv mantiqda 'bias' nima?",
        options: [
          "Aqliy og‘ish yoki noto‘g‘ri qarorlar",
          "To‘g‘ri mulohaza",
          "Aniq xulosa",
          "Matematik isbot",
        ],
        correctAnswer: 0,
      },
      {
        question: "Inson miyasi ma’lumotni qanday tarzda qayta ishlaydi?",
        options: [
          "Parallel va assotsiativ",
          "Faqat ketma-ket",
          "Tasodifiy",
          "Faqat matematik",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kognitiv dissonans degani nima?",
        options: [
          "Fikrlar o‘rtasidagi ziddiyat",
          "Aqliy kuchayish",
          "Axborot ko‘pligi",
          "Tinchlanish holati",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kognitiv mantiqda xatolik sababi nima bo‘lishi mumkin?",
        options: [
          "Stereotiplar va noto‘g‘ri taxminlar",
          "To‘g‘ri ma’lumot",
          "Mantiqiy qonunlar",
          "Xotira kuchi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kognitiv xarita deganda nima tushuniladi?",
        options: [
          "Fikrlash modeli",
          "Geografik xarita",
          "Matematik grafik",
          "Jadval",
        ],
        correctAnswer: 0,
      },
      {
        question: "Assotsiatsiya nima?",
        options: [
          "Bir fikrni boshqasi bilan bog‘lash",
          "Xotirani o‘chirish",
          "Axborotni saqlamaslik",
          "Formulani yodlash",
        ],
        correctAnswer: 0,
      },
      {
        question: "Empatiya qanday kognitiv ko‘nikma?",
        options: [
          "Boshqaning his-tuyg‘usini tushunish",
          "Axborotni tahlil qilish",
          "Raqamlarni eslab qolish",
          "Musiqa eshitish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Metakognitsiya degani nima?",
        options: [
          "O‘z fikrlashini anglash",
          "Shunchaki bilish",
          "Boshqalarning fikrini o‘rganish",
          "His-tuyg‘ularni yashirish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Qaysi tanlov 'confirmation bias' ga misol bo‘ladi?",
        options: [
          "Faqat o‘z fikriga mos ma’lumotni tanlash",
          "Hamma fikrlarni solishtirish",
          "Yangi g‘oyani qabul qilish",
          "Shubha bilan qarash",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kognitiv yondashuv qaysi sohada ko‘p qo‘llanadi?",
        options: [
          "Sun’iy intellekt",
          "Astronomiya",
          "Biologik kimyo",
          "Arxitektura",
        ],
        correctAnswer: 0,
      },
      {
        question: "Qanday fikrlash turi tez, ammo ko‘proq xatolik qiladi?",
        options: [
          "1-tizim (tez va intuitiv)",
          "2-tizim (sekin va mantiqiy)",
          "Analitik fikrlash",
          "Tanqidiy fikrlash",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kognitiv mantiqda 'heuristic' nima?",
        options: [
          "Qisqa yo‘l orqali qaror qabul qilish",
          "To‘liq tahlil",
          "Xotira kuchi",
          "Hisoblash mashinasi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Qaysi model kognitiv qaror qabul qilishda ishlatiladi?",
        options: [
          "Dual-process modeli",
          "Einstein modeli",
          "Newton modeli",
          "Logik formula",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Qanday holatda insonlar ko‘proq 'mental shortcut' ishlatadi?",
        options: [
          "Charchaganida",
          "Energiyaga to‘la bo‘lsa",
          "Haqiqiy tahlil istasa",
          "Ko‘p vaqt bo‘lsa",
        ],
        correctAnswer: 0,
      },
      {
        question: "Qaysi holat inson fikrini manipulyatsiya qiladi?",
        options: [
          "Framing effect",
          "To‘g‘ri axborot",
          "Real mulohaza",
          "Tajriba yetishmasligi",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Qaysi tushuncha qaror qabul qilishda o'tmish tajribasiga tayanishni bildiradi?",
        options: ["Anchoring", "Empatiya", "Bias", "Abstraksiya"],
        correctAnswer: 0,
      },
      {
        question: "Fikrlashdagi 'availability heuristic' qanday ishlaydi?",
        options: [
          "Eslanishi oson narsalarga asoslanish",
          "Murakkab tahlil qilish",
          "Haqiqatni e’tiborsiz qoldirish",
          "Qarama-qarshi fikr tanlash",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Kognitiv mantiq qanday muammolarni hal qilishga yordam beradi?",
        options: [
          "Qaror qabul qilish, xatolikni kamaytirish",
          "Fizik o‘lchovlar",
          "Til grammatikasi",
          "San’at tahlili",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kognitiv tafakkur asosida ishlaydigan tizim?",
        options: ["Sun’iy intellekt", "Brauzer", "Printer", "Kamera"],
        correctAnswer: 0,
      },
      {
        question: "Inson miyasi qanday holatda ko‘proq xatoga yo‘l qo‘yadi?",
        options: [
          "Shoshilinch qaror qabul qilganda",
          "Sekin fikrlaganda",
          "To‘liq tahlil qilganda",
          "E'tiborli bo‘lganda",
        ],
        correctAnswer: 0,
      },
      {
        question: "Tanqidiy fikrlash nimani anglatadi?",
        options: [
          "Fikrlashni tahlil qilish va asosli xulosa chiqarish",
          "Faqat o‘z fikrida turish",
          "Qarama-qarshi fikrga qarshi chiqish",
          "His-tuyg‘ular asosida qaror qabul qilish",
        ],
        correctAnswer: 0,
      },
      {
        question: "Kognitiv yondashuvdagi asosiy tamoyil?",
        options: [
          "Axborotni qayta ishlash jarayoni",
          "Shunchaki kuzatish",
          "Sezgilarni o‘rganish",
          "Musiqa orqali eslab qolish",
        ],
        correctAnswer: 0,
      },
    ],
  },
  Kombinatorika: {
    title: "Kombinatorika",
    timeLimit: 35,
    questions: [
      {
        question: "Kombinatorika nimani o‘rganadi?",
        options: [
          "Obyektlarning joylashish va tanlanish usullarini",
          "Sonlarning ildizini",
          "Algebrik tenglamalarni",
          "Geometrik shakllarni",
        ],
        correctAnswer: 0,
      },
      {
        question: "Permutatsiya degani nima?",
        options: [
          "Tartiblangan joylashuv",
          "Noto‘g‘ri kombinatsiya",
          "Sonlar ko‘paytmasi",
          "Qaytariluvchi tanlov",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "3 ta harfni tartib bilan joylashtirish necha xil usulda bo‘ladi?",
        options: ["6", "3", "9", "2"],
        correctAnswer: 0,
      },
      {
        question: "n! qanday ataladi?",
        options: ["Faktorial", "Ko‘paytma", "Daraja", "Natija"],
        correctAnswer: 0,
      },
      {
        question: "5! qiymatini toping.",
        options: ["120", "60", "24", "100"],
        correctAnswer: 0,
      },
      {
        question: "4 ta kitobni tartibli joylashtirish usullari soni nechta?",
        options: ["24", "16", "12", "8"],
        correctAnswer: 0,
      },
      {
        question: "Tanlashda tartib muhim bo‘lmasa, nima deb ataladi?",
        options: ["Kombinatsiya", "Permutatsiya", "Daraja", "Ko‘paytma"],
        correctAnswer: 0,
      },
      {
        question: "5 ta elementdan 2 tasini tanlash: C(5, 2) = ?",
        options: ["10", "5", "15", "20"],
        correctAnswer: 0,
      },
      {
        question: "C(n, k) formulasini ko‘rsating.",
        options: ["n! / (k!(n−k)!)", "n^k", "k! / n!", "n! / k!"],
        correctAnswer: 0,
      },
      {
        question: "2 ta elementdan 2 tasini tanlash usullari soni?",
        options: ["1", "2", "4", "0"],
        correctAnswer: 0,
      },
      {
        question: "Qaytariluvchi tanlov nimani anglatadi?",
        options: [
          "Elementlar bir necha marta tanlanadi",
          "Faqat bir marta tanlash",
          "Tartibsiz tanlash",
          "Faqat butun sonlar",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "3 ta raqamli parolni necha usulda tuzish mumkin? (raqamlar qaytmasin)",
        options: ["720", "60", "504", "6"],
        correctAnswer: 0,
      },
      {
        question: "4 ta odamdan 2 ta sardor tanlash nechta usulda bo‘ladi?",
        options: ["6", "12", "4", "2"],
        correctAnswer: 0,
      },
      {
        question: "n = 6, k = 3 bo‘lsa, C(6,3) = ?",
        options: ["20", "18", "15", "10"],
        correctAnswer: 0,
      },
      {
        question: "n = 7, P(7) qiymati qancha?",
        options: ["5040", "720", "362880", "120"],
        correctAnswer: 0,
      },
      {
        question: "Binom koeffitsiyenti degani nima?",
        options: ["C(n, k)", "n!", "n^k", "k!"],
        correctAnswer: 0,
      },
      {
        question: "Kombinatorikada nechta asosiy tushuncha mavjud?",
        options: [
          "3: Permutatsiya, kombinatsiya, joylashtirish",
          "2: Permutatsiya va daraja",
          "4: Son, harf, forma, raqam",
          "2: To‘plam va sondan foydalanish",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Agar 5 ta do‘stdan 1 ta sovrin oluvchi tanlansa, necha usulda tanlanadi?",
        options: ["5", "10", "25", "120"],
        correctAnswer: 0,
      },
      {
        question:
          "5 ta harfli so‘z (harflar takrorlanmaydi) nechta so‘z yasash mumkin?",
        options: ["120", "100", "60", "20"],
        correctAnswer: 0,
      },
      {
        question:
          "Agar 3 ta elementdan 2 ta tanlansa, necha kombinatsiya mavjud?",
        options: ["3", "6", "2", "1"],
        correctAnswer: 0,
      },
      {
        question:
          "4 raqamli parol (raqamlar takrorlanadi) nechta usulda tuziladi?",
        options: ["10000", "1000", "9999", "256"],
        correctAnswer: 0,
      },
      {
        question: "C(8, 0) qiymati qancha?",
        options: ["1", "0", "8", "∞"],
        correctAnswer: 0,
      },
      {
        question: "C(n, 1) har doim qanday qiymatga teng?",
        options: ["n", "1", "n!", "n/2"],
        correctAnswer: 0,
      },
      {
        question: "Permutatsiyalarda tartib muhimmi?",
        options: ["Ha", "Yo‘q", "Ba'zida", "Hech qachon"],
        correctAnswer: 0,
      },
      {
        question:
          "n ta elementdan o‘z-o‘zini takrorlamasdan k ta tanlov – bu nima?",
        options: ["Kombinatsiya", "Permutatsiya", "To‘plam", "Daraja"],
        correctAnswer: 0,
      },
    ],
  },
  "IQ va Analitik Fikrlash": {
    title: "IQ va Analitik Fikrlash",
    timeLimit: 40,
    questions: [
      {
        question: "1, 3, 6, 10, 15, ? Raqam qaysi bo‘ladi?",
        options: ["21", "20", "19", "22"],
        correctAnswer: 0,
      },
      {
        question: "Agar 2 + 3 = 13, 3 + 4 = 25, 4 + 5 = 41 bo‘lsa, 5 + 6 = ?",
        options: ["61", "65", "49", "51"],
        correctAnswer: 0,
      },
      {
        question: "Qaysi so‘z boshqalarga o‘xshamaydi?",
        options: ["Qalam", "Daftar", "Stol", "Ruchka"],
        correctAnswer: 2,
      },
      {
        question: "3, 9, 27, 81, ?",
        options: ["243", "162", "108", "324"],
        correctAnswer: 0,
      },
      {
        question:
          "Agarda 'DOM' so‘zida har bir harf 1 raqamni bildirsa: D=4, O=15, M=13. 'SOMA' so‘zining yig'indisi qancha?",
        options: ["51", "52", "50", "53"],
        correctAnswer: 1,
      },
      {
        question: "5-3 = 24, 6-4 = 36, 7-5 = 48, 8-6 = ?",
        options: ["60", "54", "64", "72"],
        correctAnswer: 0,
      },
      {
        question: "Qaysi shakl tartibdan chiqadi: ◯, □, △, ◯, □, △, ◯, □, ?",
        options: ["◯", "□", "△", "◁"],
        correctAnswer: 2,
      },
      {
        question: "Qaysi juftlik bir-biriga o‘xshamaydi?",
        options: ["4-16", "5-25", "6-36", "7-48"],
        correctAnswer: 3,
      },
      {
        question: "A, C, F, J, O, ?",
        options: ["U", "T", "S", "V"],
        correctAnswer: 0,
      },
      {
        question:
          "Agar Bugun chorshanba bo‘lsa, 10 kundan keyin qaysi kun bo‘ladi?",
        options: ["Shanba", "Yakshanba", "Dushanba", "Seshanba"],
        correctAnswer: 3,
      },
      {
        question:
          "Ikki soatli qumsoat va uch soatli qumsoat bilan 5 daqiqani qanday o‘lchaysiz?",
        options: [
          "Imkonsiz",
          "5 min kutib",
          "Birini ikki marta aylantirib",
          "5 daqiqa to‘g‘ridan-to‘g‘ri o‘lchanmaydi",
        ],
        correctAnswer: 3,
      },
      {
        question:
          "O‘ngdan ikkinchi harf chapdan oltinchi harfga teng. Bu qaysi harf bo‘lishi mumkin?",
        options: ["D", "G", "H", "E"],
        correctAnswer: 3,
      },
      {
        question: "1 + 1 = 2, 2 + 2 = 6, 3 + 3 = 12, 4 + 4 = ?",
        options: ["20", "18", "24", "22"],
        correctAnswer: 2,
      },
      {
        question: "Qaysi raqam 3, 6, 9, 12, ? ketma-ketlikka mos?",
        options: ["15", "16", "14", "18"],
        correctAnswer: 0,
      },
      {
        question: "Tomonlari teng bo‘lgan geometrik shakl bu —",
        options: ["Kvadrat", "Doira", "Uchburchak", "Paralelogram"],
        correctAnswer: 0,
      },
      {
        question: "Qaysi so‘zda qolganlariga o‘xshamagan ma’no bor?",
        options: ["Mashina", "Samolyot", "Velosiped", "Kitob"],
        correctAnswer: 3,
      },
      {
        question: "1, 4, 9, 16, 25, ?",
        options: ["36", "30", "32", "34"],
        correctAnswer: 0,
      },
      {
        question: "Agar daryo chapga oqayotgan bo‘lsa, quyosh qaysi tomonda?",
        options: ["Sharqda", "G‘arbda", "Janubda", "Shimolda"],
        correctAnswer: 1,
      },
      {
        question: "Qaysi so‘zda tovushlar soni eng ko‘p?",
        options: ["Suv", "Havo", "Chiroq", "Devor"],
        correctAnswer: 2,
      },
      {
        question:
          "Agar 1 ta mashina 5 daqiqada 1 ta detal ishlab chiqarsa, 5 ta mashina 5 daqiqada nechta detal chiqaradi?",
        options: ["5", "25", "10", "15"],
        correctAnswer: 1,
      },
      {
        question: "Raqamlar ketma-ketligi: 2, 4, 8, 16, ?",
        options: ["32", "20", "24", "30"],
        correctAnswer: 0,
      },
      {
        question: "Qaysi so‘z 3 ta harfdan iborat emas?",
        options: ["Ona", "Ota", "Do‘st", "O‘rtoq"],
        correctAnswer: 3,
      },
      {
        question:
          "Agar barcha to‘rtburchaklar to‘g‘ri bo‘lsa, barcha kvadratlar to‘rtburchakmi?",
        options: ["Ha", "Yo‘q", "Ba’zilari", "Ma’lum emas"],
        correctAnswer: 0,
      },
      {
        question: "1+2+3+...+10 = ?",
        options: ["55", "50", "60", "45"],
        correctAnswer: 0,
      },
      {
        question: "Qaysi raqam '15, 30, 45, ?' ketma-ketligiga mos keladi?",
        options: ["60", "50", "55", "65"],
        correctAnswer: 0,
      },
    ],
  },
};

// URL dan test nomini olish
const urlParams = new URLSearchParams(window.location.search);
const testName = urlParams.get("test");

// Tanlangan testni olish
const testData = tests[testName];

// Agar test topilmasa, xatolik ko'rsatish
if (!testData) {
  alert("Test topilmadi!");
  window.location.href = "index.html";
}

// DOM elementlari
const testTitle = document.getElementById("test-title");
const timerElement = document.getElementById("timer");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const progressBar = document.getElementById("progress");

// Test holati
let currentQuestion = 0;
let userAnswers = new Array(testData.questions.length).fill(null);
let timeLeft = testData.timeLimit * 60; // sekundda
let timerInterval;

// Testni boshlash
function startTest() {
  testTitle.textContent = testData.title;
  showQuestion();
  startTimer();
  updateProgress();
}

// Savolni ko'rsatish
function showQuestion() {
  const question = testData.questions[currentQuestion];
  questionText.textContent = question.question;

  optionsContainer.innerHTML = "";
  question.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.className = `option ${
      userAnswers[currentQuestion] === index ? "selected" : ""
    }`;
    optionElement.textContent = option;
    optionElement.onclick = () => selectOption(index);
    optionsContainer.appendChild(optionElement);
  });

  updateNavigationButtons();
}

// Variantni tanlash
function selectOption(index) {
  userAnswers[currentQuestion] = index;
  showQuestion();
}

// Timer
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finishTest();
    }
  }, 1000);
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

// Progress
function updateProgress() {
  const progress = ((currentQuestion + 1) / testData.questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

// Navigatsiya tugmalari
function updateNavigationButtons() {
  prevButton.disabled = currentQuestion === 0;
  nextButton.textContent =
    currentQuestion === testData.questions.length - 1 ? "Yakunlash" : "Keyingi";
}

// Oldingi savol
prevButton.onclick = () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
    updateProgress();
  }
};

// Keyingi savol
nextButton.onclick = () => {
  if (currentQuestion < testData.questions.length - 1) {
    currentQuestion++;
    showQuestion();
    updateProgress();
  } else {
    finishTest();
  }
};

// Testni yakunlash
function finishTest() {
  clearInterval(timerInterval);

  // Natijalarni hisoblash
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === testData.questions[index].correctAnswer
  ).length;

  const wrongAnswers = testData.questions.length - correctAnswers;
  const score = (correctAnswers / testData.questions.length) * 100;

  // Natijalarni saqlash
  const testResult = {
    testName: testData.title,
    date: new Date().toISOString(),
    correctAnswers: correctAnswers,
    wrongAnswers: wrongAnswers,
    totalQuestions: testData.questions.length,
    score: Math.round(score),
    timeSpent: testData.timeLimit * 60 - timeLeft,
  };

  // Mavjud natijalarni olish
  let savedResults = JSON.parse(localStorage.getItem("testResults")) || [];

  // Yangi natijani qo'shish
  savedResults.push(testResult);

  // Natijalarni localStorage'ga saqlash
  localStorage.setItem("testResults", JSON.stringify(savedResults));

  // Natijalarni ko'rsatish
  const resultMessage = `
    Test yakunlandi!
    To'g'ri javoblar: ${correctAnswers}/${testData.questions.length}
    Noto'g'ri javoblar: ${wrongAnswers}/${testData.questions.length}
    Ball: ${Math.round(score)}%
  `;

  alert(resultMessage);
  window.location.href = "results.html";
}

// Testni boshlash
startTest();
