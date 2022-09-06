import SponsorSureTuruService from "../../services-new/SponsorSureTuruService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createSponsorSureTuru = createAsyncThunk(
    "sponsorSureTuru/create",
    async (data) => {
    const res = await SponsorSureTuruService.create(data);
    return res.data;
    }
);

export const getAllSponsorSureTuru = createAsyncThunk(
    "sponsorSureTuru/getAll",
    async () => {
        const res = await SponsorSureTuruService.getAll();
        return res.data;
    }
);

export const getAllPublishedSponsorSureTuru = createAsyncThunk(
    "sponsorSureTuru/getAllPublished",
    async () => {
        const res = await SponsorSureTuruService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdSponsorSureTuru = createAsyncThunk(
    "sponsorSureTuru/getById",
    async (id) => {
    const res = await SponsorSureTuruService.getById(id);
    return res.data;
    }
);

export const updateSponsorSureTuru = createAsyncThunk(
    "sponsorSureTuru/update",
    async ({ id, data }) => {
    const res = await SponsorSureTuruService.update(id, data);
    return res.data;
    }
);

export const deleteSponsorSureTuru = createAsyncThunk(
    "sponsorSureTuru/delete",
    async ({ id }) => {
        await SponsorSureTuruService.remove(id);
        return { id };
    }
);

export const deleteAllSponsorSureTuru = createAsyncThunk(
    "sponsorSureTuru/deleteAll",
    async () => {
        const res = await SponsorSureTuruService.removeAll();
        return res.data;
    }
);
