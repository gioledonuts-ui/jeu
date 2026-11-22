/**
 * Contenu de démonstration du squelette.
 * Les textes visibles reproduisent les exemples des maquettes validées (docs/maquettes/),
 * à titre purement illustratif — aucune règle de jeu ni question réelle n'est définie
 * (règles du jeu : À APPROFONDIR — D-06).
 */

export const CANDIDATES = [
  { id: 'theo', name: 'THÉO', lives: 2, hue: ['#1e6e5c', '#0e3b32'] },
  { id: 'mia', name: 'MIA', lives: 1, hue: ['#b8433e', '#5e1f1e'] },
  { id: 'luk', name: 'LUK', lives: 2, hue: ['#2e57f6', '#16275f'] },
  { id: 'sarah', name: 'SARAH', lives: 1, hue: ['#c77414', '#5c3408'] },
];

/** Question de démonstration (maquettes 01 / 07 / 09). */
export const DEMO_QUESTION = 'À quoi peut-on parfois reconnaître les Réunionnais ?';

/** Réponse visible (maquettes 01 / 02 / 08). La réponse masquée n'a pas de contenu défini — d'où « ? ». */
export const DEMO_VISIBLE_ANSWER = 'Leur ongle très long';
export const DEMO_REVEALED_TEXT = 'Contenu révélé (exemple)';

/** Épreuve des sept propositions (maquette 05). */
export const DEMO_SEPT_QUESTION = 'QUEL SCIENTIFIQUE EST BIEN ASSOCIÉ À SA NATIONALITÉ ?';
export const DEMO_SEPT_ITEMS = [
  { n: 1, text: 'Newton / Royaume-Uni', state: 'validated' },
  { n: 2, text: 'Curie / France', state: 'validated' },
  { n: 3, text: 'Tesla / États-Unis', state: 'selected' },
  { n: 4, text: 'Einstein / Allemagne', state: 'neutral' },
  { n: 5, text: 'Pasteur / France', state: 'neutral' },
  { n: 6, text: 'Mozart / Autriche', state: 'neutral' },
  { n: 7, text: 'Edison / France', state: 'neutral' },
];
