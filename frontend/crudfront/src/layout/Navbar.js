import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Integracion Continua Grupo 16 [B01]
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex">
          <Link className="btn btn-outline-light me-2" to="/adduser">
            Agregar Usuario
          </Link>
          <Link to="/usuarios" className="btn btn-outline-light me-2">
          Administrar Usuarios
        </Link>
        <Link to="/" className="btn btn-outline-light me-2 ">
          Inicio
        </Link>
        </div>

         
         
        </div>
      </nav>
    </div>
  );
}
