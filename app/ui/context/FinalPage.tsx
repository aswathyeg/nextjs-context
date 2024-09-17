import { useInputs } from "../context/InputContext"; // Adjust path if needed

const FinalPage = () => {
  const { selectedInputs } = useInputs();
  if (!Array.isArray(selectedInputs)) {
    console.error("selectedInputs is not an array:", selectedInputs);
    return <p>No valid inputs</p>;
  }

  return (
    <div>
      {selectedInputs.map((input, index) => (
        <div key={index}>
          <p>
            {input.name}: {input.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FinalPage;
