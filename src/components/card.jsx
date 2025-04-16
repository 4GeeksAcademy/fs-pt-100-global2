import { useNavigate } from "react-router-dom"
import contactService from "../services/contactsServices"


export const Card = props => {

    const navigate = useNavigate();
    const handleDelete = async () => {
        try {
            const resp = await contactService.deleteContact('pepe', props.cid)
            console.log(resp)
        } catch (error) {
            console.log(error);
            
        }
    }


    const handleEdit = e => {
        e.preventDefault()
        navigate('/edit/'+props.cid)
    }

    return (

        <div className="card w-50 mx-auto">
                <div className="col-sm-12 col-md-4 col-lg-6 align-items-center justify-content-center">
                    <img className="img-fluid" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F439%2F863%2Foriginal%2Fvector-users-icon.jpg&f=1&nofb=1&ipt=cde9ce62afe41525a15fcfd1685ef2258293eca7b8d62411631138354a6999290" alt={props.name} />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-6">
                    <h3>{props.name}</h3>
                    <p>{props.phone}</p>
                    <p>{props.email}</p>
                    <p>{props.address}</p>
                    <button className="btn btn-danger" onClick={handleDelete}>eliminar</button>
                    <button className="btn btn-primary" onClick={handleEdit}>editar</button>

                </div>
            </div>
       
    )
}