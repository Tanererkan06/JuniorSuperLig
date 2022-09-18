import ContactService from "../../services-new/ContactService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createContact = createAsyncThunk(
    "contact/create",
    async (data) => {
    const res = await ContactService.create(data);
    return res.data;
    }
);

export const getAllContact = createAsyncThunk(
    "contact/getAll",
    async () => {
        const res = await ContactService.getAll();
        return res.data;
    }
);

export const getAllPublishedContact = createAsyncThunk(
    "contact/getAllPublished",
    async () => {
        const res = await ContactService.getAllPublished();
        return res.data;
    }
);
    
export const getByIdContact = createAsyncThunk(
    "contact/getById",
    async (id) => {
    const res = await ContactService.getById(id);
    return res.data;
    }
);

export const updateContact = createAsyncThunk(
    "contact/update",
    async ({ id, data }) => {
    const res = await ContactService.update(id, data);
    return res.data;
    }
);

export const deleteContact = createAsyncThunk(
    "contact/delete",
    async ({ id }) => {
        await ContactService.remove(id);
        return { id };
    }
);

export const deleteAllContact = createAsyncThunk(
    "contact/deleteAll",
    async () => {
        const res = await ContactService.removeAll();
        return res.data;
    }
);
