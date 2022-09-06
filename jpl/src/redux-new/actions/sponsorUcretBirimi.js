import SponsorUcretBirimiService from "../../services-new/SponsorUcretBirimiService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createSponsorUcretBirimi = createAsyncThunk(
    "sponsorUcretBirimi/create",
    async (data) => {
    const res = await SponsorUcretBirimiService.create(data);
    return res.data;
    }
);

export const getAllSponsorUcretBirimi = createAsyncThunk(
    "sponsorUcretBirimi/getAll",
    async () => {
        const res = await SponsorUcretBirimiService.getAll();
        return res.data;
    }
);

export const getAllPublishedSponsorUcretBirimi = createAsyncThunk(
    "sponsorUcretBirimi/getAllPublished",
    async () => {
        const res = await SponsorUcretBirimiService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdSponsorUcretBirimi = createAsyncThunk(
    "sponsorUcretBirimi/getById",
    async (id) => {
    const res = await SponsorUcretBirimiService.getById(id);
    return res.data;
    }
);

export const updateSponsorUcretBirimi = createAsyncThunk(
    "sponsorUcretBirimi/update",
    async ({ id, data }) => {
    const res = await SponsorUcretBirimiService.update(id, data);
    return res.data;
    }
);

export const deleteSponsorUcretBirimi = createAsyncThunk(
    "sponsorUcretBirimi/delete",
    async ({ id }) => {
        await SponsorUcretBirimiService.remove(id);
        return { id };
    }
);

export const deleteAllSponsorUcretBirimi = createAsyncThunk(
    "sponsorUcretBirimi/deleteAll",
    async () => {
        const res = await SponsorUcretBirimiService.removeAll();
        return res.data;
    }
);
