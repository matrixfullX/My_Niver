AOS.init();

    const dataDoEvento = new Date('Sep 28, 2025 00:00:00');
    const timesTemp = dataDoEvento.getTime();

    const contaOTempo = setInterval(function() {
        const agora = new Date();
        const timesTempAtual = agora.getTime();

        const distanciaAteOEvento = timesTemp - timesTempAtual;

        const diasEmMs = 1000 * 60 * 60 * 24;
        const horaEmMs = 1000 * 60 * 60;
        const minutoEmMs = 1000 * 60;
        const segundosEmMs = 1000 * 60;

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horaEmMs);
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

        document.getElementById('contador').innerHTML = `"${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s"`;

        if (distanciaAteOEvento < 0) {
            clearInterval(contaOTempo);
            document.getElementById('contador').innerHTML = `"Já Acabou"`;
        }

}, 1000);