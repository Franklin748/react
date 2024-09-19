import React, { useState } from 'react';

const CalculaIdade = () => {
  const [anoNascimento, setAnoNascimento] = useState('');
  const [mesNascimento, setMesNascimento] = useState('');
  const anoAtual = 2024;
  const mesAtual = 9; // Setembro

  const calcularIdade = () => {
    const idade = anoAtual - anoNascimento;
    if (mesNascimento == mesAtual) {
      return `Você tem ${idade} anos e completará aniversário este mês.`;
    } else if (mesNascimento > mesAtual) {
      return `Você tem ${idade - 1} anos.`;
    } else {
      return `Você tem ${idade} anos.`;
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Digite o ano de nascimento"
        value={anoNascimento}
        onChange={(e) => setAnoNascimento(e.target.value)}
      />
      <select value={mesNascimento} onChange={(e) => setMesNascimento(e.target.value)}>
        <option value="">Selecione o mês</option>
        <option value="1">Janeiro</option>
        <option value="2">Fevereiro</option>
        <option value="3">Março</option>
        <option value="4">Abril</option>
        <option value="5">Maio</option>
        <option value="6">Junho</option>
        <option value="7">Julho</option>
        <option value="8">Agosto</option>
        <option value="9">Setembro</option>
        <option value="10">Outubro</option>
        <option value="11">Novembro</option>
        <option value="12">Dezembro</option>
      </select>
      <button onClick={calcularIdade}>Descobrir a idade</button>
      <p>{calcularIdade()}</p>
    </div>
  );
};

export default CalculaIdade;

