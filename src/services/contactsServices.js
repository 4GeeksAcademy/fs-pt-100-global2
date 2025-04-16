const contactService = {}


contactService.loadAllAgendas = async () => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error)
    }
}


contactService.getAgenda = async (slug) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/'+slug)
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

contactService.createContact = async (payload) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/pepe/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        const data = await resp.json()
        return contactService.getAgenda('pepe')
    } catch (error) {
        console.log(error)
    }
}


contactService.createAgenda = async (slug) => {
    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/'+slug, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error)
    }
}


contactService.deleteContact = async (slug, id) => {
    try {
       await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}` , {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
  
        return contactService.getAgenda('pepe')
    } catch (error) {
        console.log(error)
    }
}

contactService.editContact = async (slug, id, formdata) => {
    try {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}` , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        } )
         return contactService.getAgenda(slug)
     } catch (error) {
         console.log(error)
     }
}

export default contactService