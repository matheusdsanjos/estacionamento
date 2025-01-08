// Dados fictícios de usuários para simular o login
const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'funcionario', password: 'funcionario123', role: 'funcionario' }
  ];
  
  // Armazenamento local dos tickets (simulando banco de dados)
  let tickets = [
    { plate: 'XYZ-5678', fullName: 'João Silva', cpf: '123.456.789-00', phone: '999999999', entryTime: '08/01/2025 09:00', exitTime: '08/01/2025 10:00', value: 5.00 },
    { plate: 'LMN-1234', fullName: 'Maria Souza', cpf: '987.654.321-00', phone: '988888888', entryTime: '08/01/2025 10:00', exitTime: null, value: 10.00 }
  ];
  
  // Função para login
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      if (user.role === 'admin') {
        showParkingScreen();
      } else {
        alert("Área restrita para funcionários.");
      }
    } else {
      alert("Usuário ou senha inválidos.");
    }
  });
  
  // Função para mostrar a tela de estacionamento
  function showParkingScreen() {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("parkingScreen").style.display = "block";
    loadTickets();
  }
  
  // Função para fazer o logout
  function logout() {
    document.getElementById("parkingScreen").style.display = "none";
    document.getElementById("loginScreen").style.display = "block";
  }
  
  // Função para mostrar o formulário de novo ticket
  function showNewTicketForm() {
    document.getElementById("newTicketForm").style.display = "block"; // Exibe o formulário
    document.getElementById("ticketForm").reset(); // Limpa o formulário
  }
  
  // Função para cancelar o preenchimento do novo ticket
  function cancelNewTicket() {
    document.getElementById("newTicketForm").style.display = "none"; // Esconde o formulário
  }
  
  // Função para calcular o valor do estacionamento
  function calculateParkingFee(entryTime, exitTime) {
    const entryDate = new Date(entryTime);
    const exitDate = new Date(exitTime);
    const diffInHours = (exitDate - entryDate) / (1000 * 60 * 60); // Diferença em horas
  
    let total = 10.00; // Tarifa inicial para 1 hora
  
    if (diffInHours > 1) {
      total += (diffInHours - 1) * 5.00 * 0.5; // Desconto de 50% na segunda hora em diante
    }
  
    return total.toFixed(2);
  }
  
  // Função para criar um novo ticket com os dados preenchidos
  document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const plate = document.getElementById("plate").value;
    const fullName = document.getElementById("fullName").value;
    const cpf = document.getElementById("cpf").value;
    const phone = document.getElementById("phone").value;
    const entryTime = new Date(document.getElementById("entryTime").value).toLocaleString();
  
    const ticket = {
      plate: plate,
      fullName: fullName,
      cpf: cpf,
      phone: phone,
      entryTime: entryTime,
      exitTime: null,
      value: 10.00 // Definido como valor fixo para simplificação
    };
  
    // Adiciona o ticket à lista (simula inserção no "banco de dados")
    tickets.push(ticket);
  
    // Atualiza a tabela de tickets
    addTicket(ticket);
  
    // Atualiza o XML (simulação de salvar no XML)
    saveToXML();
  
    // Fecha o formulário após o envio
    document.getElementById("newTicketForm").style.display = "none";
  });
  
  // Função para adicionar um ticket na tabela
  function addTicket(ticket) {
    const tableBody = document.getElementById("ticketTable").getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
  
    newRow.innerHTML = `
      <td>${ticket.plate}</td>
      <td>${ticket.fullName}</td>
      <td>${ticket.entryTime}</td>
      <td>${ticket.exitTime ? ticket.exitTime : 'Em aberto'}</td>
      <td>${ticket.value}</td>
      <td>
        <button class="btn btn-info" onclick="viewTicketDetails('${ticket.plate}')">Ver Detalhes</button>
        <button class="btn btn-danger" onclick="removeTicket(this)">Remover</button>
      </td>
    `;
  }
  
  // Função para remover um ticket da tabela
  function removeTicket(button) {
    const row = button.closest('tr');
    const plate = row.cells[0].textContent; // Pega a placa do ticket a ser removido
  
    // Remove o ticket da lista simulada
    tickets = tickets.filter(ticket => ticket.plate !== plate);
  
    // Remove a linha da tabela
    row.remove();
  
    // Atualiza o XML (simulação de salvar no XML)
    saveToXML();
  }
  
  // Função para visualizar os detalhes do ticket
  function viewTicketDetails(plate) {
    const ticket = tickets.find(t => t.plate === plate);
    if (ticket) {
      document.getElementById("ticketDetails").innerHTML = `
        <strong>Placa:</strong> ${ticket.plate} <br>
        <strong>Nome:</strong> ${ticket.fullName} <br>
        <strong>CPF:</strong> ${ticket.cpf} <br>
        <strong>Telefone:</strong> ${ticket.phone} <br>
        <strong>Entrada:</strong> ${ticket.entryTime} <br>
        <strong>Saída:</strong> ${ticket.exitTime ? ticket.exitTime : 'Em aberto'} <br>
        <strong>Valor:</strong> ${ticket.value} <br>
      `;
      document.getElementById("ticketDetailPage").style.display = "block";
      document.getElementById("parkingScreen").style.display = "none";
    }
  }
  
  // Função para voltar à tela do estacionamento
  function backToParkingScreen() {
    document.getElementById("ticketDetailPage").style.display = "none";
    document.getElementById("parkingScreen").style.display = "block";
  }
  
  // Função fictícia para carregar os tickets (simula a leitura do XML)
  function loadTickets() {
    tickets.forEach(ticket => addTicket(ticket));
  }
  
  // Função fictícia para salvar dados no XML (simulação de persistência)
  function saveToXML() {
    let xmlContent = '<?xml version="1.0" encoding="UTF-8" ?>\n<parking>\n';
    tickets.forEach(ticket => {
      xmlContent += `
        <ticket>
          <plate>${ticket.plate}</plate>
          <fullName>${ticket.fullName}</fullName>
          <cpf>${ticket.cpf}</cpf>
          <phone>${ticket.phone}</phone>
          <entryTime>${ticket.entryTime}</entryTime>
          <exitTime>${ticket.exitTime ? ticket.exitTime : ''}</exitTime>
          <value>${ticket.value}</value>
        </ticket>
      `;
    });
    xmlContent += '</parking>';
  
    console.log("XML Atualizado:\n", xmlContent); // Aqui você veria a simulação do XML sendo atualizado
  }
  
