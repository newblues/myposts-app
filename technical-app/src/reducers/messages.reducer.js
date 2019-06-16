export default function(messages = [], action) {
  switch (action.type) {
    case 'GET_MESSAGES': {
      const messagesList = [...messages, action.messages];
      return messagesList[0];
    }
    case 'ADD_MESSAGES': {
      const addMessagesList = [...messages, { body: action.messages }];
      return addMessagesList;
    }
    default:
      return messages;
  }
}

// export default function(messages = [], action) {
//   const messagesCopy = [...messages];
//   switch (action.type) {
//     case 'GET_MESSAGES': {
//       const messages = action.messages;
//       for (var i = 0; i < messages.length; i++) {
//         messagesCopy.push(messages[i]);
//       }
//       console.log('TLC: messagesCopy', messagesCopy);

//       return messagesCopy;
//     }
//     case 'ADD_MESSAGES': {
//       messagesCopy.push({ body: action.messages });
//       console.log(messagesCopy);
//       return messagesCopy;
//     }
//     default:
//       return messages;
//   }
// }
