import * as agendamentoUI from './agendamentoUI.js';
import * as agendamentoService from './agendamentoService.js';

const renderAgendamentos = () => agendamentoUI.tabelaAgendamentos();
const renderSelects = () => agendamentoUI.dadosSelectAgendamento();

const adicionarNovoAgendamento = () => {
    const nome = document.querySelector('#nomeForm');
    const bloco = document.querySelector('#blocoForm');
    const sala = document.querySelector('#salaForm');
    const data = document.querySelector('#dataForm');
    const turno = document.querySelector('#turnoForm');

    const avisoDadosVazios = document.querySelector('#form-dados-vazios-aviso');
    const avisoDadosExistentes = document.querySelector('#form-dados-existentes-aviso');

    const modalElement = document.getElementById('modalNovoAgendamento');

    agendamentoService.novoAgendamento(nome, bloco, sala, data, turno, avisoDadosVazios, avisoDadosExistentes, modalElement);
    renderAgendamentos();
}

export { renderAgendamentos, renderSelects, adicionarNovoAgendamento }