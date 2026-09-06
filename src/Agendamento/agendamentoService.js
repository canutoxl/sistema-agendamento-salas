import * as dados from './dados.js';

var agendamentos = dados.agendamentosIniciais;

const deleteAgentamento = (item) => {
    agendamentos = agendamentos.filter((agendamentos) => agendamentos.id !== item.id);
}

const novoAgendamento = (nome, bloco, sala, data, turno, avisoDadosVazios, avisoDadosExistentes, modal) => {
    const nomeValor = nome.value;
    const blocoValor = bloco.value;
    const salaValor = sala.value;
    const dataValor = data.value;
    const turnoValor = turno.value;

    const agendamentoExistente = agendamentos.filter((agendamento) => agendamento.bloco.replace(/\s+/g, '').toLowerCase() === blocoValor.replace(/\s+/g, '').toLowerCase() && agendamento.sala.replace(/\s+/g, '').toLowerCase() === salaValor.replace(/\s+/g, '').toLowerCase() && agendamento.data.replace(/\s+/g, '').toLowerCase() === dataValor.replace(/\s+/g, '').toLowerCase() && agendamento.turno.replace(/\s+/g, '').toLowerCase() === turnoValor.replace(/\s+/g, '').toLowerCase());

    avisoDadosVazios.classList.remove('visible');
    avisoDadosExistentes.classList.remove('visible');

    if (!nomeValor || !blocoValor || !salaValor || !dataValor || !turnoValor) {
        avisoDadosExistentes.classList.remove('visible');
        avisoDadosVazios.classList.add('visible');
    } else if (agendamentoExistente.length) {
        avisoDadosVazios.classList.remove('visible');
        avisoDadosExistentes.classList.add('visible');
    } else{
        const novoAgendamento = { id: agendamentos[agendamentos.length - 1].id + 1, solicitante: nomeValor, bloco: blocoValor, sala: salaValor, data: dataValor, turno: turnoValor }
        agendamentos.push(novoAgendamento);
        nome.value = "";
        bloco.value = "";
        sala.value = "";
        data.value = "";
        turno.value = "";
        bootstrap.Modal.getOrCreateInstance(modal).hide();
    }

}

export { agendamentos, deleteAgentamento, novoAgendamento }