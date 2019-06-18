export default function(filter = '', action) {
  switch (action.type) {
    case 'FILTER_MESSAGES': {
      filter = action.filter;
      return filter;
    }
    default:
      return filter;
  }
}
