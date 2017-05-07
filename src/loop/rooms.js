module.exports = {
    /** @param room{Room} */
    setSourceContainers: function (room) {
        const sources = room.find(FIND_SOURCES);
        for (const i in sources) {
            const source = sources[i]
            console.log("Check source " + source.id)
        }
    }
}