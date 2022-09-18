import OyunLiveService from "../../services-new/OyunLiveService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOyunLive = createAsyncThunk(
    "oyunLive/create",
    async (data) => {
    const res = await OyunLiveService.create(data);
    return res.data;
    }
);

export const getAllOyunLive = createAsyncThunk(
    "oyunLive/getAll",
    async () => {
        const res = await OyunLiveService.getAll();
        return res.data;
    }
);

export const getAllPublishedOyunLive = createAsyncThunk(
    "oyunLive/getAllPublished",
    async () => {
        const res = await OyunLiveService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdOyunLive = createAsyncThunk(
    "oyunLive/getById",
    async (id) => {
    const res = await OyunLiveService.getById(id);
    return res.data;
    }
);

export const updateOyunLive = createAsyncThunk(
    "oyunLive/update",
    async ({ id, data }) => {
    const res = await OyunLiveService.update(id, data);
    return res.data;
    }
);

export const deleteOyunLive = createAsyncThunk(
    "oyunLive/delete",
    async ({ id }) => {
        await OyunLiveService.remove(id);
        return { id };
    }
);

export const deleteAllOyunLive = createAsyncThunk(
    "oyunLive/deleteAll",
    async () => {
        const res = await OyunLiveService.removeAll();
        return res.data;
    }
);
