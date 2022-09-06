import FiksturService from "../../services-new/FiksturService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createFikstur = createAsyncThunk(
    "fikstur/create",
    async (data) => {
    const res = await FiksturService.create(data);
    return res.data;
    }
);

export const getAllFikstur = createAsyncThunk(
    "fikstur/getAll",
    async () => {
        const res = await FiksturService.getAll();
        return res.data;
    }
);

export const getAllPublishedFikstur = createAsyncThunk(
    "fikstur/getAllPublished",
    async () => {
        const res = await FiksturService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdFikstur = createAsyncThunk(
    "fikstur/getById",
    async (id) => {
    const res = await FiksturService.getById(id);
    return res.data;
    }
);

export const updateFikstur = createAsyncThunk(
    "fikstur/update",
    async ({ id, data }) => {
    const res = await FiksturService.update(id, data);
    return res.data;
    }
);

export const deleteFikstur = createAsyncThunk(
    "fikstur/delete",
    async ({ id }) => {
        await FiksturService.remove(id);
        return { id };
    }
);

export const deleteAllFikstur = createAsyncThunk(
    "fikstur/deleteAll",
    async () => {
        const res = await FiksturService.removeAll();
        return res.data;
    }
);
