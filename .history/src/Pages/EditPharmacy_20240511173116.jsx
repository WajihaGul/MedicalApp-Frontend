import PharmaForm from "../Components/PharmaForm/PharmaForm";

const EditPharmacy = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const index = searchParams.get("index");
  return <PharmaForm addEditPharmacyText="Edit Pharmacy" />;
};
export default EditPharmacy;
