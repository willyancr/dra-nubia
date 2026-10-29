// Dados do consultório: uma única fonte para todas as seções e para o JSON-LD.

export const WHATSAPP_NUMBER = "5563992819154";
export const PHONE_DISPLAY = "(63) 99281-9154";
export const PHONE_HREF = "tel:+5563992819154";
export const EMAIL = "nubiacarmo7@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/dranubiareumatopediatra/";
export const SITE_URL = "https://www.dranubiareumatopediatra.com.br";

export const CREDENTIALS = {
  crm: "CRM-TO 3581",
  rqes: [
    { number: "RQE 2025", specialty: "Pediatria" },
    { number: "RQE 3660", specialty: "Reumatologia Pediátrica" },
  ],
};

export const ADDRESS = {
  building: "Edifício Comercial Urban Futuro",
  room: "Sala 301",
  street: "Quadra 201 Sul, Av. Joaquim Teotônio Segurado, 15",
  district: "Plano Diretor Sul",
  city: "Palmas",
  state: "TO",
  postalCode: "77015-200",
};

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Edif%C3%ADcio+Comercial+Urban+Futuro+Palmas+TO";
export const WAZE_URL =
  "https://waze.com/ul?ll=-10.193314,-48.336886&navigate=yes";
export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.8440835327538!2d-48.33688628881503!3d-10.193314389880104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9324cb48c9e9e5eb%3A0x2c02818b59c05c9f!2sUrban%20Futuro!5e0!3m2!1spt-BR!2sbr!4v1739143824684!5m2!1spt-BR!2sbr";

export const HOURS_LABEL = "Segunda a sexta, 8h às 12h e 14h às 18h";

export type Symptom = { id: string; label: string };

// Sinais que os pais podem marcar no agendamento e no mapa do corpo.
export const SYMPTOMS: Symptom[] = [
  { id: "juntas", label: "dor ou inchaço nas juntas" },
  { id: "rigidez", label: "rigidez ao acordar" },
  { id: "mancando", label: "mancando sem ter se machucado" },
  { id: "febre", label: "febre que vai e volta" },
  { id: "manchas", label: "manchas ou vermelhidão na pele" },
  { id: "olhos", label: "olhos vermelhos junto com dor nas juntas" },
  { id: "dedos", label: "dedos que ficam brancos ou roxos no frio" },
  { id: "cansaco", label: "cansaço fora do comum ou perda de peso" },
];

export const AGE_GROUPS = [
  { id: "bebe", label: "Bebê", detail: "até 2 anos" },
  { id: "crianca", label: "Criança", detail: "3 a 11 anos" },
  { id: "adolescente", label: "Adolescente", detail: "12 a 17 anos" },
];

export const VISIT_TYPES = [
  { id: "primeira", label: "Primeira consulta" },
  { id: "retorno", label: "Retorno" },
];

export type BookingChoices = {
  age?: string;
  symptoms?: string[];
  visit?: string;
};

// Monta a mensagem do WhatsApp com o que os pais escolheram; nada é enviado a servidor.
export function buildWhatsAppMessage({ age, symptoms = [], visit }: BookingChoices = {}) {
  const ageGroup = AGE_GROUPS.find((group) => group.id === age);
  const visitType = VISIT_TYPES.find((type) => type.id === visit);
  const labels = SYMPTOMS.filter((s) => symptoms.includes(s.id)).map((s) => s.label);

  const lines = ["Olá! Gostaria de agendar uma consulta com a Dra. Núbia."];
  if (visitType) lines.push(`Tipo: ${visitType.label.toLowerCase()}.`);
  if (ageGroup) lines.push(`Para: ${ageGroup.label.toLowerCase()} (${ageGroup.detail}).`);
  if (labels.length > 0) {
    lines.push("", "Notei:", ...labels.map((label) => `- ${label}`));
  }
  return lines.join("\n");
}

export function buildWhatsAppUrl(choices: BookingChoices = {}) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildWhatsAppMessage(choices),
  )}`;
}

// Doenças que a reumatopediatra acompanha, com os sinais que costumam aparecer primeiro.
export const CONDITIONS = [
  {
    name: "Artrite idiopática juvenil",
    signs: "juntas inchadas, rigidez ao acordar, mancar",
    detail: "Inflamação que dura semanas em uma ou mais articulações, sem causa conhecida.",
  },
  {
    name: "Lúpus juvenil",
    signs: "manchas no rosto, febre, cansaço, dor nas juntas",
    detail: "O sistema de defesa ataca o próprio corpo: pele, articulações, rins e outros órgãos.",
  },
  {
    name: "Vasculites",
    signs: "manchas roxas na pele, febre, dor",
    detail: "Inflamação dos vasos sanguíneos, que pode causar manchas na pele, dor e febre.",
  },
  {
    name: "Esclerodermia juvenil",
    signs: "pele endurecida, dedos brancos ou roxos no frio",
    detail: "Áreas da pele que endurecem e, às vezes, órgãos internos afetados.",
  },
  {
    name: "Febres periódicas",
    signs: "febre que vai e volta",
    detail: "Febres que voltam em intervalos, com a criança bem entre um episódio e outro.",
  },
  {
    name: "Dor crônica",
    signs: "dor que não passa, cansaço",
    detail: "Dor persistente em músculos e articulações que atrapalha a escola e a brincadeira.",
  },
];

// Pontos do mapa do corpo: coordenadas no viewBox 0 0 300 600 da silhueta.
export const BODY_POINTS = [
  {
    id: "olhos",
    label: "Olhos",
    x: 150,
    y: 90,
    text: "Olho vermelho ou sensível à luz, principalmente quando aparece junto com dor nas juntas, merece avaliação.",
    symptoms: ["olhos"],
  },
  {
    id: "pele",
    label: "Pele e rosto",
    x: 122,
    y: 114,
    text: "Manchas avermelhadas no rosto, manchas roxas nas pernas ou áreas de pele endurecida.",
    symptoms: ["manchas"],
  },
  {
    id: "maos",
    label: "Mãos e dedos",
    x: 52,
    y: 328,
    text: "Dedos inchados, punhos doloridos ou dedos que ficam brancos ou roxos no frio.",
    symptoms: ["juntas", "dedos"],
  },
  {
    id: "joelhos",
    label: "Joelhos",
    x: 126,
    y: 452,
    text: "Joelho inchado ou rígido, principalmente pela manhã, que melhora ao longo do dia.",
    symptoms: ["juntas", "rigidez"],
  },
  {
    id: "pes",
    label: "Tornozelos e pés",
    x: 174,
    y: 566,
    text: "A criança passa a mancar ou evita apoiar o pé, sem ter se machucado.",
    symptoms: ["mancando", "juntas"],
  },
  {
    id: "corpo",
    label: "Corpo todo",
    x: 150,
    y: 248,
    text: "Febre que vai e volta sem infecção encontrada, cansaço fora do comum ou perda de peso.",
    symptoms: ["febre", "cansaco"],
  },
];

export const TRAINING = [
  { year: 2014, text: "Graduação em Medicina pelo Centro Universitário UNIRG" },
  { year: 2017, text: "Residência em Pediatria pela Universidade Federal do Tocantins (UFT)" },
  {
    year: 2024,
    text: "Residência em Reumatologia Pediátrica pela Universidade Estadual de Campinas (UNICAMP)",
  },
];

export const ROLES = [
  "Membro da Sociedade Brasileira de Pediatria",
  "Membro da Sociedade Brasileira de Reumatologia",
  "Professora do curso de Medicina do ITPAC Porto",
  "Preceptora voluntária da residência em Pediatria e do internato de Medicina da UFT",
];

// Como funciona: uma sequência real, por isso numerada.
export const PROCESS_STEPS = [
  {
    title: "Você manda mensagem",
    text: "Pelo WhatsApp. A secretária responde no mesmo dia útil, combina dia e horário e tira as dúvidas sobre convênio.",
  },
  {
    title: "A consulta",
    text: "Ouço a história da criança desde o começo e examino as articulações, a pele e o corpo todo, no ritmo dela.",
  },
  {
    title: "O acompanhamento",
    text: "Explico o que encontrei, peço exames quando for preciso e combinamos os retornos. Doença reumática costuma pedir cuidado por anos.",
  },
];

export type OfficeStatus = "open" | "lunch" | "closed";

// Horário de Palmas (UTC-3, sem horário de verão).
export function getOfficeStatus(now: Date = new Date()): OfficeStatus {
  const palmas = new Date(now.getTime() - 3 * 60 * 60 * 1000);
  const day = palmas.getUTCDay();
  const minutes = palmas.getUTCHours() * 60 + palmas.getUTCMinutes();
  if (day === 0 || day === 6) return "closed";
  if (minutes >= 8 * 60 && minutes < 12 * 60) return "open";
  if (minutes >= 14 * 60 && minutes < 18 * 60) return "open";
  if (minutes >= 12 * 60 && minutes < 14 * 60) return "lunch";
  return "closed";
}

export const OFFICE_STATUS_TEXT: Record<OfficeStatus, string> = {
  open: "Consultório aberto agora: a secretária responde ainda hoje.",
  lunch: "Pausa de almoço: a secretária responde a partir das 14h.",
  closed:
    "Fora do horário agora: a secretária responde no próximo dia útil, a partir das 8h.",
};
