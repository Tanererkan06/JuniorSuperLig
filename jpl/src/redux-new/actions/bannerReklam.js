import BannerReklamService from "../../services-new/BannerReklamService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createBannerReklam = createAsyncThunk(
    "bannerReklam/create",
    async (data) => {
    const res = await BannerReklamService.create(data);
    return res.data;
    }
);

export const getAllBannerReklam = createAsyncThunk(
    "bannerReklam/getAll",
    async () => {
        const res = await BannerReklamService.getAll();
        return res.data;
    }
);

export const getAllPublishedBannerReklam = createAsyncThunk(
    "bannerReklam/getAllPublished",
    async () => {
        const res = await BannerReklamService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdBannerReklam = createAsyncThunk(
    "bannerReklam/getById",
    async (id) => {
    const res = await BannerReklamService.getById(id);
    return res.data;
    }
);

export const updateBannerReklam = createAsyncThunk(
    "bannerReklam/update",
    async ({ id, data }) => {
    const res = await BannerReklamService.update(id, data);
    return res.data;
    }
);

export const deleteBannerReklam = createAsyncThunk(
    "bannerReklam/delete",
    async ({ id }) => {
        await BannerReklamService.remove(id);
        return { id };
    }
);

export const deleteAllBannerReklam = createAsyncThunk(
    "bannerReklam/deleteAll",
    async () => {
        const res = await BannerReklamService.removeAll();
        return res.data;
    }
);
