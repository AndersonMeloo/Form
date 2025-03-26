import React, { useState } from 'react'

function Form() {

    // formData - Armaneza os Dados do Formulário, inicialmente vazias
    // setFormData - Recebe os valores do formData da Properties
    const [formData, setFormData] = useState({
        name: '',
        sobrenome: '',
        email: '',
        date: '',
        password: ''
    })

    // Função chamada sempre que o Valor de um Campo do Formulário for mudada
    const handleChange = (e) => {
        // Pega valor 'name' digitado pelo usúario
        const { name, value } = e.target

        // Atualiza estado (formData) com o Novo valor do Campo Correspondente
        setFormData({
            ...formData, // Mantém os valores anteriores do formData
            [name]: value // Atualiza o campo específico com o novo valor
        })
    }

    const handleSubmit = (e) => {
        // Evita Carregamento da Página
        e.preventDefault()

        // Enviando os dados para o Back-End 
        fetch('meu-endpoint.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json()) // Tratar a resposta do servidor
            .then(data => {
                console.log('Cadastro enviado com sucesso', data);
            })
            .catch((e) => {
                console.error('Erro ao enviar cadastro', e);
            })
    }

    return (
        <div>
            <form action="" method='POST'>

                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name} // Valor controlado pelo useSate 'formData'
                    onChange={handleChange} // Atualiza o useState com o novo valor sempre que o campo mudar
                />

                <label htmlFor="sobrenome">Sobrenome</label>
                <input
                    type="text"
                    name="sobrenome"
                    id="sobrenome"
                    value={formData.sobrenome}
                    onChange={handleChange}
                />

                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="date">Data de Nascimento</label>
                <input type="date"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                />

                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default Form
