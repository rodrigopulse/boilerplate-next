export default function menu(req, res) {
  res.status(200).json([
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Sobre",
      path: "/sobre",
    },
  ]);
}
