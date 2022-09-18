import TakimService from "../../services-new/TakimService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createTakim = createAsyncThunk(
    "takim/create",
    async (data) => {
    const res = await TakimService.create(data);
    return res.data;
    }
);

export const getAllTakim = createAsyncThunk(
    "takim/getAll",
    async () => {
        const res = await TakimService.getAll();
        return res.data;
    }
);

export const getAllPublishedTakim = createAsyncThunk(
    "takim/getAllPublished",
    async () => {
        const res = await TakimService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdTakim = createAsyncThunk(
    "takim/getById",
    async (id) => {
    const res = await TakimService.getById(id);
    return res.data;
    }
);

export const updateTakim = createAsyncThunk(
    "takim/update",
    async ({ id, data }) => {
    const res = await TakimService.update(id, data);
    return res.data;
    }
);

export const deleteTakim = createAsyncThunk(
    "takim/delete",
    async ({ id }) => {
        await TakimService.remove(id);
        return { id };
    }
);

export const deleteAllTakim = createAsyncThunk(
    "takim/deleteAll",
    async () => {
        const res = await TakimService.removeAll();
        return res.data;
    }
);
