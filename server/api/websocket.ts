const room = 'ROOM'

export default defineWebSocketHandler({
  open(peer) {
    console.log('opened WS', peer)
    peer.subscribe(room)
    peer.publish(room, 'Another user joined the chat')
  },

  message(peer, message) {
    console.log("[ws] message", peer, message);
    if (message.text().includes("ping")) {
      peer.send("pong");
    }
    peer.publish(room, message.text())
  },

  close(peer, event) {
    console.log("[ws] close", peer);
  },

  error(peer, error) {
    console.log("[ws] error", peer, error);
  },
});