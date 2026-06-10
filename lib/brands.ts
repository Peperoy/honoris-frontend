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
  | "toral"
  | "bowery"
  | "la-nouvelle"
  | "autry"
  | "inoui-editions"
  | "knit-ted"
  | "les-petits-foulards"
  | "post-co"
  | "mon-dada"
  | "shan-shan"
  | "essentiel-antwerp";

export type BrandLongDescription = {
  paragraphs: string[];
  images: string[];
};

type BrandAsset = "hero" | "aesthetic-1" | "aesthetic-2";

/** Chemins locaux vers les visuels officiels de collection (public/images/brands/). */
function brandAsset(slug: BrandSlug, file: BrandAsset): string {
  return `/images/brands/${slug}/${file}.webp`;
}

export const BRAND_IMAGES: Record<BrandSlug, string> = {
  "roberto-collina": brandAsset("roberto-collina", "hero"),
  "blonde-8": brandAsset("blonde-8", "hero"),
  rrd: brandAsset("rrd", "hero"),
  "la-bruket": brandAsset("la-bruket", "hero"),
  "philippe-model": brandAsset("philippe-model", "hero"),
  ibeliv: brandAsset("ibeliv", "hero"),
  "bella-dahl": brandAsset("bella-dahl", "hero"),
  montagut: brandAsset("montagut", "hero"),
  "5-octobre": brandAsset("5-octobre", "hero"),
  "forte-forte": brandAsset("forte-forte", "hero"),
  "vanessa-bruno": brandAsset("vanessa-bruno", "hero"),
  "faliero-sarti": brandAsset("faliero-sarti", "hero"),
  "jerome-dreyfuss": brandAsset("jerome-dreyfuss", "hero"),
  masons: brandAsset("masons", "hero"),
  seven: brandAsset("seven", "hero"),
  "majestic-filatures": brandAsset("majestic-filatures", "hero"),
  newtone: brandAsset("newtone", "hero"),
  "absolut-cachemere": brandAsset("absolut-cachemere", "hero"),
  "bella-jones": brandAsset("bella-jones", "hero"),
  "laid-back": brandAsset("laid-back", "hero"),
  momoni: brandAsset("momoni", "hero"),
  "lou-andrea": brandAsset("lou-andrea", "hero"),
  "claris-virot": brandAsset("claris-virot", "hero"),
  soeur: brandAsset("soeur", "hero"),
  "ct-plage": brandAsset("ct-plage", "hero"),
  toral: brandAsset("toral", "hero"),
  bowery: brandAsset("bowery", "hero"),
  "la-nouvelle": brandAsset("la-nouvelle", "hero"),
  autry: brandAsset("autry", "hero"),
  "inoui-editions": brandAsset("inoui-editions", "hero"),
  "knit-ted": brandAsset("knit-ted", "hero"),
  "les-petits-foulards": brandAsset("les-petits-foulards", "hero"),
  "post-co": brandAsset("post-co", "hero"),
  "mon-dada": brandAsset("mon-dada", "hero"),
  "shan-shan": brandAsset("shan-shan", "hero"),
  "essentiel-antwerp": brandAsset("essentiel-antwerp", "hero"),
};

export const LONG_DESCRIPTIONS: Record<BrandSlug, BrandLongDescription> = {
  "roberto-collina": {
    paragraphs: [
      "Depuis plus de 70 ans, Roberto Collina incarne l'excellence de la maille italienne. Fondée près de Bologne, cette maison familiale a élevé le tricot au rang des beaux-arts, en réduisant le luxe à l'essentiel : matière, coupe, savoir-faire.",
      "L'histoire commence dans les années 1950, dans un petit atelier de Crevalcore, au cœur du district de la maille italienne. C'est le fils fondateur, Roberto, qui donne son nom à la maison dans les années 1980 en présentant 33 pulls homme à Pitti Uomo — un début remarqué qui lance la marque sur la scène internationale. Depuis, les fils les plus nobles se succèdent : cachemire, mohair, alpaca, mérinos, soie.",
      "Chez Honoris Cosa, les pièces Roberto Collina sont sélectionnées pour leur capacité à traverser les saisons sans jamais vieillir. Chaque silhouette traduit un équilibre rare entre tradition artisanale et modernité créative — une garde-robe de caractère, pensée pour durer.",
    ],
    images: [
      brandAsset("roberto-collina", "aesthetic-1"),
      brandAsset("roberto-collina", "aesthetic-2"),
    ],
  },

  "blonde-8": {
    paragraphs: [
      "Blonde n°8 s'est imposée comme la référence incontournable de l'outerwear féminin haut de gamme. Sa parka iconique, pensée jusque dans ses moindres détails, a conquis les femmes qui refusent de choisir entre style et protection.",
      "La marque construit chaque pièce autour d'une philosophie exigeante : doublures techniques, fermetures éclair premium, coutures contrastées, matières durables. Loin de la fast fashion, Blonde n°8 s'inscrit dans une démarche de production responsable, attentive à l'impact environnemental et à la qualité des savoir-faire mobilisés.",
      "En boutique chez Honoris Cosa, les collections Blonde n°8 proposent des pièces d'extérieur que l'on garde saison après saison — des manteaux à la fois fonctionnels et désirables, qui accompagnent avec élégance les femmes actives dans leur quotidien.",
    ],
    images: [
      brandAsset("blonde-8", "aesthetic-1"),
      brandAsset("blonde-8", "aesthetic-2"),
    ],
  },

  rrd: {
    paragraphs: [
      "RRD — Roberto Ricci Designs — est née de la passion d'un homme pour la mer et les sports nautiques. Ce qui a commencé comme une référence dans l'univers du kitesurf s'est mué en une maison de mode italienne complète, animée par une seule exigence : la qualité Made in Italy.",
      "En 1995, la marque étend son savoir-faire technique à une ligne vestimentaire complète. En 2005, Roberto Ricci ouvre son premier flagship à Forte dei Marmi, puis un showroom de 500 m² dans le quartier de la mode à Milan. Chaque collection emprunte au monde du nautisme sa rigueur fonctionnelle pour l'appliquer à des vêtements urbains et de villégiature.",
      "Chez Honoris Cosa, RRD représente cet équilibre entre performance et élégance décontractée — des pièces techniques aux coupes soignées qui se portent aussi bien en bord de mer qu'en ville, dans la plus pure tradition italienne.",
    ],
    images: [brandAsset("rrd", "aesthetic-1"), brandAsset("rrd", "aesthetic-2")],
  },

  "la-bruket": {
    paragraphs: [
      "L:A BRUKET puise son essence dans la nature sauvage de la côte ouest suédoise. Soleil, vent, roche, eau salée : les éléments qui sculptent les paysages de Varberg inspirent chaque formule, dans un dialogue permanent entre la mer et l'épiderme.",
      "Fondée dans cette station thermale bicentenaire, la marque hérite d'un savoir-faire ancestral en soins marins qu'elle réinterprète avec un état d'esprit contemporain. Tous les ingrédients sont naturels et biologiques, sélectionnés sans compromis sur la pureté. Les produits ne sont pas des solutions éphémères : ils s'intègrent dans une routine quotidienne pensée pour nourrir et préserver la peau sur le long terme.",
      "Honoris Cosa a sélectionné L:A BRUKET pour offrir une parenthèse de soin nordique — des rituels complets pour le corps, le visage et les cheveux, présentés dans des flacons au design épuré qui trouvent naturellement leur place dans une salle de bain d'exception.",
    ],
    images: [
      brandAsset("la-bruket", "aesthetic-1"),
      brandAsset("la-bruket", "aesthetic-2"),
    ],
  },

  "philippe-model": {
    paragraphs: [
      "Philippe Model est l'histoire d'un talent précoce devenu une icône. À tout juste 20 ans, il crée pour Claude Montana, Jean Paul Gaultier et Issey Miyake, s'imposant comme le chapelier des stars avant de fonder sa propre maison en 1981 — l'année même où il décroche le titre de Meilleur Artisan de France.",
      "C'est au début des années 80 qu'il imagine l'« élastique », sa première chaussure iconique : une silhouette qui anticipe de dix ans le concept du sneaker confortable et stylé. Depuis, la marque allie héritage parisien et savoir-faire artisanal italien, créant des pièces qui intègrent les collections de musées à travers le monde, du Metropolitan Museum de New York à la National Gallery of Australia.",
      "En boutique chez Honoris Cosa, Philippe Model incarne la chaussure de caractère — celle que l'on reconnaît au premier regard, portée par des femmes qui assument leur singularité avec élégance et une pointe d'avant-garde.",
    ],
    images: [
      brandAsset("philippe-model", "aesthetic-1"),
      brandAsset("philippe-model", "aesthetic-2"),
    ],
  },

  ibeliv: {
    paragraphs: [
      "IBELIV est une marque engagée, fondée par Ramanandraibe Liva — dit Liv — originaire de Madagascar. À 16 ans, il arrive en France et découvre les codes du luxe et du design. Une fois diplômé, il choisit de vivre pleinement de ses passions et crée IBELIV, convaincu qu'une consommation plus responsable est possible sans sacrifier l'élégance.",
      "L'histoire prend racine à Madagascar, où la mère de Liv perpétue l'art ancestral du raphia. Pour mettre en lumière ce savoir-faire, Liv conçoit des accessoires qui marient artisanat traditionnel et chic contemporain. Chaque pièce est produite en quantité raisonnée, en collaboration avec des artisans locaux qui maîtrisent ce matériau précieux depuis des générations.",
      "Chez Honoris Cosa, IBELIV représente la preuve que la mode peut être belle, authentique et respectueuse — des accessoires chargés d'une âme véritable, qui racontent une histoire et honorent une terre.",
    ],
    images: [
      brandAsset("ibeliv", "aesthetic-1"),
      brandAsset("ibeliv", "aesthetic-2"),
    ],
  },

  "bella-dahl": {
    paragraphs: [
      "Bella Dahl est née en Californie avec une idée simple et radicale : créer des vêtements si doux et si bien coupés qu'on ne veut plus les enlever. La marque a construit sa réputation sur des matières d'une légèreté exceptionnelle et des finitions qui transforment chaque basique en pièce désirable.",
      "Les collections mêlent fluidité des silhouettes, palettes apaisantes et coupes contemporaines pensées pour une femme active. Du jean au blouse, chaque pièce Bella Dahl est conçue pour s'intégrer naturellement dans une garde-robe déjà riche, en y apportant douceur et décontraction raffinée.",
      "En boutique chez Honoris Cosa, Bella Dahl représente l'élégance sans effort — ces pièces que l'on attrape instinctivement le matin parce qu'elles promettent confort et style pour toute une journée.",
    ],
    images: [
      brandAsset("bella-dahl", "aesthetic-1"),
      brandAsset("bella-dahl", "aesthetic-2"),
    ],
  },

  montagut: {
    paragraphs: [
      "Depuis 1880, la Maison Montagut perpétue l'art du tricot avec une constance qui force le respect. Six générations de la même famille ont transmis leur passion du fil et de la maille, ancrant la marque au cœur de l'Ardèche, dans un héritage industriel et artisanal unique en France.",
      "Née comme filature de soie près de Saint-Sauveur-de-Montagut, la maison s'est réorientée vers la maille après-guerre, maîtrisant progressivement toutes les techniques du tricotage fin. Aujourd'hui, Nicolas Gros et Marine Lozet-Gros, héritiers de la sixième génération, insufflent modernité et émotion à ce patrimoine, en élargissant l'offre tout en restant fidèles à leur savoir-faire fondateur.",
      "Chez Honoris Cosa, Montagut incarne le tricot d'exception — des polos, pulls et pièces en maille d'une finesse rare, portés par des femmes et des hommes qui savent reconnaître la qualité au premier toucher.",
    ],
    images: [
      brandAsset("montagut", "aesthetic-1"),
      brandAsset("montagut", "aesthetic-2"),
    ],
  },

  "5-octobre": {
    paragraphs: [
      "5 Octobre est une histoire de passion née dès l'enfance. Sophie Pfeffer collectionnait les perles vintage et les parures anciennes bien avant de lancer sa première collection en 2004. Aujourd'hui, ses bijoux sont des talismans des temps modernes — des pièces artisanales qui protègent et embellissent celles qui les portent.",
      "Chaque création naît d'un assemblage minutieux entre matière brute et raffinement : l'or fin, l'argent, le vermeil et les diamants côtoient des pierres fines taillées ou brutes, choisies pour leur caractère unique. Le travail est entièrement manuel, réalisé dans les ateliers de Sophie où chaque bijou est traité comme une pièce unique.",
      "En boutique chez Honoris Cosa, 5 Octobre propose une sélection de bijoux à l'esthétique minimaliste et puissante — des pièces que l'on porte seules ou que l'on accumule, et qui deviennent rapidement indissociables de celles qui les choisissent.",
    ],
    images: [
      brandAsset("5-octobre", "aesthetic-1"),
      brandAsset("5-octobre", "aesthetic-2"),
    ],
  },

  "forte-forte": {
    paragraphs: [
      "Forte Forte naît en 2002 d'une collection de t-shirts faits à la main, imaginés par un frère et une sœur dans leur maison d'enfance, face à un jardin en Italie. Ce point de départ intime définit encore aujourd'hui l'âme de la marque : une mode sincère, émotionnelle, portée par une liberté sans limites.",
      "Malgré une production industrielle, la maison cultive l'obsession du détail artisanal. Forte Forte travaille lentement, délibérément, loin de l'agitation de la mode saisonnière. Le résultat : des pièces intemporelles où passé et présent fusionnent harmonieusement, où la matière est respectée dans son caractère, et la couleur choisie avec une sensibilité d'artiste.",
      "Chez Honoris Cosa, Forte Forte représente la mode qui touche — des robes, des tops et des pièces de caractère qui épousent le corps sans le contraindre, et restent dans la garde-robe bien au-delà d'une saison.",
    ],
    images: [
      brandAsset("forte-forte", "aesthetic-1"),
      brandAsset("forte-forte", "aesthetic-2"),
    ],
  },

  "vanessa-bruno": {
    paragraphs: [
      "Vanessa Bruno est l'incarnation de la parisienne libre et moderne — celle qui crée ses propres règles. En 1996, elle lance sa marque avec l'ambition de donner à chaque femme une garde-robe transgressant le quotidien. Deux ans plus tard, son premier sac cabas en toile pailletée devient un phénomène mondial.",
      "Ce sac iconique, conçu avec quelques paillettes sur une toile de coton brute, revisite l'ordinaire pour le rendre extraordinaire. Il se décline depuis en lin, raphia, cuir velours, et continue de se vendre toutes les 30 minutes dans le monde. Les collections, influencées par ses deux héritages danois et français, dessinent les contours d'une féminité indépendante et urbaine, ancrée dans son époque.",
      "En boutique chez Honoris Cosa, Vanessa Bruno offre ce mélange singulier de légèreté et d'élégance — des pièces et accessoires qui semblent nés naturellement dans une garde-robe parisienne contemporaine.",
    ],
    images: [
      brandAsset("vanessa-bruno", "aesthetic-1"),
      brandAsset("vanessa-bruno", "aesthetic-2"),
    ],
  },

  "faliero-sarti": {
    paragraphs: [
      "Depuis 1948, la famille Sarti tisse des textiles d'exception près de Florence. D'abord fournisseur confidentiel de Chanel, Dior ou Vivienne Westwood, la filature est transformée par Monica Sarti en 1991 en une maison d'accessoires à part entière — après qu'elle eut étudié la mode à New York et décidé de révolutionner le foulard.",
      "Monica retire les franges, brûle le cachemire, le troue, le fait bouillir : elle réinvente un accessoire que l'on croyait figé. Ses écharpes deviennent ce qu'elle appelle « la lingerie du col » — des pièces qui touchent directement la peau et transmettent une douceur unique. Inspirée du quotidien, elle crée des créations portées à la fois comme des œuvres d'art et des compagnons du quotidien.",
      "Chez Honoris Cosa, Faliero Sarti est synonyme de raffinement discret — des écharpes et accessoires en cachemire travaillé qui transforment une tenue simple en quelque chose d'inoubliable.",
    ],
    images: [
      brandAsset("faliero-sarti", "aesthetic-1"),
      brandAsset("faliero-sarti", "aesthetic-2"),
    ],
  },

  "jerome-dreyfuss": {
    paragraphs: [
      "Jérôme Dreyfuss est l'enfant terrible de la mode parisienne. En 1998, il remporte le prix de l'ANDAM et crée les costumes de l'album Invincible de Michael Jackson. En 2002, il lance « Roots de luxe » — sa première collection de sacs, acclamée immédiatement par la presse et adoptée par toutes les femmes en quête d'un accessoire raffiné sans ostentation.",
      "Ses sacs sont reconnaissables à leur fabrication entièrement artisanale : formes généreuses, cuirs souples, détails innovants. En 2004, Jérôme Dreyfuss franchit un pas supplémentaire en intégrant une démarche éco-responsable, avec le label Agricouture : cuirs végétaux, matières premières européennes exclusivement, consommables recyclables.",
      "En boutique chez Honoris Cosa, les sacs Jérôme Dreyfuss incarnent l'élégance sans effort — des pièces ultra-légères et discrètes qui accompagnent les femmes au quotidien avec une complicité rare.",
    ],
    images: [
      brandAsset("jerome-dreyfuss", "aesthetic-1"),
      brandAsset("jerome-dreyfuss", "aesthetic-2"),
    ],
  },

  masons: {
    paragraphs: [
      "Mason's naît en 1974 en Ligurie, sur la côte méditerranéenne italienne. Fondée par Giorgio Martini, la maison s'est donné une mission unique : réconcilier la rigueur de l'uniforme militaire avec la souplesse de l'élégance à l'italienne. Un mariage de contrastes qui définit son identité depuis plus de 50 ans.",
      "Les collections puisent leur inspiration dans les grandes figures de l'histoire — le Dalaï-Lama, Kennedy, Che Guevara, Indira Gandhi — en cherchant à capturer dans chaque coupe une forme de noblesse fonctionnelle. Les tissus sont résistants, qualitatifs, pensés pour durer. La sobriété est élevée au rang de valeur esthétique.",
      "En boutique chez Honoris Cosa, Mason's propose des pièces structurées d'une modernité intemporelle — des pantalons, vestes et bermudas qui habillent avec autorité et décontraction, fidèles à l'esprit de la Dolce Vita ligurienne.",
    ],
    images: [
      brandAsset("masons", "aesthetic-1"),
      brandAsset("masons", "aesthetic-2"),
    ],
  },

  seven: {
    paragraphs: [
      "Seven For All Mankind est née en Californie avec une obsession : réinventer le jean. Depuis sa création, la marque s'est imposée comme l'une des références mondiales du denim premium, grâce à des coupes qui épousent le corps avec une précision chirurgicale et des matières travaillées comme des tissus nobles.",
      "Chaque pièce est conçue pour sublimer la silhouette, que ce soit dans une coupe skinny, droite ou évasée. Les finitions soignées, les lavages exclusifs et les détails distinctifs ont fait de Seven une marque que l'on reconnaît à l'œil — et que l'on garde pour longtemps.",
      "Chez Honoris Cosa, Seven représente le denim d'exception — celui que l'on porte habillé ou décontracté, avec la certitude d'un vêtement qui allie qualité californienne et sophistication contemporaine.",
    ],
    images: [
      brandAsset("seven", "aesthetic-1"),
      brandAsset("seven", "aesthetic-2"),
    ],
  },

  "majestic-filatures": {
    paragraphs: [
      "En 1989, Franck Ellia et Roland Chelly ont une idée révolutionnaire : faire du t-shirt une pièce de luxe. Depuis leurs ateliers parisiens, ils vont consacrer plus de 30 ans à perfectionner ce basique, en lui conférant le traitement habituellement réservé aux grandes maisons de couture.",
      "Chaque t-shirt est élaboré comme un vêtement sur mesure : stylistes, modélistes, maîtres tailleurs et couturières travaillent à la main sur des prototypes en matières exclusivement européennes. La maison est pionnière dans le développement de fils nobles — coton pima, soie, cachemire — et a récemment lancé une gamme en éco-cachemire produit en Italie.",
      "Chez Honoris Cosa, Majestic Filatures est la signature du luxe invisible — ces pièces que l'on porte contre la peau avec une confiance absolue dans leur qualité, leur douceur et leur capacité à traverser les années sans jamais dater.",
    ],
    images: [
      brandAsset("majestic-filatures", "aesthetic-1"),
      brandAsset("majestic-filatures", "aesthetic-2"),
    ],
  },

  newtone: {
    paragraphs: [
      "Newtone est une marque française qui célèbre les femmes libres et affirmées. Ancrée dans un esprit rock teinté de bohème, elle propose des collections où les matières nobles, les imprimés audacieux et les coupes généreuses cohabitent avec naturel — pour une garde-robe de caractère, loin des diktats de la mode éphémère.",
      "Chaque pièce Newtone est conçue pour durer, aussi bien dans sa fabrication que dans son style. La marque travaille des matières choisies avec soin — lin, coton lourd, laine douce — et des coupes qui vieillissent bien. L'esthétique emprunte autant au vintage qu'au contemporain, créant des silhouettes reconnaissables sans jamais être uniformes.",
      "En boutique chez Honoris Cosa, Newtone habille celles qui assument leur style avec conviction — des femmes qui cherchent dans leurs vêtements une extension naturelle de leur personnalité, pas un costume.",
    ],
    images: [
      brandAsset("newtone", "aesthetic-1"),
      brandAsset("newtone", "aesthetic-2"),
    ],
  },

  "absolut-cachemere": {
    paragraphs: [
      "Absolut Cashmere réinvente le cachemire pour la femme d'aujourd'hui. Refusant les codes figés du luxe traditionnel, la marque propose des silhouettes modernes, des coloris travaillés avec soin et un cachemire mongol d'exception — sélectionné pour sa douceur incomparable et sa résistance dans le temps.",
      "Chaque pièce est tissée à partir de fibres de première qualité, selon des processus de fabrication rigoureux qui garantissent une tenue parfaite saison après saison. Les coupes sont épurées, les volumes maîtrisés : ni ostentatoires, ni banales. Absolut Cashmere incarne le luxe sobre, celui que l'on garde pour toujours.",
      "En boutique chez Honoris Cosa, Absolut Cashmere est une invitation à investir dans l'essentiel — un pull, un cardigan, une écharpe portés avec la certitude d'une qualité irréprochable et d'un style intemporel.",
    ],
    images: [
      brandAsset("absolut-cachemere", "aesthetic-1"),
      brandAsset("absolut-cachemere", "aesthetic-2"),
    ],
  },

  "bella-jones": {
    paragraphs: [
      "Bella Jones est une marque de prêt-à-porter féminin qui place la femme contemporaine au centre de chaque création. Ses collections proposent des silhouettes équilibrées, des matières soigneusement sélectionnées et une esthétique qui conjugue élégance parisienne et modernité assumée.",
      "Derrière chaque pièce se cache une recherche exigeante sur la coupe et la matière — car chez Bella Jones, un vêtement bien conçu est avant tout un vêtement que l'on porte avec aisance. Les lignes sont nettes, les finitions précises, et le style reste accessible sans jamais sacrifier la sophistication.",
      "Chez Honoris Cosa, Bella Jones s'adresse aux femmes qui savent ce qu'elles veulent : des vêtements beaux, portables, et pensés pour traverser les occasions avec grâce — du bureau à la soirée, du quotidien au week-end.",
    ],
    images: [
      brandAsset("bella-jones", "aesthetic-1"),
      brandAsset("bella-jones", "aesthetic-2"),
    ],
  },

  "laid-back": {
    paragraphs: [
      "Laid Back incarne un art de vivre : celui de l'élégance sans effort, inspirée par la douceur de vivre scandinave. La marque propose des collections où les formes simples rencontrent des matières généreuses, pour une garde-robe décontractée qui ne renonce jamais à la qualité.",
      "Les pièces sont pensées pour s'intégrer naturellement dans n'importe quelle tenue. Des basiques revisités avec sensibilité, des coupes flatteuses et des matières douces au toucher : Laid Back construit une mode du quotidien qui vieillit bien, qu'on porte encore et encore sans s'en lasser.",
      "En boutique chez Honoris Cosa, Laid Back représente le vestiaire de la femme moderne qui fait confiance à sa garde-robe — des pièces solides, belles et reposantes, qui habillent chaque journée avec un naturel élégant.",
    ],
    images: [
      brandAsset("laid-back", "aesthetic-1"),
      brandAsset("laid-back", "aesthetic-2"),
    ],
  },

  momoni: {
    paragraphs: [
      "Momoni est une maison de mode italienne qui célèbre la féminité dans toute sa richesse. Ses collections se distinguent par des imprimés exclusifs, des matières légères et des silhouettes qui drapent le corps avec sensualité — une invitation permanente à la joie de s'habiller.",
      "Fondée en Italie, Momoni puise son inspiration dans l'art, les voyages et la beauté du quotidien. Chaque collection raconte une histoire à travers des couleurs vibrantes, des textures soigneusement choisies et des finitions artisanales qui témoignent d'un savoir-faire rare. La mode y est vécue comme une forme d'expression personnelle, libre et joyeuse.",
      "Chez Honoris Cosa, Momoni habille les femmes qui aiment la mode comme on aime la vie — avec passion, légèreté et un goût prononcé pour les belles choses. Des pièces qui font sourire dès qu'on les enfile.",
    ],
    images: [
      brandAsset("momoni", "aesthetic-1"),
      brandAsset("momoni", "aesthetic-2"),
    ],
  },

  "lou-andrea": {
    paragraphs: [
      "Lou Andrea est une marque de créateur qui allie artisanat exigeant et vision contemporaine de la féminité. Chaque collection s'articule autour de pièces à la personnalité forte, construites dans des matières nobles et façonnées avec une attention particulière aux détails qui font la différence.",
      "La marque se distingue par sa capacité à créer des vêtements portables au quotidien tout en conservant une dimension créative affirmée. Lou Andrea habille une femme à la fois libre et raffinée — celle qui n'a pas besoin de choisir entre l'élégance et le confort, entre l'originalité et la durabilité.",
      "En boutique chez Honoris Cosa, Lou Andrea propose des silhouettes uniques, pensées pour être portées avec conviction et plaisir, saison après saison.",
    ],
    images: [
      brandAsset("lou-andrea", "aesthetic-1"),
      brandAsset("lou-andrea", "aesthetic-2"),
    ],
  },

  "claris-virot": {
    paragraphs: [
      "Claris Virot est une maison d'accessoires parisienne spécialisée dans les chapeaux et les sacs. Fondée à Paris, elle perpétue un savoir-faire artisanal d'une exigence rare, en créant des pièces résolument contemporaines qui réinterprètent les codes de la chapellerie traditionnelle avec un œil neuf.",
      "Chaque chapeau est une œuvre à part entière, façonné dans des matières d'exception — feutres nobles, pailles fines, cuirs travaillés. La marque s'est imposée comme une référence internationale auprès de femmes en quête de pièces distinctives, qui ne ressemblent à rien d'autre et qui transforment instantanément une tenue.",
      "Chez Honoris Cosa, Claris Virot représente l'accessoire qui fait la tenue — ce chapeau ou ce sac que l'on remarque immédiatement, et qui trahit le goût de celle qui le porte pour les belles choses faites avec soin.",
    ],
    images: [
      brandAsset("claris-virot", "aesthetic-1"),
      brandAsset("claris-virot", "aesthetic-2"),
    ],
  },

  soeur: {
    paragraphs: [
      "Sœur est une marque parisienne créée par deux sœurs, Domitille et Angélique Brion. Née d'une complicité familiale profonde, elle traduit en vêtements une vision partagée de la féminité : romantique sans être naïve, élégante sans être rigide, libre et joyeuse avant tout.",
      "Les collections Sœur se reconnaissent à leurs imprimés délicats, leurs matières fluides et leurs coupes qui mettent en valeur le corps avec une douceur naturelle. La marque construit une mode du quotidien habitée par une vraie sensibilité — celle de deux femmes qui habillent d'autres femmes avec sincérité et bienveillance.",
      "Chez Honoris Cosa, Sœur incarne la mode que l'on partage — des pièces que l'on s'emprunte, que l'on offre, que l'on transmet, et qui racontent à chaque fois une histoire de style et de complicité.",
    ],
    images: [
      brandAsset("soeur", "aesthetic-1"),
      brandAsset("soeur", "aesthetic-2"),
    ],
  },

  "ct-plage": {
    paragraphs: [
      "CT Plage est la marque balnéaire par excellence — celle qui capture l'essence de l'été dans chaque pièce. Spécialisée dans les collections de plage et de villégiature, elle propose maillots, paréos, robes légères et tenues de plage pensés pour les femmes qui vivent l'été avec intensité et élégance.",
      "Les collections se distinguent par leurs imprimés lumineux, leurs matières adaptées au soleil et à la mer, et leurs coupes qui mettent en valeur la silhouette sans contrainte. CT Plage incarne la Dolce Vita balnéaire — une invitation à profiter de chaque instant de lumière avec style et désinvolture.",
      "En boutique chez Honoris Cosa, CT Plage prolonge l'esprit des vacances bien au-delà des plages. Des pièces qui vivent aussi en ville, le soir en terrasse, lors d'un week-end en escapade — partout où le soleil invite à s'habiller avec légèreté.",
    ],
    images: [
      brandAsset("ct-plage", "aesthetic-1"),
      brandAsset("ct-plage", "aesthetic-2"),
    ],
  },

  toral: {
    paragraphs: [
      "Toral, c'est la chaussure espagnole qui a du caractère. Fondée en 2012 par Carla et Berna Toral, la maison conjugue tendances et savoir-faire artisanal pour créer des souliers à la personnalité affirmée, entre esprit rock et allure bohème chic.",
      "Héritière d'une longue expérience familiale dans l'univers de la chaussure, la marque dessine bottes, mocassins, mules, ballerines et sandales fabriqués en Espagne à partir de cuirs italiens. Chaque modèle joue des matières, des couleurs et des textures pour offrir des pièces uniques, à la fois sophistiquées et faciles à vivre. Engagée auprès du Leather Working Group, Toral inscrit sa production dans une démarche plus responsable.",
      "Chez Honoris Cosa, Toral habille le pied des femmes qui aiment les chaussures qui ont du tempérament — des modèles que l'on remarque, qui s'accordent à une humeur autant qu'à une tenue, et qui traversent les saisons sans se démoder.",
    ],
    images: [
      brandAsset("toral", "aesthetic-1"),
      brandAsset("toral", "aesthetic-2"),
    ],
  },

  bowery: {
    paragraphs: [
      "Bowery s'inspire de l'énergie créative et urbaine de New York — et plus précisément de cette rue mythique de downtown Manhattan qui a vu naître tant d'artistes et de contre-cultures. La marque traduit cet héritage en une mode à la fois décontractée et sophistiquée, qui allie l'esprit de la rue à une exigence qualitative européenne.",
      "Les pièces Bowery sont taillées pour une femme active, qui jongle entre vie professionnelle et personnelle avec style et efficacité. Des coupes nettes, des matières premium soigneusement sélectionnées et une palette intemporelle composent une garde-robe urbaine sans compromis — fonctionnelle, élégante, toujours juste.",
      "En boutique chez Honoris Cosa, Bowery représente la mode du mouvement — des pièces que l'on porte de la réunion du matin au dîner du soir, sans jamais avoir l'impression de faire des concessions sur le style.",
    ],
    images: [
      brandAsset("bowery", "aesthetic-1"),
      brandAsset("bowery", "aesthetic-2"),
    ],
  },

  "la-nouvelle": {
    paragraphs: [
      "La Nouvelle est une marque de mode féminine contemporaine qui place la liberté au cœur de chaque collection. Ses pièces s'adressent à une femme moderne et assumée, qui cherche dans ses vêtements un reflet fidèle de sa personnalité — forte, nuancée, en mouvement permanent.",
      "La marque se distingue par une approche créative singulière qui mêle savoir-faire artisanal et vision résolument contemporaine. Chaque collection propose des pièces fortes, construites dans des matières choisies avec soin, qui invitent la femme qui les porte à se réinventer sans jamais se trahir.",
      "Chez Honoris Cosa, La Nouvelle incarne cette mode de l'affirmation — des pièces portées avec conviction, qui prennent toute leur dimension sur la femme qui les a choisies parce qu'elles lui ressemblent.",
    ],
    images: [
      brandAsset("la-nouvelle", "aesthetic-1"),
      brandAsset("la-nouvelle", "aesthetic-2"),
    ],
  },

  autry: {
    paragraphs: [
      "Autry, c'est l'esprit du sport américain des années 80 réinterprété avec un savoir-faire européen. Née à Dallas en 1982 et relancée en Italie en 2019, la marque a fait de la sneaker rétro un classique intemporel, reconnaissable à son drapeau américain et à sa semelle contrastée.",
      "À l'origine plébiscitée dans le tennis — sa Medalist fut élue meilleure chaussure en 1985 — Autry renaît sous l'impulsion de passionnés qui réunissent nostalgie nord-américaine et exigence italienne. Les modèles, en cuir nubuck et matières premium, cultivent des lignes épurées et un esprit vintage assumé qui s'accorde à toutes les silhouettes.",
      "En boutique chez Honoris Cosa, Autry incarne la sneaker que l'on porte au quotidien — confortable, élégante et facile à associer, elle apporte une touche décontractée et solaire à une garde-robe féminine contemporaine.",
    ],
    images: [
      brandAsset("autry", "aesthetic-1"),
      brandAsset("autry", "aesthetic-2"),
    ],
  },

  "inoui-editions": {
    paragraphs: [
      "Chez Inouï Éditions, le foulard n'est jamais un simple accessoire : c'est un fragment d'histoire, un geste de style, un support d'expression. Depuis plus de quinze ans, la maison imagine des foulards illustrés où le dessin rencontre le textile.",
      "Les motifs — mondes imaginaires peuplés d'animaux, de paysages et de scènes libres — sont dessinés à la main par les artistes maison, dans le studio français de la marque, puis confiés à un atelier historique en Inde qui perpétue un savoir-faire textile ancestral. Soie, laine, coton ou cachemire : chaque matière révèle la lumière et les nuances du motif à sa façon.",
      "Chez Honoris Cosa, Inouï Éditions apporte cette touche d'allure qui transforme une tenue — un carré noué au cou, glissé dans les cheveux ou à l'anse d'un sac, qui raconte à chaque fois un regard sensible sur le monde.",
    ],
    images: [
      brandAsset("inoui-editions", "aesthetic-1"),
      brandAsset("inoui-editions", "aesthetic-2"),
    ],
  },

  "knit-ted": {
    paragraphs: [
      "Knit-ted fait de la maille un art de l'élégance facile. La marque crée des vêtements pensés pour envelopper la femme, sublimer sa silhouette et révéler sa beauté naturelle — pour avancer dans sa journée avec assurance et légèreté.",
      "Spécialiste de la maille, Knit-ted travaille des matières douces et des coupes fluides qui se drapent autour du corps sans jamais le contraindre. Les tons naturels, les textures légères et les silhouettes décontractées composent un vestiaire à la fois confortable et raffiné, fait pour les jours qui demandent du bien-être avec une pointe d'élégance.",
      "En boutique chez Honoris Cosa, Knit-ted habille les femmes qui aiment se sentir bien dans leurs vêtements — des pièces en maille faciles à vivre, féminines et chaleureuses, que l'on enfile et que l'on ne quitte plus.",
    ],
    images: [
      brandAsset("knit-ted", "aesthetic-1"),
      brandAsset("knit-ted", "aesthetic-2"),
    ],
  },

  "les-petits-foulards": {
    paragraphs: [
      "Les Petits Foulards, c'est une invitation au voyage. Imaginés par Agathe et Lorenzo, leurs foulards et paréos en soie évoquent chacun une destination — Zanzibar, Biarritz, Marseille, New York — pour transformer un accessoire en fenêtre vers l'ailleurs.",
      "Chaque motif est dessiné pour capturer l'essence d'un lieu, puis confectionné avec soin en Italie, dans une entreprise familiale au savoir-faire transmis de génération en génération. Les étoffes, en soie 100 % certifiée Oeko-Tex, sont choisies dans le respect de l'environnement pour offrir une qualité durable et un luxe accessible.",
      "Chez Honoris Cosa, Les Petits Foulards ajoutent une note d'évasion et de couleur — un carré à nouer autour du cou, dans les cheveux ou au poignet, qui suit l'humeur et accompagne toutes les saisons.",
    ],
    images: [
      brandAsset("les-petits-foulards", "aesthetic-1"),
      brandAsset("les-petits-foulards", "aesthetic-2"),
    ],
  },

  "post-co": {
    paragraphs: [
      "Chez Post & Co, on ne plaisante pas avec le cuir. Née en Toscane, région d'excellence pour l'artisanat du cuir et de la chaussure, la maison crée ceintures, sacs et souliers façonnés à la main avec des cuirs vieillis et patinés.",
      "Chaque collection s'inspire de l'environnement toscan : les couleurs des champs d'été et des récoltes d'automne, les portes anciennes usées par le temps, les détails qui relient le tout. Du cuir de vachette pleine fleur aux peaux les plus précieuses, les artisans appliquent des techniques de finition hautement qualifiées pour rendre chaque pièce luxueusement unique.",
      "En boutique chez Honoris Cosa, Post & Co incarne l'accessoire qui dit le goût sans le crier — une ceinture, un sac, une paire de souliers en cuir d'exception, pensés pour durer et se patiner avec le temps.",
    ],
    images: [
      brandAsset("post-co", "aesthetic-1"),
      brandAsset("post-co", "aesthetic-2"),
    ],
  },

  "mon-dada": {
    paragraphs: [
      "Mon Dada n'est pas une simple marque de bougies : c'est une philosophie de design sensoriel. Depuis 2019, cette maison belge coule à la main des bougies parfumées dans des contenants en béton minimalistes, fruit d'une obsession pour l'artisanat et le beau geste.",
      "Entièrement fabriquées en Belgique par une équipe de femmes, les bougies Mon Dada associent des cires mélangées de haute qualité aux parfums les plus rares de Grasse. Le béton, coulé puis façonné à l'atelier, devient un objet de décoration que l'on garde et réutilise — une démarche durable où rien n'est laissé au hasard, du design à la fragrance.",
      "Chez Honoris Cosa, Mon Dada prolonge l'art de vivre au-delà du vestiaire — des bougies et diffuseurs au design épuré qui parfument la maison et trouvent naturellement leur place dans un intérieur soigné.",
    ],
    images: [
      brandAsset("mon-dada", "aesthetic-1"),
      brandAsset("mon-dada", "aesthetic-2"),
    ],
  },

  "shan-shan": {
    paragraphs: [
      "SHANSHAN marie la beauté du charme ancien à l'élégance intemporelle de Paris. Née dans la capitale avec beaucoup d'amour, la marque crée des bijoux en or mat dont la finition singulière donne à chaque pièce une allure vintage et précieuse.",
      "Façonnés à la main à partir de laiton et d'or recyclé 18 carats, les bijoux SHANSHAN s'ornent de perles d'eau douce et de pierres semi-précieuses. La finition or mat emblématique, mate et lumineuse à la fois, signe des créations délicates qui racontent chacune leur propre histoire.",
      "Chez Honoris Cosa, Shan Shan apporte la touche de bijou qui fait la différence — boucles d'oreilles, colliers et pièces à porter seules ou à accumuler, qui se glissent avec grâce dans une garde-robe féminine.",
    ],
    images: [
      brandAsset("shan-shan", "aesthetic-1"),
      brandAsset("shan-shan", "aesthetic-2"),
    ],
  },

  "essentiel-antwerp": {
    paragraphs: [
      "Essentiel Antwerp a vu le jour en 1999 avec une collection de t-shirts fière et bruyante, en guise d'antidote au paysage monochrome de la mode. La marque belge est devenue une référence du prêt-à-porter féminin, célèbre pour ses imprimés signature et ses associations de couleurs audacieuses.",
      "Fondée par Esfan Eghtessadi, fils de styliste élevé au milieu des tissus, et Inge Onsea, grande voyageuse revenue avec un amour des couleurs et des paillettes, la maison cultive un esprit joyeux et intrépide. Robes graphiques, mailles désirables, denim et vêtements d'extérieur : chaque collection mêle exubérance et élégance, avec une attention constante portée à la coupe et à la qualité.",
      "En boutique chez Honoris Cosa, Essentiel Antwerp habille les femmes libres et solaires qui aiment jouer avec la couleur et l'imprimé — des pièces vibrantes et contemporaines qui se portent avec autant d'aisance au quotidien qu'en soirée.",
    ],
    images: [
      brandAsset("essentiel-antwerp", "aesthetic-1"),
      brandAsset("essentiel-antwerp", "aesthetic-2"),
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
  toral: "Toral",
  bowery: "Bowery",
  "la-nouvelle": "La Nouvelle",
  autry: "Autry",
  "inoui-editions": "Inouï Éditions",
  "knit-ted": "Knit-ted",
  "les-petits-foulards": "Les Petits Foulards",
  "post-co": "Post & Co",
  "mon-dada": "Mon Dada",
  "shan-shan": "Shan Shan",
  "essentiel-antwerp": "Essentiel Antwerp",
};

/** Ordre d'affichage dans la grille — alphabétique par label. */
export const BRAND_ORDER: BrandSlug[] = [
  "5-octobre",
  "absolut-cachemere",
  "autry",
  "bella-dahl",
  "bella-jones",
  "blonde-8",
  "bowery",
  "claris-virot",
  "ct-plage",
  "essentiel-antwerp",
  "faliero-sarti",
  "forte-forte",
  "ibeliv",
  "inoui-editions",
  "jerome-dreyfuss",
  "knit-ted",
  "la-bruket",
  "la-nouvelle",
  "laid-back",
  "les-petits-foulards",
  "lou-andrea",
  "majestic-filatures",
  "masons",
  "momoni",
  "mon-dada",
  "montagut",
  "newtone",
  "philippe-model",
  "post-co",
  "roberto-collina",
  "rrd",
  "seven",
  "shan-shan",
  "soeur",
  "toral",
  "vanessa-bruno",
];
