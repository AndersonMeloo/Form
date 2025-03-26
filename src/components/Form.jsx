import React, { useState } from 'react'

function Form() {

    // formData - Armaneza os Dados do Formulário, inicialmente vazias
    // setFormData - Recebe os valores do formData da Properties
    const [formData, setFormData] = useState({
        name: '',
        sobrenome: '',
        email: '',
        dataNascimento: '',
        senha: ''
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
        fetch('register-user.php', { // Requisição da endpoint
            method: 'POST', // Método HTTP usado (POST para Enviar os Dados)
            headers: { // Define o tipo de conteúdo que será enviado
                'Content-Type': 'application/json', // Conteúdo em Formato JSON
            },
            body: JSON.stringify(formData), // Converte o objeto 'formData' em String JSON e envia para a Requisição
        })
            .then(response => response.json())  // Quando resposta chega, converte para JSON
            
            // Tratar a resposta do servidor
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

                <label htmlFor="dataNascimento">Data de Nascimento</label>
                <input type="date"
                    name="dataNascimento"
                    id="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                />

                <label htmlFor="senha">Senha</label>
                <input
                    type="senha"
                    name="senha"
                    id="senha"
                    value={formData.senha}
                    onChange={handleChange}
                />

                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default Form
