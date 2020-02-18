export const initialState = [
    {
      item: "Learn about reducers",
      completed: false,
      id: 1
    },
    {
        item: "Cry about reducers",
        completed: false,
        id: 2
      },
      {
        item: "Get angry about reducers",
        completed: false,
        id: 3
      }
  ];
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD-TODO":
        const newTodo = {
          item: action.payload,
          completed: false,
          id: Date.now()
        };
        return [...state, newTodo];
      case "COMPLETED":
        return state.map(item =>
          item.id === action.id ? { ...item, completed: !item.completed } : item
        );
      case "REMOVE":
        return state.filter(item => !item.completed);
  
      default:
        return state;
    }
  };