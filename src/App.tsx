import { useState } from "react";
import { users } from "./data/users";
import SearchSuggestion from "./components/SearchSuggestion";

export type Suggestion = {
  id: string;
  name: string;
  email: string;
  pic: string;
};

function App() {
  const [suggestionList, setSuggestionList] = useState<Suggestion[]>(users);
  const [selectedList, setSelectedList] = useState<Suggestion[]>([]);

  const handleSelection = (data: Suggestion) => {
    setSelectedList([...selectedList, data]);

    const updatedSuggestionList = suggestionList.filter(
      (suggestion) => suggestion.id !== data.id
    );
    setSuggestionList(updatedSuggestionList);
  };

  return (
    <div className="h-screen w-full  flex items-center justify-center ">
      <section className="inline-flex items-center flex-wrap border-b-2  border-blue-600">
        <div className="flex space-x-2">
          {selectedList.map((selectedEl) => (
            <div className=" flex items-center space-x-1 bg-gray-300 rounded-full p-1">
              <div className="w-[28px] h-[28px] rounded-full">
                <img
                  src={selectedEl.pic}
                  className="w-full rounded-full object-cover"
                />
              </div>
              <p className="text-sm">{selectedEl.name}</p>
            </div>
          ))}
        </div>
        <div className="relative">
          <input
            type="text"
            className="p-2 outline"
            placeholder="Add New user..."
          />
          <div className="absolute top-15">
            <SearchSuggestion
              suggestionList={suggestionList}
              onSelect={handleSelection}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
