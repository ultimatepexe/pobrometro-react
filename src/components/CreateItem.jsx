import { useState } from "react"

function CreateItem({ theme, converted, addItem }) {
    const [creating, setCreating] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: ''
    })

    const img = theme ? "add-item-yellow.png" : "add-item-blue.png"

    const handleInputChange = (e) => {
        const { id, value } = e.target
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Basic validation
        if (formData.name && formData.description && formData.price && formData.image) {
            addItem(formData)
            setFormData({
                name: '',
                description: '',
                price: '',
                image: ''
            })
            setCreating(false)
        } else {
            alert('Por favor, preencha todos os campos.')
        }
    }

    if (converted) {
        if (creating) {
            return (
                <li className={`max-w-[800px] min-w-[320px] rounded-2xl justify-self-center p-4 m-2 h-full text-2xl shadow-lg border
                ${theme ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-white border-neutral-400 text-black'}`}>
                    <h2 className="justify-self-center text-3xl p-2">
                        Create Item
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" className="p-1">
                            Name:
                        </label>
                        <br />
                        <input 
                            type="text" 
                            id="name" 
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`${theme ? 'bg-neutral-900 placeholder-neutral-400 text-white focus:ring-yellow-300' : 'bg-neutral-300 placeholder-neutral-700 text-black focus:ring-blue-600'} transition-all duration-500 w-full rounded-md p-2 focus:outline-none focus:ring-2`} 
                        />
                        <br />
                        <label htmlFor="description" className="p-1">
                            Description:
                        </label>
                        <br />
                        <textarea
                            id="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows="4"
                            className={`${theme ? 'bg-neutral-900 placeholder-neutral-400 text-white focus:ring-yellow-300' : 'bg-neutral-300 placeholder-neutral-700 text-black focus:ring-blue-600'} transition-color w-full rounded-md p-2 focus:outline-none focus:ring-2 min-h-30`}
                            placeholder="Escreva a descrição aqui..."
                        />
                        <p className="text-sm text-gray-500 mt-1">
                            Dica: Use [valor] e [quantidade] na descrição para incluir o valor e a quantidade calculada automaticamente.
                        </p>
                        <br />
                        <label htmlFor="price" className="p-1">
                            Price:
                        </label>
                        <br />
                        <input 
                            type="text" 
                            id="price" 
                            value={formData.price}
                            onChange={handleInputChange}
                            className={`${theme ? 'bg-neutral-900 placeholder-neutral-400 text-white focus:ring-yellow-300' : 'bg-neutral-300 placeholder-neutral-700 text-black focus:ring-blue-600'} transition-all duration-500 w-full rounded-md p-2 focus:outline-none focus:ring-2`} 
                        />
                        <br />
                        <label htmlFor="image" className="p-1">
                            Image URL:
                        </label>
                        <br />
                        <input 
                            type="text" 
                            id="image" 
                            value={formData.image}
                            onChange={handleInputChange}
                            className={`${theme ? 'bg-neutral-900 placeholder-neutral-400 text-white focus:ring-yellow-300' : 'bg-neutral-300 placeholder-neutral-700 text-black focus:ring-blue-600'} transition-all duration-500 w-full rounded-md p-2 focus:outline-none focus:ring-2`} 
                        />
                        <br />
                        <div className="flex justify-between">
                            <button 
                                type="submit"
                                className={`${theme ? 'bg-yellow-300 text-black' : 'bg-blue-600 text-white'} font-semibold cursor-pointer p-1 mt-2 rounded-md`}
                            >
                                Create
                            </button>
                            <button 
                                className={`cursor-pointer text-white bg-red-600 p-1 mt-2 rounded-md font-semibold`}
                                onClick={() => setCreating(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </li>
            )
        }

        return (
            <li onClick={() => setCreating(true)}
            className={`cursor-pointer max-w-[800px] min-w-[320px] rounded-2xl justify-self-center m-2 h-48 text-3xl shadow-lg border
            grid grid-cols-2 grid-rows-1 
            text-center
            md:w-[720px]
            ${theme ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-white border-neutral-400 text-black'}
            `}>
                <img src={img} className=" h-48 w-fit" />
                <h2 className={`p-2 w-max self-center`}>
                    Create Item
                </h2>
            </li>
        )
    }
}

export default CreateItem