import React, { useEffect, useState } from "react";
import CategoriaTable from "./CategoriaTable";
import CategoriaForm from "./CategoriaForm";
import {getCategorias, createCategoria, updateCategoria, deleteCategoria } from "../../services/categoriaService";

export default function CategoriasPage() {
  const [categorias, setCategorias] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [categoriaEdit, setCategoriaEdit] = useState(null);

  useEffect(() => {
    cargarCategorias();
  }, []);

  const cargarCategorias = async () => {
    const data = await getCategorias();
    setCategorias(data);
  };

  const abrirCrear = () => {
    setCategoriaEdit(null);
    setModalOpen(true);
  };

  const abrirEditar = (categoria) => {
    setCategoriaEdit(categoria);
    setModalOpen(true);
  };

  const guardarCategoria = async (categoria) => {
    if (categoriaEdit) {
      await updateCategoria(categoriaEdit.id, categoria);
    } else {
      await createCategoria(categoria);
    }
    cargarCategorias();
  };

  const eliminarCategoria = async (id) => {
    if (window.confirm("¿Eliminar esta categoría?")) {
      await deleteCategoria(id);
      cargarCategorias();
    }
  };

  return (
    <div className="container py-4">

      <h2
        className="mb-4"
        style={{ color: "#0A174E", fontWeight: "700" }}
      >
        Gestión de Categorías
      </h2>

      <button
        className="btn"
        style={{
          backgroundColor: "#E03535",
          color: "white",
          fontWeight: "600",
        }}
        onClick={abrirCrear}
      >
        + Agregar Categoría
      </button>

      <div className="mt-4">
        <CategoriaTable
          categorias={categorias}
          onEdit={abrirEditar}
          onDelete={eliminarCategoria}
        />
      </div>

      {modalOpen && (
        <CategoriaForm
          show={modalOpen}
          onClose={() => setModalOpen(false)}
          onSave={guardarCategoria}
          categoria={categoriaEdit}
        />
      )}
    </div>
  );
}
