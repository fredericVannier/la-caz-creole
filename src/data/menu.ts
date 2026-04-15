export type Plat = {
  id: string;
  nom: string;
  description: string;
  prix: number;
  categorie: "plat" | "aperitif" | "dessert";
  tags?: string[];
  disponible: boolean;
  pimente?: boolean;
  pimentable?: boolean;
};

export type MenuFormule = {
  id: string;
  titre: string;
  description: string;
  plats: Plat[];
};

export const platsDisponibles: Plat[] = [
  // Plats principaux
  {
    id: "rougail-saucisse",
    nom: "Rougail Saucisse",
    description: "Saucisses fumées mijotées dans un rougail tomates aux épices créoles, servi avec riz blanc et grains.",
    prix: 12,
    categorie: "plat",
    tags: ["épicé", "traditionnel"],
    disponible: true,
    pimentable: true,
    pimente: true,
  },
  {
    id: "carry-poulet",
    nom: "Carry Poulet",
    description: "Poulet mijoté au curcuma, gingembre et combava, servi avec riz et rougail tomate.",
    prix: 12,
    categorie: "plat",
    tags: ["traditionnel"],
    disponible: true,
    pimentable: true,
    pimente: false,
  },
  {
    id: "carry-cabri",
    nom: "Carry Cabri",
    description: "Cabri (chèvre) cuisiné longuement aux épices réunionnaises, fondant et savoureux.",
    prix: 14,
    categorie: "plat",
    tags: ["traditionnel", "spécialité"],
    disponible: true,
    pimentable: true,
    pimente: false,
  },
  {
    id: "cari-bichiques",
    nom: "Cari Bichiques",
    description: "Alevins de gobie cuisinés à la créole, une spécialité rare et délicate de La Réunion.",
    prix: 16,
    categorie: "plat",
    tags: ["spécialité", "saisonnier"],
    disponible: false,
  },
  {
    id: "rougail-morue",
    nom: "Rougail Crevette",
    description: "Crevettes mijotées dans un rougail tomates aux épices créoles, servi avec riz blanc.",
    prix: 11,
    categorie: "plat",
    tags: ["traditionnel"],
    disponible: true,
    pimentable: true,
    pimente: true,
  },
  // Apéritifs & petits fours
  {
    id: "samoussas-boeuf",
    nom: "Samoussas Bœuf (x6)",
    description: "Samoussas croustillants farcis au bœuf haché épicé, oignons et herbes fraîches.",
    prix: 7,
    categorie: "aperitif",
    tags: ["populaire"],
    disponible: true,
    pimentable: true,
    pimente: false,
  },
  {
    id: "samoussas-poulet",
    nom: "Samoussas Poulet (x6)",
    description: "Samoussas au poulet mariné aux épices douces, une valeur sûre pour l'apéro.",
    prix: 7,
    categorie: "aperitif",
    tags: ["populaire"],
    disponible: true,
    pimentable: true,
    pimente: false,
  },
  {
    id: "bonbons-piment",
    nom: "Bonbons Piment (x8)",
    description: "Beignets de pois cassés épicés, frits dorés. Le classique incontournable de l'apéro réunionnais.",
    prix: 5,
    categorie: "aperitif",
    tags: ["vegan", "populaire"],
    disponible: true,
    pimente: true,
    pimentable: false,
  },
{
    id: "rougail-mangue",
    nom: "Rougail Mangue",
    description: "Condiment frais à base de mangue verte râpée, piment, sel et citron. Le must de tout repas créole.",
    prix: 4,
    categorie: "aperitif",
    tags: ["vegan", "condiment"],
    disponible: true,
  },
  {
    id: "plateau-aperitif",
    nom: "Plateau Apéritif Créole",
    description: "Assortiment de samoussas, bonbons piment et gâteaux piments pour 4-6 personnes.",
    prix: 22,
    categorie: "aperitif",
    tags: ["populaire", "partage"],
    disponible: true,
  },
];

export const menuDuMois: MenuFormule = {
  id: "menu-du-mois",
  titre: "Menu du Mois",
  description: "Chaque mois, une sélection mijotée avec amour selon les saisons et les arrivages.",
  plats: platsDisponibles.filter((p) =>
    ["carry-poulet", "rougail-saucisse", "samoussas-boeuf", "bonbons-piment", "rougail-mangue"].includes(p.id)
  ),
};

export const menuALaDemande: MenuFormule = {
  id: "menu-a-la-demande",
  titre: "Menu à la Demande",
  description: "Vous avez une envie précise ou un événement à célébrer ? Commandez ce que vous souhaitez parmi mes spécialités.",
  plats: platsDisponibles.filter((p) => p.disponible),
};
