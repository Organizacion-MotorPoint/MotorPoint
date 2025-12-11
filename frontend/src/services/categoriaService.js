
//  MOCK TEMPORAL — luego se conecta al backend
let categoriasMock = [
  { id: 1, nombre: "Repuestos" },
  { id: 2, nombre: "Accesorios" },
  { id: 3, nombre: "Llantas" },
];

export const getCategorias = async () => {
  return Promise.resolve(categoriasMock);
};

export const createCategoria = async (categoria) => {
  const nueva = {
    id: Date.now(),
    ...categoria,
  };
  categoriasMock.push(nueva);
  return Promise.resolve(nueva);
};

export const updateCategoria = async (id, categoriaActualizada) => {
  categoriasMock = categoriasMock.map((c) =>
    c.id === id ? { ...c, ...categoriaActualizada } : c
  );
  return Promise.resolve(categoriaActualizada);
};

export const deleteCategoria = async (id) => {
  categoriasMock = categoriasMock.filter((c) => c.id !== id);
  return Promise.resolve(true);
};
