import p1_1 from "@/assets/projects/p1_1.jpg";
import p2_1 from "@/assets/projects/p2_1.jpg";
import p3_1 from "@/assets/projects/p3_1.jpg";

export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  images: string[];
  thumbnail: string;
}

export const projects: Project[] = [
  {
    id: "p3",
    title: "Családi ház kertje Pilisborosjenőn",
    date: "2025. November 5.",
    description: "Korábban dolgoztunk már ezen a helyszínen, a telken található négy lakáshoz négy külön kertrész tartozik. Ebben a posztban az egyik lakás saját kertjének építéséről számolunk be, ami az eddigi legkomplexebb kertépítési megbízásunk volt.\n\nA kert építése augusztustól október elejéig tartott, összesen 20 munkanapot vett igénybe. A gépi földmunka után kezdődhetett a műtárgyak építése és a kézi tereprendezés. Összesen 5 tonna mészkősziklából épültek támfalak, szegély és sziklakert. A kerti tároló alapozását zúzottkő alapra betonból öntöttük. Az évelőágyások és a sövények műanyag szegélyt kaptak. A ház körül, ahol nincs burkolat mosott kavicsos drénsávot alakítottunk ki, a kert sarkába pedig földbe süllyesztett tűzrakó került agyagtapasztásos módszerrel.\n\nEzután építettük ki az automata öntőrendszert, amit esőérzékelővel és wifis távvezérléssel is felszereltünk.",
    thumbnail: p3_1,
    images: [p3_1]
  },
  {
    id: "p2",
    title: "Öntözésmérés a TVE pályán",
    date: "2025. Október 19.",
    description: "Hétvége folyamán a TVE focipályán voltunk öntözőrendszer egyenletességet mérni. Tudtátok, hogy az öntözőrendszer hatékonysága nem csak a vízmennyiségen múlik, hanem azon is, mennyire egyenletesen jut el a víz minden pontra?\n\nMérés:\nFelfogótálcás (catch can) módszerrel történt melynek lényege az, hogy kis edényeket helyezünk el a területen, összegyűjtjük a vizet, majd megmérjük a különbségeket.\n\nMinél egyformább a vízszint az edényekben, annál jobb az egyenletesség így elkerüljük a túlöntözést vagy száraz foltokat. 💧",
    thumbnail: p2_1,
    images: [p2_1]
  },
  {
    id: "p1",
    title: "Támfal régi villanyoszlopokból",
    date: "2025. Október 9.",
    description: "Korábban dolgoztunk már ezen a kerten, akkor akác rönkből készültek támfalak és lépcsők. A tulajdonos ismét megbízott minket egy támfallal a kert elülső részén.\n\nRégóta hevertek régi, kivágott villanyoszlopok a telken, amelyek eredetét senki sem ismerte, azonban most kiváló alapanyagnak tűnt az új falhoz. Ezeket az oszlopokat hasznosítottuk újra és készült belőlük támfal ugyanolyan módszerrel mint korábban az akácból.\n\nÖrömünkre szolgál, hogy ilyen módon újrahasznosíthattuk ezt az anyagot, ahelyett hogy eltüzelték volna.",
    thumbnail: p1_1,
    images: [p1_1]
  }
];
