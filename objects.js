var playlist = {
  TheXX: 'On Hold',
  TheDecemberists: 'I will follow you into the dark'
}

function updatePlaylist (playlist, MajorLazer, LeanOn) {
  playlist[MajorLazer] = 'LeanOn'
  
  return playlist
}

function removeFromPlaylist(playlist,MajorLazer) {
  delete playlist.MajorLazer;
}
