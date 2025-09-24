import { useState } from "react";
import { toast } from "react-toastify";

export default function EmployeeForm({ addEmployee }) {
  const [form, setForm] = useState({ nombre: "", dni: "", direccion: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nombre || !form.dni || !form.direccion || !form.email) {
      toast.error("❌ Todos los campos son obligatorios");
      return;
    }

    if (!form.email.includes("@") || !form.email.includes(".")) {
      toast.error("❌ El email debe tener @ y .");
      return;
    }

    await addEmployee(form);
    setForm({ nombre: "", dni: "", direccion: "", email: "" });
    toast.success("✅ Empleado agregado con éxito!");
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
}
