import AntrenorHocaService from "../../services-new/AntrenorHocaService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createAntrenorHoca = createAsyncThunk(
    "antrenorHoca/create",
    async (data) => {
    const res = await AntrenorHocaService.create(data);
    return res.data;
    }
);

export const getAllAntrenorHoca = createAsyncThunk(
    "antrenorHoca/getAll",
    async () => {
        const res = await AntrenorHocaService.getAll();
        return res.data;
    }
);

export const getAllPublishedAntrenorHoca = createAsyncThunk(
    "antrenorHoca/getAllPublished",
    async () => {
        const res = await AntrenorHocaService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdAntrenorHoca = createAsyncThunk(
    "antrenorHoca/getById",
    async (id) => {
    const res = await AntrenorHocaService.getById(id);
    return res.data;
    }
);

export const updateAntrenorHoca = createAsyncThunk(
    "antrenorHoca/update",
    async ({ id, data }) => {
    const res = await AntrenorHocaService.update(id, data);
    return res.data;
    }
);

export const deleteAntrenorHoca = createAsyncThunk(
    "antrenorHoca/delete",
    async ({ id }) => {
        await AntrenorHocaService.remove(id);
        return { id };
    }
);

export const deleteAllAntrenorHoca = createAsyncThunk(
    "antrenorHoca/deleteAll",
    async () => {
        const res = await AntrenorHocaService.removeAll();
        return res.data;
    }
);
