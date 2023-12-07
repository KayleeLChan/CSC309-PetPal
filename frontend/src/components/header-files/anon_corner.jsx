import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"


const AnonCorner = () => {
    const navigate = useNavigate() 
  
    function handleLoginCLick(){
      navigate(`/accounts`)
    }
  
    function handleRegisterClick(){
      navigate(`/accounts/registration/seeker`)
    }

    const account_type = localStorage.getItem("accounttype")
    const user_id = localStorage.getItem("user_id")
    
  
      return (
        <>
              <div className="text-primary-orange">
                  <Button variant="primary-cream" className="m-3 ms-0 shadow-sm" type="button"onClick={handleLoginCLick}>
                    Log In
                  </Button>
              </div>
              <div className="text-primary-brown pe-3">
                  <Button variant="primary-orange" className="m-3 ms-0 shadow-sm" type="button" onClick={handleRegisterClick}>
                    Sign Up
                  </Button>
              </div>
        </>
      );
  }
  
  export default AnonCorner;