# Sistema de Estacionamento

Este é um projeto final da disciplina de **Desenvolvimento Web I** do curso de **Análise e Desenvolvimento de Sistemas**. O objetivo é criar um sistema de gerenciamento de estacionamento, com funcionalidades como criação de tickets, controle de tarifas, aplicação de descontos e geração de relatórios diários. O sistema também possui autenticação para diferentes tipos de usuários, como **ADMIN** e **Funcionário**.

## Link de acesso

https://estacionamento-6a6b1.web.app

## Funcionalidades

- **Autenticação de Usuários**: Tela de login para diferenciação entre o tipo de usuário (ADMIN e Funcionário).
- **Gerenciamento de Tickets**: Criação de tickets com dados de entrada e saída, placa do veículo, nome completo, CPF, telefone e valor pago.
- **Cálculo de Tarifa**: Tarifa de estacionamento com desconto após a primeira hora e aplicação de descontos para convênios.
- **Visualização e Edição de Tickets**: Capacidade de editar a hora de saída de um ticket e ver os detalhes completos de cada ticket.
- **Layout Responsivo**: Utilização de bibliotecas CSS como Bootstrap para criar um design responsivo e agradável.

## Como Usar

1. **Login**:
   - Utilize o usuário **admin** com a senha **admin123** para acessar a área administrativa.
   - Utilize o usuário **funcionario** com a senha **funcionario123** para acessar a área de funcionário (com menos permissões).

2. **Adicionar Novo Ticket**:
   - Clique em "Novo Ticket" para preencher as informações do ticket, incluindo placa do veículo, nome completo, CPF, telefone e hora de entrada.
   - O valor do estacionamento será calculado com base no tempo de permanência e na tarifa definida.

## Tecnologias Utilizadas

- **HTML**: Estruturação da página.
- **CSS (Bootstrap)**: Estilização e design responsivo.
- **JavaScript**: Funcionalidades dinâmicas e manipulação de dados.
- **XML**: Armazenamento de dados simulando um banco de dados.
- **GitHub**: Controle de versão e armazenamento do código.

## Estrutura do Projeto

/estacionamento │ 
├── index.html # Página principal (Login e gerenciamento de tickets) 
├── style.css # Estilos e layout da página 
├── script.js # Funcionalidades principais (login, criação de tickets, etc) 
├── dados.xml # Dados simulando o banco de dados de tickets 
├── README.md # Informações sobre o projeto

## Equipe de alunos

- **Matheus dos Anjos de Oliveira**
- **Vitor Siedschlag Hervella**

## Como Rodar o Projeto

1. Clone o repositório em sua máquina:
   ```bash
   git clone https://github.com/matheusdsanjos/estacionamento.git

2. Abra o arquivo index.html em seu navegador.
