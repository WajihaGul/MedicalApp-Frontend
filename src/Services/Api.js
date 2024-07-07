const API_BASE_URL = 'http://localhost:8080';
const doctorId = 3;

export const fetchAppointments = async () => {
  const response = await fetch(`${API_BASE_URL}/${doctorId}/appointments`);
  return response.json();
};

export const acceptAppointment = async (appointmentId) => {
  const response = await fetch(`${API_BASE_URL}/${appointmentId}/accept`, {
    method: 'PUT'
  });
  return response.text();
};

export const cancelAppointment = async (appointmentId) => {
  const response = await fetch(`${API_BASE_URL}/cancelAppointment/${appointmentId}`, {
    method: 'DELETE'
  });
  return response.json();
};
