import { useInputs } from "../InputContext";

// /app/ui/page1.tsx

const Page1 = () => {
  const { selectedInputs, setSelectedInputs } = useInputs();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedInputs({ ...selectedInputs, page1Input: e.target.value });
  };

  return (
    <div>
      <h1>Page 1</h1>
      <input
        type="text"
        value={selectedInputs.page1Input || ""}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Page1;
