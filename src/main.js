const TAG = "main.js"
const logger = require('helper_logger')
const rooms = require('loop_rooms')

module.exports.loop = function() {
    // Iterate through rooms
    for(const i in Game.rooms) {
        const room = Game.rooms[i]
        logger.debug(TAG, "Checking room "+i)

        // Check source status
        if (!room.memory.sources) {
            rooms.setSourceContainers(room)
        }
    }
}