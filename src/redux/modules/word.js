import { db } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const REGISTER = "word/REGISTER";
const LOAD = "word/LOAD";
const LOADED = "word/LOADED";
const REMOVE = "word/REMOVE";
const UPDATE = "word/UPDATE";

const initialState = {
  is_loaded: false,
  list: [],
};

export function registerWord(word) {
  return { type: REGISTER, word };
}

export function loadWord(wordList) {
  return { type: LOAD, wordList };
}

export function isLoaded(loaded) {
  return { type: LOADED, loaded };
}

export function removeWord(wordIndex) {
  return { type: REMOVE, wordIndex };
}

export function updateWord(data) {
  return { type: UPDATE, data };
}

export const loadWordFB = () => {
  return async function (dispatch) {
    dispatch(isLoaded(false));
    const word_data = await getDocs(collection(db, "word"));
    let wordList = [];

    word_data.forEach(w => {
      wordList.push({ id: w.id, ...w.data() });
    });
    dispatch(loadWord(wordList));
  };
};

export const registerWordFB = word => {
  return async function (dispatch) {
    dispatch(isLoaded(false));
    const docRef = await addDoc(collection(db, "word"), word);
    const wordData = { id: docRef.id, ...word };
    dispatch(registerWord(wordData));
  };
};

export const removeWordFB = wordId => {
  return async function (dispatch, getState) {
    console.log(wordId);
    const docRef = doc(db, "word", wordId);
    await deleteDoc(docRef);
    console.log(docRef.id);
    const word_list = getState().word.list;
    const wordIndex = word_list.findIndex(w => {
      return w.id === wordId;
    });
    dispatch(removeWord(wordIndex));
  };
};

export const updateWordFB = (wordData, wordId) => {
  return async function (dispatch, getState) {
    console.log(wordData, wordId);
    const docRef = doc(db, "word", wordId);
    await updateDoc(docRef, { ...wordData });
    const word_list = getState().word.list;
    const wordIndex = word_list.findIndex(w => {
      console.log(w.id);
      return w.id === wordId;
    });
    const data = {
      index: wordIndex,
      wordData: wordData,
    };
    dispatch(updateWord(data));
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/REGISTER": {
      const new_word_list = [...state.list, action.word];
      return { ...state, list: new_word_list, is_loaded: true };
    }
    case "word/LOAD": {
      return { list: action.wordList, is_loaded: true };
    }
    case "word/LOADED": {
      return { ...state, is_loaded: true };
    }
    case "word/REMOVE": {
      const new_bucket_list = state.list.filter((w, idx) => {
        return parseInt(action.wordIndex) !== idx;
      });
      return { ...state, list: new_bucket_list, is_loaded: true };
    }

    case "word/UPDATE": {
      const new_bucket_list = state.list.map((w, idx) => {
        if (parseInt(action.data.index) === idx) {
          return { ...w, ...action.data.wordData };
        } else {
          return w;
        }
      });
      console.log(new_bucket_list);
      return { ...state, list: new_bucket_list, is_loaded: true };
    }
    default: {
      return state;
    }
  }
}
