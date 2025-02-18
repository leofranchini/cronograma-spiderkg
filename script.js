document.addEventListener("DOMContentLoaded", () => {
    const daysOfWeek = [
        { day: "Segunda-feira, 17/02", schedule: [
            { time: "21:00", title: "Pesadelo na Cozinha", image: "./images/pesadelo-na-cozinha.jpg", details: "Temporada 4 Episódio 2 - Bar do Dedé" },
            { time: "23:00", title: "Carry the Glass", image: "./images/carry-the-glass.jpg", detailsImage: "journal_large.jpg", details: `Carry the Grass é um jogo multiplayer em que duas pessoas devem trabalhar juntas para transportar uma placa de vidro através de obstáculos no mapa <a class="linkGrass" href="https://www.youtube.com/watch?v=W3L5ifvKgxU" target="_blank">Clique para ver a gameplay</a>
`},
            { time: "00:30", title: "<strong>Cineblabes: </strong> Star Wars: Episódio IV - Uma Nova Esperança", image: "./images/star-wars-1.jpg", detailsImage: "movie_large.jpg", details: `A princesa Leia é mantida refém pelas forças imperiais comandadas por Darth Vader. Luke Skywalker e o capitão Han Solo precisam libertá-la e restaurar a liberdade e a justiça na galáxia. <a class="trailerSTW" href="https://www.youtube.com/watch?v=L-_xHEv0l-w" target="_blank">Trailer</a>` }
        ]},
        { day: "Terça-feira, 18/02", schedule: [
            { time: "Início", title: "Reacts", image: "./images/youtube.png", detailsImage: "tech_large.jpg", details: "Reações de vídeos aleatórios no Youtube. Geralmente relacionados ao universo Pop ou entretenimento no geral." },
            { time: "21:00", title: "Solteiros Ilhados e Desesperados", image: "./images/solteiros2.png", detailsImage: "sports_large.jpg", details: `Reality Sul-Coreano no qual solteiros e solteiras precisam encontrar o amor verdadeiro, já que só os casais podem sair e desfrutar um encontro romântico. <a class="LinkSolteiros" href="https://www.youtube.com/watch?v=N-QI4XU_Tys" target="_blank">Trailer</a>` },
            { time: "23:00", title: "Unchaterd 3", image: "./images/uncharted3.png", detailsImage: "documentary_large.jpg", details: `Um jogo de aventura em que você controla Nathan Drake, um caçador de tesouros em busca de uma cidade perdida. Ele viaja pelo mundo, resolve enigmas, enfrenta inimigos e vive cenas de ação cinematográficas <a class="uncharted" href="https://www.youtube.com/watch?v=fvpu003drCk" target="_blank">Trailer</a>` }
        ]},
        { day: "Quarta-feira, 19/02", schedule: [
            { time: "17:00", title: "Real Madrid x Manchester City", image: "./images/realxcity.png", detailsImage: "interview_large.jpg", details: `Real busca confirmar a classificação em casa, enquanto o City precisa desesperadamente de uma reação após sofrer a virada na ida <a class="linkRealCity" href="https://www.instagram.com/p/DGEhhzxOkuu/" target="_blank">React Jogo de Ida</a>` },
            { time: "19:00", title: "Killer Frequency", image: "./images/killerfrequency.jpg", detailsImage: "art_large.jpg", details: `Um jogo de terror onde você é um radialista que precisa ajudar ouvintes em perigo a escaparem de um serial killer. Enquanto toca músicas e atende ligações, você toma decisões que podem salvar vidas ou condená-las. <a class="linkKiller" href="https://www.youtube.com/watch?v=4pxsYSbGjjI" target="_blank">Clique para ver a gameplay</a>` },
            { time: "00:00", title: "<strong>Cibeblabes: </strong>Star Wars: O Império Contra-Ataca", image: "./images/starwars2.jpg", detailsImage: "comedy_large.jpg", details: `Yoda treina Luke Skywalker para ser um cavaleiro Jedi. Han Solo corteja a Princesa Leia enquanto Darth Vader retorna para combater as forças rebeldes que tentam salvar a galáxia.
<a class="linkStarWars" href="https://www.youtube.com/watch?v=spIUd6vbAdU" target="_blank">Trailer</a>` }
        ]},
        { day: "Quinta-feira, 20/02", schedule: [
            { time: "Início", title: "Reacts", image: "./images/youtube.png", detailsImage: "kids_large.jpg", details: "Reações de vídeos aleatórios no Youtube. Geralmente relacionados ao universo Pop ou entretenimento no geral." },
            { time: "21:00", title: "Gameplay com os Idiotas", image: "./images/gameplayidiotas.png", detailsImage: "politics_large.jpg", details: "É nessa hora que debatemos durante um longo tempo até decidirmos jogar um jogo de qualidade duvidosa" },
            { time: "00:00", title: "<strong>Cibeblabes: </strong>Star Wars: O Retorno do Jedi", image: "./images/starwars3.jpg", detailsImage: "travel_large.jpg", details: `Luke Skywalker e seus amigos viajam para Tatooine e salvam seu amigo Han Solo do lorde do crime Jabba o Hutt. O Império Galático começou a construção de uma segunda Estrela da Morte, visando aniquilar a Aliança Rebelde, mas seu término está comprometido pela Frota Rebelde, que insiste em dar um fim ao Império. Neste meio tempo, Luke Skywalker luta para resgatar Vader, um ex-Jedi, de volta do lado sombrio da Força.
<a class="linkStarWars" href="https://www.youtube.com/watch?v=T0_ttlBLd9g" target="_blank">Trailer</a>` }
        ]},
        { day: "Sexta-feira, 21/02", schedule: [
            { time: "Início", title: "Solteiros Ilhados e Desesperados: Season 3", image: "./images/solteiros.jpg", detailsImage: "worldnews_large.jpg", details: `Reality Sul-Coreano no qual solteiros e solteiras precisam encontrar o amor verdadeiro, já que só os casais podem sair e desfrutar um encontro romântico. <a class="solteiros" href="https://www.youtube.com/watch?v=ci0rH98VqJ8" target="_blank">Trailer</a>` },
            { time: "21:00", title: "Gameplay com os Idiotas", image: "./images/gameplayidiotas.png", detailsImage: "music_large.jpg", details: "É nessa hora que debatemos durante um longo tempo até decidirmos jogar um jogo de qualidade duvidosa" },
            { time: "00:00", title: "Gameplay com os Idiotas", image: "./images/gameplayidiotas.png", detailsImage: "mystery_large.jpg", details: "É nessa hora que debatemos durante um longo tempo até decidirmos jogar um jogo de qualidade duvidosa" }
        ]}
    ];

    let currentDayIndex = 0;

    const dayTitle = document.getElementById("dayTitle");
    const scheduleContainer = document.getElementById("schedule");

    const videoElement = document.createElement('video');
    videoElement.setAttribute('autoplay', '');
    videoElement.setAttribute('muted', '');
    videoElement.setAttribute('loop', '');
    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', 'video.mp4');
    sourceElement.setAttribute('type', 'video/mp4');
    videoElement.appendChild(sourceElement);
    document.body.appendChild(videoElement);
    

    function renderSchedule() {
        const currentDay = daysOfWeek[currentDayIndex];
        dayTitle.textContent = `${currentDay.day}`;
        scheduleContainer.innerHTML = '';

        currentDay.schedule.forEach(program => {
            const programElement = document.createElement("div");
            programElement.classList.add("program");
            programElement.innerHTML = `
                <img src="${program.image}" alt="${program.title}">
                <div class="program-title">
                    <strong>${program.time}</strong> - ${program.title}
                </div>
                <div class="arrow">▼</div>
            `;

            const detailsElement = document.createElement("div");
            detailsElement.classList.add("details");
            detailsElement.innerHTML = `
                
                <p>${program.details}</p>
            `;

            programElement.appendChild(detailsElement);
            scheduleContainer.appendChild(programElement);

            programElement.addEventListener("click", () => {
                const isExpanded = programElement.classList.contains("expanded");
                document.querySelectorAll(".program").forEach(p => {
                    p.classList.remove("expanded");
                    p.querySelector(".details").style.maxHeight = "0px";
                });

                if (!isExpanded) {
                    programElement.classList.add("expanded");
                    detailsElement.style.maxHeight = "800px";
                }
            });
        });
    }

    document.getElementById("prevDay").addEventListener("click", () => {
        if (currentDayIndex > 0) {
            currentDayIndex--;
            renderSchedule();
        }
    });

    document.getElementById("nextDay").addEventListener("click", () => {
        if (currentDayIndex < daysOfWeek.length - 1) {
            currentDayIndex++;
            renderSchedule();
        }
    });

    renderSchedule();
});
