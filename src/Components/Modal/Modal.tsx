import '../Modal/modal.css'
const Modal = ({open,children}) => {
  return (
        open? <div className="dialog">
        <div className="dialog2">
       {
        children
       }

        </div>
      </div>:null
    
  )
}

export default Modal
