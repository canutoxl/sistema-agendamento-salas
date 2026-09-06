import * as agendamentoModule from "./Agendamento/agendamentoModule.js";
import * as agendamentoService from "./Agendamento/agendamentoService.js";

agendamentoModule.renderAgendamentos();
agendamentoModule.renderSelects();

document.querySelector('#btnSalvarAgendamento').addEventListener('click', () => agendamentoModule.adicionarNovoAgendamento()); 