import { type Suggestion } from "../../App";

type SearchSuggestionProps = {
  suggestionList: Suggestion[];
  onSelect: (data: Suggestion) => void;
};

function SearchSuggestion({ suggestionList, onSelect }: SearchSuggestionProps) {
  return (
    <div className="space-y-3 shadow-md py-4 border min-w-[450px]">
      {suggestionList.map((suggestion) => (
        <div
          className="flex items-center space-x-3 px-2 cursor-pointer hover:bg-gray-400"
          key={suggestion.id}
          onClick={() => onSelect(suggestion)}
        >
          <div className="w-[50px] h-[50px] rounded-full shrink-0">
            <img
              src={suggestion.pic}
              className="w-full object-cover rounded-full"
            />
          </div>
          <p className="shrink-0">{suggestion.name}</p>
          <p className=" break-all">{suggestion.email}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchSuggestion;
