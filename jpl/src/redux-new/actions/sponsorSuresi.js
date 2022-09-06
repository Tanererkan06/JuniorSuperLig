import SponsorSuresiService from "../../services-new/SponsorSuresiService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createSponsorSuresi = createAsyncThunk(
    "sponsorSuresi/create",
    async (data) => {
    const res = await SponsorSuresiService.create(data);
    return res.data;
    }
);

export const getAllSponsorSuresi = createAsyncThunk(
    "sponsorSuresi/getAll",
    async () => {
        const res = await SponsorSuresiService.getAll();
        return res.data;
    }
);

export const getAllPublishedSponsorSuresi = createAsyncThunk(
    "sponsorSuresi/getAllPublished",
    async () => {
        const res = await SponsorSuresiService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdSponsorSuresi = createAsyncThunk(
    "sponsorSuresi/getById",
    async (id) => {
    const res = await SponsorSuresiService.getById(id);
    return res.data;
    }
);

export const updateSponsorSuresi = createAsyncThunk(
    "sponsorSuresi/update",
    async ({ id, data }) => {
    const res = await SponsorSuresiService.update(id, data);
    return res.data;
    }
);

export const deleteSponsorSuresi = createAsyncThunk(
    "sponsorSuresi/delete",
    async ({ id }) => {
        await SponsorSuresiService.remove(id);
        return { id };
    }
);

export const deleteAllSponsorSuresi = createAsyncThunk(
    "sponsorSuresi/deleteAll",
    async () => {
        const res = await SponsorSuresiService.removeAll();
        return res.data;
    }
);
