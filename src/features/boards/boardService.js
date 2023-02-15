import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bingofy-be.onrender.com',
});

const API_URL = '/api/boards/';

// Create new board
const createBoard = async (boardData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await instance.post(API_URL, boardData, config);

  return response.data;
};

// Get user boards
const getBoards = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await instance.get(API_URL, config);

  return response.data;
};

// Delete user board
const deleteBoard = async (boardId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await instance.delete(API_URL + boardId, config);

  return response.data;
};

// Update board
const updateBoard = async (boardId, data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await instance.put(API_URL + boardId, data, config);

  return response.data;
};

const boardService = {
  createBoard,
  getBoards,
  deleteBoard,
  updateBoard,
};

export default boardService;
