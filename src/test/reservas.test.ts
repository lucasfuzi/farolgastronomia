import { describe, expect, it } from "vitest";
import { horariosDisponiveis, MAX_PESSOAS } from "@/lib/reservas";

describe("regras de reserva", () => {
  it("quarta: primeiro horário 11:45, último 14:15 (45 min antes das 15h)", () => {
    const h = horariosDisponiveis(new Date(2026, 9, 21));
    expect(h[0]).toBe("11:45");
    expect(h.at(-1)).toBe("14:15");
    expect(h).not.toContain("14:30");
  });
  it("segunda e terça não têm horários", () => {
    expect(horariosDisponiveis(new Date(2026, 9, 19))).toEqual([]);
    expect(horariosDisponiveis(new Date(2026, 9, 20))).toEqual([]);
  });
  it("limite de 25 pessoas", () => {
    expect(MAX_PESSOAS).toBe(25);
  });
});
