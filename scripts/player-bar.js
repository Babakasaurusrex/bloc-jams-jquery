{
  $('button#play-pause').on('click', function(){
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyplaying);
    const nextSongIndex = currentSongIndex + 1;
    const nextSong = album.songs[nextSongIndex];
    player.playpause(nextSongIndex);
  });
}
