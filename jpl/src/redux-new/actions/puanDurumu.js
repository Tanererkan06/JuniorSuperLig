import PuanDurumuService from "../../services-new/PuanDurumuService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createPuanDurumu = createAsyncThunk(
    "puanDurumu/create",
    async (data) => {
    const res = await PuanDurumuService.create(data);
    return res.data;
    }
);

export const getAllPuanDurumu = createAsyncThunk(
    "puanDurumu/getAll",
    async () => {
        const res = await PuanDurumuService.getAll();
        return res.data;
    }
);

export const getAllPublishedPuanDurumu = createAsyncThunk(
    "puanDurumu/getAllPublished",
    async () => {
        const res = await PuanDurumuService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdPuanDurumu = createAsyncThunk(
    "puanDurumu/getById",
    async (id) => {
    const res = await PuanDurumuService.getById(id);
    return res.data;
    }
);

export const updatePuanDurumu = createAsyncThunk(
    "puanDurumu/update",
    async ({ id, data }) => {
    const res = await PuanDurumuService.update(id, data);
    return res.data;
    }
);

export const deletePuanDurumu = createAsyncThunk(
    "puanDurumu/delete",
    async ({ id }) => {
        await PuanDurumuService.remove(id);
        return { id };
    }
);

export const deleteAllPuanDurumu = createAsyncThunk(
    "puanDurumu/deleteAll",
    async () => {
        const res = await PuanDurumuService.removeAll();
        return res.data;
    }
);
