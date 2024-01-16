import { type Suggestion } from "../../App";

type SearchSuggestionProps = {
  suggestionList: Suggestion[];
  onSelect: (data: Suggestion) => void;
};

function SearchSuggestion({ suggestionList, onSelect }: SearchSuggestionProps) {
  return (
    <div className="space-y-3 shadow-md py-4 border">
      {suggestionList.map((suggestion) => (
        <div
          className="flex items-center space-x-3 px-2 cursor-pointer hover:bg-gray-400"
          key={suggestion.id}
          onClick={() => onSelect(suggestion)}
        >
          <div className="w-[50px] h-[50px] rounded-full">
            <img
              src={suggestion.pic}
              className="w-full object-cover rounded-full"
            />
          </div>
          <p className="flex-shrink-0">{suggestion.name}</p>
          <p>{suggestion.email}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchSuggestion;
