// import { useState, useEffect } from "react";

// const API_URL = "https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado";

// export default function useEmployee() {   
//   const [employees, setEmployees] = useState([]);

//   // GET empleados
//   useEffect(() => {
//     fetch(API_URL)
//       .then(res => res.json())
//       .then(data => setEmployees(data));
//   }, []);

//   // POST empleados
//   const addEmployee = async (employee) => {
//     const res = await fetch(API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(employee),
//     });
//     const newEmployee = await res.json();
//     setEmployees([...employees, newEmployee]);
//   };

//   return { employees, addEmployee };
// }
