import { filterStore } from "../stores/filtersStore";
import { GenreOptions } from "./Filters";
import { FaTimesCircle } from "react-icons/fa";

export interface FilterItem {
  filterName: string;
  id: number;
}

export const FilterItem = ({ filterName, id }: FilterItem) => {
  const { filters, removeFilter, updateFilter } = filterStore();

  const isGreaterThanZero = filters.findIndex((curr) => curr.id === id) >= 0;

  return (
    <div
      style={{
        background: isGreaterThanZero ? "#D18000" : "white",
      }}
      className={`py-2 px-4 rounded flex gap-[9px] items-center ${
        isGreaterThanZero ? "text-white" : "text-black"
      } bg-white font-Roboto text-base font-bold`}
    >
      <button
        onClick={() => {
          updateFilter({ name: filterName as GenreOptions, id });
        }}
      >
        {filterName}
      </button>
      {isGreaterThanZero && (
        <div
          role="button"
          className="[&>svg]:text-white"
          onClick={() => removeFilter(id)}
        >
          <FaTimesCircle />
        </div>
      )}
    </div>
  );
};
