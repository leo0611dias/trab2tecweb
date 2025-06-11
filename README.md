# Formulário Multi-Etapas em React

**ALUNOS:**  
- Leonardo Dias dos Passos Brito - 2312130234  
- Ian Miranda da Silva - 2312130090

![React Logo](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Este projeto é um template básico e reutilizável para criação de formulários multi-etapas em aplicações React, com validação de entrada de dados, integração via API REST, estrutura modular e responsividade. Ele serve como ponto de partida para aplicações modernas com cadastro e listagem dinâmicos.

---

## ✨ Funcionalidades

- **Estrutura Modular:** Componentes bem organizados e reutilizáveis (formulário, listagem, navegação, etc).
- **Validação de Formulário:** Todos os campos obrigatórios possuem validação; mensagens de erro são exibidas ao usuário. O botão "Next" só avança quando os campos da etapa atual estão válidos.
- **Estado Global:** Gerenciado por Context API, compartilhando dados entre etapas e componentes.
- **Integração com API REST:** Dados de cadastro e listagem são persistidos e recuperados de um backend REST.
- **Estilização e Responsividade:** Uso de CSS próprio e Bootstrap, com media queries para adaptação a diferentes dispositivos.
- **Navegação Simples:** Menu para alternar entre o formulário e a listagem de itens cadastrados.
- **Listagem Dinâmica:** Exibe os dados cadastrados em tempo real, buscando dados atualizados da API.
- **Feedback ao Usuário:** Mensagens de sucesso e erro durante o fluxo.

---

## 🛠️ Como usar o aplicativo

1. **Inicie o backend REST** (por exemplo, usando [json-server](https://github.com/typicode/json-server) ou outro backend na rota `http://localhost:3001/usuarios`).

2. **Instale as dependências e rode a aplicação React:**
   ```bash
   npm install
   npm start
   ```

3. **Fluxo de uso:**
   - Acesse a página inicial para preencher o formulário de cadastro multi-etapas.
   - Todos os campos obrigatórios possuem validação. Erros serão exibidos abaixo dos campos e você só avança para a próxima etapa quando todos os obrigatórios estiverem válidos.
   - Após concluir o cadastro, os dados são salvos via API e você verá uma mensagem de sucesso.
   - Acesse a aba “Listagem” no menu superior para visualizar todos os cadastros já realizados.
   - O layout é responsivo e pode ser utilizado em celulares, tablets e desktop.

4. **Dicas:**
   - Se alterar o endpoint da API, ajuste as URLs nos arquivos `OrderConfirmation.js` e `listagem.js`.
   - Para testes rápidos, use o comando:
     ```bash
     npx json-server --watch db.json --port 3001
     ```
   - O arquivo `db.json` deve conter:
     ```json
     {
       "usuarios": []
     }
     ```

---

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **Context API**: Estado global e compartilhamento de dados entre componentes.
- **Bootstrap + CSS customizado**: Layout, responsividade e estilo.
- **JavaScript (ES6+)**: Lógica e manipulação de dados.
- **React Router**: Navegação entre páginas/components.
- **API REST (mockada/externa)**: Persistência dos dados de usuários.

---

## 🖥️ Estrutura do Projeto

```
src/
  components/
    billing/
      ShippingAddress.js
      PaymentDetails.js
      ReviewOrder.js
      OrderConfirmation.js
      index.js
    common/
      MultiStepForm/
        MultiStepForm.js
        ProgressBar.js
        NavigateButton.js
      TextInput.js
    listagem.js
  context/
    orderContext.js
  App.js
  App.css
  index.js
```

---
