import VeliService from "../../services-new/VeliService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createVeli = createAsyncThunk(
    "veli/create",
    async (data) => {
    const res = await VeliService.create(data);
    return res.data;
    }
);

export const getAllVeli = createAsyncThunk(
    "veli/getAll",
    async () => {
        const res = await VeliService.getAll();
        return res.data;
    }
);

export const getAllPublishedVeli = createAsyncThunk(
    "veli/getAllPublished",
    async () => {
        const res = await VeliService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdVeli = createAsyncThunk(
    "veli/getById",
    async (id) => {
    const res = await VeliService.getById(id);
    return res.data;
    }
);

export const updateVeli = createAsyncThunk(
    "veli/update",
    async ({ id, data }) => {
    const res = await VeliService.update(id, data);
    return res.data;
    }
);

export const deleteVeli = createAsyncThunk(
    "veli/delete",
    async ({ id }) => {
        await VeliService.remove(id);
        return { id };
    }
);

export const deleteAllVeli = createAsyncThunk(
    "veli/deleteAll",
    async () => {
        const res = await VeliService.removeAll();
        return res.data;
    }
);
