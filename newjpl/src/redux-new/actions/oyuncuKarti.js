import OyuncuKartiService from "../../services-new/OyuncuKartiService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOyuncuKarti = createAsyncThunk(
    "oyuncuKarti/create",
    async (data) => {
    const res = await OyuncuKartiService.create(data);
    return res.data;
    }
);

export const getAllOyuncuKarti = createAsyncThunk(
    "oyuncuKarti/getAll",
    async () => {
        const res = await OyuncuKartiService.getAll();
        return res.data;
    }
);

export const getAllPublishedOyuncuKarti = createAsyncThunk(
    "oyuncuKarti/getAllPublished",
    async () => {
        const res = await OyuncuKartiService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdOyuncuKarti = createAsyncThunk(
    "oyuncuKarti/getById",
    async (id) => {
    const res = await OyuncuKartiService.getById(id);
    return res.data;
    }
);

export const updateOyuncuKarti = createAsyncThunk(
    "oyuncuKarti/update",
    async ({ id, data }) => {
    const res = await OyuncuKartiService.update(id, data);
    return res.data;
    }
);

export const deleteOyuncuKarti = createAsyncThunk(
    "oyuncuKarti/delete",
    async ({ id }) => {
        await OyuncuKartiService.remove(id);
        return { id };
    }
);

export const deleteAllOyuncuKarti = createAsyncThunk(
    "oyuncuKarti/deleteAll",
    async () => {
        const res = await OyuncuKartiService.removeAll();
        return res.data;
    }
);
