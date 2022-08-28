const input = document.querySelector(`#input`);
const resultado = document.querySelector(`#resultado`);

form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const ip = input.value;

    if (!ip) return;

    fetch(`http://ipwho.is/${ip}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            const p = document.createElement(`p`);
            p.textContent = `Esa IP corresponde a: ${data.city} - ${data.country} - ${data.continent}`;
            resultado.appendChild(p);
        })

})

