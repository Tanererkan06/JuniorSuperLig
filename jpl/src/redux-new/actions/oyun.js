import OyunService from "../../services-new/OyunService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOyun = createAsyncThunk(
    "oyun/create",
    async (data) => {
    const res = await OyunService.create(data);
    return res.data;
    }
);

export const getAllOyun = createAsyncThunk(
    "oyun/getAll",
    async () => {
        const res = await OyunService.getAll();
        return res.data;
    }
);

export const getAllPublishedOyun = createAsyncThunk(
    "oyun/getAllPublished",
    async () => {
        const res = await OyunService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdOyun = createAsyncThunk(
    "oyun/getById",
    async (id) => {
    const res = await OyunService.getById(id);
    return res.data;
    }
);

export const updateOyun = createAsyncThunk(
    "oyun/update",
    async ({ id, data }) => {
    const res = await OyunService.update(id, data);
    return res.data;
    }
);

export const deleteOyun = createAsyncThunk(
    "oyun/delete",
    async ({ id }) => {
        await OyunService.remove(id);
        return { id };
    }
);

export const deleteAllOyun = createAsyncThunk(
    "oyun/deleteAll",
    async () => {
        const res = await OyunService.removeAll();
        return res.data;
    }
);
