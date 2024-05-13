import PharmaForm from "../Components/PharmaForm/PharmaForm";
import { useLocation } from "react-router-dom";
const EditPharmacy = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const index = searchParams.get("index");
  console.log(index);
  return <PharmaForm addEditPharmacyText="Edit Pharmacy" />;
};
export default EditPharmacy;
