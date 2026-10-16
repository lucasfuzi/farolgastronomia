// Reservation rules for Farol Gastronomia.
export const MAX_PESSOAS = 25;
/** Minutes before closing after which no new reservation is accepted. */
export const ANTECEDENCIA_FECHAMENTO = 45;
const STEP = 15;

/** Opening hours per weekday (0 = Sunday). null = closed. Times in minutes after midnight. */
const HORARIOS: Record<number, { abre: number; fecha: number } | null> = {
  0: { abre: 11 * 60 + 45, fecha: 15 * 60 },
  1: null,
  2: null,
  3: { abre: 11 * 60 + 45, fecha: 15 * 60 },
  4: { abre: 11 * 60 + 45, fecha: 15 * 60 },
  5: { abre: 11 * 60 + 45, fecha: 15 * 60 },
  6: { abre: 11 * 60 + 45, fecha: 15 * 60 },
};

const fmt = (m: number) => `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;

export function fechado(d: Date) {
  return HORARIOS[d.getDay()] == null;
}

/** Bookable time slots for the chosen day: from opening until 45 min before closing. */
export function horariosDisponiveis(d: Date): string[] {
  const h = HORARIOS[d.getDay()];
  if (!h) return [];
  const out: string[] = [];
  for (let m = h.abre; m <= h.fecha - ANTECEDENCIA_FECHAMENTO; m += STEP) out.push(fmt(m));
  return out;
}
