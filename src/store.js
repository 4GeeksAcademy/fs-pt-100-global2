export const initialStore = () => {
  return {
    message: null,
    agendas: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}
//NADA PUEDE SER ASYNC --> Fetch!!! 
export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'getUserAgenda':
      return {
        ...store, agenda: action.payload
      }
    case 'getAllAgendas':
      return {
        ...store,
        agendas: action.payload
      }


    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }
}
