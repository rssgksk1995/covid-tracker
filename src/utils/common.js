export const stateMapping = [
  { value: "Total", key: "TT" },
  { value: "Maharashtra", key: "MH" },
  { value: "Kerala", key: "KL" },
  { value: "Karnataka", key: "KA" },
  { value: "Andhra Pradesh", key: "AP" },
  { value: "Tamil Nadu", key: "TN" },
  { value: "Delhi", key: "DL" },
  { value: "Uttar Pradesh", key: "UP" },
  { value: "West Bengal", key: "WB" },
  { value: "Odisha", key: "OR" },
  { value: "Rajasthan", key: "RJ" },
  { value: "Chhattisgarh", key: "CT" },
  { value: "Telangana", key: "TG" },
  { value: "Haryana", key: "HR" },
  { value: "Gujarat", key: "GJ" },
  { value: "Bihar", key: "BR" },
  { value: "Madhya Pradesh", key: "MP" },
  { value: "Assam", key: "AS" },
  { value: "Punjab", key: "PB" },
  { value: "Jammu and Kashmir", key: "JK" },
  { value: "Jharkhand", key: "JH" },
  { value: "Uttarakhand", key: "UT" },
  { value: "Himachal Pradesh", key: "HP" },
  { value: "Goa", key: "GA" },
  { value: "Puducherry", key: "PY" },
  { value: "Tripura", key: "TR" },
  { value: "Manipur", key: "MN" },
  { value: "Chandigarh", key: "CH" },
  { value: "Arunachal Pradesh", key: "AR" },
  { value: "Meghalaya", key: "ML" },
  { value: "Nagaland", key: "NL" },
  { value: "Ladakh", key: "LA" },
  { value: "Sikkim", key: "SK" },
  { value: "Andaman and Nicobar Islands", key: "AN" },
  { value: "Mizoram", key: "MZ" },
  { value: "Dadra and Nagar Haveli and Daman and Diu", key: "DN" },
  { value: "Lakshadweep", key: "LD" },
  { value: "State Unassigned", key: "UN" },
];

export const getStateName = (stateKey) => {
  let name = "";
  stateMapping.forEach((eachData) => {
    if (stateKey === eachData.key) {
      name = eachData.value;
      return;
    }
  });
  return name;
};
