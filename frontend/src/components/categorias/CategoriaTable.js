import React from "react";

export default function CategoriaTable({ categorias, onEdit, onDelete }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered mt-3 shadow-sm">
        <thead
          style={{
            backgroundColor: "#0A174E",
            color: "white",
          }}
        >
          <tr>
            <th>Nombre</th>
            <th style={{ width: "180px" }}>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {categorias.map((cat) => (
            <tr key={cat.id}>
              <td>{cat.nombre}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  style={{ backgroundColor: "#10182F", border: "none" }}
                  onClick={() => onEdit(cat)}
                >
                  Editar
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  style={{ backgroundColor: "#E03535", border: "none" }}
                  onClick={() => onDelete(cat.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

          {categorias.length === 0 && (
            <tr>
              <td colSpan="2" className="text-center py-3">
                No hay categorías registradas.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
