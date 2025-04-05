import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isFormSubmitted = localStorage.getItem('formSubmitted');
  return isFormSubmitted ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
