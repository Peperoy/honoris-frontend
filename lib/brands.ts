export type BrandSlug =
  | "roberto-collina"
  | "blonde-8"
  | "rrd"
  | "la-bruket"
  | "philippe-model"
  | "ibeliv"
  | "bella-dahl"
  | "montagut"
  | "5-octobre"
  | "forte-forte"
  | "vanessa-bruno"
  | "faliero-sarti"
  | "jerome-dreyfuss"
  | "masons"
  | "seven"
  | "majestic-filatures"
  | "newtone"
  | "absolut-cachemere"
  | "bella-jones"
  | "laid-back"
  | "momoni"
  | "lou-andrea"
  | "claris-virot"
  | "soeur"
  | "ct-plage"
  | "tonal"
  | "bowery"
  | "la-nouvelle";

export type BrandLongDescription = {
  paragraphs: string[];
  images: string[];
};

/** Images thématiques par marque (Unsplash). */
export const BRAND_IMAGES: Record<BrandSlug, string> = {
  "roberto-collina":
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1080&q=80",
  "blonde-8":
    "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1080&q=80",
  rrd: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1080&q=80",
  "la-bruket":
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1080&q=80",
  "philippe-model":
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1080&q=80",
  ibeliv:
    "https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=1080&q=80",
  "bella-dahl":
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1080&q=80",
  montagut:
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1080&q=80",
  "5-octobre":
    "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=1080&q=80",
  "forte-forte":
    "https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?w=1080&q=80",
  "vanessa-bruno":
    "https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?w=1080&q=80",
  "faliero-sarti":
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1080&q=80",
  "jerome-dreyfuss":
    "https://images.unsplash.com/photo-1589363358751-ab05797e5629?w=1080&q=80",
  masons:
    "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=1080&q=80",
  seven:
    "https://images.unsplash.com/photo-1591884807235-1dc6c2e148b1?w=1080&q=80",
  "majestic-filatures":
    "https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?w=1080&q=80",
  newtone:
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1080&q=80",
  "absolut-cachemere":
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1080&q=80",
  "bella-jones":
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1080&q=80",
  "laid-back":
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1080&q=80",
  momoni:
    "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=1080&q=80",
  "lou-andrea":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1080&q=80",
  "claris-virot":
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1080&q=80",
  soeur:
    "https://images.unsplash.com/photo-1585914924626-15adac1e6402?w=1080&q=80",
  "ct-plage":
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1080&q=80",
  tonal:
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=1080&q=80",
  bowery:
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1080&q=80",
  "la-nouvelle":
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1080&q=80",
};

const DESC_IMG =
  "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1080&q=80";
const DESC_IMG2 =
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1080&q=80";

export const LONG_DESCRIPTIONS: Record<BrandSlug, BrandLongDescription> = {
  "roberto-collina": {
    paragraphs: [
      "Plus de 60 ans d'excellence Made in Italy… Roberto Collina crée et fabrique toutes ses collections à base de mailles depuis plusieurs décennies maintenant. Aujourd'hui, plus que jamais, il célèbre la qualité d'un vêtement réussi. Roberto met l'accent sur le processus de production, qui a écrit et continue d'écrire une partie importante de l'histoire du prêt à porter italien.",
      "De Bologne au Japon, une marque familiale mondiale qui continue de marquer l'histoire du prêt à porter italien… Cette marque qui a débuté avec un petit atelier de tricotage est aujourd'hui renommée mondialement pour la qualité de ses pulls. Avec un véritable équilibre entre tradition et modernité, Roberto Collina résume son caractère au travers de ses collections. La maison suit une beauté sophistiquée et sensible lors de l'élaboration de ses produits, qui se traduit par une position élégante, élevant la simplicité à un état de pureté. Leur maître mot : réduire le luxe à l'essentiel. Le coeur de cette entreprise se trouve dans un héritage de fabrication et un savoir faire historique du design sur lequel se greffe un sens innovant de l'esthétique, qui met l'accent sur la qualité de la production. Derrière chaque vêtement se cache une longue période de recherche et de réalisation, de la production à l'élaboration des collections.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  "blonde-8": {
    paragraphs: [
      "Connue pour des vêtements d'extérieur de haute qualité, et à la mode, Blonde n°8 propose sa pièce phare : la parka. Grâce à l'engouement engendré pour ces dernières, la marque est rapidement devenue incontournable et elle s'est imposée dans le monde de la mode.",
      "L'accent est mis sur le développement des styles à haute valeur. Avec une attention particulière pour les détails : une doublure intérieure spéciale, des fermetures à glissière de haute qualité ou des coutures contrastées qui rendent les vêtements spéciaux.",
      "Blonde n°8 accorde une grande importance aux techniques de fabrication traditionnelles et à la production équitable. La durabilité et l'environnement jouent un rôle majeur dans la production, le transport et l'utilisation des matériaux.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  rrd: {
    paragraphs: [
      "RRD, ou Roberto Ricci Designs, commence à se faire connaître dans l'univers du kitesurf. La marque propose alors différents équipements pour la discipline et devient vite une référence dans le monde entier. Après s'être faite connaitre, ils décident de créer une ligne de vêtements en 1995. La marque s'élargit rapidement, et propose désormais toutes sortes de pièces ne respectant qu'un seul mot d'ordre : la qualité made in Italy.",
      "Roberto Ricci Designs ouvre son premier magasin mono marques à Forte dei Marmi. Plus tard, le showroom est inauguré au coeur du quartier de la mode et du design à Milan. La surface de 500 mètres carrés accueille de nombreux événements pour présenter les collections au monde entier. Un second showroom ouvre à Rome pour présenter le savoir faire italien au différents acteurs de la mode et du design à travers l'Italie.",
    ],
    images: [DESC_IMG],
  },
  "la-bruket": {
    paragraphs: [
      "Fabriqués sur la côte ouest de Suède, les produits L:A BRUKET sont fabriqués avec des produits naturels et biologiques. La marque cherche son inspiration dans la nature qui l'entoure. Le Soleil, le vent, les rochers, la glace, le sable, la boue, l'eau… Les éléments affectent l'équilibre subtil de notre corps, mais peuvent aussi le rétablir.",
      "L:A BRUKET a vu le jour dans la petite ville de Varberg, une station thermale bicentenaire. Leur héritage fort leur permet d'apporter une expertise dans la confections de leurs soins. Pour la marque, il est inconcevable de faire des concessions sur la pureté des ingrédients.",
      "Tous les produits sont conçus pour nourrir, protéger et préserver l'épiderme sur le long terme. Ils sont travaillés avec un état d'esprit moderne appliqué à des techniques ancestrales de thérapie de la mer. Ce ne sont pas des solutions éphémères mais des formules destinées à une routine quotidienne de soins de la peau. L:A BRUKET propose une routine de soin complète pour le corps, le visage, les cheveux… Tous les produits sont complémentaires et élaborés avec minutie pour offrir les meilleures vertus possibles.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  "philippe-model": {
    paragraphs: [
      "Âgé d'à peine 20 ans, Philippe Model crée pour le grand couturier Claude Montana, ainsi que pour Jean Paul Gaultier, Issey Miyake et Thierry Mugler. Fort d'une grande maitrise et d'un excellent savoir-faire, il est vite devenu le chapelier des stars et des comtesses. Quelques années plus tard, en 1981, Philippe Model décide de fonder sa propre marque.",
      "Les créations de Philippe Model représentent le mariage parfait entre la créativité et l'artisanat. Ses pièces dévoilent un héritage parisien mêlé à un savoir-faire italien, qui lui ont valu le prix de meilleur artisan de France en 1981. Au début des années 80, il crée sa toute première chaussure iconique : l'élastique. Devenu le symbole d'une féminité moderne, cette chaussure anticipe le concept révolutionnaire du confort des futures sneakers.",
      "Quelques années plus tard, le succès de Philippe Model atteint ses plus vastes dimensions. Certaines de ses créations sont intégrées dans les collections du Metropolitan Museum de New York, de la National Gallery of Australia et d'autres musées importants. Philippe Model, profondément passionné par l'art, est toujours à la recherche de nouveaux défis. Il s'exprime sur de nombreux supports, qu'il s'agisse d'accessoires ou de murs, et se renouvelle au travers d'impressions et de décorations uniques et incomparables.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  ibeliv: {
    paragraphs: [
      "IBELIV est une marque engagée créée par Ramanandraibe Liva, surnommé Liv. Originaire de Madagascar, Liv arrive en France à 16 ans pour poursuive ses études d'expert comptable. Il y découvre l'héritage d'une élégance raffinée intemporelle, les codes du luxe et du design qui le passionnent depuis l'enfance.",
      "Une fois son diplôme décroché, Liv souhaite vivre pleinement de ses passions et décide de créer sa marque IBELIV. Il est convaincu que notre consommation peut être plus responsable humainement et écologiquement. Que nous pouvons veiller à produire en respectant l'Homme et la Nature, tout en proposant des produits parfaitement adaptés à l'ère du temps. Ce sont sur ces valeurs que s'appuie IBELIV.",
      "L'histoire commence à Madagascar où la mère de Liv cherche à promouvoir l'ancien savoir-faire autour des créations en raphia. Souhaitant mettre en avant cet art de chez lui, Liv crée de nombreux accessoires qui allient artisanat et chic. La marque travaille avec des artisans qui allient maitrise et savoir-faire autour du raphia. La production est réalisée en quantité raisonnée comme facteur du maintien de cet état d'esprit. Face à une époque où tout s'accélère, IBELIV prend le temps nécessaire à la réalisation de produits empreints d'une âme et résultant d'un véritable savoir-faire.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  "bella-dahl": {
    paragraphs: [
      "Bella Dahl est une marque de mode féminine qui propose des vêtements doux et élégants pour un style de vie moderne. Les collections allient confort et esthétique contemporaine, avec des pièces soignées pour le quotidien.",
      "La marque met en avant des matières agréables et des coupes contemporaines, pour une garde-robe chic et décontractée. Retrouvez les créations Bella Dahl en boutique.",
    ],
    images: [DESC_IMG],
  },
  montagut: {
    paragraphs: [
      "La Maison Montagut est une marque de vêtements en maille créée en 1880. Aujourd'hui, l'entreprise familiale est gérée par la sixième génération : Nicolas Gros et Marine Lozet-Gros. Nicolas et Marine ajoutent leur touche de modernité et d'émotion à cet héritage familial. Ils souhaitent renouveler le spécialiste de la maille.",
      "A son commencement, la Maison Montagut était une simple usine de soie près de Saint-Sauveur-de-Montagut, en Ardèche. Cette usine s'est réorientée vers le tricotage de maille après la guerre, à commencer par des pulls et des polos. La Maison Montagut est, depuis 1880, experte du tricot. Elle perpétue de générations en générations son savoir-faire ancestral.",
      "Aujourd'hui, la Maison Montagut se renouvelle et se revendique expert en maille. En élargissant son offre autour de nombreux produits, elle montre son savoir-faire et sa maitrise du tricotage. La marque Pôles, petite nouvelle de la Maison, propose des pulls pour les femmes définies par un esprit de liberté et de féminité. Destinée aux femmes avec une fibre artistique et un certain art du voyage, Pôles habille les femmes lubies et voyageuses, audacieuses, créatives, qui affectionnent les produits aux belles matières et aux coupes déstructurées.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  "5-octobre": {
    paragraphs: [
      "La passion de Sophie Pfeffer pour les bijoux, les gemmes et les accessoires remonte à l'enfance. Elle collectionne les perles vintage et les parures anciennes. En 2004, Sophie réalise son rêve et lance sa première collection. Ses bijoux sont conçus avec un large faisceau d'influences diverses l'ayant bercée depuis sa jeunesse.",
      "Les collections 5 Octobre reposent sur l'association de la matière brute et raffinée, le tout concentré autour des pièces qui représentent la pièce centrale des différentes compositions. L'assemblage est minimaliste. Chaque bijou est conçu comme un grigri, une sorte de talisman des temps modernes, destiné à protéger son propriétaire.",
      "Les bijoux sont fabriqués de façon artisanale dans les ateliers de Sophie, où l'on travaille l'or fin, l'argent et le vermeil, associés aux diamants et pierres fines. Chaque bijou a fait l'objet d'un travail manuel extrêmement minutieux. Les pièces sont composées de pierres fines, taillées ou brutes, ce qui donne à chacune son caractère si particulier.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  "forte-forte": {
    paragraphs: [
      "L'histoire de Forte Forte débute en 2002 par une petite collection de t-shirts peaufinée à la main. Un frère et soeur, héritiers d'un savoir-faire familial, qui imaginent des pièces dans leurs chambres d'enfants, face au jardin où ils ont grandi.",
      "Ils gardent un grand souci du détail qui caractérise la production artisanale malgré l'échelle industrielle de production. Forte Forte cultive le rapport au temps, et souhaite que son entreprise murisse lentement. Cette réflexion pondérée les amène à travailler sur leurs pièces de façon plus personnel, loin du monde très évolutif de la mode, pour créer des pièces intemporelles.",
      "Forte Forte porte des valeurs pures, essentielles, sincères, pleines d'émotions. Des pièces intemporelles qui révèlent une liberté sans limites, où le passé et le présent fusionnent harmonieusement leurs âmes. La collection Forte Forte évolue au fil des années. Elle offre aujourd'hui une proposition complète qui met en avant la matière tout en respectant son caractère, la couleur et les formes pures, afin d'épouser le corps sans le contraindre.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  "vanessa-bruno": {
    paragraphs: [
      "Parisienne par excellence, Vanessa Bruno est élevée par une mère Danoise et un père Français. En 1996, elle crée une marque à son nom et cherche à transgresser le quotidien pour donner à chaque femme une garde-robe moderne. Elle ouvre sa première boutique rive gauche en 1998 et lance la première année son célèbre sac cabas.",
      "Avec quelques paillettes sur une toile de coton, elle revisite un objet du quotidien pour le rendre iconique, jusqu'à devenir un incontournable international. Le sac cabas de Vanessa Bruno est à la fois chic et pratique. Il se décline à l'infini, en toile de lin, en raphia ou encore en cuir velours…",
      "Influencée par les deux univers de ses parents, elle imagine des collections où ces deux cultures se croisent et s'entremêlent. Elle poursuit l'idéal d'une femme indépendante et urbaine, ancrée dans son époque. Aujourd'hui, on dit qu'un sac cabas Vanessa Bruno se vend toutes les 30 minutes à travers le monde.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  "faliero-sarti": {
    paragraphs: [
      "L'histoire de Faliero Sarti commence en 1948, lorsque Faliero crée sa propre filature près de Florence, en Italie. Toute la famille s'est très vite mise à suivre les traces de leur ainé dans cette usine. D'abord reprise par le fils de Faliero, la filature de tissus italiens est très vite devenue le fournisseur de grandes maisons de luxe telles que Chanel, Dior, Vivienne Westwood ou Ann Deleumeester.",
      "En 1991, la petite fille de Faliero, Monica, revient avec de nouvelles idées en tête. Après avoir passé trois ans à étudier la mode à New York, elle décide de rejoindre l'entreprise familiale. Elle s'intéresse de près à la division d'accessoire de la maison. Pour dépoussiérer cet accessoire qu'était le foulard, elle décide de se fier à son instinct : retirer l'élément le plus traditionnel, les franges. Elle commence à faire bouillir, brûler et trouer le cachemire. Elle lance une vraie révolution dans le monde de la mode.",
      "Monica s'inspire de la vie quotidienne pour donner vie à ses réalisations. Les écharpes créées par la maison Faliero Sarti sont pensées de sorte que, lorsque quelqu'un en porte une, il trouve une certaine douceur. Les écharpes sont, d'après Monica Sarti, la « lingerie du col » car elles touchent directement la peau. Aujourd'hui, Monica Sarti est la directrice artistique de la maison Faliero Sarti et continue d'impressionner avec ses créations toujours plus originales et qualitatives.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  "jerome-dreyfuss": {
    paragraphs: [
      "L'histoire de Jérôme Dreyfuss commence en 1998, lorsqu'il lance sa collection de prêt à porter féminin qu'il nomme « Couture à Porter ». Il est qualifié « d'Enfant terrible de la Mode » par la presse. Cette année là, il gagne le prix de l'ANDAM et crée des costumes pour l'album Invincible de Michael Jackson.",
      "En 2002, Jérôme Dreyfuss lance sa première collection d'accessoires : « Roots de luxe ». Instantanément acclamés par la presse, ces sacs ont immédiatement trouvé le chemin du coeur des jeunes parisiennes. Souples et ultra légers, discrets mais toujours élégants… Ces pièces sont vite devenues une référence pour les femmes en quête d'accessoires raffinés aux détails astucieux.",
      "Les sacs Jérôme Dreyfuss sont reconnaissables grâce à leur fabrication artisanale. Un travail aux formes généreuses et aux détails innovants. En 2004, Jérôme Dreyfuss adopte un côté plus éco-responsable. Il milite pour une planète plus propre et crée le label agricouture. Il intègre des règles de développement durable à la fabrication de ses produits : cuirs végétaux, matières premières achetées auprès de fournisseurs européens exclusivement, consommables recyclables…",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  masons: {
    paragraphs: [
      "Mason's est une maison de mode italienne ayant vu le jour dans la région de la Ligurie, en bordure de mer. Créée en 1974 par Giorgio Martini, la marque souhaite développer un tout nouveau style en associant les codes de l'uniforme militaire et les lignes souples de l'élégance à l'italienne.",
      "La conception des vêtements est également inspirée des grandes figures emblématiques. Le Dalaï-Lama, Kennedy, Che Guevara ou encore Indira Gandhi.. Tous ont inspiré les collections de la maison Mason's. Une marque qui allie sobriété et avant-gardisme tout en gardant une part de tradition. Mason's véhicule de nombreuses valeurs comme la simplicité, la modernité, et le souci du détail.",
      "Aujourd'hui, Mason's élève au rang des marques haut-de-gamme à l'italienne. Mason's promet des tissus résistants et qualitatifs. Des vêtements authentiques et travaillés débouchant sur un style chic et pratique qui reflète la mode italienne moderne.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  seven: {
    paragraphs: [
      "Seven est une marque de denim premium conçue en Californie. Reconnue pour la qualité de ses jeans et de ses pièces en jean, elle propose des vêtements pour femmes et hommes, avec un souci du détail et un style californien.",
      "La marque s'est imposée dans l'univers du prêt-à-porter haut de gamme avec des coupes iconiques et des finitions soignées. Retrouvez les créations Seven en boutique.",
    ],
    images: [DESC_IMG],
  },
  "majestic-filatures": {
    paragraphs: [
      "En 1989, Franck Ellia et Roland Chelly décident de lancer une marque autour d'une pièce basique : le t-shirt. Ils souhaitent lui donner des allures haut-de-gamme pour replacer le t-shirt au coeur de nos garde-robes et nous offrir une silhouette chic.",
      "Depuis plus de 30 ans, Majestic Filatures élabore des t-shirts de luxe dans ses ateliers parisiens. De fabrication exclusivement européenne, cette pièce basique est traitée comme un vêtement noble. Les stylistes, modélistes, maîtres tailleurs et couturières montent des prototypes faits sur mesure. Un savoir-faire « fait main » unique à la manière des grandes maisons de couture.",
      "La maison Majestic Filatures apporte un soin particulier à la qualité de fabrication de ses produits. Des matières résistantes, luxueuses et douces à porter.. Majestic Filatures est un précurseur en termes de développement des meilleurs fils dans les plus belles matières. Ils prônent le luxe durable. Ils ont notamment lancé leur nouvelle gamme de Pulls en « Eco-cachemire » pour leur collection Tricot, un cachemire éco-responsable produit en Italie.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  newtone: {
    paragraphs: [
      "Newtone est une marque française ancrée dans un esprit rock et bohème. Ses collections proposent des pièces aux coupes décontractées, aux matières généreuses et aux imprimés soigneusement sélectionnés pour une femme libre et affirmée.",
      "Chaque pièce Newtone est pensée pour durer, conçue avec des matières nobles et une attention particulière à la coupe. La marque célèbre une féminité naturelle, loin des diktats de la mode éphémère, pour une garde-robe de caractère.",
    ],
    images: [DESC_IMG],
  },
  "absolut-cachemere": {
    paragraphs: [
      "Absolut Cashmere réinvente le cachemire avec une approche résolument moderne et engagée. Chaque pièce est tissée à partir de cachemire mongol d'exception, sélectionné pour sa douceur incomparable et sa résistance dans le temps.",
      "La marque propose des silhouettes épurées, des coloris raffinés et des matières d'une qualité irréprochable. Absolut Cashmere incarne le luxe sobre, celui que l'on garde pour toujours — une pièce intemporelle qui traverse les saisons avec grâce.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  "bella-jones": {
    paragraphs: [
      "Bella Jones est une marque de mode féminine qui allie élégance parisienne et modernité contemporaine. Ses collections proposent des silhouettes soignées, des matières précieuses et des coupes qui subliment la femme d'aujourd'hui.",
      "Derrière chaque création Bella Jones se cache une recherche exigeante sur la qualité des matières et la précision de la coupe. La marque s'adresse à une femme qui sait ce qu'elle veut : du style, du confort, et des pièces qui traversent le temps.",
    ],
    images: [DESC_IMG],
  },
  "laid-back": {
    paragraphs: [
      "Laid Back incarne un art de vivre décontracté et sophistiqué. La marque propose des collections inspirées du casual chic scandinave, où la simplicité des formes rencontre la qualité des matières pour une élégance naturelle au quotidien.",
      "Les pièces Laid Back sont pensées pour s'intégrer facilement dans une garde-robe existante. Des basiques revisités, des coupes flatteuses et des matières douces au toucher font de chaque vêtement une pièce que l'on porte encore et encore.",
    ],
    images: [DESC_IMG],
  },
  momoni: {
    paragraphs: [
      "Née en Italie, Momoni est une maison de mode qui célèbre la féminité italienne dans toute sa splendeur. Ses collections se distinguent par des imprimés exclusifs, des matières légères et des silhouettes qui épousent le corps avec sensualité.",
      "Momoni puise son inspiration dans l'art, les voyages et la beauté du quotidien. Chaque collection raconte une histoire, portée par des couleurs vibrantes et des pièces aux finitions artisanales. Une invitation au voyage à travers le prisme de la mode italienne.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  "lou-andrea": {
    paragraphs: [
      "Lou Andrea est une marque de créateur qui propose des pièces féminines alliant artisanat et modernité. Chaque collection est construite autour de silhouettes soignées, de matières nobles et d'une vision singulière de l'élégance contemporaine.",
      "La marque se distingue par son attention aux détails et sa volonté de proposer des vêtements portables au quotidien tout en conservant une dimension créative forte. Lou Andrea habille une femme à la fois libre et raffinée.",
    ],
    images: [DESC_IMG],
  },
  "claris-virot": {
    paragraphs: [
      "Claris Virot est une maison d'accessoires française spécialisée dans les chapeaux et les sacs. Fondée à Paris, la marque perpétue un savoir-faire artisanal exigeant tout en proposant des pièces résolument contemporaines.",
      "Chaque chapeau Claris Virot est une pièce à part entière, façonnée avec soin dans des matières d'exception. La marque s'est imposée comme une référence dans le monde des accessoires de mode, séduisant une clientèle internationale en quête de pièces rares et distinctives.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  soeur: {
    paragraphs: [
      "Soeur est une marque parisienne créée par deux sœurs, Domitille et Angélique Brion. Elle propose des collections féminines teintées d'une douceur romantique et d'une élégance décontractée, à l'image de la femme parisienne moderne.",
      "Les collections Soeur se distinguent par leurs imprimés délicats, leurs matières fluides et leurs coupes flatteuses. La marque incarne une féminité assumée et joyeuse, où chaque pièce raconte une histoire de complicité et de style partagé.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  "ct-plage": {
    paragraphs: [
      "CT Plage est une marque spécialisée dans les collections balnéaires et de villégiature. Elle propose des pièces pensées pour les vacances : maillots de bain, paréos, tenues de plage et robes légères qui capturent l'essence de l'été.",
      "La marque se distingue par ses imprimés lumineux, ses matières adaptées au soleil et à la mer, et ses coupes qui mettent en valeur la silhouette. CT Plage invite à la dolce vita avec des collections qui prolongent l'esprit des vacances bien au-delà de la plage.",
    ],
    images: [DESC_IMG],
  },
  tonal: {
    paragraphs: [
      "Tonal propose une mode épurée construite autour du jeu des matières et des nuances monochromes. La marque célèbre la puissance du minimalisme et l'art de la couleur dans ses expressions les plus subtiles.",
      "Chaque collection Tonal est une exploration des tonalités et des textures. Des pièces intemporelles, pensées pour être assemblées et superposées, qui constituent une garde-robe cohérente et raffinée pour la femme contemporaine.",
    ],
    images: [DESC_IMG],
  },
  bowery: {
    paragraphs: [
      "Bowery s'inspire de l'énergie urbaine et créative de New York pour proposer des collections à la fois décontractées et sophistiquées. La marque allie l'esprit downtown newyorkais à une exigence qualitative européenne.",
      "Les pièces Bowery sont conçues pour une femme active et urbaine, qui jongle entre vie professionnelle et personnelle avec style. Des coupes nettes, des matières premium et une palette de couleurs intemporelle définissent l'identité de la marque.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  "la-nouvelle": {
    paragraphs: [
      "La Nouvelle est une marque de mode féminine qui propose des collections inspirées par la femme d'aujourd'hui : libre, moderne et assumée. Chaque pièce est pensée pour s'adapter aux différents moments de la vie avec élégance.",
      "La marque se distingue par une approche créative singulière, mêlant savoir-faire artisanal et vision contemporaine. La Nouvelle invite chaque femme à se réinventer à travers des pièces fortes, portées avec conviction.",
    ],
    images: [DESC_IMG],
  },
};

/** Libellés affichés dans la grille « Nos marques ». */
export const BRAND_LABELS: Record<BrandSlug, string> = {
  "roberto-collina": "Roberto Collina",
  "blonde-8": "Blonde n°8",
  rrd: "RRD",
  "la-bruket": "L:A BRUKET",
  "philippe-model": "Philippe Model",
  ibeliv: "IBELIV",
  "bella-dahl": "Bella Dahl",
  montagut: "Montagut",
  "5-octobre": "5 Octobre",
  "forte-forte": "Forte Forte",
  "vanessa-bruno": "Vanessa Bruno",
  "faliero-sarti": "Faliero Sarti",
  "jerome-dreyfuss": "Jérôme Dreyfuss",
  masons: "Mason's",
  seven: "Seven",
  "majestic-filatures": "Majestic Filatures",
  newtone: "Newtone",
  "absolut-cachemere": "Absolut Cashmere",
  "bella-jones": "Bella Jones",
  "laid-back": "Laid Back",
  momoni: "Momoni",
  "lou-andrea": "Lou Andrea",
  "claris-virot": "Claris Virot",
  soeur: "Sœur",
  "ct-plage": "CT Plage",
  tonal: "Tonal",
  bowery: "Bowery",
  "la-nouvelle": "La Nouvelle",
};

/** Ordre d'affichage dans la grille. */
export const BRAND_ORDER: BrandSlug[] = [
  "roberto-collina",
  "blonde-8",
  "rrd",
  "la-bruket",
  "philippe-model",
  "ibeliv",
  "bella-dahl",
  "montagut",
  "5-octobre",
  "forte-forte",
  "vanessa-bruno",
  "faliero-sarti",
  "jerome-dreyfuss",
  "masons",
  "seven",
  "majestic-filatures",
  "newtone",
  "absolut-cachemere",
  "bella-jones",
  "laid-back",
  "momoni",
  "lou-andrea",
  "claris-virot",
  "soeur",
  "ct-plage",
  "tonal",
  "bowery",
  "la-nouvelle",
];
