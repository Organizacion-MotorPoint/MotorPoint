import React, { useState, useEffect } from "react";

export default function CategoriaForm({ show, onClose, onSave, categoria }) {
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    if (categoria) {
      setNombre(categoria.nombre);
    } else {
      setNombre("");
    }
  }, [categoria]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() === "") {
      alert("El nombre es obligatorio");
      return;
    }
    onSave({ nombre });
    onClose();
  };

  return (
    <div
      className={`modal fade ${show ? "show d-block" : "d-none"}`}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">

          <div
            className="modal-header"
            style={{ backgroundColor: "#0A174E", color: "white" }}
          >
            <h5 className="modal-title">
              {categoria ? "Editar Categoría" : "Nueva Categoría"}
            </h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">

              <label className="form-label fw-bold">Nombre</label>
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre de la categoría"
              />

            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancelar
              </button>

              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "#E03535", color: "white" }}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Fondo oscuro */}
      <div
        className="modal-backdrop fade show"
        onClick={onClose}
      ></div>
    </div>
  );
}
