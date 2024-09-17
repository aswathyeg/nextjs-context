import { useInputs } from "@/app/ui/context/InputContext";

// /app/components/FinalPage.tsx

const FinalPage = () => {
  const { selectedInputs } = useInputs();

  return (
    <div className="relative bg-lightestgreen shadow-md rounded-lg p-4 m-2 border border-cyan-900">
      <div className="absolute right-2">
        {/* <PencilIcon className="h-6 w-6 text-gray-500" /> */}
      </div>
      <h3 className="text-lg">Selected Inputs</h3>
      <p>{JSON.stringify(selectedInputs)}</p>
    </div>
  );
};

export default FinalPage;
