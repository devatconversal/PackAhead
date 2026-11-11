export type City =
  | "espoo"
  | "vilnius"
  | "delft"
  | "arnhem"
  | "gent"
  | "vienna"
  | "cesena"
  | "paterna"
  | "porto"
  | "incheon";

export type Country =
  | "finland"
  | "lithuania"
  | "netherlands"
  | "belgium"
  | "austria"
  | "italy"
  | "spain"
  | "portugal"
  | "korea";

export type Partner = {
  id: string;
  name: string;
  /** Text shown in the logo placeholder until real logos are supplied. */
  logo: string;
  /** Short line for the partner grid. */
  role: string;
  /** Uppercase "COUNTRY · TYPE" label for the grid. */
  kind: string;
  /** Uppercase location label for the map list. */
  where: string;
  city: City;
  country: Country;
  url: string;
};

export const COORDINATOR: Partner = {
  id: "vtt",
  name: "VTT Technical Research Centre of Finland",
  logo: "VTT",
  role: "Coordinates PackAhead and runs the automated biofoundry that builds and screens production strains.",
  kind: "Finland · Research centre",
  where: "Finland · Espoo · Coordinator",
  city: "espoo",
  country: "finland",
  url: "#",
};

export const PARTNERS: Partner[] = [
  {
    id: "metsa",
    name: "Metsä",
    logo: "Metsä",
    role: "Supplies wood-based cellulose pulp, one of the three feedstocks.",
    kind: "Finland · Industry",
    where: "Finland · Espoo",
    city: "espoo",
    country: "finland",
    url: "#",
  },
  {
    id: "biomatter",
    name: "Biomatter",
    logo: "Biomatter",
    role: "Engineers and optimises the enzymes with AI-driven design.",
    kind: "Lithuania · Industry",
    where: "Lithuania · Vilnius",
    city: "vilnius",
    country: "lithuania",
    url: "#",
  },
  {
    id: "ugent",
    name: "Ghent University",
    logo: "Ghent University",
    role: "Discovers new enzymes from scratch through de novo design.",
    kind: "Belgium · Research",
    where: "Belgium · Gent",
    city: "gent",
    country: "belgium",
    url: "#",
  },
  {
    id: "gugc",
    name: "Ghent University Global Campus",
    logo: "Ghent University Global Campus",
    role: "Brings biotech research capacity in South Korea into the project.",
    kind: "South Korea · Research",
    where: "South Korea · Incheon",
    city: "incheon",
    country: "korea",
    url: "#",
  },
  {
    id: "novasign",
    name: "Novasign",
    logo: "novasign",
    role: "Builds the hybrid models and digital twin for bioprocess scale-up.",
    kind: "Austria · Industry",
    where: "Austria · Vienna",
    city: "vienna",
    country: "austria",
    url: "#",
  },
  {
    id: "biosphere",
    name: "Biosphere",
    logo: "Biosphere",
    role: "Scales up the bioprocess that produces the enzymes.",
    kind: "Italy · Industry",
    where: "Italy · Cesena",
    city: "cesena",
    country: "italy",
    url: "#",
  },
  {
    id: "itene",
    name: "ITENE",
    logo: "ITENE",
    role: "Tests the films and turns them into packaging demonstrators.",
    kind: "Spain · Research",
    where: "Spain · Paterna",
    city: "paterna",
    country: "spain",
    url: "#",
  },
  {
    id: "spi",
    name: "SPI",
    logo: "SPI",
    role: "Leads communication, dissemination and exploitation of the results.",
    kind: "Portugal · Industry",
    where: "Portugal · Porto",
    city: "porto",
    country: "portugal",
    url: "#",
  },
  {
    id: "pack4food",
    name: "Pack4Food",
    logo: "Pack4Food",
    role: "Connects the project to food packaging companies across Europe.",
    kind: "Belgium · Network",
    where: "Belgium · Gent",
    city: "gent",
    country: "belgium",
    url: "#",
  },
  {
    id: "sb",
    name: "Segers & Balcaen",
    logo: "Segers & Balcaen",
    role: "Converts the films into flexible food packaging on industrial lines.",
    kind: "Belgium · Industry",
    where: "Belgium",
    city: "gent",
    country: "belgium",
    url: "#",
  },
  {
    id: "miscancell",
    name: "Miscancell",
    logo: "Miscancell",
    role: "Supplies cellulose from miscanthus, a fast-growing grass.",
    kind: "Netherlands · Industry",
    where: "The Netherlands · Arnhem",
    city: "arnhem",
    country: "netherlands",
    url: "#",
  },
  {
    id: "yaghma",
    name: "Yaghma",
    logo: "Yaghma",
    role: "Develops the AI vision system that recognises films for sorting.",
    kind: "Netherlands · Industry",
    where: "The Netherlands · Delft",
    city: "delft",
    country: "netherlands",
    url: "#",
  },
];

/** Pin positions on the Europe map, as percentages of the map image. */
export const PINS: { city: Exclude<City, "incheon">; label: string; left: number; top: number; tipLeft?: boolean }[] = [
  { city: "espoo", label: "Espoo, Finland", left: 78.61, top: 13.4, tipLeft: true },
  { city: "vilnius", label: "Vilnius, Lithuania", left: 79.96, top: 32.67, tipLeft: true },
  { city: "delft", label: "Delft, the Netherlands", left: 34.48, top: 42.07 },
  { city: "arnhem", label: "Arnhem, the Netherlands", left: 37.85, top: 42.18 },
  { city: "gent", label: "Gent, Belgium", left: 33.09, top: 45.44 },
  { city: "vienna", label: "Vienna, Austria", left: 60.59, top: 55.4 },
  { city: "cesena", label: "Cesena, Italy", left: 51.61, top: 69.68 },
  { city: "paterna", label: "Paterna, Spain", left: 24.04, top: 85.96 },
  { city: "porto", label: "Porto, Portugal", left: 6.28, top: 80.18 },
];

export const KOREA_PIN = { city: "incheon" as const, label: "Incheon, South Korea", left: 36.79, top: 28.68 };
