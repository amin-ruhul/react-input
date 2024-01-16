import { useState } from "react";
import { users } from "./data/users";
import SearchSuggestion from "./components/SearchSuggestion";
import Input from "./components/Input";

export type Suggestion = {
  id: string;
  name: string;
  email: string;
  pic: string;
};

function App() {
  const [suggestionList, setSuggestionList] = useState<Suggestion[]>(users);
  const [selectedList, setSelectedList] = useState<Suggestion[]>([]);
  const [searchKey, setSearchKey] = useState("");

  const handleSelection = (data: Suggestion) => {
    setSelectedList([...selectedList, data]);

    const updatedSuggestionList = suggestionList.filter(
      (suggestion) => suggestion.id !== data.id
    );
    setSuggestionList(updatedSuggestionList);
  };

  const handleSearch = (key: string) => {
    const filteredData: Suggestion[] = users.filter((suggestion) =>
      suggestion.name.toLocaleLowerCase().includes(key.toLocaleLowerCase())
    );
    console.log(key, filteredData);
    setSuggestionList(filteredData);
  };

  const handleSearchValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setSearchKey(value);
    handleSearch(value);
  };

  const handleRemoveSelection = (id: string) => {
    setSelectedList(selectedList.filter((selected) => selected.id !== id));
  };

  return (
    <div className="h-screen w-full  flex items-center justify-center ">
      <section className="inline-flex items-center flex-wrap border-b-2  border-blue-600">
        <div className="flex space-x-2">
          {selectedList.map((selectedEl) => (
            <div
              className="flex items-center space-x-1 bg-gray-300 rounded-full p-1"
              key={selectedEl.id}
            >
              <div className="w-[28px] h-[28px] rounded-full">
                <img
                  src={selectedEl.pic}
                  className="w-full rounded-full object-cover"
                />
              </div>
              <p className="text-sm">{selectedEl.name}</p>
              <button
                className=" px-2 text-lg"
                onClick={() => handleRemoveSelection(selectedEl.id)}
              >
                x
              </button>
            </div>
          ))}
        </div>
        <div className="relative">
          <Input
            type="text"
            placeholder="Add New user..."
            value={searchKey}
            onChange={handleSearchValueChange}
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
