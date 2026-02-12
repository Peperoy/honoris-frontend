import React, { useState, useRef } from 'react';
import { ChevronRight, X, ChevronDown } from 'lucide-react';
import { motion, useInView } from 'motion/react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
}

interface BrandLongDescription {
  paragraphs: string[];
  images?: string[]; // affichées entre les paragraphes (après le 1er, après le 2e, etc.)
}

interface Brand {
  id: string;
  name: string;
  description: string;
  image: string;
  origin: string;
  products: Product[];
  longDescription?: BrandLongDescription;
}

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1080&q=80';
const SHOP_ADDRESS_URL = 'https://www.google.com/maps/search/?api=1&query=44+avenue+amsterdam+59300+valenciennes';

// Images partagées pour les descriptions (entre les paragraphes)
const DESC_IMG = 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1080&q=80';
const DESC_IMG2 = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1080&q=80';

const longDescriptions: Record<string, BrandLongDescription> = {
  'talking-wall': {
    paragraphs: [
      "Dans chaque coin, dans chaque rue à travers le monde, que ce soit sur un mur, sur le côté d'une cabane de bois.. Nous voyons les messages. Qu'ils soient simplement beaux, drôles, interessants, ou même qui valent la peine d'être vus.",
      "Ces messages qui sont créés par envie ou par simple anarchie, ces messages devant lesquels nous passons tous les jours. Une combinaison d'esthétisme, d'histoire, d'origine, de coincidence qui nous inspire. Les designs sont dénichés par des esprits curieux et des vagabond qui parcourent le monde.",
      "Les collections célèbrent toutes les personnes qui sont allées sur les routes pour capturer ces beaux graphiques et leurs petites histoires. Elles célèbrent également ces gens aux quatre coins du monde qui ouvrent leurs coeurs pour partager leurs histoires. Les écharpes Talking Walls sont fabriquées dans un atelier de textile indien avec des stylistes qui ont établi un partenariat solide avec la marque au travers des années. A chaque saison, leur expertise des couleurs et des matériaux permet de créer des pièces de la meilleure qualité possible.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  'roberto-collina': {
    paragraphs: [
      "Plus de 60 ans d'excellence Made in Italy… Roberto Collina crée et fabrique toutes ses collections à base de mailles depuis plusieurs décennies maintenant. Aujourd'hui, plus que jamais, il célèbre la qualité d'un vêtement réussi. Roberto met l'accent sur le processus de production, qui a écrit et continue d'écrire une partie importante de l'histoire du prêt à porter italien.",
      "De Bologne au Japon, une marque familiale mondiale qui continue de marquer l'histoire du prêt à porter italien… Cette marque qui a débuté avec un petit atelier de tricotage est aujourd'hui renommée mondialement pour la qualité de ses pulls. Avec un véritable équilibre entre tradition et modernité, Roberto Collina résume son caractère au travers de ses collections. La maison suit une beauté sophistiquée et sensible lors de l'élaboration de ses produits, qui se traduit par une position élégante, élevant la simplicité à un état de pureté. Leur maître mot : réduire le luxe à l'essentiel. Le coeur de cette entreprise se trouve dans un héritage de fabrication et un savoir faire historique du design sur lequel se greffe un sens innovant de l'esthétique, qui met l'accent sur la qualité de la production. Derrière chaque vêtement se cache une longue période de recherche et de réalisation, de la production à l'élaboration des collections.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  'siyu': {
    paragraphs: [
      "Née il y a dix ans à Valence en Espagne, la marque est liée de près au côté le plus artisanal du design. Loin des tendances passagères, SIYU vous propose des vêtements intemporels pour parfaire vos dressings.",
      "Des vêtements à la coupe nette et à la féminité subtile.. Les pièces sont toutes confortables et fabriquées avec le plus grand soin, dans des matériaux naturels. Chez SIYU, chaque motif est unique : ils sont fabriqués à la main en utilisant des couleurs harmonisées ou contrastées… Tant de choix au service d'une seule cause : faire en sorte que la femme qui porte ces vêtements se sente belle.",
    ],
    images: [DESC_IMG],
  },
  'blonde-8': {
    paragraphs: [
      "Connue pour des vêtements d'extérieur de haute qualité, et à la mode, Blonde n°8 propose sa pièce phare : la parka. Grâce à l'engouement engendré pour ces dernières, la marque est rapidement devenue incontournable et elle s'est imposée dans le monde de la mode.",
      "L'accent est mis sur le développement des styles à haute valeur. Avec une attention particulière pour les détails : une doublure intérieure spéciale, des fermetures à glissière de haute qualité ou des coutures contrastées qui rendent les vêtements spéciaux.",
      "Blonde n°8 accorde une grande importance aux techniques de fabrication traditionnelles et à la production équitable. La durabilité et l'environnement jouent un rôle majeur dans la production, le transport et l'utilisation des matériaux.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  'rrd': {
    paragraphs: [
      "RRD, ou Roberto Ricci Designs, commence à se faire connaître dans l'univers du kitesurf. La marque propose alors différents équipements pour la discipline et devient vite une référence dans le monde entier. Après s'être faite connaitre, ils décident de créer une ligne de vêtements en 1995. La marque s'élargit rapidement, et propose désormais toutes sortes de pièces ne respectant qu'un seul mot d'ordre : la qualité made in Italy.",
      "Roberto Ricci Designs ouvre son premier magasin mono marques à Forte dei Marmi. Plus tard, le showroom est inauguré au coeur du quartier de la mode et du design à Milan. La surface de 500 mètres carrés accueille de nombreux événements pour présenter les collections au monde entier. Un second showroom ouvre à Rome pour présenter le savoir faire italien au différents acteurs de la mode et du design à travers l'Italie.",
    ],
    images: [DESC_IMG],
  },
  'la-bruket': {
    paragraphs: [
      "Fabriqués sur la côte ouest de Suède, les produits L:A BRUKET sont fabriqués avec des produits naturels et biologiques. La marque cherche son inspiration dans la nature qui l'entoure. Le Soleil, le vent, les rochers, la glace, le sable, la boue, l'eau… Les éléments affectent l'équilibre subtil de notre corps, mais peuvent aussi le rétablir.",
      "L:A BRUKET a vu le jour dans la petite ville de Varberg, une station thermale bicentenaire. Leur héritage fort leur permet d'apporter une expertise dans la confections de leurs soins. Pour la marque, il est inconcevable de faire des concessions sur la pureté des ingrédients.",
      "Tous les produits sont conçus pour nourrir, protéger et préserver l'épiderme sur le long terme. Ils sont travaillés avec un état d'esprit moderne appliqué à des techniques ancestrales de thérapie de la mer. Ce ne sont pas des solutions éphémères mais des formules destinées à une routine quotidienne de soins de la peau. L:A BRUKET propose une routine de soin complète pour le corps, le visage, les cheveux… Tous les produits sont complémentaires et élaborés avec minutie pour offrir les meilleures vertus possibles.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  'ugg': {
    paragraphs: [
      "La maison UGG est créée en 1978 en Californie par un jeune surfeur originaire d'Australie. Il est passionné de la peau de mouton, très utilisée dans son pays natal. Appréciant cette manière, il est alors convaincu que le monde entier partagerait un jour cette passion avec lui. Très vite, la marque devient le symbole de la culture décontractée de la Californie du Sud.",
      "Au début des années 2000, UGG se lance dans la confection d'une gamme Haute Couture et entre dans le monde du luxe. Poursuivant son ascension, la marque ouvre en 2006 une boutique dans la capitale mondiale de la mode : le quartier de Soho à New York. Souhaitant se faire une place toujours plus grande dans l'univers de la Haute Couture, la marque UGG a réalisé plusieurs collections capsules avec les marques les plus prestigieuses : Jimmy Choo, Swarovski…",
      "Les UGG sont conçues avec des techniques très précises, utilisant des méthodes généralement utilisées pour les chaussures de course. De cette manière, les chaussures offrent une expérience souple et légère qui favorise le mouvement naturel du pied. Les matériaux utilisés garantissent une robustesse et une douceur inégalées.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  'philippe-model': {
    paragraphs: [
      "Âgé d'à peine 20 ans, Philippe Model crée pour le grand couturier Claude Montana, ainsi que pour Jean Paul Gaultier, Issey Miyake et Thierry Mugler. Fort d'une grande maitrise et d'un excellent savoir-faire, il est vite devenu le chapelier des stars et des comtesses. Quelques années plus tard, en 1981, Philippe Model décide de fonder sa propre marque.",
      "Les créations de Philippe Model représentent le mariage parfait entre la créativité et l'artisanat. Ses pièces dévoilent un héritage parisien mêlé à un savoir-faire italien, qui lui ont valu le prix de meilleur artisan de France en 1981. Au début des années 80, il crée sa toute première chaussure iconique : l'élastique. Devenu le symbole d'une féminité moderne, cette chaussure anticipe le concept révolutionnaire du confort des futures sneakers.",
      "Quelques années plus tard, le succès de Philippe Model atteint ses plus vastes dimensions. Certaines de ses créations sont intégrées dans les collections du Metropolitan Museum de New York, de la National Gallery of Australia et d'autres musées importants. Philippe Model, profondément passionné par l'art, est toujours à la recherche de nouveaux défis. Il s'exprime sur de nombreux supports, qu'il s'agisse d'accessoires ou de murs, et se renouvelle au travers d'impressions et de décorations uniques et incomparables.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  'ibeliv': {
    paragraphs: [
      "IBELIV est une marque engagée créée par Ramanandraibe Liva, surnommé Liv. Originaire de Madagascar, Liv arrive en France à 16 ans pour poursuive ses études d'expert comptable. Il y découvre l'héritage d'une élégance raffinée intemporelle, les codes du luxe et du design qui le passionnent depuis l'enfance.",
      "Une fois son diplôme décroché, Liv souhaite vivre pleinement de ses passions et décide de créer sa marque IBELIV. Il est convaincu que notre consommation peut être plus responsable humainement et écologiquement. Que nous pouvons veiller à produire en respectant l'Homme et la Nature, tout en proposant des produits parfaitement adaptés à l'ère du temps. Ce sont sur ces valeurs que s'appuie IBELIV.",
      "L'histoire commence à Madagascar où la mère de Liv cherche à promouvoir l'ancien savoir-faire autour des créations en raphia. Souhaitant mettre en avant cet art de chez lui, Liv crée de nombreux accessoires qui allient artisanat et chic. La marque travaille avec des artisans qui allient maitrise et savoir-faire autour du raphia. La production est réalisée en quantité raisonnée comme facteur du maintien de cet état d'esprit. Face à une époque où tout s'accélère, IBELIV prend le temps nécessaire à la réalisation de produits empreints d'une âme et résultant d'un véritable savoir-faire.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  'yves-salomon': {
    paragraphs: [
      "Passionné par la matière, Yves Salomon a reprit les rênes de la maison familiale en 1972. Il a véritablement renouvelé le travail des peaux et leur vision dans le milieu de la mode et du luxe. Alaïa, Jean-Louis Scherrer, Nina Ricci et Thierry Mugler sont inconditionnels des magnifiques manteaux en zibeline et en vison destinés aux femmes aisées.",
      "Il crée en 1980 la Maison Yves Salomon qui, de par son expertise, a révolutionné le domaine de la fourrure. La fourrure est déclinée chaque saison. Elle est légère, tendance et associée à d'autres matières. La Maison Yves Salomon réinvente la fourrure depuis près d'un siècle.",
      "Explorant de nouveaux horizons dans le domaine de la matière, la Maison Yves Salomon exploite son savoir-faire ancestral et enrichit son vocabulaire au rythme des saisons. Forte d'un savoir-faire de 100 ans, la Maison Yves Salomon fait preuve d'un fort souci de la cause animale. La qualité, le traitement éthique des animaux et le caractère écologiquement compatible de leur production sont devenues les préoccupations majeures des clientes de la Maison.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  'bella-dahl': {
    paragraphs: [
      "Bella Dahl est une marque de mode féminine qui propose des vêtements doux et élégants pour un style de vie moderne. Les collections allient confort et esthétique contemporaine, avec des pièces soignées pour le quotidien.",
      "La marque met en avant des matières agréables et des coupes contemporaines, pour une garde-robe chic et décontractée. Retrouvez les créations Bella Dahl en boutique.",
    ],
    images: [DESC_IMG],
  },
  'montagut': {
    paragraphs: [
      "La Maison Montagut est une marque de vêtements en maille créée en 1880. Aujourd'hui, l'entreprise familiale est gérée par la sixième génération : Nicolas Gros et Marine Lozet-Gros. Nicolas et Marine ajoutent leur touche de modernité et d'émotion à cet héritage familial. Ils souhaitent renouveler le spécialiste de la maille.",
      "A son commencement, la Maison Montagut était une simple usine de soie près de Saint-Sauveur-de-Montagut, en Ardèche. Cette usine s'est réorientée vers le tricotage de maille après la guerre, à commencer par des pulls et des polos. La Maison Montagut est, depuis 1880, experte du tricot. Elle perpétue de générations en générations son savoir-faire ancestral.",
      "Aujourd'hui, la Maison Montagut se renouvelle et se revendique expert en maille. En élargissant son offre autour de nombreux produits, elle montre son savoir-faire et sa maitrise du tricotage. La marque Pôles, petite nouvelle de la Maison, propose des pulls pour les femmes définies par un esprit de liberté et de féminité. Destinée aux femmes avec une fibre artistique et un certain art du voyage, Pôles habille les femmes lubies et voyageuses, audacieuses, créatives, qui affectionnent les produits aux belles matières et aux coupes déstructurées.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  '5-octobre': {
    paragraphs: [
      "La passion de Sophie Pfeffer pour les bijoux, les gemmes et les accessoires remonte à l'enfance. Elle collectionne les perles vintage et les parures anciennes. En 2004, Sophie réalise son rêve et lance sa première collection. Ses bijoux sont conçus avec un large faisceau d'influences diverses l'ayant bercée depuis sa jeunesse.",
      "Les collections 5 Octobre reposent sur l'association de la matière brute et raffinée, le tout concentré autour des pièces qui représentent la pièce centrale des différentes compositions. L'assemblage est minimaliste. Chaque bijou est conçu comme un grigri, une sorte de talisman des temps modernes, destiné à protéger son propriétaire.",
      "Les bijoux sont fabriqués de façon artisanale dans les ateliers de Sophie, où l'on travaille l'or fin, l'argent et le vermeil, associés aux diamants et pierres fines. Chaque bijou a fait l'objet d'un travail manuel extrêmement minutieux. Les pièces sont composées de pierres fines, taillées ou brutes, ce qui donne à chacune son caractère si particulier.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  'barbara-bui': {
    paragraphs: [
      "Barbara Bui est une marque française de prêt-à-porter de luxe féminin créée en 1987. Derrière cette maison se cache une femme, Barbara, née d'une mère française et d'un père vietnamien. Barbara aime mettre la mixité de son héritage en avant au travers de ses créations et s'ouvre sans cesse à de nouvelles cultures.",
      "Connue pour son univers rock, Barbara transpose un style masculin en mode féminine. Mélange d'élégance et de sensualité, les pièces de la maison Barbara Bui sont conçues avec du cuir, du metal et de la soie. Barbara Bui s'oriente vers des pièces à son image, où chaque détail compte. Un réel soucis des finitions, une exigence de la qualité et de la coupe… Les collections proposées sont finement réfléchies et travaillées.",
      "Une femme peut être volontaire sans être agressive, forte et fragile, féminine et masculine à la fois.. Les pièces signées Barbara Bui sont destinées à ces femmes atypiques d'aujourd'hui. Les vêtements Barbara Bui jouent des paradoxes, et favorisent le choc des matières. L'irrévérence du cuir ou du vinyle alliée à la douceur de la soie ou d'une Georgette..",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  'forte-forte': {
    paragraphs: [
      "L'histoire de Forte Forte débute en 2002 par une petite collection de t-shirts peaufinée à la main. Un frère et soeur, héritiers d'un savoir-faire familial, qui imaginent des pièces dans leurs chambres d'enfants, face au jardin où ils ont grandi.",
      "Ils gardent un grand souci du détail qui caractérise la production artisanale malgré l'échelle industrielle de production. Forte Forte cultive le rapport au temps, et souhaite que son entreprise murisse lentement. Cette réflexion pondérée les amène à travailler sur leurs pièces de façon plus personnel, loin du monde très évolutif de la mode, pour créer des pièces intemporelles.",
      "Forte Forte porte des valeurs pures, essentielles, sincères, pleines d'émotions. Des pièces intemporelles qui révèlent une liberté sans limites, où le passé et le présent fusionnent harmonieusement leurs âmes. La collection Forte Forte évolue au fil des années. Elle offre aujourd'hui une proposition complète qui met en avant la matière tout en respectant son caractère, la couleur et les formes pures, afin d'épouser le corps sans le contraindre.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  'vanessa-bruno': {
    paragraphs: [
      "Parisienne par excellence, Vanessa Bruno est élevée par une mère Danoise et un père Français. En 1996, elle crée une marque à son nom et cherche à transgresser le quotidien pour donner à chaque femme une garde-robe moderne. Elle ouvre sa première boutique rive gauche en 1998 et lance la première année son célèbre sac cabas.",
      "Avec quelques paillettes sur une toile de coton, elle revisite un objet du quotidien pour le rendre iconique, jusqu'à devenir un incontournable international. Le sac cabas de Vanessa Bruno est à la fois chic et pratique. Il se décline à l'infini, en toile de lin, en raphia ou encore en cuir velours…",
      "Influencée par les deux univers de ses parents, elle imagine des collections où ces deux cultures se croisent et s'entremêlent. Elle poursuit l'idéal d'une femme indépendante et urbaine, ancrée dans son époque. Aujourd'hui, on dit qu'un sac cabas Vanessa Bruno se vend toutes les 30 minutes à travers le monde.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  'faliero-sarti': {
    paragraphs: [
      "L'histoire de Faliero Sarti commence en 1948, lorsque Faliero crée sa propre filature près de Florence, en Italie. Toute la famille s'est très vite mise à suivre les traces de leur ainé dans cette usine. D'abord reprise par le fils de Faliero, la filature de tissus italiens est très vite devenue le fournisseur de grandes maisons de luxe telles que Chanel, Dior, Vivienne Westwood ou Ann Deleumeester.",
      "En 1991, la petite fille de Faliero, Monica, revient avec de nouvelles idées en tête. Après avoir passé trois ans à étudier la mode à New York, elle décide de rejoindre l'entreprise familiale. Elle s'intéresse de près à la division d'accessoire de la maison. Pour dépoussiérer cet accessoire qu'était le foulard, elle décide de se fier à son instinct : retirer l'élément le plus traditionnel, les franges. Elle commence à faire bouillir, brûler et trouer le cachemire. Elle lance une vraie révolution dans le monde de la mode.",
      "Monica s'inspire de la vie quotidienne pour donner vie à ses réalisations. Les écharpes créées par la maison Faliero Sarti sont pensées de sorte que, lorsque quelqu'un en porte une, il trouve une certaine douceur. Les écharpes sont, d'après Monica Sarti, la « lingerie du col » car elles touchent directement la peau. Aujourd'hui, Monica Sarti est la directrice artistique de la maison Faliero Sarti et continue d'impressionner avec ses créations toujours plus originales et qualitatives.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  'jerome-dreyfuss': {
    paragraphs: [
      "L'histoire de Jérôme Dreyfuss commence en 1998, lorsqu'il lance sa collection de prêt à porter féminin qu'il nomme « Couture à Porter ». Il est qualifié « d'Enfant terrible de la Mode » par la presse. Cette année là, il gagne le prix de l'ANDAM et crée des costumes pour l'album Invincible de Michael Jackson.",
      "En 2002, Jérôme Dreyfuss lance sa première collection d'accessoires : « Roots de luxe ». Instantanément acclamés par la presse, ces sacs ont immédiatement trouvé le chemin du coeur des jeunes parisiennes. Souples et ultra légers, discrets mais toujours élégants… Ces pièces sont vite devenues une référence pour les femmes en quête d'accessoires raffinés aux détails astucieux.",
      "Les sacs Jérôme Dreyfuss sont reconnaissables grâce à leur fabrication artisanale. Un travail aux formes généreuses et aux détails innovants. En 2004, Jérôme Dreyfuss adopte un côté plus éco-responsable. Il milite pour une planète plus propre et crée le label agricouture. Il intègre des règles de développement durable à la fabrication de ses produits : cuirs végétaux, matières premières achetées auprès de fournisseurs européens exclusivement, consommables recyclables…",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  'masons': {
    paragraphs: [
      "Mason's est une maison de mode italienne ayant vu le jour dans la région de la Ligurie, en bordure de mer. Créée en 1974 par Giorgio Martini, la marque souhaite développer un tout nouveau style en associant les codes de l'uniforme militaire et les lignes souples de l'élégance à l'italienne.",
      "La conception des vêtements est également inspirée des grandes figures emblématiques. Le Dalaï-Lama, Kennedy, Che Guevara ou encore Indira Gandhi.. Tous ont inspiré les collections de la maison Mason's. Une marque qui allie sobriété et avant-gardisme tout en gardant une part de tradition. Mason's véhicule de nombreuses valeurs comme la simplicité, la modernité, et le souci du détail.",
      "Aujourd'hui, Mason's élève au rang des marques haut-de-gamme à l'italienne. Mason's promet des tissus résistants et qualitatifs. Des vêtements authentiques et travaillés débouchant sur un style chic et pratique qui reflète la mode italienne moderne.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  'seven': {
    paragraphs: [
      "Seven est une marque de denim premium conçue en Californie. Reconnue pour la qualité de ses jeans et de ses pièces en jean, elle propose des vêtements pour femmes et hommes, avec un souci du détail et un style californien.",
      "La marque s'est imposée dans l'univers du prêt-à-porter haut de gamme avec des coupes iconiques et des finitions soignées. Retrouvez les créations Seven en boutique.",
    ],
    images: [DESC_IMG],
  },
  'rails': {
    paragraphs: [
      "Fondée à Los Angeles en 2009 avec un seul chapeau noir, Rails est rapidement devenu une marque de style de vie mondiale. Le fondateur et directeur de création, Jeff Abrams, a lancé la marque Rails sans connaissances réelles de la mode. Il possède une sensibilité de conception innée et un esprit entrepreneurial l'ayant poussé à créer sa propre marque de prêt-à-porter.",
      "Avec Rails, Abrams a créé une nouvelle catégorie de chemises contemporaines en développant une fabrication unique en cachemire. Le concept d'une texture luxurieuse est devenu la caractéristique déterminante de la marque. Les collections proposées par Rails correspondent à un style de vie contemporain. Elles comportent des hauts tissés, des mailles en jersey, des chandails, des robes et des vêtements d'extérieurs.",
      "En alliant le style californien à une sensibilité mondiale élevée, la marque a su fidéliser ses clients, influenceurs et célébrités. Gisele Bundchen, Beyonce, Kate Moss, Kendall Jenner, Alessandra Ambrosio, Leonardo di Caprio, Matthew McConaughey et d'autres sont de grands adeptes de cette marque.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
  'majestic-filatures': {
    paragraphs: [
      "En 1989, Franck Ellia et Roland Chelly décident de lancer une marque autour d'une pièce basique : le t-shirt. Ils souhaitent lui donner des allures haut-de-gamme pour replacer le t-shirt au coeur de nos garde-robes et nous offrir une silhouette chic.",
      "Depuis plus de 30 ans, Majestic Filatures élabore des t-shirts de luxe dans ses ateliers parisiens. De fabrication exclusivement européenne, cette pièce basique est traitée comme un vêtement noble. Les stylistes, modélistes, maîtres tailleurs et couturières montent des prototypes faits sur mesure. Un savoir-faire « fait main » unique à la manière des grandes maisons de couture.",
      "La maison Majestic Filatures apporte un soin particulier à la qualité de fabrication de ses produits. Des matières résistantes, luxueuses et douces à porter.. Majestic Filatures est un précurseur en termes de développement des meilleurs fils dans les plus belles matières. Ils prônent le luxe durable. Ils ont notamment lancé leur nouvelle gamme de Pulls en « Eco-cachemire » pour leur collection Tricot, un cachemire éco-responsable produit en Italie.",
    ],
    images: [DESC_IMG, DESC_IMG2],
  },
};

const brands: Brand[] = [
  { id: 'talking-wall', name: 'talking wall', description: "Dans chaque coin, dans chaque rue à travers le monde, nous voyons les messages.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['talking-wall'] },
  { id: 'roberto-collina', name: 'Roberto Collina', description: "Plus de 60 ans d'excellence Made in Italy… Roberto Collina crée et fabrique toutes ses collections à base de mailles.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['roberto-collina'] },
  { id: 'siyu', name: 'SIYU', description: "Née il y a dix ans à Valence en Espagne, la marque est liée de près au côté artisanal du design.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['siyu'] },
  { id: 'blonde-8', name: 'Blonde n°8', description: "Connue pour des vêtements d'extérieur de haute qualité, Blonde n°8 propose sa pièce phare : la parka.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['blonde-8'] },
  { id: 'rrd', name: 'RRD', description: "RRD, ou Roberto Ricci Designs, une référence dans le monde du kitesurf puis du prêt-à-porter made in Italy.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['rrd'] },
  { id: 'la-bruket', name: 'L:A BRUKET', description: "Fabriqués sur la côte ouest de Suède, les produits L:A BRUKET sont fabriqués avec des produits naturels et biologiques.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['la-bruket'] },
  { id: 'ugg', name: 'UGG', description: "La maison UGG est créée en 1978 en Californie, symbole de la culture décontractée californienne.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['ugg'] },
  { id: 'philippe-model', name: 'Philippe Model', description: "Philippe Model crée pour Claude Montana, Jean Paul Gaultier, Issey Miyake. En 1981, il fonde sa propre marque.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['philippe-model'] },
  { id: 'ibeliv', name: 'ibeliv', description: "IBELIV est une marque engagée créée par Liv, alliant artisanat malgache et chic parisien.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['ibeliv'] },
  { id: 'yves-salomon', name: 'Yves Salomon', description: "Passionné par la matière, Yves Salomon a repris les rênes de la maison familiale en 1972.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['yves-salomon'] },
  { id: 'bella-dahl', name: 'Bella Dahl', description: "Bella Dahl propose des vêtements doux et élégants pour un style de vie moderne.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['bella-dahl'] },
  { id: 'montagut', name: 'Montagut', description: "La Maison Montagut est une marque de vêtements en maille créée en 1880.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['montagut'] },
  { id: '5-octobre', name: '5 Octobre', description: "La passion de Sophie Pfeffer pour les bijoux et les gemmes. En 2004, elle lance sa première collection.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['5-octobre'] },
  { id: 'barbara-bui', name: 'Barbara Bui', description: "Barbara Bui est une marque française de prêt-à-porter de luxe féminin créée en 1987.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['barbara-bui'] },
  { id: 'forte-forte', name: 'Forte Forte', description: "L'histoire de Forte Forte débute en 2002 par une petite collection de t-shirts peaufinée à la main.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['forte-forte'] },
  { id: 'vanessa-bruno', name: 'Vanessa Bruno', description: "Parisienne par excellence, Vanessa Bruno crée en 1996 une marque à son nom.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['vanessa-bruno'] },
  { id: 'faliero-sarti', name: 'Faliero Sarti', description: "L'histoire de Faliero Sarti commence en 1948, lorsque Faliero crée sa propre filature près de Florence.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['faliero-sarti'] },
  { id: 'jerome-dreyfuss', name: 'Jérôme Dreyfuss', description: "Jérôme Dreyfuss lance en 1998 sa collection « Couture à Porter » et en 2002 « Roots de luxe ».", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['jerome-dreyfuss'] },
  { id: 'masons', name: "Mason's", description: "Mason's est une maison de mode italienne créée en 1974 dans la région de la Ligurie.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['masons'] },
  { id: 'seven', name: 'Seven', description: "Seven est une marque de denim premium conçue en Californie.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['seven'] },
  { id: 'rails', name: 'Rails', description: "Fondée à Los Angeles en 2009, Rails est rapidement devenu une marque de style de vie mondiale.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['rails'] },
  { id: 'majestic-filatures', name: 'Majestic Filatures', description: "En 1989, Franck Ellia et Roland Chelly lancent une marque autour d'une pièce basique : le t-shirt de luxe.", image: PLACEHOLDER_IMAGE, origin: 'Valenciennes', products: [], longDescription: longDescriptions['majestic-filatures'] },
];

const INITIAL_COUNT = 6;

export function BrandsSection() {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const visibleBrands = showAllBrands ? brands : brands.slice(0, INITIAL_COUNT);
  const hasMoreBrands = brands.length > INITIAL_COUNT;

  return (
    <section id="brands" className="py-24 md:py-32 bg-zinc-50" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            className="text-xs tracking-[0.3em] text-amber-600"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            NOS MARQUES
          </motion.span>
          <motion.div 
            className="h-px w-16 bg-amber-400 mt-4 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl tracking-[0.1em] font-light mt-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Nos Marques
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Une sélection exclusive des plus grandes maisons de couture internationales
          </motion.p>
        </div>

        {/* Brands Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visibleBrands.map((brand, index) => (
            <motion.button
              key={brand.id}
              onClick={() => setSelectedBrand(brand)}
              className="group relative bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <motion.img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl tracking-[0.2em] font-light mb-2">{brand.name}</h3>
                <div className="flex items-center gap-2 text-sm opacity-80">
                  <span>Découvrir</span>
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Voir plus */}
        {hasMoreBrands && !showAllBrands && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <button
              onClick={() => setShowAllBrands(true)}
              className="group px-8 py-4 border-2 border-amber-600 text-amber-600 tracking-[0.2em] text-sm font-light transition-all duration-300 hover:bg-amber-600 hover:text-white flex items-center gap-2"
            >
              Voir plus
              <ChevronDown size={18} className="transition-transform group-hover:translate-y-0.5" />
            </button>
          </motion.div>
        )}

        {/* Brand Detail Modal */}
        {selectedBrand && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80"
            onClick={() => setSelectedBrand(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Brand Header */}
              <div className="grid md:grid-cols-2">
                <div className="aspect-[3/4] md:aspect-auto">
                  <img
                    src={selectedBrand.image}
                    alt={selectedBrand.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="text-xs tracking-[0.3em] text-amber-600">MARQUE</span>
                    <div className="h-px w-16 bg-amber-400 mt-4"></div>
                  </div>
                  <h3 className="text-4xl tracking-[0.2em] font-light mb-4">
                    {selectedBrand.name}
                  </h3>
                  <p className="text-sm text-amber-600 tracking-[0.2em] mb-6">
                    {selectedBrand.origin}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    {selectedBrand.description}
                  </p>
                  <button
                    onClick={() => setSelectedBrand(null)}
                    className="px-8 py-3 border border-black tracking-[0.2em] text-sm transition-all duration-300 hover:bg-black hover:text-white self-start flex items-center gap-2"
                  >
                    <X size={16} />
                    FERMER
                  </button>
                </div>
              </div>

              {/* Products Gallery (si la marque a des produits) */}
              {selectedBrand.products.length > 0 && (
                <div className="border-t border-gray-200 p-8 md:p-12">
                  <div className="mb-8">
                    <h4 className="text-2xl tracking-[0.2em] font-light mb-2">Sélection de Produits</h4>
                    <p className="text-gray-600 text-sm">Découvrez quelques pièces emblématiques de la collection</p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {selectedBrand.products.map((product, index) => (
                      <motion.div
                        key={product.id}
                        className="group cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -4 }}
                      >
                        <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
                          <motion.img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          />
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-amber-600 tracking-[0.2em]">{product.category}</p>
                          <h5 className="font-light">{product.name}</h5>
                          <p className="text-sm text-gray-600">{product.price}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description longue (paragraphes + images) ou court fallback */}
              <div className="border-t border-gray-200 p-8 md:p-12">
                {selectedBrand.longDescription ? (
                  <div className="max-w-3xl mx-auto space-y-8">
                    {selectedBrand.longDescription.paragraphs.map((paragraph, i) => (
                      <React.Fragment key={i}>
                        <p className="text-gray-700 leading-relaxed">{paragraph}</p>
                        {selectedBrand.longDescription!.images && selectedBrand.longDescription!.images[i] && (
                          <div className="my-8 overflow-hidden">
                            <img
                              src={selectedBrand.longDescription!.images![i]}
                              alt=""
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-center max-w-2xl mx-auto">
                    Découvrez les créations {selectedBrand.name} en boutique.
                  </p>
                )}

                {/* CTA boutique (pour toutes les marques) */}
                <div className="mt-12 pt-8 border-t border-gray-200 text-center max-w-2xl mx-auto">
                  <p className="text-gray-700 leading-relaxed">
                    Retrouvez cette marque dans votre boutique Honoris Cosa. Temple de la mode féminine, la boutique est située au{' '}
                    <a
                      href={SHOP_ADDRESS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 underline underline-offset-2 hover:text-amber-700"
                    >
                      44 Avenue d&apos;Amsterdam à Valenciennes
                    </a>
                    .{' '}
                    <a
                      href="#contact"
                      onClick={(e) => {
                        setSelectedBrand(null);
                        setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                      }}
                      className="text-amber-600 underline underline-offset-2 hover:text-amber-700"
                    >
                      Contactez-nous
                    </a>
                    {' '}pour obtenir plus d&apos;informations.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
