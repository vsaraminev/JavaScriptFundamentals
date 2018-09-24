function nowPlaying(input) {
    let trackName = input[0];
    let artistName = input[1];
    let duration = input[2];

    let result = `Now Playing: ${artistName} - ${trackName} [${duration}]`;

    console.log(result);
}

nowPlaying(['Number One', 'Nelly', '4:09']);