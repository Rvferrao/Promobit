import { create } from "zustand";
import type { Genre } from "../components/Filters";

interface FilterStore {
  filters: Genre[];
  updateFilter: (filter: Genre) => void;
  removeFilter: (id: number) => void;
}

export const filterStore = create<FilterStore>((set, get) => ({
  filters: [] as Genre[],
  updateFilter(filter) {
    const filters = get().filters;
    filters.push(filter);
    set(() => ({ filters }));
  },
  removeFilter(id) {
    const filters = get().filters;
    const updatedFilters = filters.filter((filter) => filter.id !== id);
    set(() => ({ filters: updatedFilters }));
  },
}));
