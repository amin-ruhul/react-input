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

  return (
    <div className="h-screen flex items-center justify-center">
      <section className="min-w-[600px] flex items-center border-b-2 border-blue-600">
        <div></div>
        <div className="relative w-full">
          <input type="text" className="p-2 outline" />
          <div className="absolute top-15">
            <SearchSuggestion suggestionList={suggestionList} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
