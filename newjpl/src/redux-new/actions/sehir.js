import SehirService from "../../services-new/SehirService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createSehir = createAsyncThunk(
    "sehir/create",
    async (data) => {
    const res = await SehirService.create(data);
    return res.data;
    }
);

export const getAllSehir = createAsyncThunk(
    "sehir/getAll",
    async () => {
        const res = await SehirService.getAll();
        return res.data;
    }
);

export const getAllPublishedSehir = createAsyncThunk(
    "sehir/getAllPublished",
    async () => {
        const res = await SehirService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdSehir = createAsyncThunk(
    "sehir/getById",
    async (id) => {
    const res = await SehirService.getById(id);
    return res.data;
    }
);

export const updateSehir = createAsyncThunk(
    "sehir/update",
    async ({ id, data }) => {
    const res = await SehirService.update(id, data);
    return res.data;
    }
);

export const deleteSehir = createAsyncThunk(
    "sehir/delete",
    async ({ id }) => {
        await SehirService.remove(id);
        return { id };
    }
);

export const deleteAllSehir = createAsyncThunk(
    "sehir/deleteAll",
    async () => {
        const res = await SehirService.removeAll();
        return res.data;
    }
);
