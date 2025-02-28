import { Cliente } from './Cliente.js'; // ✅ Importamos la clase Cliente

const cliente1 = new Cliente("Juan", "Pérez", "12345678A");

cliente1.agregarCita("Sala 1", "2025-03-15T10:00:00");
cliente1.agregarCita("Sala 2", "2025-03-15T12:00:00"); 
cliente1.agregarCita("Sala 3", "2024-02-20T09:00:00"); // No permitido
cliente1.agregarCita("Sala 4", "2025-03-15T14:00:00"); // No permitido

cliente1.programarRecordatorios();
