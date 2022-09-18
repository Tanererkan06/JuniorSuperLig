import SponsorService from "../../services-new/SponsorService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createSponsor = createAsyncThunk(
    "sponsor/create",
    async (data) => {
    const res = await SponsorService.create(data);
    return res.data;
    }
);

export const getAllSponsor = createAsyncThunk(
    "sponsor/getAll",
    async () => {
        const res = await SponsorService.getAll();
        return res.data;
    }
);

export const getAllPublishedSponsor = createAsyncThunk(
    "sponsor/getAllPublished",
    async () => {
        const res = await SponsorService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdSponsor = createAsyncThunk(
    "sponsor/getById",
    async (id) => {
    const res = await SponsorService.getById(id);
    return res.data;
    }
);

export const updateSponsor = createAsyncThunk(
    "sponsor/update",
    async ({ id, data }) => {
    const res = await SponsorService.update(id, data);
    return res.data;
    }
);

export const deleteSponsor = createAsyncThunk(
    "sponsor/delete",
    async ({ id }) => {
        await SponsorService.remove(id);
        return { id };
    }
);

export const deleteAllSponsor = createAsyncThunk(
    "sponsor/deleteAll",
    async () => {
        const res = await SponsorService.removeAll();
        return res.data;
    }
);
