export const state = {
  people: Array()
};

export const mutations = {
  addPeople(state, payload) {
    state.people = payload;
  }
};
