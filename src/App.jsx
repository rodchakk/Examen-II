import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado";

function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ nombre: "", dni: "", direccion: "", email: "" });










  // GET empleados
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);














  // POST empleados

  const addEmployee = async (e) => {
    e.preventDefault();

    if (!form.nombre || !form.dni || !form.direccion || !form.email) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    if (!form.email.includes("@") || !form.email.includes(".")) {
      toast.error("El email debe tener @ y .");
      return;
    }

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const newEmployee = await res.json();
    setEmployees([...employees, newEmployee]);
    setForm({ nombre: "", dni: "", direccion: "", email: "" });

    toast.success("✅ Empleado agregado con éxito!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de empleados</h1>












      {/* Formulario */}
      <form onSubmit={addEmployee} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Nombre"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="DNI"
          value={form.dni}
          onChange={(e) => setForm({ ...form, dni: e.target.value })}
        />
        <input
          type="text"
          placeholder="Dirección"
          value={form.direccion}
          onChange={(e) => setForm({ ...form, direccion: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button type="submit">Guardar</button>
      </form>











      {/* Tabla */}
      <table border="1" cellPadding="8" style={{ marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Dirección</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.nombre}</td>
              <td>{emp.dni}</td>
              <td>{emp.direccion}</td>
              <td>{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>










      {/* Alertas */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
