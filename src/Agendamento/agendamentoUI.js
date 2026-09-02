import * as data from "./dados.js";
var agendamentos = data.agendamentosIniciais;
const avisoVazio = document.querySelector("#agentamentos-vazios");

const renderAgendamentos = () => {
    const containerAgendamentosEl = document.querySelector(".container-agendamentos");
    containerAgendamentosEl.innerHTML = "";
    agendamentos.map((item) => {
        const rowEl = document.createElement("div");
        rowEl.classList.add("row");
        const idEl = document.createElement("div");
        const solicitanteEl = document.createElement("div");
        const blocoEl = document.createElement("div");
        const salaEl = document.createElement("div");
        const dataEl = document.createElement("div");
        const turnoEl = document.createElement("div");
        const deleteEl = document.createElement("div");

        idEl.classList.add("col");
        idEl.classList.add("fw-bold");
        solicitanteEl.classList.add("col");
        blocoEl.classList.add("col");
        salaEl.classList.add("col");
        dataEl.classList.add("col");
        turnoEl.classList.add("col");
        deleteEl.classList.add("col");

        idEl.textContent = item.id;
        solicitanteEl.textContent = item.solicitante;
        blocoEl.textContent = item.bloco;
        salaEl.textContent = item.sala;
        dataEl.textContent = new Date(item.data).toLocaleDateString();
        turnoEl.textContent = item.turno;
        deleteEl.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#ff0000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-trash-icon lucide-trash'><path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6'/><path d='M3 6h18'/><path d='M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'/></svg>";

        rowEl.appendChild(idEl);
        rowEl.appendChild(solicitanteEl);
        rowEl.appendChild(blocoEl);
        rowEl.appendChild(salaEl);
        rowEl.appendChild(dataEl);
        rowEl.appendChild(turnoEl);
        rowEl.appendChild(deleteEl);

        deleteEl.addEventListener('click', () => {
            agendamentos = agendamentos.filter((agendamentos) => agendamentos.id !== item.id);
            renderAgendamentos();
        });

        containerAgendamentosEl.appendChild(rowEl);
    });

    if(agendamentos.length === 0){
        avisoVazio.classList.add("visible");
    }else{
        avisoVazio.classList.remove("visible");
    }
}

const renderSelectForm = () => {
    const selectBlocoForm = document.querySelector("#blocoForm");
    const selectSalaForm = document.querySelector("#salaForm");

    data.infraestrutura.map((item) => {
        const option = document.createElement("option");
        option.value = item.bloco;
        option.textContent = item.bloco;
        selectBlocoForm.appendChild(option);
    });

    selectBlocoForm.addEventListener('change', (e) => {
        const value = e.target.value;
    });
}

export {renderAgendamentos, renderSelectForm};