import * as dados from "./dados.js";
import * as agendamentoService from './agendamentoService.js';
import * as agendamentoModule from './agendamentoModule.js';

const avisoVazio = document.querySelector("#agentamentos-vazios");

const tabelaAgendamentos = () => {
    const containerAgendamentosEl = document.querySelector(".container-agendamentos");

    const nomeFilter = document.querySelector('#nomeFilter').value || "";
    const dataFilter = document.querySelector('#dataFilter').value || "";
    const blocoFilter = document.querySelector('#blocoFilter').value || "";
    const salaFilter = document.querySelector('#salaFilter').value || "";

    const agendamentosFiltrados = agendamentoService.filtrarAgendamentos(nomeFilter, dataFilter, blocoFilter, salaFilter);

    containerAgendamentosEl.innerHTML = "";

    if (window.innerWidth < 992) {
        agendamentosFiltrados.map((item) => {
            const rowEl = document.createElement("div");
            rowEl.classList.add("row");
            const colEl = document.createElement("div");
            colEl.classList.add("col-12");

            const cardEl = document.createElement("div");
            cardEl.classList.add("card");
            cardEl.classList.add("mobile");
            if (item.turno === "Manhã") {
                cardEl.classList.add("manha");
            } else if (item.turno === "Tarde") {
                cardEl.classList.add("tarde");
            } else if (item.turno === "Noite") {
                cardEl.classList.add("noite");
            }

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            cardBody.classList.add("card-mobile-body");
            cardBody.classList.add("p-4");

            const cardId = document.createElement("p");
            cardId.classList.add("card-text");
            cardId.classList.add("id");
            cardId.textContent = item.id;

            const cardExcluir = document.createElement("p");
            cardExcluir.classList.add("card-text");
            cardExcluir.classList.add("excluir");
            cardExcluir.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#ff0000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-trash-icon lucide-trash'><path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6'/><path d='M3 6h18'/><path d='M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'/></svg>";

            const cardSolicitante = document.createElement("p");
            cardSolicitante.classList.add("card-text");
            cardSolicitante.classList.add("fw-bold");
            cardSolicitante.textContent = `Soliciante: ${item.solicitante}`;

            const cardBloco = document.createElement("p");
            cardBloco.classList.add("card-text");
            cardBloco.classList.add("fw-bold");
            cardBloco.textContent = `Bloco: ${item.bloco}`;

            const cardSala = document.createElement("p");
            cardSala.classList.add("card-text");
            cardSala.classList.add("fw-bold");
            cardSala.textContent = `Sala: ${item.sala}`;

            const cardData = document.createElement("p");
            cardData.classList.add("card-text");
            cardData.classList.add("fw-bold");
            cardData.textContent = `Data: ${item.data.split('-')[2]}/${item.data.split('-')[1]}/${item.data.split('-')[0]}`;

            const cardTurno = document.createElement("p");
            cardTurno.classList.add("card-text");
            cardTurno.classList.add("fw-bold");
            cardTurno.textContent = `Turno: ${item.turno}`;


            // cardEl.innerHTML = `
            // <div class="card-body card-mobile-body">
            //     <p class="card-text id">${item.id}</p>
            //     <p class="card-text excluir"><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#ff0000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-trash-icon lucide-trash'><path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6'/><path d='M3 6h18'/><path d='M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'/></svg></p>
            //     <p class="card-text fw-bold">Solicitante: ${item.solicitante}</p>
            //     <p class="card-text fw-bold">Bloco: ${item.bloco}</p>
            //     <p class="card-text fw-bold">Sala: ${item.sala}</p>
            //     <p class="card-text fw-bold">Data: ${item.data.split('-')[2]}/${item.data.split('-')[1]}/${item.data.split('-')[0]}}</p>
            //     <p class="card-text fw-bold">Turno: ${item.turno}</p>
            // </div>
            // `;

            cardBody.appendChild(cardId);
            cardBody.appendChild(cardExcluir);
            cardBody.appendChild(cardSolicitante);
            cardBody.appendChild(cardBloco);
            cardBody.appendChild(cardSala);
            cardBody.appendChild(cardData);
            cardBody.appendChild(cardTurno);
            cardEl.appendChild(cardBody);

            colEl.appendChild(cardEl);
            rowEl.appendChild(colEl);



            cardExcluir.addEventListener('click', () => {
                agendamentoService.deleteAgentamento(item);
                agendamentoModule.renderMetricas();
                tabelaAgendamentos();
            });

            containerAgendamentosEl.appendChild(rowEl);
        });
    } else {
        agendamentosFiltrados.map((item) => {
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

            idEl.classList.add("text-start");
            solicitanteEl.classList.add("text-start");
            blocoEl.classList.add("text-start");
            salaEl.classList.add("text-start");
            dataEl.classList.add("text-start");
            turnoEl.classList.add("text-start");
            deleteEl.classList.add("text-start");

            idEl.textContent = item.id;
            solicitanteEl.textContent = item.solicitante;
            blocoEl.textContent = item.bloco;
            salaEl.textContent = item.sala;
            dataEl.textContent = `${item.data.split('-')[2]}/${item.data.split('-')[1]}/${item.data.split('-')[0]}`;
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
                agendamentoService.deleteAgentamento(item);
                agendamentoModule.renderMetricas();
                tabelaAgendamentos();
            });

            containerAgendamentosEl.appendChild(rowEl);
        });
    }

    if (agendamentoService.agendamentos.length === 0) {
        avisoVazio.classList.add("visible");
    } else {
        avisoVazio.classList.remove("visible");
    }
}

const dadosSelectAgendamento = () => {
    const selectBlocoForm = document.querySelector("#blocoForm");
    const selectSalaForm = document.querySelector("#salaForm");

    dados.infraestrutura.map((item) => {
        const option = document.createElement("option");
        option.value = item.bloco;
        option.textContent = item.bloco;
        selectBlocoForm.appendChild(option);
    });

    dados.infraestrutura[0].salas.map((sala) => {
        const option = document.createElement("option");
        option.value = sala;
        option.textContent = sala;
        selectSalaForm.appendChild(option);
    });

    selectBlocoForm.addEventListener('change', (e) => {
        const value = e.target.value;
        selectSalaForm.innerHTML = "";
        dados.infraestrutura.find((item) => item.bloco === value).salas.map((sala) => {
            const option = document.createElement("option");
            option.value = sala;
            option.textContent = sala;
            selectSalaForm.appendChild(option);
        });
    });
}

const filterSelectAgendamento = () => {
    const selectBlocoForm = document.querySelector("#blocoFilter");
    const selectSalaForm = document.querySelector("#salaFilter");

    dados.infraestrutura.map((item) => {
        const option = document.createElement("option");
        option.value = item.bloco;
        option.textContent = item.bloco;
        selectBlocoForm.appendChild(option);
    });

    // dados.infraestrutura[0].salas.map((sala) => {
    //     const option = document.createElement("option");
    //     option.value = sala;
    //     option.textContent = sala;
    //     selectSalaForm.appendChild(option);
    // });

    selectBlocoForm.addEventListener('change', (e) => {
        const value = e.target.value;
        selectSalaForm.innerHTML = "";
        const firstOption = document.createElement("option");
        firstOption.value = "";
        firstOption.textContent = "Todos";
        selectSalaForm.appendChild(firstOption);
        dados.infraestrutura.find((item) => item.bloco === value).salas.map((sala) => {
            const option = document.createElement("option");
            option.value = sala;
            option.textContent = sala;
            selectSalaForm.appendChild(option);
        });
    });
}

export { tabelaAgendamentos, dadosSelectAgendamento, filterSelectAgendamento };