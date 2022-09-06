import SponsorKategoriService from "../../services-new/SponsorKategoriService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createSponsorKategori = createAsyncThunk(
    "sponsorKategori/create",
    async (data) => {
    const res = await SponsorKategoriService.create(data);
    return res.data;
    }
);

export const getAllSponsorKategori = createAsyncThunk(
    "sponsorKategori/getAll",
    async () => {
        const res = await SponsorKategoriService.getAll();
        return res.data;
    }
);

export const getAllPublishedSponsorKategori = createAsyncThunk(
    "sponsorKategori/getAllPublished",
    async () => {
        const res = await SponsorKategoriService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdSponsorKategori = createAsyncThunk(
    "sponsorKategori/getById",
    async (id) => {
    const res = await SponsorKategoriService.getById(id);
    return res.data;
    }
);

export const updateSponsorKategori = createAsyncThunk(
    "sponsorKategori/update",
    async ({ id, data }) => {
    const res = await SponsorKategoriService.update(id, data);
    return res.data;
    }
);

export const deleteSponsorKategori = createAsyncThunk(
    "sponsorKategori/delete",
    async ({ id }) => {
        await SponsorKategoriService.remove(id);
        return { id };
    }
);

export const deleteAllSponsorKategori = createAsyncThunk(
    "sponsorKategori/deleteAll",
    async () => {
        const res = await SponsorKategoriService.removeAll();
        return res.data;
    }
);
