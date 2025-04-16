import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import contactService from "../services/contactsServices.js";
import { Card } from "../components/card.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()


	const fetchAllAgendas = async () => {
		try {
			const data = await contactService.loadAllAgendas();
			console.log(data)
			dispatch({ type: 'getAllAgendas', payload: data.agendas })
		} catch (error) {
			console.log(error)
		}
	}
	const fetchAgenda = async (username) => {
		try {
			const data = await contactService.getAgenda(username);
			console.log(data)
			dispatch({ type: 'getUserAgenda', payload: data.contacts })
		} catch (error) {
			console.log(error)
		}
	}


	useEffect(() => {

		// fetchAllAgendas()
		fetchAgenda('pepe')
	}, [])


	return (
		<div className=" mt-5">
			<div className="row">

				{store.agenda?.map(el => <Card
					key={el.id}
					cid={el.id}
					name={el.name}
					phone={el.phone}
					email={el.email}
					address={el.address}
				/>
				)}
			</div>
			<button onClick={() => contactService.createAgenda('pepe')}>create user</button>
		</div>
	);
}; 