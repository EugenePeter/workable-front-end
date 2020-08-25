export const addMessagesToState = (channelName, nameToAdd) => {
    const roomFromActions = nameToAdd.room;
    // const nameFromAction = nameToAdd.find((room) => room.room === nameFromState);
    const result = channelName.find((name) => name.roomName === roomFromActions);
    console.log(roomFromActions);
    console.dir(channelName);
    console.log(result);
    result.messages.push(...result.messages, nameToAdd.message);
    // return [...result.messages, nameToAdd.message];
    // return nameToadd;
};
