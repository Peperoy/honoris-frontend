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

/**
 * Images hero par marque — Unsplash, thématiques et cohérentes avec l'univers de chaque maison.
 * Format : https://images.unsplash.com/photo-<ID>?w=1080&q=80
 */
export const BRAND_IMAGES: Record<BrandSlug, string> = {
  // Maille italienne fine — pull femme texturé fond neutre
  "roberto-collina":
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1080&q=80",
  // Parka outdoor premium — manteau femme sur fond hivernal
  "blonde-8":
    "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=1080&q=80",
  // Sportswear nautique — vêtement technique bord de mer
  rrd: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1080&q=80",
  // Soins naturels — flacons minimalistes bois et pierre
  "la-bruket":
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1080&q=80",
  // Sneakers / chaussures mode — détail semelle et cuir
  "philippe-model":
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1080&q=80",
  // Accessoires raphia artisanat — sac naturel texturé
  ibeliv:
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1080&q=80",
  // Mode féminine fluide — robe legere femme lumière naturelle
  "bella-dahl":
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1080&q=80",
  // Tricot polo maille — pull col roulé élégant
  montagut:
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1080&q=80",
  // Bijoux fins — bague or pierres fines sur fond sombre
  "5-octobre":
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1080&q=80",
  // Mode artisanale italienne — robe femme tissu délicat
  "forte-forte":
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1080&q=80",
  // Sac cabas parisien — toile et paillettes lifestyle
  "vanessa-bruno":
    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1080&q=80",
  // Écharpe cachemire — foulard texturé drapé
  "faliero-sarti":
    "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=1080&q=80",
  // Maroquinerie artisanale — sac cuir souple détail couture
  "jerome-dreyfuss":
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=1080&q=80",
  // Pantalon militaire chic — treillis élégant coupe droite
  masons:
    "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=1080&q=80",
  // Denim premium — jean brut détail tissu indigo
  seven:
    "https://images.unsplash.com/photo-1542272604-787c3835535d?w=1080&q=80",
  // T-shirt luxe blanc — basique premium fond épuré
  "majestic-filatures":
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1080&q=80",
  // Esprit rock bohème — femme vêtement vintage texturé
  newtone:
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=1080&q=80",
  // Cachemire doux — pull moelleux ton neutre lumière chaude
  "absolut-cachemere":
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1080&q=80",
  // Élégance féminine contemporaine — silhouette femme lumière dorée
  "bella-jones":
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1080&q=80",
  // Casual chic scandinave — tenue décontractée lumière naturelle
  "laid-back":
    "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=1080&q=80",
  // Mode italienne imprimée — tissu fluide coloré motif
  momoni:
    "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=1080&q=80",
  // Créateur féminin artisanal — pièce unique atelier
  "lou-andrea":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1080&q=80",
  // Chapeau artisanal — bob ou chapeau feutre détail finition
  "claris-virot":
    "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=1080&q=80",
  // Mode parisienne romantique — robe légère imprimée fleur
  soeur:
    "https://images.unsplash.com/photo-1585914924626-15adac1e6402?w=1080&q=80",
  // Plage balnéaire — maillot de bain sable bleu mer
  "ct-plage":
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1080&q=80",
  // Minimalisme couleur — tenue ton sur ton neutre épuré
  tonal:
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1080&q=80",
  // Urbain new-yorkais — style downtown femme city chic
  bowery:
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1080&q=80",
  // Femme moderne affirmée — portrait mode lumière directe
  "la-nouvelle":
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1080&q=80",
};

export const LONG_DESCRIPTIONS: Record<BrandSlug, BrandLongDescription> = {
  "roberto-collina": {
    paragraphs: [
      "Depuis plus de 70 ans, Roberto Collina incarne l'excellence de la maille italienne. Fondée près de Bologne, cette maison familiale a élevé le tricot au rang des beaux-arts, en réduisant le luxe à l'essentiel : matière, coupe, savoir-faire.",
      "L'histoire commence dans les années 1950, dans un petit atelier de Crevalcore, au cœur du district de la maille italienne. C'est le fils fondateur, Roberto, qui donne son nom à la maison dans les années 1980 en présentant 33 pulls homme à Pitti Uomo — un début remarqué qui lance la marque sur la scène internationale. Depuis, les fils les plus nobles se succèdent : cachemire, mohair, alpaca, mérinos, soie.",
      "Chez Honoris Cosa, les pièces Roberto Collina sont sélectionnées pour leur capacité à traverser les saisons sans jamais vieillir. Chaque silhouette traduit un équilibre rare entre tradition artisanale et modernité créative — une garde-robe de caractère, pensée pour durer.",
    ],
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1080&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1080&q=80",
    ],
  },

  "blonde-8": {
    paragraphs: [
      "Blonde n°8 s'est imposée comme la référence incontournable de l'outerwear féminin haut de gamme. Sa parka iconique, pensée jusque dans ses moindres détails, a conquis les femmes qui refusent de choisir entre style et protection.",
      "La marque construit chaque pièce autour d'une philosophie exigeante : doublures techniques, fermetures éclair premium, coutures contrastées, matières durables. Loin de la fast fashion, Blonde n°8 s'inscrit dans une démarche de production responsable, attentive à l'impact environnemental et à la qualité des savoir-faire mobilisés.",
      "En boutique chez Honoris Cosa, les collections Blonde n°8 proposent des pièces d'extérieur que l'on garde saison après saison — des manteaux à la fois fonctionnels et désirables, qui accompagnent avec élégance les femmes actives dans leur quotidien.",
    ],
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1080&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=1080&q=80",
    ],
  },

  rrd: {
    paragraphs: [
      "RRD — Roberto Ricci Designs — est née de la passion d'un homme pour la mer et les sports nautiques. Ce qui a commencé comme une référence dans l'univers du kitesurf s'est mué en une maison de mode italienne complète, animée par une seule exigence : la qualité Made in Italy.",
      "En 1995, la marque étend son savoir-faire technique à une ligne vestimentaire complète. En 2005, Roberto Ricci ouvre son premier flagship à Forte dei Marmi, puis un showroom de 500 m² dans le quartier de la mode à Milan. Chaque collection emprunte au monde du nautisme sa rigueur fonctionnelle pour l'appliquer à des vêtements urbains et de villégiature.",
      "Chez Honoris Cosa, RRD représente cet équilibre entre performance et élégance décontractée — des pièces techniques aux coupes soignées qui se portent aussi bien en bord de mer qu'en ville, dans la plus pure tradition italienne.",
    ],
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1080&q=80",
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1080&q=80",
    ],
  },

  "la-bruket": {
    paragraphs: [
      "L:A BRUKET puise son essence dans la nature sauvage de la côte ouest suédoise. Soleil, vent, roche, eau salée : les éléments qui sculptent les paysages de Varberg inspirent chaque formule, dans un dialogue permanent entre la mer et l'épiderme.",
      "Fondée dans cette station thermale bicentenaire, la marque hérite d'un savoir-faire ancestral en soins marins qu'elle réinterprète avec un état d'esprit contemporain. Tous les ingrédients sont naturels et biologiques, sélectionnés sans compromis sur la pureté. Les produits ne sont pas des solutions éphémères : ils s'intègrent dans une routine quotidienne pensée pour nourrir et préserver la peau sur le long terme.",
      "Honoris Cosa a sélectionné L:A BRUKET pour offrir une parenthèse de soin nordique — des rituels complets pour le corps, le visage et les cheveux, présentés dans des flacons au design épuré qui trouvent naturellement leur place dans une salle de bain d'exception.",
    ],
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1080&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1080&q=80",
    ],
  },

  "philippe-model": {
    paragraphs: [
      "Philippe Model est l'histoire d'un talent précoce devenu une icône. À tout juste 20 ans, il crée pour Claude Montana, Jean Paul Gaultier et Issey Miyake, s'imposant comme le chapelier des stars avant de fonder sa propre maison en 1981 — l'année même où il décroche le titre de Meilleur Artisan de France.",
      "C'est au début des années 80 qu'il imagine l'« élastique », sa première chaussure iconique : une silhouette qui anticipe de dix ans le concept du sneaker confortable et stylé. Depuis, la marque allie héritage parisien et savoir-faire artisanal italien, créant des pièces qui intègrent les collections de musées à travers le monde, du Metropolitan Museum de New York à la National Gallery of Australia.",
      "En boutique chez Honoris Cosa, Philippe Model incarne la chaussure de caractère — celle que l'on reconnaît au premier regard, portée par des femmes qui assument leur singularité avec élégance et une pointe d'avant-garde.",
    ],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1080&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1080&q=80",
    ],
  },

  ibeliv: {
    paragraphs: [
      "IBELIV est une marque engagée, fondée par Ramanandraibe Liva — dit Liv — originaire de Madagascar. À 16 ans, il arrive en France et découvre les codes du luxe et du design. Une fois diplômé, il choisit de vivre pleinement de ses passions et crée IBELIV, convaincu qu'une consommation plus responsable est possible sans sacrifier l'élégance.",
      "L'histoire prend racine à Madagascar, où la mère de Liv perpétue l'art ancestral du raphia. Pour mettre en lumière ce savoir-faire, Liv conçoit des accessoires qui marient artisanat traditionnel et chic contemporain. Chaque pièce est produite en quantité raisonnée, en collaboration avec des artisans locaux qui maîtrisent ce matériau précieux depuis des générations.",
      "Chez Honoris Cosa, IBELIV représente la preuve que la mode peut être belle, authentique et respectueuse — des accessoires chargés d'une âme véritable, qui racontent une histoire et honorent une terre.",
    ],
    images: [
      "https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=1080&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1080&q=80",
    ],
  },

  "bella-dahl": {
    paragraphs: [
      "Bella Dahl est née en Californie avec une idée simple et radicale : créer des vêtements si doux et si bien coupés qu'on ne veut plus les enlever. La marque a construit sa réputation sur des matières d'une légèreté exceptionnelle et des finitions qui transforment chaque basique en pièce désirable.",
      "Les collections mêlent fluidité des silhouettes, palettes apaisantes et coupes contemporaines pensées pour une femme active. Du jean au blouse, chaque pièce Bella Dahl est conçue pour s'intégrer naturellement dans une garde-robe déjà riche, en y apportant douceur et décontraction raffinée.",
      "En boutique chez Honoris Cosa, Bella Dahl représente l'élégance sans effort — ces pièces que l'on attrape instinctivement le matin parce qu'elles promettent confort et style pour toute une journée.",
    ],
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1080&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1080&q=80",
    ],
  },

  montagut: {
    paragraphs: [
      "Depuis 1880, la Maison Montagut perpétue l'art du tricot avec une constance qui force le respect. Six générations de la même famille ont transmis leur passion du fil et de la maille, ancrant la marque au cœur de l'Ardèche, dans un héritage industriel et artisanal unique en France.",
      "Née comme filature de soie près de Saint-Sauveur-de-Montagut, la maison s'est réorientée vers la maille après-guerre, maîtrisant progressivement toutes les techniques du tricotage fin. Aujourd'hui, Nicolas Gros et Marine Lozet-Gros, héritiers de la sixième génération, insufflent modernité et émotion à ce patrimoine, en élargissant l'offre tout en restant fidèles à leur savoir-faire fondateur.",
      "Chez Honoris Cosa, Montagut incarne le tricot d'exception — des polos, pulls et pièces en maille d'une finesse rare, portés par des femmes et des hommes qui savent reconnaître la qualité au premier toucher.",
    ],
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1080&q=80",
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1080&q=80",
    ],
  },

  "5-octobre": {
    paragraphs: [
      "5 Octobre est une histoire de passion née dès l'enfance. Sophie Pfeffer collectionnait les perles vintage et les parures anciennes bien avant de lancer sa première collection en 2004. Aujourd'hui, ses bijoux sont des talismans des temps modernes — des pièces artisanales qui protègent et embellissent celles qui les portent.",
      "Chaque création naît d'un assemblage minutieux entre matière brute et raffinement : l'or fin, l'argent, le vermeil et les diamants côtoient des pierres fines taillées ou brutes, choisies pour leur caractère unique. Le travail est entièrement manuel, réalisé dans les ateliers de Sophie où chaque bijou est traité comme une pièce unique.",
      "En boutique chez Honoris Cosa, 5 Octobre propose une sélection de bijoux à l'esthétique minimaliste et puissante — des pièces que l'on porte seules ou que l'on accumule, et qui deviennent rapidement indissociables de celles qui les choisissent.",
    ],
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1080&q=80",
      "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=1080&q=80",
    ],
  },

  "forte-forte": {
    paragraphs: [
      "Forte Forte naît en 2002 d'une collection de t-shirts faits à la main, imaginés par un frère et une sœur dans leur maison d'enfance, face à un jardin en Italie. Ce point de départ intime définit encore aujourd'hui l'âme de la marque : une mode sincère, émotionnelle, portée par une liberté sans limites.",
      "Malgré une production industrielle, la maison cultive l'obsession du détail artisanal. Forte Forte travaille lentement, délibérément, loin de l'agitation de la mode saisonnière. Le résultat : des pièces intemporelles où passé et présent fusionnent harmonieusement, où la matière est respectée dans son caractère, et la couleur choisie avec une sensibilité d'artiste.",
      "Chez Honoris Cosa, Forte Forte représente la mode qui touche — des robes, des tops et des pièces de caractère qui épousent le corps sans le contraindre, et restent dans la garde-robe bien au-delà d'une saison.",
    ],
    images: [
      "https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?w=1080&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1080&q=80",
    ],
  },

  "vanessa-bruno": {
    paragraphs: [
      "Vanessa Bruno est l'incarnation de la parisienne libre et moderne — celle qui crée ses propres règles. En 1996, elle lance sa marque avec l'ambition de donner à chaque femme une garde-robe transgressant le quotidien. Deux ans plus tard, son premier sac cabas en toile pailletée devient un phénomène mondial.",
      "Ce sac iconique, conçu avec quelques paillettes sur une toile de coton brute, revisite l'ordinaire pour le rendre extraordinaire. Il se décline depuis en lin, raphia, cuir velours, et continue de se vendre toutes les 30 minutes dans le monde. Les collections, influencées par ses deux héritages danois et français, dessinent les contours d'une féminité indépendante et urbaine, ancrée dans son époque.",
      "En boutique chez Honoris Cosa, Vanessa Bruno offre ce mélange singulier de légèreté et d'élégance — des pièces et accessoires qui semblent nés naturellement dans une garde-robe parisienne contemporaine.",
    ],
    images: [
      "https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?w=1080&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1080&q=80",
    ],
  },

  "faliero-sarti": {
    paragraphs: [
      "Depuis 1948, la famille Sarti tisse des textiles d'exception près de Florence. D'abord fournisseur confidentiel de Chanel, Dior ou Vivienne Westwood, la filature est transformée par Monica Sarti en 1991 en une maison d'accessoires à part entière — après qu'elle eut étudié la mode à New York et décidé de révolutionner le foulard.",
      "Monica retire les franges, brûle le cachemire, le troue, le fait bouillir : elle réinvente un accessoire que l'on croyait figé. Ses écharpes deviennent ce qu'elle appelle « la lingerie du col » — des pièces qui touchent directement la peau et transmettent une douceur unique. Inspirée du quotidien, elle crée des créations portées à la fois comme des œuvres d'art et des compagnons du quotidien.",
      "Chez Honoris Cosa, Faliero Sarti est synonyme de raffinement discret — des écharpes et accessoires en cachemire travaillé qui transforment une tenue simple en quelque chose d'inoubliable.",
    ],
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1080&q=80",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=1080&q=80",
    ],
  },

  "jerome-dreyfuss": {
    paragraphs: [
      "Jérôme Dreyfuss est l'enfant terrible de la mode parisienne. En 1998, il remporte le prix de l'ANDAM et crée les costumes de l'album Invincible de Michael Jackson. En 2002, il lance « Roots de luxe » — sa première collection de sacs, acclamée immédiatement par la presse et adoptée par toutes les femmes en quête d'un accessoire raffiné sans ostentation.",
      "Ses sacs sont reconnaissables à leur fabrication entièrement artisanale : formes généreuses, cuirs souples, détails innovants. En 2004, Jérôme Dreyfuss franchit un pas supplémentaire en intégrant une démarche éco-responsable, avec le label Agricouture : cuirs végétaux, matières premières européennes exclusivement, consommables recyclables.",
      "En boutique chez Honoris Cosa, les sacs Jérôme Dreyfuss incarnent l'élégance sans effort — des pièces ultra-légères et discrètes qui accompagnent les femmes au quotidien avec une complicité rare.",
    ],
    images: [
      "https://images.unsplash.com/photo-1589363358751-ab05797e5629?w=1080&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=1080&q=80",
    ],
  },

  masons: {
    paragraphs: [
      "Mason's naît en 1974 en Ligurie, sur la côte méditerranéenne italienne. Fondée par Giorgio Martini, la maison s'est donné une mission unique : réconcilier la rigueur de l'uniforme militaire avec la souplesse de l'élégance à l'italienne. Un mariage de contrastes qui définit son identité depuis plus de 50 ans.",
      "Les collections puisent leur inspiration dans les grandes figures de l'histoire — le Dalaï-Lama, Kennedy, Che Guevara, Indira Gandhi — en cherchant à capturer dans chaque coupe une forme de noblesse fonctionnelle. Les tissus sont résistants, qualitatifs, pensés pour durer. La sobriété est élevée au rang de valeur esthétique.",
      "En boutique chez Honoris Cosa, Mason's propose des pièces structurées d'une modernité intemporelle — des pantalons, vestes et bermudas qui habillent l'homme avec autorité et décontraction, fidèles à l'esprit de la Dolce Vita ligurienne.",
    ],
    images: [
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=1080&q=80",
      "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=1080&q=80",
    ],
  },

  seven: {
    paragraphs: [
      "Seven For All Mankind est née en Californie avec une obsession : réinventer le jean. Depuis sa création, la marque s'est imposée comme l'une des références mondiales du denim premium, grâce à des coupes qui épousent le corps avec une précision chirurgicale et des matières travaillées comme des tissus nobles.",
      "Chaque pièce est conçue pour sublimer la silhouette, que ce soit dans une coupe skinny, droite ou évasée. Les finitions soignées, les lavages exclusifs et les détails distinctifs ont fait de Seven une marque que l'on reconnaît à l'œil — et que l'on garde pour longtemps.",
      "Chez Honoris Cosa, Seven représente le denim d'exception — celui que l'on porte habillé ou décontracté, avec la certitude d'un vêtement qui allie qualité californienne et sophistication contemporaine.",
    ],
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=1080&q=80",
      "https://images.unsplash.com/photo-1591884807235-1dc6c2e148b1?w=1080&q=80",
    ],
  },

  "majestic-filatures": {
    paragraphs: [
      "En 1989, Franck Ellia et Roland Chelly ont une idée révolutionnaire : faire du t-shirt une pièce de luxe. Depuis leurs ateliers parisiens, ils vont consacrer plus de 30 ans à perfectionner ce basique, en lui conférant le traitement habituellement réservé aux grandes maisons de couture.",
      "Chaque t-shirt est élaboré comme un vêtement sur mesure : stylistes, modélistes, maîtres tailleurs et couturières travaillent à la main sur des prototypes en matières exclusivement européennes. La maison est pionnière dans le développement de fils nobles — coton pima, soie, cachemire — et a récemment lancé une gamme en éco-cachemire produit en Italie.",
      "Chez Honoris Cosa, Majestic Filatures est la signature du luxe invisible — ces pièces que l'on porte contre la peau avec une confiance absolue dans leur qualité, leur douceur et leur capacité à traverser les années sans jamais dater.",
    ],
    images: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1080&q=80",
      "https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?w=1080&q=80",
    ],
  },

  newtone: {
    paragraphs: [
      "Newtone est une marque française qui célèbre les femmes libres et affirmées. Ancrée dans un esprit rock teinté de bohème, elle propose des collections où les matières nobles, les imprimés audacieux et les coupes généreuses cohabitent avec naturel — pour une garde-robe de caractère, loin des diktats de la mode éphémère.",
      "Chaque pièce Newtone est conçue pour durer, aussi bien dans sa fabrication que dans son style. La marque travaille des matières choisies avec soin — lin, coton lourd, laine douce — et des coupes qui vieillissent bien. L'esthétique emprunte autant au vintage qu'au contemporain, créant des silhouettes reconnaissables sans jamais être uniformes.",
      "En boutique chez Honoris Cosa, Newtone habille celles qui assument leur style avec conviction — des femmes qui cherchent dans leurs vêtements une extension naturelle de leur personnalité, pas un costume.",
    ],
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1080&q=80",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=1080&q=80",
    ],
  },

  "absolut-cachemere": {
    paragraphs: [
      "Absolut Cashmere réinvente le cachemire pour la femme d'aujourd'hui. Refusant les codes figés du luxe traditionnel, la marque propose des silhouettes modernes, des coloris travaillés avec soin et un cachemire mongol d'exception — sélectionné pour sa douceur incomparable et sa résistance dans le temps.",
      "Chaque pièce est tissée à partir de fibres de première qualité, selon des processus de fabrication rigoureux qui garantissent une tenue parfaite saison après saison. Les coupes sont épurées, les volumes maîtrisés : ni ostentatoires, ni banales. Absolut Cashmere incarne le luxe sobre, celui que l'on garde pour toujours.",
      "En boutique chez Honoris Cosa, Absolut Cashmere est une invitation à investir dans l'essentiel — un pull, un cardigan, une écharpe portés avec la certitude d'une qualité irréprochable et d'un style intemporel.",
    ],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1080&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1080&q=80",
    ],
  },

  "bella-jones": {
    paragraphs: [
      "Bella Jones est une marque de prêt-à-porter féminin qui place la femme contemporaine au centre de chaque création. Ses collections proposent des silhouettes équilibrées, des matières soigneusement sélectionnées et une esthétique qui conjugue élégance parisienne et modernité assumée.",
      "Derrière chaque pièce se cache une recherche exigeante sur la coupe et la matière — car chez Bella Jones, un vêtement bien conçu est avant tout un vêtement que l'on porte avec aisance. Les lignes sont nettes, les finitions précises, et le style reste accessible sans jamais sacrifier la sophistication.",
      "Chez Honoris Cosa, Bella Jones s'adresse aux femmes qui savent ce qu'elles veulent : des vêtements beaux, portables, et pensés pour traverser les occasions avec grâce — du bureau à la soirée, du quotidien au week-end.",
    ],
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1080&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1080&q=80",
    ],
  },

  "laid-back": {
    paragraphs: [
      "Laid Back incarne un art de vivre : celui de l'élégance sans effort, inspirée par la douceur de vivre scandinave. La marque propose des collections où les formes simples rencontrent des matières généreuses, pour une garde-robe décontractée qui ne renonce jamais à la qualité.",
      "Les pièces sont pensées pour s'intégrer naturellement dans n'importe quelle tenue. Des basiques revisités avec sensibilité, des coupes flatteuses et des matières douces au toucher : Laid Back construit une mode du quotidien qui vieillit bien, qu'on porte encore et encore sans s'en lasser.",
      "En boutique chez Honoris Cosa, Laid Back représente le vestiaire de la femme moderne qui fait confiance à sa garde-robe — des pièces solides, belles et reposantes, qui habillent chaque journée avec un naturel élégant.",
    ],
    images: [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=1080&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1080&q=80",
    ],
  },

  momoni: {
    paragraphs: [
      "Momoni est une maison de mode italienne qui célèbre la féminité dans toute sa richesse. Ses collections se distinguent par des imprimés exclusifs, des matières légères et des silhouettes qui drapent le corps avec sensualité — une invitation permanente à la joie de s'habiller.",
      "Fondée en Italie, Momoni puise son inspiration dans l'art, les voyages et la beauté du quotidien. Chaque collection raconte une histoire à travers des couleurs vibrantes, des textures soigneusement choisies et des finitions artisanales qui témoignent d'un savoir-faire rare. La mode y est vécue comme une forme d'expression personnelle, libre et joyeuse.",
      "Chez Honoris Cosa, Momoni habille les femmes qui aiment la mode comme on aime la vie — avec passion, légèreté et un goût prononcé pour les belles choses. Des pièces qui font sourire dès qu'on les enfile.",
    ],
    images: [
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=1080&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1080&q=80",
    ],
  },

  "lou-andrea": {
    paragraphs: [
      "Lou Andrea est une marque de créateur qui allie artisanat exigeant et vision contemporaine de la féminité. Chaque collection s'articule autour de pièces à la personnalité forte, construites dans des matières nobles et façonnées avec une attention particulière aux détails qui font la différence.",
      "La marque se distingue par sa capacité à créer des vêtements portables au quotidien tout en conservant une dimension créative affirmée. Lou Andrea habille une femme à la fois libre et raffinée — celle qui n'a pas besoin de choisir entre l'élégance et le confort, entre l'originalité et la durabilité.",
      "En boutique chez Honoris Cosa, Lou Andrea propose des silhouettes uniques, pensées pour être portées avec conviction et plaisir, saison après saison.",
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1080&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1080&q=80",
    ],
  },

  "claris-virot": {
    paragraphs: [
      "Claris Virot est une maison d'accessoires parisienne spécialisée dans les chapeaux et les sacs. Fondée à Paris, elle perpétue un savoir-faire artisanal d'une exigence rare, en créant des pièces résolument contemporaines qui réinterprètent les codes de la chapellerie traditionnelle avec un œil neuf.",
      "Chaque chapeau est une œuvre à part entière, façonné dans des matières d'exception — feutres nobles, pailles fines, cuirs travaillés. La marque s'est imposée comme une référence internationale auprès de femmes en quête de pièces distinctives, qui ne ressemblent à rien d'autre et qui transforment instantanément une tenue.",
      "Chez Honoris Cosa, Claris Virot représente l'accessoire qui fait la tenue — ce chapeau ou ce sac que l'on remarque immédiatement, et qui trahit le goût de celle qui le porte pour les belles choses faites avec soin.",
    ],
    images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=1080&q=80",
      "https://images.unsplash.com/photo-1534126511673-b6899657816a?w=1080&q=80",
    ],
  },

  soeur: {
    paragraphs: [
      "Sœur est une marque parisienne créée par deux sœurs, Domitille et Angélique Brion. Née d'une complicité familiale profonde, elle traduit en vêtements une vision partagée de la féminité : romantique sans être naïve, élégante sans être rigide, libre et joyeuse avant tout.",
      "Les collections Sœur se reconnaissent à leurs imprimés délicats, leurs matières fluides et leurs coupes qui mettent en valeur le corps avec une douceur naturelle. La marque construit une mode du quotidien habitée par une vraie sensibilité — celle de deux femmes qui habillent d'autres femmes avec sincérité et bienveillance.",
      "Chez Honoris Cosa, Sœur incarne la mode que l'on partage — des pièces que l'on s'emprunte, que l'on offre, que l'on transmet, et qui racontent à chaque fois une histoire de style et de complicité.",
    ],
    images: [
      "https://images.unsplash.com/photo-1585914924626-15adac1e6402?w=1080&q=80",
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=1080&q=80",
    ],
  },

  "ct-plage": {
    paragraphs: [
      "CT Plage est la marque balnéaire par excellence — celle qui capture l'essence de l'été dans chaque pièce. Spécialisée dans les collections de plage et de villégiature, elle propose maillots, paréos, robes légères et tenues de plage pensés pour les femmes qui vivent l'été avec intensité et élégance.",
      "Les collections se distinguent par leurs imprimés lumineux, leurs matières adaptées au soleil et à la mer, et leurs coupes qui mettent en valeur la silhouette sans contrainte. CT Plage incarne la Dolce Vita balnéaire — une invitation à profiter de chaque instant de lumière avec style et désinvolture.",
      "En boutique chez Honoris Cosa, CT Plage prolonge l'esprit des vacances bien au-delà des plages. Des pièces qui vivent aussi en ville, le soir en terrasse, lors d'un week-end en escapade — partout où le soleil invite à s'habiller avec légèreté.",
    ],
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1080&q=80",
      "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1080&q=80",
    ],
  },

  tonal: {
    paragraphs: [
      "Tonal est une marque construite autour d'une philosophie minimaliste et sensorielle : la puissance du ton sur ton, la beauté des matières qui se révèlent dans la subtilité. Chaque collection explore les nuances monochromes et les jeux de textures pour créer des silhouettes à la fois épurées et profondes.",
      "Les pièces Tonal sont conçues pour se superposer, se combiner, se répondre. La couleur n'est jamais choisie au hasard — chaque nuance est travaillée pour créer des harmonies graphiques et sensorielles. Le résultat est une garde-robe cohérente, raffinée, dans laquelle chaque pièce trouve naturellement sa place.",
      "Chez Honoris Cosa, Tonal habille les femmes qui aiment la mode pensée — celles qui construisent leur style avec méthode et sensibilité, et pour qui s'habiller est un vrai plaisir intellectuel autant qu'esthétique.",
    ],
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1080&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=1080&q=80",
    ],
  },

  bowery: {
    paragraphs: [
      "Bowery s'inspire de l'énergie créative et urbaine de New York — et plus précisément de cette rue mythique de downtown Manhattan qui a vu naître tant d'artistes et de contre-cultures. La marque traduit cet héritage en une mode à la fois décontractée et sophistiquée, qui allie l'esprit de la rue à une exigence qualitative européenne.",
      "Les pièces Bowery sont taillées pour une femme active, qui jongle entre vie professionnelle et personnelle avec style et efficacité. Des coupes nettes, des matières premium soigneusement sélectionnées et une palette intemporelle composent une garde-robe urbaine sans compromis — fonctionnelle, élégante, toujours juste.",
      "En boutique chez Honoris Cosa, Bowery représente la mode du mouvement — des pièces que l'on porte de la réunion du matin au dîner du soir, sans jamais avoir l'impression de faire des concessions sur le style.",
    ],
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1080&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1080&q=80",
    ],
  },

  "la-nouvelle": {
    paragraphs: [
      "La Nouvelle est une marque de mode féminine contemporaine qui place la liberté au cœur de chaque collection. Ses pièces s'adressent à une femme moderne et assumée, qui cherche dans ses vêtements un reflet fidèle de sa personnalité — forte, nuancée, en mouvement permanent.",
      "La marque se distingue par une approche créative singulière qui mêle savoir-faire artisanal et vision résolument contemporaine. Chaque collection propose des pièces fortes, construites dans des matières choisies avec soin, qui invitent la femme qui les porte à se réinventer sans jamais se trahir.",
      "Chez Honoris Cosa, La Nouvelle incarne cette mode de l'affirmation — des pièces portées avec conviction, qui prennent toute leur dimension sur la femme qui les a choisies parce qu'elles lui ressemblent.",
    ],
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1080&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1080&q=80",
    ],
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