const getEpisodes = async () => {
    try {
        let episodesArr = [];
        let charactersArr = [];

        const response = await fetch('https://rickandmortyapi.com/api/episode');
        const { info } = await response.json();
        const episodesPages = info.pages;

        for (let i = 1; i <= episodesPages; i++) {
            const response = await fetch(
                `https://rickandmortyapi.com/api/episode?page=${i}`
            );
            const { results } = await response.json();
            episodesArr = episodesArr.concat(results);
        }

        const janEpisodesArr = episodesArr.filter((episode) =>
            episode.air_date.includes('January')
        );

        for (const episode of janEpisodesArr) {
            for (const character of episode.characters) {
                const response = await fetch(`${character}`);
                const { name } = await response.json();

                charactersArr.includes(name)
                    ? charactersArr
                    : charactersArr.push(name);
            }
        }
        return charactersArr;
    } catch (error) {
        console.log(error);
    }
};

console.log(getEpisodes());
