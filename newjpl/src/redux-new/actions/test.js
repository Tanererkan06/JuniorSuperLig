import TestService from "../../services-new/TestService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createTest = createAsyncThunk(
    "test/create",
    async (data) => {
    const res = await TestService.create(data);
    return res.data;
    }
);

export const getAllTest = createAsyncThunk(
    "test/getAll",
    async () => {
        const res = await TestService.getAll();
        return res.data;
    }
);

export const getAllPublishedTest = createAsyncThunk(
    "test/getAllPublished",
    async () => {
        const res = await TestService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdTest = createAsyncThunk(
    "test/getById",
    async (id) => {
    const res = await TestService.getById(id);
    return res.data;
    }
);

export const updateTest = createAsyncThunk(
    "test/update",
    async ({ id, data }) => {
    const res = await TestService.update(id, data);
    return res.data;
    }
);

export const deleteTest = createAsyncThunk(
    "test/delete",
    async ({ id }) => {
        await TestService.remove(id);
        return { id };
    }
);

export const deleteAllTest = createAsyncThunk(
    "test/deleteAll",
    async () => {
        const res = await TestService.removeAll();
        return res.data;
    }
);
