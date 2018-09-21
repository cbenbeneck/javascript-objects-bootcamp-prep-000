var playlist = {
  "The XX": 'On Hold',
  "The Decemberists": 'I will follow you into the dark'
}

function updatePlaylist (playlist, MajorLazer, LeanOn) {
  playlist[MajorLazer] = 'LeanOn'
  
  return playlist
}

function removeFromPlaylist(playlist,Slowdive) {
  delete playlist.Slowdive;
}
