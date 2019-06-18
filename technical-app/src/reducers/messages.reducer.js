export default function(messages = [], action) {
  const messagesCopy = [...messages];
  switch (action.type) {
    case 'GET_MESSAGES': {
      const messagesList = [...messagesCopy, action.messages];
      return messagesList[0];
    }
    case 'ADD_MESSAGES': {
      const addMessagesList = [
        ...messagesCopy,
        {
          id: messages.length + 101,
          title: action.title,
          body: action.body
        }
      ];
      return addMessagesList;
    }
    case 'DELETE_MESSAGES': {
      for (var i = 0; i < messagesCopy.length; i++) {
        if (messagesCopy[i].id === action.id) {
          messagesCopy.splice(i, 1);
        }
      }
      return messagesCopy;
    }
    default:
      return messages;
  }
}
