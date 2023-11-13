import { RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css'

export default function App() {
  return (
    <Container fluid id="container">
      <RouterProvider router={router} />
    </Container>
  )
}