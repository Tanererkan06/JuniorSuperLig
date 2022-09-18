import IlTemsilcisiService from "../../services-new/IlTemsilcisiService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createIlTemsilcisi = createAsyncThunk(
    "ilTemsilcisi/create",
    async (data) => {
    const res = await IlTemsilcisiService.create(data);
    return res.data;
    }
);

export const getAllIlTemsilcisi = createAsyncThunk(
    "ilTemsilcisi/getAll",
    async () => {
        const res = await IlTemsilcisiService.getAll();
        return res.data;
    }
);

export const getAllPublishedIlTemsilcisi = createAsyncThunk(
    "ilTemsilcisi/getAllPublished",
    async () => {
        const res = await IlTemsilcisiService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdIlTemsilcisi = createAsyncThunk(
    "ilTemsilcisi/getById",
    async (id) => {
    const res = await IlTemsilcisiService.getById(id);
    return res.data;
    }
);

export const updateIlTemsilcisi = createAsyncThunk(
    "ilTemsilcisi/update",
    async ({ id, data }) => {
    const res = await IlTemsilcisiService.update(id, data);
    return res.data;
    }
);

export const deleteIlTemsilcisi = createAsyncThunk(
    "ilTemsilcisi/delete",
    async ({ id }) => {
        await IlTemsilcisiService.remove(id);
        return { id };
    }
);

export const deleteAllIlTemsilcisi = createAsyncThunk(
    "ilTemsilcisi/deleteAll",
    async () => {
        const res = await IlTemsilcisiService.removeAll();
        return res.data;
    }
);
