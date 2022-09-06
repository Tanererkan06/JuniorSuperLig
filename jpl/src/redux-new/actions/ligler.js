import LiglerService from "../../services-new/LiglerService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createLigler = createAsyncThunk(
    "ligler/create",
    async (data) => {
    const res = await LiglerService.create(data);
    return res.data;
    }
);

export const getAllLigler = createAsyncThunk(
    "ligler/getAll",
    async () => {
        const res = await LiglerService.getAll();
        return res.data;
    }
);

export const getAllPublishedLigler = createAsyncThunk(
    "ligler/getAllPublished",
    async () => {
        const res = await LiglerService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdLigler = createAsyncThunk(
    "ligler/getById",
    async (id) => {
    const res = await LiglerService.getById(id);
    return res.data;
    }
);

export const updateLigler = createAsyncThunk(
    "ligler/update",
    async ({ id, data }) => {
        console.log("GELEN ID VE DATA: ", id, data);
    const res = await LiglerService.update(id, data);
    return res.data;
    }
);

export const deleteLigler = createAsyncThunk(
    "ligler/delete",
    async ({ id }) => {
        await LiglerService.remove(id);
        return { id };
    }
);

export const deleteAllLigler = createAsyncThunk(
    "ligler/deleteAll",
    async () => {
        const res = await LiglerService.removeAll();
        return res.data;
    }
);
