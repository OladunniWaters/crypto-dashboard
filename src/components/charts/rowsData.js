let id = 0;
const createData = (name, calories, fat, carbs, protein) => {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
};

export default [
  createData(
    "Frozen yoghurt",
    159,
    6.0,
    24,
    4.0
  ),
  createData(
    "Ice cream",
    237,
    9.0,
    37,
    4.3
  ),
  createData(
    "Eclair",
    262,
    16.0,
    24,
    6.0
  ),
  createData(
    "Cupcake",
    305,
    3.7,
    67,
    4.3
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    49,
    3.9
  )
];
