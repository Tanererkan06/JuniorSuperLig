import HakemService from "../../services-new/HakemService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createHakem = createAsyncThunk(
    "hakem/create",
    async (data) => {
    const res = await HakemService.create(data);
    return res.data;
    }
);

export const getAllHakem = createAsyncThunk(
    "hakem/getAll",
    async () => {
        const res = await HakemService.getAll();
        return res.data;
    }
);

export const getAllPublishedHakem = createAsyncThunk(
    "hakem/getAllPublished",
    async () => {
        const res = await HakemService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdHakem = createAsyncThunk(
    "hakem/getById",
    async (id) => {
    const res = await HakemService.getById(id);
    return res.data;
    }
);

export const updateHakem = createAsyncThunk(
    "hakem/update",
    async ({ id, data }) => {
    const res = await HakemService.update(id, data);
    return res.data;
    }
);

export const deleteHakem = createAsyncThunk(
    "hakem/delete",
    async ({ id }) => {
        await HakemService.remove(id);
        return { id };
    }
);

export const deleteAllHakem = createAsyncThunk(
    "hakem/deleteAll",
    async () => {
        const res = await HakemService.removeAll();
        return res.data;
    }
);
