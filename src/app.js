import * as agendamentoModule from "./Agendamento/agendamentoModule.js";

agendamentoModule.renderAgendamentos();
agendamentoModule.renderSelects();
agendamentoModule.renderFiltersSelects();
agendamentoModule.renderMetricas();

document.querySelector('#btnSalvarAgendamento').addEventListener('click', () => agendamentoModule.adicionarNovoAgendamento());

document.querySelector('#nomeFilter').addEventListener('input', () => agendamentoModule.renderAgendamentos());
document.querySelector('#dataFilter').addEventListener('change', () => agendamentoModule.renderAgendamentos());
document.querySelector('#blocoFilter').addEventListener('change', () => agendamentoModule.renderAgendamentos());
document.querySelector('#salaFilter').addEventListener('change', () => agendamentoModule.renderAgendamentos());