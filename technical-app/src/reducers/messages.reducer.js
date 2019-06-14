export default function(messages = [], action) {
  const messagesCopy = [...messages];
  if (action.type === 'GET_MESSAGES') {
    const messages = action.messages;
    for (var i = 0; i < messages.length; i++) {
      messagesCopy.push(messages[i]);
    }
    return messagesCopy;
  } else {
    return messages;
  }
}
