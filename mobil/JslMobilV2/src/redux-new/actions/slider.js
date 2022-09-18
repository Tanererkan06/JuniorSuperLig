import SliderService from "../../services-new/SliderService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createSlider = createAsyncThunk(
    "slider/create",
    async (data) => {
    const res = await SliderService.create(data);
    return res.data;
    }
);

export const getAllSlider = createAsyncThunk(
    "slider/getAll",
    async () => {
        const res = await SliderService.getAll();
        return res.data;
    }
);

export const getAllPublishedSlider = createAsyncThunk(
    "slider/getAllPublished",
    async () => {
        const res = await SliderService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdSlider = createAsyncThunk(
    "slider/getById",
    async (id) => {
    const res = await SliderService.getById(id);
    return res.data;
    }
);

export const updateSlider = createAsyncThunk(
    "slider/update",
    async ({ id, data }) => {
    const res = await SliderService.update(id, data);
    return res.data;
    }
);

export const deleteSlider = createAsyncThunk(
    "slider/delete",
    async ({ id }) => {
        await SliderService.remove(id);
        return { id };
    }
);

export const deleteAllSlider = createAsyncThunk(
    "slider/deleteAll",
    async () => {
        const res = await SliderService.removeAll();
        return res.data;
    }
);
