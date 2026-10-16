import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

/** Airbnb-style date picker: two months side by side, round day cells. Monday and Tuesday are closed. */
export function AirbnbDate({ value, onChange }: { value: Date | undefined; onChange: (d: Date | undefined) => void }) {
  const [open, setOpen] = useState(false);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button type="button" className="mt-1 w-full rounded-2xl border-2 bg-card px-4 py-3 text-left hover:border-primary">
          <span className="block text-[10px] font-bold uppercase tracking-wider">Data</span>
          <span className={value ? "font-medium" : "text-muted-foreground"}>
            {value ? format(value, "EEE, d 'de' MMM", { locale: ptBR }) : "Adicionar data"}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="pointer-events-auto w-auto rounded-3xl border bg-card p-6 shadow-2xl">
        <DayPicker
          mode="single"
          locale={ptBR}
          numberOfMonths={2}
          selected={value}
          onSelect={(d) => { onChange(d); if (d) setOpen(false); }}
          disabled={[{ before: today }, { dayOfWeek: [1, 2] }]}
          showOutsideDays={false}
          components={{
            Chevron: ({ orientation }) =>
              orientation === "left" ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />,
          }}
          classNames={{
            months: "relative flex flex-col gap-8 sm:flex-row sm:gap-10",
            month: "space-y-4",
            month_caption: "flex h-9 items-center justify-center",
            caption_label: "text-base font-semibold capitalize",
            nav: "absolute inset-x-0 top-0 flex h-9 items-center justify-between",
            button_previous: "grid h-9 w-9 place-items-center rounded-full hover:bg-muted disabled:opacity-30",
            button_next: "grid h-9 w-9 place-items-center rounded-full hover:bg-muted disabled:opacity-30",
            month_grid: "border-collapse",
            weekdays: "flex",
            weekday: "w-11 text-xs font-medium capitalize text-muted-foreground",
            week: "mt-1 flex",
            day: "h-11 w-11 p-0 text-center text-sm",
            day_button: "h-11 w-11 rounded-full font-semibold hover:border-2 hover:border-foreground disabled:pointer-events-none",
            selected: "[&>button]:bg-foreground [&>button]:text-background",
            today: "[&>button]:underline [&>button]:underline-offset-4",
            disabled: "[&>button]:text-muted-foreground/40 [&>button]:line-through [&>button]:font-normal",
            hidden: "invisible",
          }}
        />
        <div className="mt-4 flex items-center justify-between border-t pt-4 text-sm">
          <span className="text-muted-foreground">Fechado às segundas e terças</span>
          <div className="flex gap-4">
            <button type="button" className="font-semibold underline" onClick={() => onChange(undefined)}>Limpar data</button>
            <button type="button" className="rounded-xl bg-foreground px-4 py-2 font-semibold text-background" onClick={() => setOpen(false)}>Fechar</button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
