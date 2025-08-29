export const getFoods = (req, res) => {
  res.json([
    { id: 1, name: "Pizza" },
    { id: 2, name: "Sushi" },
    { id: 3, name: "Burger" }
  ]);
};
