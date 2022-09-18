import OyunKonumService from "../../services-new/OyunKonumService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOyunKonum = createAsyncThunk(
    "oyunKonum/create",
    async (data) => {
    const res = await OyunKonumService.create(data);
    return res.data;
    }
);

export const getAllOyunKonum = createAsyncThunk(
    "oyunKonum/getAll",
    async () => {
        const res = await OyunKonumService.getAll();
        return res.data;
    }
);

export const getAllPublishedOyunKonum = createAsyncThunk(
    "oyunKonum/getAllPublished",
    async () => {
        const res = await OyunKonumService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdOyunKonum = createAsyncThunk(
    "oyunKonum/getById",
    async (id) => {
    const res = await OyunKonumService.getById(id);
    return res.data;
    }
);

export const updateOyunKonum = createAsyncThunk(
    "oyunKonum/update",
    async ({ id, data }) => {
    const res = await OyunKonumService.update(id, data);
    return res.data;
    }
);

export const deleteOyunKonum = createAsyncThunk(
    "oyunKonum/delete",
    async ({ id }) => {
        await OyunKonumService.remove(id);
        return { id };
    }
);

export const deleteAllOyunKonum = createAsyncThunk(
    "oyunKonum/deleteAll",
    async () => {
        const res = await OyunKonumService.removeAll();
        return res.data;
    }
);
