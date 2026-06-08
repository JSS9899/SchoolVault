const inventory = [
  {
    type: "iPads",
    count: 128,
    description: "Tablet devices used in classrooms and shared learning sets.",
  },
  {
    type: "Chromebooks",
    count: 214,
    description: "Portable browser-based devices for students and assessments.",
  },
  {
    type: "Windows Desktops",
    count: 86,
    description: "Fixed classroom, office, library, and computer suite machines.",
  },
  {
    type: "Smart Boards",
    count: 42,
    description: "Interactive classroom displays used for teaching.",
  },
];

const expiringDevices = [
  {
    type: "Chromebooks",
    location: "Library trolley",
    quantity: 36,
    expiryDate: "18 Jul 2026",
    status: "Due soon",
  },
  {
    type: "Windows Desktops",
    location: "ICT Suite 1",
    quantity: 28,
    expiryDate: "01 Sep 2026",
    status: "Due soon",
  },
  {
    type: "iPads",
    location: "Year 3 shared set",
    quantity: 32,
    expiryDate: "15 Dec 2026",
    status: "Within 12 months",
  },
  {
    type: "Smart Boards",
    location: "Maths corridor",
    quantity: 8,
    expiryDate: "20 Jan 2028",
    status: "Planned",
  },
];

console.log("SchoolVault loaded");
console.log("Inventory:", inventory);
console.log("Expiring devices:", expiringDevices);
