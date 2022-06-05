export default {
  namespaced: true,

  state: {
    todos: [],
  },

  getters: {
    todos: (state) => state.todos,
  },

  actions: {
    addTodo({ commit }, payload) {
      commit("addTodo", payload);
    },
    removeTodo({ commit }, id) {
      commit("removeTodo", id);
    },
    changeTodo({ commit }, todo) {
      commit("changeTodo", todo);
    },
  },

  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    changeTodo(state, todo) {
      const changedItem = state.todos.find((item) => item.id === todo.id);
      changedItem.text = todo.text;
    },
  },
};
