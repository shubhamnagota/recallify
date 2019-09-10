import { database } from "firebase";

// ADD_EXPENSE
export const addWord = word => ({
  type: "ADD_WORD",
  word
});

export const startAddWord = ({
  title = "",
  definition = "",
  category = "",
  note = "",
  createdAt = 0
} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const word = { title, definition, category, note, createdAt };
    return database()
      .ref(`users/${uid}/words`)
      .push(word)
      .then(ref => {
        dispatch(addWord({ id: ref.key, ...word }));
      });
  };
};

// REMOVE_WORD
export const removeWord = ({ id } = {}) => ({
  type: "REMOVE_WORD",
  id
});

export const startRemoveWord = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database()
      .ref(`users/${uid}/words/${id}`)
      .remove()
      .then(() => {
        dispatch(removeWord({ id }));
      });
  };
};

// EDIT_WORD
export const editWord = (id, updates) => ({
  type: "EDIT_WORD",
  id,
  updates
});

export const startEditWord = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database()
      .ref(`users/${uid}/words/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editWord(id, updates));
      });
  };
};

// SET_WORDS
const setWords = words => ({
  type: "SET_WORDS",
  words
});

export const startSetWords = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database()
      .ref(`users/${uid}/words`)
      .once("value")
      .then(snapshot => {
        const words = [];
        snapshot.forEach(childSnapshot => {
          words.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setWords(words));
      });
  };
};
