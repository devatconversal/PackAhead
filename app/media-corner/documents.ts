export type DocType = "deliverable" | "publication" | "press" | "factsheet";

export type Doc = {
  type: DocType;
  /** Short label shown large on the card cover, e.g. "D9.1" or "PR 02". */
  code: string;
  title: string;
  date: string;
  desc: string;
  meta: string;
  action: "Read" | "Download";
  url: string;
};

export const TYPE_FILTERS: { id: DocType | "all"; label: string }[] = [
  { id: "all", label: "ALL" },
  { id: "deliverable", label: "DELIVERABLES" },
  { id: "publication", label: "SCIENTIFIC PUBLICATIONS" },
  { id: "press", label: "PRESS RELEASES" },
  { id: "factsheet", label: "FACTSHEETS" },
];

export const TYPE_LABEL: Record<DocType, string> = {
  deliverable: "DELIVERABLE",
  publication: "SCIENTIFIC PUBLICATION",
  press: "PRESS RELEASE",
  factsheet: "FACTSHEET",
};

// Example documents from the design. Replace `url` with the real files (e.g. in /public/documents).
export const DOCUMENTS: Doc[] = [
  {
    type: "publication",
    code: "Review",
    title: "Machine learning in enzyme engineering for cellulose processing: a review",
    date: "6 NOV 2026",
    desc: "Open-access review by the PackAhead partners on where AI speeds up enzyme design.",
    meta: "OPEN ACCESS",
    action: "Read",
    url: "#",
  },
  {
    type: "deliverable",
    code: "D9.1",
    title: "D9.1 Communication and dissemination plan",
    date: "30 OCT 2026",
    desc: "How the project shares its results with industry, researchers and the public.",
    meta: "PDF · 1.2 MB",
    action: "Download",
    url: "#",
  },
  {
    type: "press",
    code: "PR 02",
    title: "Partners meet in Espoo for the first general assembly",
    date: "21 OCT 2026",
    desc: "Thirteen partners agree on the work plan for the first project year.",
    meta: "PDF · 310 KB",
    action: "Download",
    url: "#",
  },
  {
    type: "factsheet",
    code: "FS 01",
    title: "PackAhead project factsheet",
    date: "15 OCT 2026",
    desc: "The project on one page: goals, partners, timeline and expected impact.",
    meta: "PDF · 860 KB",
    action: "Download",
    url: "#",
  },
  {
    type: "deliverable",
    code: "D10.1",
    title: "D10.1 Data management plan",
    date: "30 SEP 2026",
    desc: "How research data is collected, stored and shared openly during the project.",
    meta: "PDF · 940 KB",
    action: "Download",
    url: "#",
  },
  {
    type: "publication",
    code: "Paper",
    title: "Regenerated cellulose films for food packaging: production, properties and recycling",
    date: "24 SEP 2026",
    desc: "Open-access paper on the state of the art the project builds on.",
    meta: "OPEN ACCESS",
    action: "Read",
    url: "#",
  },
  {
    type: "factsheet",
    code: "FS 02",
    title: "AI tools in PackAhead, explained",
    date: "18 SEP 2026",
    desc: "A short guide to the eight digital tools and how they work together.",
    meta: "PDF · 720 KB",
    action: "Download",
    url: "#",
  },
  {
    type: "deliverable",
    code: "D11.1",
    title: "D11.1 Project management handbook",
    date: "10 SEP 2026",
    desc: "Roles, decision making and quality procedures for the consortium.",
    meta: "PDF · 1.6 MB",
    action: "Download",
    url: "#",
  },
  {
    type: "press",
    code: "PR 01",
    title: "PackAhead starts: AI to speed up bio-based food packaging",
    date: "1 SEP 2026",
    desc: "A four year EU project on cellulose films that are affordable and circular.",
    meta: "PDF · 280 KB",
    action: "Download",
    url: "#",
  },
];
