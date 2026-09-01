import * as data from "./dados.js";

const renderAgendamentos = () => {
    const containerAgendamentosEl = document.querySelector(".container-agendamentos");
    data.agendamentosIniciais.map((item) => {
        const rowEl = document.createElement("div");
        rowEl.classList.add("row");
        const idEl = document.createElement("div");
        const solicitanteEl = document.createElement("div");
        const blocoEl = document.createElement("div");
        const salaEl = document.createElement("div");
        const dataEl = document.createElement("div");
        const turnoEl = document.createElement("div");

        idEl.classList.add("col");
        solicitanteEl.classList.add("col");
        blocoEl.classList.add("col");
        salaEl.classList.add("col");
        dataEl.classList.add("col");
        turnoEl.classList.add("col");

        idEl.textContent = item.id;
        solicitanteEl.textContent = item.solicitante;
        blocoEl.textContent = item.bloco;
        salaEl.textContent = item.sala;
        dataEl.textContent = new Date(item.data).toLocaleDateString();
        turnoEl.textContent = item.turno;

        rowEl.appendChild(idEl);
        rowEl.appendChild(solicitanteEl);
        rowEl.appendChild(blocoEl);
        rowEl.appendChild(salaEl);
        rowEl.appendChild(dataEl);
        rowEl.appendChild(turnoEl);

        containerAgendamentosEl.appendChild(rowEl);
    });
}

export {renderAgendamentos};