import { type Suggestion } from "../../App";

type SelectedPanelProps = {
  selectedList: Suggestion[];
  onRemoveSelection: (id: string) => void;
};

function SelectedPanel({
  selectedList,
  onRemoveSelection,
}: SelectedPanelProps) {
  return (
    <div className="inline-flex space-x-2 flex-wrap ">
      {selectedList.map((selectedEl) => (
        <div
          className="flex items-center space-x-1 bg-gray-300 rounded-full p-1 mt-2"
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
            onClick={() => onRemoveSelection(selectedEl.id)}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}

export default SelectedPanel;
