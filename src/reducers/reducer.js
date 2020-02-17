


export const initialState = {
    todos: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Cry about reducers',
        completed: false,
        id: 3892987580
    },
    {
        item: 'Get angry about reducers',
        completed: false,
        id: 3892987587
    }
]
}


export const reducer = (state, action) => {
 switch (action.type) {
         case "ADD_TODO":
             return { ...state, 

                todos: [
                    ...state.todos,
                    {
                       
                      }
                ]
             }
            }
        }