/* eslint-disable import/no-anonymous-default-export */
import client from "../client";
import authStorage from "v2/auth/storage";

////////////////////////////// Common APIs //////////////////////////////
const getMyTransactions = async (page = 1, limit = 10) => {
  const cacheMins = 0;
  const config = { headers: { Authorization: authStorage.getToken() } };
  return await client.get(
    `/transactions/my?page=${page}&limit=${limit}`,
    config,
    cacheMins
  );
};

////////////////////////////// Common APIs //////////////////////////////
const getUserTransactions = async (userId, page = 1, limit = 10) => {
  const cacheMins = 0;
  const config = { headers: { Authorization: authStorage.getToken() } };
  return await client.get(
    `/tranactions/${userId}?page=${page}&limit=${limit}`,
    config,
    cacheMins
  );
};

const exportUserTransactionsToExcel = async (userId) => {
  const cacheMins = 0;
  const config = { headers: { Authorization: authStorage.getToken() } };
  return await client.get(`/tranactions/${userId}/export`, config, cacheMins);
};

export default {
  common: {
    getMyTransactions,
  },
  admin: {
    getUserTransactions,
    exportUserTransactionsToExcel,
  },
};
