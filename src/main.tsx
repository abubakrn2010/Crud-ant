import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'antd/dist/reset.css'
import Get from "../src/Components/Get/Get"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Get/>
  </StrictMode>,
)