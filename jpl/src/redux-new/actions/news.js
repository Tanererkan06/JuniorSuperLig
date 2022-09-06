import NewsService from "../../services-new/NewsService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createNews = createAsyncThunk(
    "news/create",
    async (data) => {
    const res = await NewsService.create(data);
    return res.data;
    }
);

export const getAllNews = createAsyncThunk(
    "news/getAll",
    async () => {
        const res = await NewsService.getAll();
        return res.data;
    }
);

export const getAllPublishedNews = createAsyncThunk(
    "news/getAllPublished",
    async () => {
        const res = await NewsService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdNews = createAsyncThunk(
    "news/getById",
    async (id) => {
    const res = await NewsService.getById(id);
    return res.data;
    }
);

export const updateNews = createAsyncThunk(
    "news/update",
    async ({ id, data }) => {
    const res = await NewsService.update(id, data);
    return res.data;
    }
);

export const deleteNews = createAsyncThunk(
    "news/delete",
    async ({ id }) => {
        await NewsService.remove(id);
        return { id };
    }
);

export const deleteAllNews = createAsyncThunk(
    "news/deleteAll",
    async () => {
        const res = await NewsService.removeAll();
        return res.data;
    }
);
