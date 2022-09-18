import FiksturTakimService from "../../services-new/FiksturTakimService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createFiksturTakim = createAsyncThunk(
    "fiksturTakim/create",
    async (data) => {
    const res = await FiksturTakimService.create(data);
    return res.data;
    }
);

export const getAllFiksturTakim = createAsyncThunk(
    "fiksturTakim/getAll",
    async () => {
        const res = await FiksturTakimService.getAll();
        return res.data;
    }
);

export const getAllPublishedFiksturTakim = createAsyncThunk(
    "fiksturTakim/getAllPublished",
    async () => {
        const res = await FiksturTakimService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdFiksturTakim = createAsyncThunk(
    "fiksturTakim/getById",
    async (id) => {
    const res = await FiksturTakimService.getById(id);
    return res.data;
    }
);

export const updateFiksturTakim = createAsyncThunk(
    "fiksturTakim/update",
    async ({ id, data }) => {
    const res = await FiksturTakimService.update(id, data);
    return res.data;
    }
);

export const deleteFiksturTakim = createAsyncThunk(
    "fiksturTakim/delete",
    async ({ id }) => {
        await FiksturTakimService.remove(id);
        return { id };
    }
);

export const deleteAllFiksturTakim = createAsyncThunk(
    "fiksturTakim/deleteAll",
    async () => {
        const res = await FiksturTakimService.removeAll();
        return res.data;
    }
);
