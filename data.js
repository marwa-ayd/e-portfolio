/* Contenu de l'e-portfolio de Marwa Ayyadi.
   Blocs possibles dans "realisations" : {h}, {p}, {ul}, {ol}, {table:{head,rows}} */
window.PORTFOLIO = [
/* ───────────────────────── STAGES ───────────────────────── */
{
  id: "ammps", kind: "stage", year: "2026", short: "AMMPS",
  niveau: "4e année",
  title: "Une plateforme de formation pour l'AMMPS",
  subtitle: "Mise en place d'un LMS Moodle sécurisé, pensé pour l'entreprise",
  org: "AMMPS, Agence Marocaine du Médicament et des Produits de Santé · Direction des Systèmes d'Information",
  periode: "22 juin – 26 juillet 2026", duree: "5 semaines",
  cadre: "Projet individuel",
  role: "Cheffe de projet LMS et administratrice de la plateforme",
  encadrement: "Youssef Alaoui (AMMPS) · Hajar El Miri (UIR)",
  hook: "En cinq semaines, j'ai posé seule les fondations d'une plateforme de formation interne pour l'autorité marocaine de régulation des produits de santé : choix de la solution, serveur, installation, configuration métier et guide de déploiement.",
  tags: ["Moodle 5.2", "Apache", "PHP 8.3", "MariaDB 10.11", "Sécurité des accès"],
  contexte: [
    "L'AMMPS est l'autorité centrale qui encadre les produits de santé au Maroc : médicaments, industrie pharmaceutique et dispositifs médicaux. Elle compte environ 300 collaborateurs répartis dans 14 divisions, de la Pharmacovigilance à l'Inspection, en passant par les Ressources Humaines et les Systèmes d'Information & Digitalisation.",
    "Jusqu'ici, la formation interne se faisait de manière informelle. Aucun espace ne centralisait les contenus de cours, rien ne permettait de suivre la progression des collaborateurs, et les certifications obligatoires n'étaient gérées par aucun outil.",
    "L'enjeu était donc de mettre en place une plateforme de formation en ligne sécurisée, adaptée à un environnement professionnel, fondée sur une solution open source fiable et capable d'évoluer."
  ],
  missions: [
    "Étudier les solutions LMS disponibles et retenir la plus adaptée à une entreprise",
    "Préparer l'environnement technique nécessaire à son hébergement",
    "Installer et configurer la plateforme choisie",
    "L'adapter à un usage professionnel plutôt qu'à un usage scolaire classique",
    "Documenter toute la démarche pour faciliter une future mise en production"
  ],
  roleDetail: "J'ai porté le projet de bout en bout, de l'étude initiale à la configuration finale. Mon tuteur m'orientait sur les besoins, l'équipe informatique m'apportait un appui technique, et les décisions de mise en œuvre me revenaient.",
  realisations: [
    {h: "1. Une étude comparative pour choisir la bonne solution"},
    {p: "J'ai comparé quatre LMS sur six critères : coût, ouverture du code, personnalisation, gestion des utilisateurs, sécurité et orientation (scolaire ou entreprise)."},
    {table: {head: ["Solution", "Ce qui a pesé dans la décision"], rows: [
      ["Moodle", "Gratuit, open source, très personnalisable, avec une édition entreprise (Moodle Workplace) pour l'avenir : <strong>retenu</strong>"],
      ["Google Classroom", "Pensé pour l'école, peu adapté à la gestion d'une organisation"],
      ["TalentLMS", "Orienté entreprise, mais solution propriétaire et payante"],
      ["Chamilo", "Open source, mais moins riche en options de personnalisation"]
    ]}},
    {h: "2. Un environnement technique à la hauteur de Moodle 5.2"},
    {p: "J'ai monté un serveur de test local avec XAMPP (Apache, PHP, MariaDB). Pour répondre aux exigences de Moodle 5.2, j'ai fait passer PHP de la version 8.2 à 8.3 et MariaDB de 10.4 à 10.11, puis activé à la main les extensions PHP nécessaires : curl, zip, mbstring, fileinfo, intl, gd, openssl, soap et sodium."},
    {h: "3. Une installation adaptée à la nouvelle architecture"},
    {p: "Depuis la version 5.1, Moodle sépare ses fichiers publics dans un dossier <code>/public</code>. J'ai configuré un alias Apache qui pointe vers ce dossier : le site répond à une adresse propre, et les fichiers internes ne sont jamais exposés."},
    {h: "4. Chaque blocage, diagnostiqué puis résolu"},
    {p: "J'ai traité les problèmes un par un, avec la même méthode : lire les journaux d'erreurs, vérifier la configuration avec phpinfo(), interroger la base en SQL, puis corriger."},
    {table: {head: ["Problème rencontré", "Solution apportée"], rows: [
      ["Extensions PHP manquantes", "Activation dans php.ini, puis redémarrage d'Apache"],
      ["Version de MariaDB trop ancienne", "Installation de la 10.11 et création d'un dossier de données propre avec mariadb-install-db"],
      ["Base de données qui n'était pas en Unicode", "utf8mb4 défini par défaut, puis base recréée"],
      ["Boucle de redirection infinie après la connexion", "Analyse des journaux Apache et suppression des cookies de session"],
      ["Erreurs « Not Found » sur les pages Moodle", "Alias Apache dirigé vers le dossier /public"]
    ]}},
    {h: "5. Une configuration pensée pour l'entreprise"},
    {ul: [
      "Compte administrateur créé, nom du site et page d'accueil définis : cours et annonces pour les utilisateurs connectés, annonces seules pour les visiteurs",
      "Auto-inscription désactivée : seule l'administration crée les comptes",
      "Devoirs configurés : formats bureautiques acceptés, retours sous forme de fichiers, grilles de notation hors ligne, taille d'envoi augmentée",
      "Services web activés pour permettre, plus tard, l'usage de l'application mobile Moodle",
      "Un premier cours pilote créé"
    ]},
    {h: "6. Une documentation pour passer le relais"},
    {p: "J'ai rédigé un guide pas à pas de toute l'installation, avec chaque problème rencontré et sa solution, pour que la mise en production puisse se faire sans repartir de zéro."}
  ],
  resultatsOrg: [
    "Une plateforme Moodle fonctionnelle, avec un compte administrateur opérationnel",
    "Des réglages de sécurité adaptés à une entreprise et des fonctions de formation prêtes à l'emploi",
    "Un premier cours pilote et une documentation complète : une base technique solide pour le déploiement"
  ],
  resultatsMoi: [
    "Ma première vraie expérience dans une direction informatique, au cœur d'un régulateur de santé publique",
    "J'ai appris à porter seule un projet du besoin jusqu'au livrable : analyser, choisir, construire, documenter",
    "Je suis devenue plus autonome et plus sereine face à des problèmes techniques peu documentés",
    "J'ai compris qu'un outil conçu pour l'école doit être repensé, surtout sur la sécurité et les accès, avant de convenir à une entreprise"
  ],
  limites: [
    "La plateforme tourne en local et n'est pas accessible depuis l'extérieur",
    "Aucune donnée réelle (collaborateurs, contenus de formation) n'a encore été importée",
    "L'identité visuelle de l'AMMPS (logo, couleurs) n'est pas encore appliquée",
    "L'installation n'est pas prête pour la production : mots de passe par défaut, pas de HTTPS"
  ],
  pistes: "Migrer vers un serveur de production en HTTPS, appliquer la charte de l'AMMPS, importer les comptes et les relier à l'annuaire de l'entreprise par authentification unique (SSO), organiser les cours par division, et envisager Moodle Workplace si les besoins grandissent.",
  techniques: ["Administration Apache (httpd.conf, alias)", "PHP 8.3 (php.ini, extensions)", "MariaDB 10.11", "Installation et configuration de Moodle 5.2", "Jeux de caractères (utf8mb4)", "Diagnostic par journaux et phpinfo()", "Contrôle d'accès et protection des fichiers"],
  transversales: ["Autonomie et prise en charge complète d'un projet", "Résolution méthodique : problème, cause, diagnostic, solution", "Rédaction technique et documentation", "Analyse comparative et justification d'un choix", "Lecture de documentation officielle (Moodle, PHP, MariaDB, Apache)"]
},
{
  id: "nextronic", kind: "stage", year: "2025", short: "Nextronic",
  niveau: "3e année",
  title: "Sunny, un chatbot sur un LLM hébergé en interne",
  subtitle: "Relier une interface web à un modèle de langage, sans passer par le cloud",
  org: "Nextronic · Technopark, Casablanca",
  periode: "Juin – juillet 2025", duree: "Juin à juillet 2025",
  cadre: "Binôme, avec Zineb Arrami",
  role: "Co-développeuse : interface, serveur Flask, RAG et tests",
  encadrement: "",
  hook: "Avec ma binôme, nous avons construit Sunny, un chatbot web relié à des modèles de langage installés sur un serveur interne de l'entreprise, puis capable d'interroger ses documents grâce à un système RAG. Ma première mise en pratique d'un LLM dans une application réelle.",
  tags: ["Llama 3.2", "Qwen3", "Ollama", "RAG", "LangChain", "FAISS", "Flask"],
  contexte: [
    "Pour mon stage de 3e année, j'ai rejoint Nextronic au Technopark de Casablanca. Le sujet : faire fonctionner un modèle de langage sur un serveur de l'entreprise et le rendre utilisable depuis une simple page web.",
    "Le choix d'un modèle hébergé en interne répondait à une exigence claire : les échanges ne devaient pas transiter par un service cloud externe."
  ],
  missions: [
    "Faire dialoguer une interface web avec un LLM installé sur un serveur de l'entreprise",
    "Proposer une interface simple, avec l'historique des échanges et une recherche dans cet historique",
    "Permettre au chatbot de répondre à partir des documents internes de l'entreprise (RAG)",
    "Tester les réponses, améliorer leur pertinence et les temps de réponse, puis documenter la solution"
  ],
  roleDetail: "Nous avons travaillé en binôme sur l'ensemble du projet. J'ai participé à chaque étape : validation de l'accès au modèle, serveur Flask, interface, mise en place du RAG, tests et documentation.",
  realisations: [
    {h: "Une démarche en trois temps"},
    {ol: [
      "<strong>Vérifier l'accès au modèle.</strong> Un premier script Python interroge l'endpoint <code>/api/generate</code> d'Ollama et récupère la réponse JSON du modèle <code>llama3.2</code>.",
      "<strong>Tester en console.</strong> Une boucle question-réponse permet d'observer rapidement le comportement du modèle et la gestion des erreurs HTTP.",
      "<strong>Passer au web.</strong> Un serveur Flask expose une route <code>/chat</code> appelée par l'interface ; il transmet la question à Ollama et renvoie la réponse en JSON."
    ]},
    {h: "L'architecture de l'application"},
    {table: {head: ["Couche", "Technologie", "Rôle"], rows: [
      ["Interface", "HTML, CSS, JavaScript", "Zone de conversation, historique latéral, recherche dans les messages"],
      ["Serveur", "Python, Flask", "Route /chat, appel du modèle, gestion des erreurs"],
      ["Recherche", "LangChain, FAISS", "Recherche des passages utiles dans les documents internes (RAG)"],
      ["Modèles", "Llama 3.2 et Qwen3 via Ollama", "Génération des réponses, sur un serveur du réseau local"]
    ]}},
    {h: "Faire parler les documents de l'entreprise"},
    {p: "Une fois le chatbot fonctionnel, nous avons voulu qu'il réponde à partir des documents internes de l'entreprise, et pas seulement de ce que le modèle sait déjà. Nous avons mis en place un système RAG : les documents sont découpés, transformés en vecteurs et indexés avec FAISS ; à chaque question, LangChain retrouve les passages les plus proches et les transmet au modèle, qui formule sa réponse à partir d'eux. Nous avons fait tourner deux modèles via Ollama, Llama 3.2 et Qwen3."},
    {h: "Une application qui ne plante pas au premier incident"},
    {p: "Le serveur traite les erreurs de connexion et les codes HTTP inattendus : en cas de souci réseau, l'utilisateur reçoit un message clair au lieu d'une page cassée."}
  ],
  resultatsOrg: [
    "Un chatbot fonctionnel de bout en bout, de l'interface jusqu'au modèle",
    "Un modèle hébergé en interne : les conversations ne quittent pas le réseau de l'entreprise",
    "Un chatbot capable d'interroger les documents internes grâce au RAG",
    "Une documentation de la solution pour sa reprise"
  ],
  resultatsMoi: [
    "Ma première intégration d'un LLM dans une application concrète",
    "J'ai appris à tester un système d'IA par étapes : l'accès au modèle, puis son comportement en console, avant de construire l'interface",
    "Mon premier système RAG : découpage des documents, embeddings, index FAISS et chaîne LangChain",
    "Une première expérience de travail en binôme dans un cadre professionnel"
  ],
  limites: [
    "Sunny ne garde pas le contexte d'une question à l'autre",
    "Les temps de réponse dépendent de la puissance du serveur interne qui fait tourner les modèles"
  ],
  pistes: "Ajouter une mémoire de conversation et évaluer la qualité des réponses du RAG sur un jeu de questions de référence.",
  techniques: ["Python", "Flask", "API REST", "Intégration de LLM (Ollama, Llama 3.2, Qwen3)", "RAG avec LangChain et FAISS", "HTML, CSS, JavaScript", "Gestion des erreurs HTTP", "Tests fonctionnels", "Documentation technique"],
  transversales: ["Travail en binôme", "Démarche itérative", "Sens du test et de la qualité"]
},
{
  id: "oncf", kind: "stage", year: "2024", short: "ONCF",
  niveau: "2e année",
  title: "La recette de l'application Gestion Parc Automobile",
  subtitle: "Tests, fiches de recette et livrables de déploiement",
  org: "ONCF, Office National des Chemins de Fer · Rabat-Agdal",
  periode: "2024", duree: "Stage de 2e année, 2024",
  cadre: "Au sein d'une équipe projet",
  role: "Stagiaire en recette et qualité logicielle",
  encadrement: "",
  hook: "Mon premier pas en entreprise : vérifier qu'une application répond vraiment aux besoins avant son déploiement, et le documenter avec précision.",
  tags: ["Recette", "Tests applicatifs", "Analyse fonctionnelle", "Gantt"],
  contexte: [
    "L'ONCF, opérateur ferroviaire national du Maroc, déployait une application de « Gestion Parc Automobile » pour le suivi de ses véhicules de service.",
    "Avant toute mise en service, une application doit passer la recette : on vérifie, fonction par fonction, qu'elle fait bien ce qui est attendu. C'est sur cette étape que j'ai été accueillie."
  ],
  missions: [
    "Rédiger les fiches de recette de l'application",
    "Préparer les livrables de déploiement",
    "Mener l'analyse fonctionnelle et les tests applicatifs",
    "Rédiger les rapports d'erreurs",
    "Suivre le planning à l'aide d'un diagramme de Gantt"
  ],
  roleDetail: "Mon rôle se situait du côté qualité : comprendre ce que l'application devait faire, le tester, et consigner chaque écart pour l'équipe de développement.",
  realisations: [
    {h: "Comprendre avant de tester"},
    {p: "J'ai commencé par l'analyse fonctionnelle de l'application, pour savoir ce que chaque écran et chaque fonction devaient permettre. C'est ce travail qui a servi de base aux fiches de recette."},
    {h: "Tester et documenter"},
    {p: "J'ai rédigé les fiches de recette, déroulé les tests applicatifs et rédigé des rapports d'erreurs pour chaque anomalie constatée, afin que l'équipe puisse les reproduire et les corriger."},
    {h: "Préparer le déploiement"},
    {p: "En parallèle, j'ai contribué aux livrables de déploiement et suivi l'avancement des tâches sur un diagramme de Gantt."}
  ],
  resultatsOrg: [
    "Des fiches de recette et des livrables de déploiement à disposition de l'équipe projet",
    "Des anomalies documentées et transmises pour correction"
  ],
  resultatsMoi: [
    "Ma première immersion dans une grande entreprise publique",
    "J'ai compris qu'une fonctionnalité n'est terminée que lorsqu'elle a été vérifiée au regard du besoin",
    "J'ai pris l'habitude d'écrire des rapports précis et reproductibles"
  ],
  limites: [
    "Mon intervention portait sur la recette et la documentation, pas sur le développement de l'application"
  ],
  pistes: "",
  techniques: ["Analyse fonctionnelle", "Rédaction de fiches de recette", "Tests applicatifs", "Rapports d'anomalies", "Planification (diagramme de Gantt)", "Word, Excel"],
  transversales: ["Rigueur", "Sens de l'organisation", "Communication écrite"]
},
/* ───────────────────────── PROJETS ───────────────────────── */
{
  id: "review", kind: "projet", year: "2026", short: "Review Intelligence",
  niveau: "Projet intégré, module Deep Learning",
  title: "Product Review Intelligence",
  subtitle: "Deep Learning et système multi-agents",
  org: "Université Internationale de Rabat · Semestre 8, 2025–2026",
  periode: "Semestre 8 · 2025–2026", duree: "1 mois",
  cadre: "Équipe FORtidata · 4 personnes",
  role: "Préparation des données et évaluation du modèle",
  encadrement: "Pr. Hasna El Haji",
  hook: "Un nom de produit suffit : notre système cherche des avis sur le web, en mesure le sentiment avec un DistilBERT que nous avons fine-tuné, puis rédige un rapport de marché.",
  tags: ["PyTorch", "Hugging Face", "DistilBERT", "CrewAI", "FastAPI", "Ollama"],
  contexte: [
    "L'idée de départ : aider à comprendre ce que les clients pensent vraiment d'un produit, sans lire des centaines d'avis un par un.",
    "L'utilisateur saisit un nom de produit, par exemple « iPhone 15 » ou « Miss Dior ». Après sa validation, le système collecte des avis en ligne, analyse leur tonalité, puis produit un rapport en cinq parties : résumé, sentiment, marché, recommandations et conclusion."
  ],
  missions: [
    "Préparer un jeu de données d'avis et l'équilibrer",
    "Fine-tuner et évaluer un modèle de classification de sentiment",
    "Intégrer ce modèle comme outil dans une architecture multi-agents",
    "Tester les choix techniques en conditions réelles et documenter les résultats"
  ],
  roleDetail: "Projet réalisé à quatre au sein de l'équipe FORtidata (Salma Aouami, Zineb Arrami, Hiba Arbaoui et moi). Ma partie : préparer le jeu de données, puis évaluer le modèle une fois entraîné et analyser ses erreurs.",
  realisations: [
    {h: "Ma partie"},
    {ul: ["Regroupement des notes Amazon en trois classes de sentiment", "Rééquilibrage à 2 487 avis par classe et découpage 80/20 entre entraînement et test", "Évaluation du modèle : rapport de classification, matrice de confusion et analyse des confusions entre classes voisines"]},
    {h: "Le projet de l'équipe"},
    {h: "Le modèle de sentiment"},
    {ul: [
      "<strong>Données :</strong> avis Amazon, regroupés en trois classes. 1 à 2 étoiles pour le négatif, 3 pour le neutre, 4 à 5 pour le positif",
      "<strong>Équilibrage :</strong> 2 487 exemples par classe, soit 7 461 au total, pour que le modèle ne se contente pas de prédire la classe dominante",
      "<strong>Découpage :</strong> 80/20, soit 5 968 avis d'entraînement et 1 493 de test",
      "<strong>Entraînement :</strong> <code>distilbert-base-uncased</code> (66 M de paramètres) avec une tête à trois sorties, via l'API Trainer de Hugging Face sur GPU T4 : 2 epochs, batch de 16, 128 tokens, FP16, 68 secondes"
    ]},
    {table: {head: ["Classe", "Précision", "Rappel", "F1", "Avis de test"], rows: [
      ["Négatif", "0,81", "0,66", "0,73", "505"],
      ["Neutre", "0,61", "0,72", "0,66", "489"],
      ["Positif", "0,81", "0,82", "0,82", "499"],
      ["<strong>Moyenne macro</strong>", "<strong>0,75</strong>", "<strong>0,73</strong>", "<strong>0,74</strong>", "1 493"]
    ]}},
    {p: "Le modèle atteint 73 % d'accuracy, là où un classifieur qui répondrait toujours la même chose plafonnerait à 33 %. La matrice de confusion montre qu'il confond surtout des classes voisines : seuls 26 avis négatifs sont pris pour positifs, et 12 positifs pour négatifs. Il saisit bien la polarité ; c'est l'intensité qui lui pose problème, en particulier sur les avis à 3 étoiles, souvent ambigus."},
    {h: "Trois agents qui travaillent en chaîne"},
    {ol: [
      "<strong>Sentiment Analyst</strong> appelle notre DistilBERT, chargé une seule fois au démarrage du serveur, et renvoie la répartition des sentiments avec un score de confiance par avis.",
      "<strong>Market Researcher</strong> collecte les avis, les points forts et les points faibles via SerpApi.",
      "<strong>Report Generator</strong> rassemble le travail des deux autres dans un rapport structuré, rédigé par Llama 3 via Ollama."
    ]},
    {p: "Les agents CrewAI s'enchaînent derrière un endpoint FastAPI. Chaque analyse attend une validation humaine, et chaque action d'agent est consignée dans un journal JSON horodaté."},
    {h: "Des choix techniques éprouvés en conditions réelles"},
    {table: {head: ["Besoin", "Outil testé", "Ce que nous avons constaté", "Décision"], rows: [
      ["LLM", "Groq", "Erreurs 429 de limite de débit, même avec des relances", "Écarté"],
      ["LLM", "Gemini", "Clé gratuite qui expirait en pleine démonstration", "Écarté"],
      ["LLM", "Ollama (local)", "Plus lent, mais stable, gratuit et reproductible", "Retenu"],
      ["Recherche web", "DuckDuckGo", "Aucun résultat exploitable, incompatibilité de version", "Écarté"],
      ["Recherche web", "SerpApi", "Payant, mais résultats fiables", "Retenu"]
    ]}},
    {table: {head: ["Produit testé", "Avis analysés", "Avis positifs", "Confiance moyenne"], rows: [
      ["iPhone 15", "5", "4", "93 %"], ["Miss Dior", "6", "4", "86 %"], ["Dyson V15", "1", "1", "75 % (données limitées)"]
    ]}}
  ],
  resultatsOrg: [
    "Un modèle de NLP entraîné, évalué et réellement utilisé dans un produit",
    "Un système complet qui transforme un nom de produit en rapport de marché"
  ],
  resultatsMoi: [
    "J'ai suivi le cycle complet d'un modèle : données, entraînement, évaluation, intégration",
    "J'ai appris à lire une matrice de confusion pour comprendre où et pourquoi un modèle se trompe",
    "J'ai découvert les architectures multi-agents et l'importance de tester chaque outil avant de s'y fier"
  ],
  limites: [
    "La classe neutre reste la plus difficile (F1 de 0,66)",
    "Une analyse peut dépasser cinq minutes avec Ollama sur une machine chargée"
  ],
  pistes: "Enrichir les données d'entraînement, ajouter un cache et utiliser un modèle local quantifié.",
  techniques: ["PyTorch", "Hugging Face Transformers", "Fine-tuning de DistilBERT", "Précision, rappel, F1, matrice de confusion", "CrewAI", "FastAPI", "Ollama", "SerpApi"],
  transversales: ["Travail d'équipe", "Esprit d'expérimentation", "Résultats présentés avec leurs limites"]
},
{
  id: "panorama", kind: "projet", year: "2026", short: "Panorama",
  niveau: "Module Computer Vision",
  title: "Panorama Image Stitching",
  subtitle: "Vision par ordinateur classique",
  org: "Université Internationale de Rabat · 2025–2026",
  periode: "2025–2026", duree: "2 semaines",
  cadre: "Équipe FORtidata · 4 personnes",
  role: "Prétraitement des images et mesure des résultats",
  encadrement: "",
  hook: "Assembler plusieurs photos prises à la main en un seul panorama sans couture, uniquement avec la géométrie de l'image : jusqu'à 97 % d'appariements fiables.",
  tags: ["OpenCV", "SIFT", "FLANN", "RANSAC", "NumPy"],
  contexte: [
    "Le défi du module : construire une chaîne complète d'assemblage de panoramas sans aucun réseau de neurones. Toute la géométrie devait être calculée à partir des formulations vues en cours.",
    "Nous avons travaillé sur des photos réelles prises à main levée, avec des zones difficiles comme le ciel et l'eau, où l'image offre peu de repères."
  ],
  missions: [
    "Détecter et apparier les points d'intérêt entre images",
    "Estimer les transformations entre images de manière robuste",
    "Projeter et fusionner les images sur un canevas commun",
    "Mesurer la qualité de chaque assemblage"
  ],
  roleDetail: "Projet réalisé à quatre au sein de l'équipe FORtidata. Ma partie : préparer les images pour qu'elles offrent assez de repères, puis mesurer la qualité de chaque assemblage.",
  realisations: [
    {h: "Ma partie"},
    {ul: ["Redimensionnement des images et égalisation du contraste par CLAHE sur le canal L de l'espace LAB", "Réglage du seuil de contraste de SIFT pour les zones peu texturées (ciel, eau)", "Mesure des résultats paire par paire : taux d'inliers et erreur de reprojection"]},
    {h: "Le projet de l'équipe"},
    {h: "Une chaîne en six étapes"},
    {ol: [
      "<strong>Prétraitement :</strong> images ramenées à 1 500 px au maximum, puis contraste rehaussé par CLAHE sur le canal L de l'espace LAB, pour faire ressortir des repères dans le ciel et sur l'eau.",
      "<strong>Détection SIFT :</strong> 5 000 à 8 000 points clés par image, avec un seuil de contraste abaissé (0,01 à 0,02) pour les zones peu texturées.",
      "<strong>Appariement :</strong> FLANN et test de Lowe, qui ne garde un appariement que si le meilleur voisin est nettement plus proche que le second (ratio de 0,75).",
      "<strong>Homographies par RANSAC :</strong> 10 000 itérations, seuil de 5 px, puis chaînage vers le repère de la première image.",
      "<strong>Projection :</strong> chaque image est déformée sur un canevas commun, dimensionné à partir des coins projetés.",
      "<strong>Fusion :</strong> moyenne pondérée par la distance au bord, comparée à un blending multi-bandes sur une pyramide laplacienne à 5 niveaux, qui efface les effets de « fantôme » aux jointures."
    ]},
    {h: "Des résultats mesurés, paire par paire"},
    {table: {head: ["Jeu d'images", "Paire", "Appariements fiables (inliers)", "Erreur de reprojection"], rows: [
      ["Côte au coucher du soleil", "1 → 2", "480 / 505 · 95,0 %", "0,15 px"],
      ["Panorama côtier en hauteur", "1 → 2", "232 / 281 · 82,6 %", "1,86 px"],
      ["Panorama côtier en hauteur", "2 → 3", "201 / 226 · 88,9 %", "1,60 px"],
      ["Lac d'Annecy", "1 → 2", "266 / 353 · 75,4 %", "1,08 px"],
      ["Lac d'Annecy", "2 → 3", "1 467 / 1 511 · 97,1 %", "0,89 px"]
    ]}},
    {h: "Ce qui a fait la différence"},
    {p: "Sans CLAHE, RANSAC échouait complètement sur le lac d'Annecy : l'eau et le ciel couvert ne donnaient presque aucun point d'intérêt. Le réglage du test de Lowe a lui aussi été décisif. En dessous de 0,65, trop de bons appariements étaient rejetés ; au-dessus de 0,80, les faux appariements faussaient l'homographie."}
  ],
  resultatsOrg: [
    "Une chaîne complète et fonctionnelle, de la photo brute au panorama fusionné",
    "Une évaluation chiffrée pour chaque paire d'images"
  ],
  resultatsMoi: [
    "Une vraie compréhension de la géométrie de l'image : coordonnées homogènes, transformation linéaire directe, géométrie projective",
    "J'ai appris à estimer un modèle de façon robuste malgré des données bruitées",
    "Ces bases restent utiles en vision moderne : préparation des images, alignement, contrôle qualité des sorties d'un modèle"
  ],
  limites: [
    "Les paramètres (seuil SIFT, ratio de Lowe) ont été réglés à la main pour nos jeux d'images",
    "La chaîne a été évaluée sur des séries de deux à trois images seulement",
    "Les zones peu texturées restent fragiles sans prétraitement adapté"
  ],
  pistes: "",
  techniques: ["Python", "OpenCV", "NumPy", "SIFT", "FLANN", "RANSAC", "Homographies", "Pyramides laplaciennes", "Jupyter"],
  transversales: ["Travail d'équipe", "Rigueur dans la mesure des résultats", "Réglage méthodique de paramètres"]
},
{
  id: "toxic", kind: "projet", year: "2026", short: "Toxic Classifier",
  niveau: "Projet académique",
  title: "Toxic Comment Classifier",
  subtitle: "NLP et Machine Learning",
  org: "Université Internationale de Rabat · 2025–2026",
  periode: "2025–2026", duree: "2 semaines",
  cadre: "Équipe de 5 personnes",
  role: "Analyse exploratoire et application Streamlit",
  encadrement: "Pr. Hasna El Haji",
  hook: "Un classifieur multi-label qui repère six formes de toxicité dans des commentaires en ligne, avec un ROC-AUC moyen de 0,981, et une application web pour le tester.",
  tags: ["scikit-learn", "TF-IDF", "Pandas", "Streamlit"],
  contexte: [
    "Nous sommes partis des données du challenge Kaggle Jigsaw Toxic Comment Classification : 159 571 commentaires d'environ 67 mots en moyenne, dont 10,2 % portent au moins une étiquette toxique.",
    "Deux difficultés rendent le problème intéressant : un même commentaire peut cumuler plusieurs étiquettes, et certaines d'entre elles sont très rares."
  ],
  missions: [
    "Explorer les données et comprendre le déséquilibre des étiquettes",
    "Vectoriser les textes",
    "Comparer plusieurs modèles et régler leurs hyperparamètres",
    "Rendre le modèle utilisable dans une interface"
  ],
  roleDetail: "Projet réalisé à cinq : l'équipe FORtidata (Salma Aouami, Zineb Arrami, Hiba Arbaoui et moi) avec Boutaina El Ayachi. Ma partie : l'exploration des données au départ, et l'application Streamlit à l'arrivée.",
  realisations: [
    {h: "Ma partie"},
    {ul: ["Analyse exploratoire : fréquence des étiquettes, corrélations, longueur des commentaires", "Mise en évidence du déséquilibre des classes, qui a orienté le choix du ROC-AUC", "Développement de l'application Streamlit qui affiche la probabilité de chaque type de toxicité"]},
    {h: "Le projet de l'équipe"},
    {table: {head: ["Étiquette", "Toxique", "Obscène", "Insulte", "Très toxique", "Haine identitaire", "Menace"], rows: [
      ["Part des commentaires", "9,6 %", "5,3 %", "4,9 %", "1,0 %", "0,9 %", "0,3 %"]
    ]}},
    {p: "Ce déséquilibre a guidé le choix de la métrique. Un modèle qui répondrait toujours « non toxique » obtiendrait près de 90 % d'accuracy sans rien détecter : nous avons donc évalué les modèles au ROC-AUC."},
    {h: "Notre démarche"},
    {ol: [
      "<strong>Exploration :</strong> fréquence des étiquettes, corrélations entre elles, longueur des commentaires toxiques et non toxiques.",
      "<strong>Vectorisation TF-IDF :</strong> unigrammes et bigrammes, fréquences en échelle logarithmique, termes trop rares ou trop fréquents écartés.",
      "<strong>Comparaison de trois modèles</strong> en stratégie One-vs-Rest, soit six classifieurs binaires chacun.",
      "<strong>Réglage des hyperparamètres</strong> à l'aide de courbes de performance selon la régularisation.",
      "<strong>Application Streamlit :</strong> on saisit un texte, on obtient la probabilité de chaque type de toxicité."
    ]},
    {table: {head: ["Modèle", "ROC-AUC moyen"], rows: [
      ["Régression logistique (C = 4)", "<strong>0,981</strong>"], ["SVM linéaire calibré", "0,975"], ["Naive Bayes multinomial", "0,824"]
    ]}},
    {p: "La régression logistique gagne à être moins régularisée : son ROC-AUC passe de 0,962 pour C = 0,1 à 0,981 pour C = 3, puis se stabilise. Naive Bayes, à l'inverse, perd en performance quand son paramètre de lissage augmente."}
  ],
  resultatsOrg: [
    "Un classifieur performant sur six étiquettes, malgré des classes très déséquilibrées",
    "Une application web simple pour tester n'importe quel texte"
  ],
  resultatsMoi: [
    "Un modèle simple, bien vectorisé et bien réglé, peut atteindre d'excellents résultats : c'est la base à battre avant un modèle plus lourd",
    "J'ai appris à choisir une métrique adaptée à des classes déséquilibrées",
    "J'ai pratiqué une démarche complète et reproductible, de l'exploration à l'interface"
  ],
  limites: [
    "TF-IDF repose sur les mots et leur fréquence : il ne capte pas le sens d'une phrase dans son contexte",
    "Le jeu de données est en anglais uniquement",
    "Les étiquettes les plus rares, comme la menace (0,3 %), restent les plus difficiles à apprendre"
  ],
  pistes: "",
  techniques: ["Python", "Pandas", "scikit-learn", "TF-IDF", "Classification multi-label", "ROC-AUC", "Optimisation d'hyperparamètres", "Streamlit", "Matplotlib"],
  transversales: ["Travail en équipe de cinq", "Esprit analytique", "Démarche reproductible"]
},
{
  id: "career", kind: "projet", year: "2025", short: "Career Advisor",
  niveau: "Module IA & NoSQL",
  title: "AI Career Advisor",
  subtitle: "Un chatbot d'orientation fondé sur le RAG",
  org: "Université Internationale de Rabat · 2025–2026",
  periode: "2025–2026", duree: "1 mois",
  cadre: "Projet d'équipe",
  role: "Base MongoDB Atlas et intégration du RAG",
  encadrement: "",
  hook: "Une application web qui aide les étudiants à choisir une filière et une université, avec un chatbot qui répond à partir d'une base MongoDB et des documents que l'étudiant lui confie.",
  tags: ["RAG", "Embeddings", "Llama 3", "MongoDB Atlas", "Node.js", "React"],
  contexte: [
    "Les informations sur les filières, les conditions d'admission et les débouchés sont éparpillées sur de nombreux sites, et aucune source ne s'adapte aux questions déjà posées par l'étudiant.",
    "Notre application rassemble ces informations et garde le fil de la conversation."
  ],
  missions: [
    "Concevoir une application web d'orientation complète",
    "Mettre en place un chatbot qui s'appuie sur des données réelles (RAG)",
    "Stocker des données hétérogènes dans une base NoSQL",
    "Exposer le tout via une API REST"
  ],
  roleDetail: "Projet d'équipe du module IA & NoSQL. Ma partie : la couche de données dans MongoDB Atlas et son branchement au chatbot, pour des réponses fondées sur les documents et l'historique de la conversation.",
  realisations: [
    {h: "Ma partie"},
    {ul: ["Modélisation des collections MongoDB Atlas : universités, conversations, messages, documents importés", "Stockage des textes extraits et de leurs vecteurs pour la recherche sémantique", "Intégration du RAG dans le chatbot, avec la mémoire de conversation"]},
    {h: "Le projet de l'équipe"},
    {h: "Architecture"},
    {table: {head: ["Couche", "Technologies", "Rôle"], rows: [
      ["Interface", "React", "Connexion, tableau de bord, universités, favoris, chatbot, profil"],
      ["Backend", "Node.js, Express, Python", "API REST, logique RAG, traitement des données"],
      ["IA", "Ollama + Llama 3, embeddings all-MiniLM-L6-v2", "Génération des réponses, recherche sémantique"],
      ["Données", "MongoDB Atlas", "Universités, conversations, messages, documents importés"]
    ]}},
    {h: "Le RAG, étape par étape"},
    {ol: [
      "L'étudiant importe un document PDF ou TXT : le texte est extrait puis transformé en vecteur sémantique.",
      "Chaque question est, elle aussi, transformée en vecteur.",
      "Le backend mesure la similarité cosinus entre la question et chaque document de la conversation, et retient le plus proche s'il dépasse un seuil de pertinence de 0,15.",
      "Ce document, les données des universités et l'historique de la conversation sont transmis à Llama 3, qui formule une réponse ancrée dans ce contenu."
    ]},
    {p: "La recherche porte sur le sens et non sur les mots : une question sur « les écoles d'informatique » retrouve un document qui parle de « génie logiciel »."},
    {h: "Fonctionnalités livrées"},
    {ul: [
      "Authentification, avec le niveau d'études demandé à l'inscription (Bac, Licence, Master, Doctorat)",
      "Universités filtrables par pays et par ville, avec lien vers le site officiel",
      "Favoris et « likes » pour classer les universités",
      "Chatbot multi-conversations, avec historique conservé et import de documents",
      "API REST : conversations, messages, documents RAG, universités"
    ]}
  ],
  resultatsOrg: [
    "Une application d'orientation fonctionnelle, de la base de données à l'interface",
    "Un chatbot qui répond à partir de contenus réels plutôt que de la seule mémoire du modèle"
  ],
  resultatsMoi: [
    "J'ai compris concrètement le fonctionnement du RAG et des embeddings",
    "J'ai appris à faire dialoguer cinq briques différentes : React, Node.js, Python, MongoDB et un modèle local",
    "Une architecture modulaire, avec des endpoints bien définis, nous a permis de faire évoluer chaque partie séparément",
    "J'ai vu l'intérêt d'une base orientée documents pour des données hétérogènes : universités, messages, textes extraits, vecteurs"
  ],
  limites: [
    "La recherche ne retient qu'un seul document par question, sans découpage en passages",
    "L'application n'est pas encore déployée dans le cloud"
  ],
  pistes: "Découper les documents en segments, utiliser un index vectoriel, enrichir la base (frais, bourses, dates limites) et déployer l'application.",
  techniques: ["RAG", "Embeddings", "Similarité cosinus", "Ollama, Llama 3", "Hugging Face", "MongoDB Atlas", "Node.js, Express", "React", "API REST"],
  transversales: ["Travail d'équipe", "Pensée architecture", "Intégration de systèmes"]
},
{
  id: "ashrae", kind: "projet", year: "2026", short: "Big Data ASHRAE",
  niveau: "Projet Big Data, 4e année",
  title: "Analyse énergétique ASHRAE",
  subtitle: "Une chaîne Big Data complète, de HDFS à Spark MLlib",
  org: "Université Internationale de Rabat · 4e année",
  periode: "4e année · 2025–2026", duree: "1 mois",
  cadre: "Équipe FORtidata · 4 personnes",
  role: "Transferts de données avec Sqoop, mise en forme du rapport et de la présentation",
  encadrement: "",
  hook: "Plus de 20 millions de relevés horaires de compteurs, une chaîne Big Data de bout en bout et trois modèles prédictifs comparés. J'y ai pris en charge les échanges avec MySQL et la restitution du travail.",
  tags: ["Hadoop HDFS", "Hive", "Spark", "Sqoop", "Spark MLlib", "Docker"],
  contexte: [
    "Le scénario : une direction de la transition énergétique dispose de trois ans de relevés de compteurs communicants. Elle veut anticiper les pics, repérer les bâtiments dont la consommation dérive et mieux piloter ses budgets.",
    "Nous avons travaillé sur le jeu de données ASHRAE Great Energy Predictor III, avec une sandbox Hortonworks HDP 3.0 dans Docker."
  ],
  missions: [
    "Ingérer les données dans HDFS et les organiser dans un entrepôt Hive",
    "Nettoyer et transformer les données avec Spark",
    "Entraîner et comparer des modèles prédictifs avec Spark MLlib",
    "Échanger des données avec une base relationnelle et restituer le projet"
  ],
  roleDetail: "Chaque membre de l'équipe avait sa partie. La mienne : faire circuler les données entre l'écosystème Hadoop et MySQL avec Sqoop, puis donner forme au rapport et aux slides de soutenance.",
  realisations: [
    {h: "La chaîne de traitement"},
    {p: "CSV Kaggle → HDFS → Hive (base <code>energy_db</code>) → Spark et Scala dans Zeppelin → Spark MLlib → résultats, avec Sqoop pour les échanges avec MySQL."},
    {table: {head: ["Membre", "Partie prise en charge"], rows: [
      ["<strong>Marwa Ayyadi</strong>", "<strong>Sqoop et échanges avec MySQL, mise en page du rapport et des slides</strong>"],
      ["Zineb Arrami", "Entrepôt Hive (tables, partitionnement, vues) et coordination"],
      ["Hiba Arbaoui", "Pipeline Spark : chargement, jointures, nettoyage, persistance"],
      ["Salma Aouami", "Spark MLlib : variables, entraînement et évaluation des modèles"]
    ]}},
    {h: "Ma partie"},
    {ul: [
      "Mise en place des transferts Sqoop entre l'écosystème Hadoop et la base MySQL",
      "Rédaction et mise en page du rapport final, pour présenter clairement le travail de chacun",
      "Conception des slides de soutenance"
    ]},
    {h: "Les résultats de l'équipe"},
    {p: "Les modèles utilisent des variables tirées de l'horodatage (heure, jour, mois, week-end), le logarithme de la surface et l'usage du bâtiment. Ils ont été entraînés sur environ 1,6 million de lignes et testés sur 403 592."},
    {table: {head: ["Modèle", "RMSE", "MAE", "R²"], rows: [
      ["Random Forest (20 arbres, profondeur 5)", "<strong>142 895</strong>", "<strong>3 813</strong>", "<strong>0,052</strong>"],
      ["Gradient Boosted Trees", "144 446", "4 230", "0,031"],
      ["Régression linéaire", "146 699", "5 211", "0,001"]
    ]}},
    {p: "Le Random Forest l'emporte sur les trois métriques, mais le R² reste faible. Nous l'avons présenté tel quel, avec ses causes : météo non intégrée, quatre types de compteurs mélangés, bâtiments très différents. L'écart entre RMSE et MAE montre que l'erreur vient de quelques bâtiments à consommation extrême."},
    {h: "Obstacles surmontés ensemble"},
    {table: {head: ["Problème", "Solution"], rows: [
      ["Services HDP arrêtés (NameNode en safe mode, MySQL, YARN)", "Démarrage et réparation manuels de chaque service"],
      ["Contraintes CHECK refusées par Hive 3.1", "Règle « relevé ≥ 0 » appliquée au nettoyage Spark"],
      ["Jointure météo d'environ 176 milliards de lignes", "Jointure limitée aux bâtiments, météo gardée en perspective"],
      ["Mémoire insuffisante en MEMORY_AND_DISK", "Persistance DISK_ONLY : un count passe de 9 193 ms à 159 ms"]
    ]}}
  ],
  resultatsOrg: [
    "Une chaîne Big Data opérationnelle sur plus de 20 millions de relevés",
    "Trois modèles comparés et un rapport qui présente les résultats avec leurs limites"
  ],
  resultatsMoi: [
    "J'ai compris comment les données circulent entre un écosystème Hadoop et une base relationnelle",
    "J'ai appris à rendre lisible un projet technique à plusieurs voix, dans un rapport et une présentation",
    "Sur de gros volumes, la façon de stocker et de joindre les données compte autant que le modèle",
    "Un résultat modeste, expliqué honnêtement, vaut mieux qu'un chiffre embelli"
  ],
  limites: [
    "Le R² des modèles reste faible (0,052 au mieux)",
    "Les données météo n'ont pas été intégrées",
    "Les quatre types de compteurs sont traités ensemble"
  ],
  pistes: "Intégrer la météo, séparer les types de compteurs et entraîner un modèle par famille de bâtiments.",
  techniques: ["Sqoop", "MySQL", "Hadoop HDFS", "Hive", "Spark, Scala", "Spark MLlib", "Zeppelin", "Docker (HDP 3.0)"],
  transversales: ["Travail en équipe avec rôles répartis", "Synthèse et restitution", "Mise en forme de documents techniques"]
},
{
  id: "oracle", kind: "projet", year: "2026", short: "Oracle 19c",
  niveau: "Module Cloud Data Warehousing",
  title: "Plateforme décisionnelle Oracle 19c",
  subtitle: "Entrepôt de données, sécurité et passage à l'échelle",
  org: "Université Internationale de Rabat · 2025–2026",
  periode: "2025–2026", duree: "1 mois, en trois étapes",
  cadre: "Équipe FORtidata · 4 personnes",
  role: "Sécurité des données RH et vérification des indicateurs",
  encadrement: "M. Said Mokhtari",
  hook: "En trois étapes progressives, une plateforme décisionnelle sur Oracle Database 19c : indicateurs commerciaux, accès sécurisé aux données RH, puis consolidation de 918 000 lignes de ventes.",
  tags: ["Oracle 19c", "SQL", "PL/SQL", "Vues matérialisées", "ROLLUP"],
  contexte: [
    "Le module nous plaçait dans la peau d'une équipe décisionnelle sur Oracle Database 19c, en architecture multitenant (CDB/PDB).",
    "L'objectif : transformer des schémas de données brutes en indicateurs fiables, sécurisés et rapides à consulter."
  ],
  missions: [
    "Construire des indicateurs commerciaux réutilisables",
    "Protéger les données sensibles des ressources humaines",
    "Passer à l'échelle sur un grand volume de ventes et optimiser les requêtes"
  ],
  roleDetail: "Projet réalisé à quatre au sein de l'équipe FORtidata, étape après étape. Ma partie : la sécurisation des données RH du mini-projet 2, et la vérification des chiffres produits par nos vues.",
  realisations: [
    {h: "Ma partie"},
    {ul: ["Conception de la vue VUE_RH_MANAGER, sans salaires ni commissions", "Création de l'utilisateur manager_rh avec le seul droit de lire cette vue, puis tests d'accès autorisé et refusé", "Contrôle des totaux des vues et de la vue matérialisée par rapport aux requêtes brutes"]},
    {h: "Le projet de l'équipe"},
    {table: {head: ["Étape", "Schéma", "Objectif", "Ce que nous avons créé"], rows: [
      ["Mini-projet 1", "OE (+ HR)", "Vision commerciale consolidée", "3 vues : CA annuel, meilleurs produits, CA par région"],
      ["Mini-projet 2", "HR", "Suivi RH sécurisé", "1 vue sans données sensibles, 1 utilisateur manager"],
      ["Projet final", "SH", "Plateforme à l'échelle", "1 vue matérialisée, indicateurs ROLLUP, EXPLAIN PLAN"]
    ]}},
    {h: "Des indicateurs commerciaux fiables"},
    {p: "Le chiffre d'affaires annuel fait ressortir 2007 comme la meilleure année, avec 69 commandes et 2 545 098 de CA. Nous avons encapsulé ces calculs dans des vues réutilisables, puis vérifié que leurs totaux correspondaient exactement à ceux des requêtes brutes."},
    {h: "Des données RH protégées"},
    {p: "Un manager devait consulter les informations RH utiles sans jamais voir les salaires ni les commissions. La vue <code>VUE_RH_MANAGER</code> réunit employés, départements et localisations en écartant volontairement ces colonnes, et l'utilisateur <code>manager_rh</code> n'a reçu que le droit de la lire. Nous avons testé les deux cas : la vue est accessible, la lecture directe des salaires est refusée par Oracle."},
    {h: "Le passage à l'échelle"},
    {ul: [
      "Chiffre d'affaires par région et par année sur SALES (918 000 lignes), CUSTOMERS (55 500) et TIMES",
      "Sous-totaux automatiques avec <code>GROUP BY ROLLUP</code>, en une seule requête",
      "Vue matérialisée <code>MV_CA_REGION</code> : les résultats sont stockés, les jointures ne sont plus recalculées, et la cohérence avec la requête directe a été vérifiée",
      "Analyse du plan d'exécution (coût 2 376) : dix index déjà présents, majoritairement bitmap. Le plan est resté identique après nos essais, car le parcours complet combiné au partitionnement de SALES était déjà optimal pour ce volume"
    ]},
    {h: "Apprendre de chaque erreur Oracle"},
    {p: "Plutôt que de deviner, nous avons pris l'habitude d'interroger le dictionnaire de données : table introuvable (ORA-00942) résolue via <code>user_tables</code>, privilèges manquants (ORA-01031) résolus en repassant en SYSDBA, colonne invalide identifiée avec <code>DESC</code>, index refusé car déjà existant (ORA-01408)."}
  ],
  resultatsOrg: [
    "Une plateforme décisionnelle en trois couches : indicateurs, sécurité, performance",
    "Des chiffres vérifiés contre les requêtes brutes à chaque étape"
  ],
  resultatsMoi: [
    "Un modèle ne vaut que par la qualité de ses données : j'ai appris à les modéliser, les agréger et les sécuriser",
    "J'ai compris comment fonctionnent les privilèges et les vues pour protéger des données sensibles",
    "J'ai appris à lire un plan d'exécution avant de chercher à optimiser"
  ],
  limites: [
    "La distribution réelle entre bases (DB Links) n'a pas pu être mise en place, faute de droits suffisants"
  ],
  pistes: "Rafraîchir automatiquement la vue matérialisée avec DBMS_SCHEDULER, créer des rôles par région et une politique de mots de passe.",
  techniques: ["Oracle 19c (CDB/PDB)", "SQL, PL/SQL", "Vues et vues matérialisées", "GROUP BY ROLLUP", "Gestion des privilèges", "EXPLAIN PLAN", "Index bitmap", "SQL*Plus"],
  transversales: ["Travail d'équipe", "Rigueur de vérification", "Débogage méthodique"]
},
{
  id: "translator", kind: "projet", year: "2025", short: "Fun Translator",
  niveau: "Projet cloud",
  title: "Fun Translator",
  subtitle: "Une application de traduction serverless sur Microsoft Azure",
  org: "Université Internationale de Rabat · Décembre 2025",
  periode: "Décembre 2025", duree: "2 semaines",
  cadre: "Binôme, avec Zineb Arrami",
  role: "Historique, supervision et interface web",
  encadrement: "",
  hook: "Une application de traduction déployée sur Azure : interface web statique, API serverless reliée à Azure AI Translator, historique dans Cosmos DB et supervision par Application Insights.",
  tags: ["Azure Functions", "Azure AI Translator", "Cosmos DB", "Node.js", "Application Insights"],
  contexte: [
    "Ce projet avait un objectif précis : dépasser le code et vivre la mise en production d'une application dans le cloud, avec tout ce que cela implique de configuration, de gestion des erreurs et de supervision.",
    "Nous l'avons mené en binôme, de la conception jusqu'au déploiement."
  ],
  missions: [
    "Concevoir une architecture serverless sur Azure",
    "Développer l'API de traduction et la relier aux services Azure",
    "Enregistrer l'historique et superviser l'application",
    "Déployer et corriger en conditions réelles"
  ],
  roleDetail: "Travail en binôme avec Zineb Arrami. Ma partie : l'enregistrement de l'historique dans Cosmos DB, la supervision avec Application Insights et l'interface web.",
  realisations: [
    {h: "Ma partie"},
    {ul: ["Enregistrement de chaque traduction dans Cosmos DB, en écriture « au mieux » pour ne jamais bloquer la réponse", "Suivi des appels et des erreurs avec Application Insights", "Interface web statique : saisie, choix de la langue, résultat et historique local"]},
    {h: "Le projet de l'équipe"},
    {h: "Architecture"},
    {table: {head: ["Brique", "Service Azure", "Rôle"], rows: [
      ["Interface", "Azure Static Web Apps", "Saisie du texte, choix de la langue, résultat et historique"],
      ["API", "Azure Functions (Node.js)", "Endpoint POST /api/translate et endpoint de santé /api/ping"],
      ["Traduction", "Azure AI Translator (API v3)", "Traduction dans la langue choisie"],
      ["Historique", "Azure Cosmos DB", "Chaque traduction enregistrée avec sa date"],
      ["Supervision", "Application Insights", "Journaux et suivi des appels"]
    ]}},
    {h: "Des choix de conception pour la robustesse"},
    {ul: [
      "<strong>Validation des entrées :</strong> une requête sans texte ou sans langue reçoit une erreur 400 explicite",
      "<strong>Délai maximal :</strong> l'appel au service de traduction s'arrête après 8 secondes, pour ne jamais bloquer la fonction",
      "<strong>Écriture « au mieux » dans Cosmos DB :</strong> si l'enregistrement échoue, la traduction est tout de même renvoyée et l'incident est journalisé",
      "<strong>Configuration hors du code :</strong> clés et adresses lues dans les variables d'environnement",
      "<strong>Historique local</strong> côté navigateur en complément, avec rafraîchissement et vidage"
    ]}
  ],
  resultatsOrg: [
    "Une API déployée sur Azure Functions, et un front-end préparé pour Azure Static Web Apps",
    "Des journaux de déploiement et d'exécution qui retracent chaque cycle de mise en ligne et de correction"
  ],
  resultatsMoi: [
    "J'ai découvert la mise en production dans le cloud : configuration, déploiement, gestion des erreurs, supervision",
    "Une règle de sécurité que je n'oublierai pas : un fichier de configuration local contenant des clés ne doit jamais être versionné",
    "Déployer, superviser et rendre un service résistant aux pannes : ce sont les bases du MLOps"
  ],
  limites: [
    "Le front-end est prêt pour Azure Static Web Apps, mais sa mise en ligne reste à finaliser",
    "Une application volontairement simple : l'objectif était d'apprendre le déploiement, pas de multiplier les fonctionnalités"
  ],
  pistes: "",
  techniques: ["Azure Functions", "Azure Static Web Apps", "Azure AI Translator", "Azure Cosmos DB", "Application Insights", "Node.js", "API REST", "JavaScript"],
  transversales: ["Travail en binôme", "Rigueur de sécurité", "Gestion des incidents"]
}
];
