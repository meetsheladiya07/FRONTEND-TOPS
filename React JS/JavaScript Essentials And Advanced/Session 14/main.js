import {
    formatSongTitle,
    getSongDurationInMinutes
} from "./spotifyUtils.js";

const song = {
    title: "blinding lights",
    artist: "the weeknd",
    duration: 200
};

const formattedTitle = formatSongTitle(song.title);
const formattedDuration = getSongDurationInMinutes(song.duration);

console.log("Song Title:", formattedTitle);
console.log("Artist:", song.artist);
console.log("Duration:", formattedDuration);

document.getElementById("songDetails").innerHTML = `
    <h2>${formattedTitle}</h2>
    <p>Artist: ${song.artist}</p>
    <p>Duration: ${formattedDuration}</p>
`;
