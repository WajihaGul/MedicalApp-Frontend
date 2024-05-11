import PharmacyGrid from "../Components/PharmacyGrid/PharmacyGrid";
const pharmacies = [
  {
    ID: 1,
    name: "ABC Pharmacy",
    contact: "123-456-7890",
    address: "123 Main St, City, State",
    hours: "Mon-Fri: 9am-6pm",
  },
  {
    ID: 2,
    name: "DEF Pharmacy",
    contact: "323-446-7990",
    address: "323 Main St, City, State",
    hours: "Mon-Fri: 9am-6pm",
  },
  {
    ID: 3,
    name: "GHI Pharmacy",
    contact: "523-456-7890",
    address: "523 Main St, City, State",
    hours: "Mon-Fri: 9am-6pm",
  },
  {
    ID: 4,
    name: "JKL Pharmacy",
    contact: "723-456-7890",
    address: "723 Main St, City, State",
    hours: "Mon-Fri: 9am-6pm",
  },
];

const Pharmacy = () => {
  return <PharmacyGrid pharmacies={pharmacies} />;
};
export default Pharmacy;
