import GozlemciService from "../../services-new/GozlemciService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createGozlemci = createAsyncThunk(
    "gozlemci/create",
    async (data) => {
    const res = await GozlemciService.create(data);
    return res.data;
    }
);

export const getAllGozlemci = createAsyncThunk(
    "gozlemci/getAll",
    async () => {
        const res = await GozlemciService.getAll();
        return res.data;
    }
);

export const getAllPublishedGozlemci = createAsyncThunk(
    "gozlemci/getAllPublished",
    async () => {
        const res = await GozlemciService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdGozlemci = createAsyncThunk(
    "gozlemci/getById",
    async (id) => {
    const res = await GozlemciService.getById(id);
    return res.data;
    }
);

export const updateGozlemci = createAsyncThunk(
    "gozlemci/update",
    async ({ id, data }) => {
    const res = await GozlemciService.update(id, data);
    return res.data;
    }
);

export const deleteGozlemci = createAsyncThunk(
    "gozlemci/delete",
    async ({ id }) => {
        await GozlemciService.remove(id);
        return { id };
    }
);

export const deleteAllGozlemci = createAsyncThunk(
    "gozlemci/deleteAll",
    async () => {
        const res = await GozlemciService.removeAll();
        return res.data;
    }
);

export const tumGozlemciler = createAsyncThunk(
    "gozlemci/tumGozlemciler",
    async () => {
        const res = await GozlemciService.tumGozlemciler();
        return res.data;
    }
);
